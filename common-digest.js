// Rapid browsing keeps only a resume position; it never schedules reviews or grades recall.
let commonQuickDeck = [], commonQuickIndex = 0, commonQuickGroup = '', commonQuickRevealCount = 0;
let sprintDeckReady = false;

function expandSprintDigest() {
  if (sprintDeckReady) return;
  const commonById = new Map(COMMON_DIGEST.cards.map(card => [card.id, card]));
  const stripNumber = text => String(text || '').replace(/^\s*(?:[（(]?\d{1,2}[）)、.]\s*)+/, '');
  const matchedCommon = SPRINT_MATCHES.common.map(([id, page], order) => {
    const source = commonById.get(id);
    if (!source) return null;
    const question = stripNumber(source.question), answer = stripNumber(source.answer);
    return { ...source, id: `sprint-reuse-${id}`, volume: `冲刺班 · ${source.volume}`,
      question, answer, digestPage: page, sourceFile: SPRINT_DIGEST.source,
      originalCardId: id, sprintMatched: true, sprintOrder: order };
  }).filter(Boolean);
  // Political theory keeps the original numbered digest blocks and blank order.
  const commonSource = SPRINT_DIGEST.cards.filter(card => card.group !== 'theory' && card.group !== 'current')
    .concat(matchedCommon);
  SPRINT_DIGEST.cards = SPRINT_THEORY_BLOCK_CARDS.concat(SPRINT_CURRENT_DIGEST_CARDS,
    groupSprintCommonCards(commonSource));
  SPRINT_DIGEST.cards.sort((a, b) => a.digestPage - b.digestPage || a.id.localeCompare(b.id));
  sprintDeckReady = true;
}

function groupSprintCommonCards(cards) {
  const ordered = cards.slice().sort((a, b) => a.digestPage - b.digestPage ||
    (SPRINT_COMMON_SOURCE_ORDER[a.id] ?? 10000) - (SPRINT_COMMON_SOURCE_ORDER[b.id] ?? 10000) ||
    (a.sprintOrder ?? 10000) - (b.sprintOrder ?? 10000));
  const blocks = [];
  for (const card of ordered) {
    const title = String(card.title || card.topic || '').split('·')[0].trim();
    const last = blocks[blocks.length - 1];
    if (last && last.digestPage === card.digestPage && last.group === card.group &&
        last.title === title && last.question.length + card.question.length < 280) {
      last.question += `\n${card.question}`;
      last.answer += `\n${card.answer}`;
      last.digestTerms.push(...(card.digestTerms || []));
      last.legacyIds.push(card.id);
    } else {
      blocks.push({ ...card, id: `sprint-common-block-${String(blocks.length + 1).padStart(3, '0')}`,
        title, topic: title, digestTerms: [...(card.digestTerms || [])],
        legacyIds: [card.id], digestBlock: true });
    }
  }
  return blocks;
}

function commonPool(groupId) {
  if (groupId.startsWith('sprint')) expandSprintDigest();
  if (groupId === 'sprint') return SPRINT_DIGEST.cards;
  if (groupId === 'sprint-theory') return SPRINT_DIGEST.cards.filter(card => card.group === 'theory');
  if (groupId === 'sprint-current') return SPRINT_DIGEST.cards.filter(card => card.group === 'current');
  if (groupId === 'sprint-common') return SPRINT_DIGEST.cards.filter(card => card.group !== 'theory' && card.group !== 'current');
  return COMMON_DIGEST.cards.filter(card => card.group === groupId);
}

function restoreSprintQuickProgress() {
  migrateSprintTheoryChecklistProgress();
  migrateSprintCurrentChecklistProgress();
  migrateSprintTheoryBlockProgress();
  migrateSprintCommonBlockProgress();
  if (saved.sprintQuickProgressMigrated) return;
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  // The old version saved only the resume card. Reaching it required revealing every earlier card.
  for (const groupId of ['sprint-theory', 'sprint-current', 'sprint-common', 'sprint']) {
    const resumeId = saved.commonQuickPosition?.[groupId];
    if (!resumeId) continue;
    const deck = commonPool(groupId);
    const resumeIndex = deck.findIndex(card => card.id === resumeId);
    for (let index = 0; index < resumeIndex; index++) saved.sprintQuickLearned[deck[index].id] = true;
  }
  saved.sprintQuickProgressMigrated = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function migrateSprintCommonBlockProgress() {
  if (saved.sprintCommonBlockMigrated) return;
  expandSprintDigest();
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  const common = SPRINT_DIGEST.cards.filter(card => card.group !== 'theory' && card.group !== 'current');
  for (const card of common) {
    if (card.legacyIds?.length && card.legacyIds.every(id => saved.sprintQuickLearned[id])) {
      saved.sprintQuickLearned[card.id] = true;
    }
  }
  for (const groupId of ['sprint-common', 'sprint']) {
    const oldId = saved.commonQuickPosition?.[groupId];
    const replacement = common.find(card => card.legacyIds?.includes(oldId));
    if (replacement) saved.commonQuickPosition[groupId] = replacement.id;
  }
  for (const [key, note] of Object.entries(saved.starred || {})) {
    if (!key.startsWith('sprint:')) continue;
    const oldId = key.slice('sprint:'.length);
    const replacement = common.find(card => card.legacyIds?.includes(oldId));
    if (!replacement) continue;
    const newKey = `sprint:${replacement.id}`;
    saved.starred[newKey] = saved.starred[newKey] || {
      ...note, key: newKey, group: replacement.volume, title: replacement.title,
      prompt: replacement.question, answer: replacement.answer
    };
    delete saved.starred[key];
  }
  saved.sprintCommonBlockMigrated = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function migrateSprintTheoryBlockProgress() {
  if (saved.sprintTheoryBlockMigrated) return;
  expandSprintDigest();
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  const theory = SPRINT_DIGEST.cards.filter(card => card.group === 'theory');
  for (const card of theory) {
    const oldCards = (card.legacyIds || []).filter(id => id.startsWith('sprint-theory-digest-'));
    if (oldCards.length && oldCards.every(id => saved.sprintQuickLearned[id])) {
      saved.sprintQuickLearned[card.id] = true;
    }
  }
  for (const groupId of ['sprint-theory', 'sprint']) {
    const oldId = saved.commonQuickPosition?.[groupId];
    const replacement = theory.find(card => card.legacyIds?.includes(oldId));
    if (replacement) saved.commonQuickPosition[groupId] = replacement.id;
  }
  for (const [key, note] of Object.entries(saved.starred || {})) {
    if (!key.startsWith('sprint:')) continue;
    const oldId = key.slice('sprint:'.length);
    const replacement = theory.find(card => card.legacyIds?.includes(oldId));
    if (!replacement) continue;
    const newKey = `sprint:${replacement.id}`;
    saved.starred[newKey] = saved.starred[newKey] || {
      ...note, key: newKey, group: replacement.volume, title: replacement.title,
      prompt: replacement.question, answer: replacement.answer
    };
    delete saved.starred[key];
  }
  saved.sprintTheoryBlockMigrated = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function migrateSprintTheoryChecklistProgress() {
  if (saved.sprintTheoryChecklistMigrated) return;
  expandSprintDigest();
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  const theory = SPRINT_DIGEST.cards.filter(card => card.group === 'theory');
  for (const card of theory) {
    if (card.legacyIds?.some(id => saved.sprintQuickLearned[id])) {
      saved.sprintQuickLearned[card.id] = true;
    }
  }
  for (const groupId of ['sprint-theory', 'sprint']) {
    const oldId = saved.commonQuickPosition?.[groupId];
    const replacement = theory.find(card => card.legacyIds?.includes(oldId));
    if (replacement) saved.commonQuickPosition[groupId] = replacement.id;
  }
  for (const [key, note] of Object.entries(saved.starred || {})) {
    if (!key.startsWith('sprint:')) continue;
    const oldId = key.slice('sprint:'.length);
    const candidates = theory.filter(card => card.legacyIds?.includes(oldId));
    if (!candidates.length) continue;
    const replacement = candidates[0];
    const newKey = `sprint:${replacement.id}`;
    saved.starred[newKey] = saved.starred[newKey] || {
      ...note, key: newKey, group: replacement.volume, title: replacement.title,
      prompt: replacement.question, answer: replacement.answer
    };
    delete saved.starred[key];
  }
  saved.sprintTheoryChecklistMigrated = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function migrateSprintCurrentChecklistProgress() {
  if (saved.sprintCurrentChecklistMigrated) return;
  expandSprintDigest();
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  const current = SPRINT_DIGEST.cards.filter(card => card.group === 'current');
  for (const card of current) {
    if (card.legacyIds?.length && card.legacyIds.every(id => saved.sprintQuickLearned[id])) {
      saved.sprintQuickLearned[card.id] = true;
    }
  }
  for (const groupId of ['sprint-current', 'sprint']) {
    const oldId = saved.commonQuickPosition?.[groupId];
    const replacement = current.find(card => card.legacyIds?.includes(oldId));
    if (replacement) saved.commonQuickPosition[groupId] = replacement.id;
  }
  for (const [key, note] of Object.entries(saved.starred || {})) {
    if (!key.startsWith('sprint:')) continue;
    const oldId = key.slice('sprint:'.length);
    const replacement = current.find(card => card.legacyIds?.includes(oldId));
    if (!replacement) continue;
    const newKey = `sprint:${replacement.id}`;
    saved.starred[newKey] = saved.starred[newKey] || {
      ...note, key: newKey, group: replacement.volume, title: replacement.title,
      prompt: replacement.question, answer: replacement.answer
    };
    delete saved.starred[key];
  }
  saved.sprintCurrentChecklistMigrated = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function sprintLearnedCount(deck) {
  const learned = saved.sprintQuickLearned || {};
  return deck.filter(card => learned[card.id]).length;
}

function renderCommonQuickProgress() {
  const position = `${commonQuickIndex + 1} / ${commonQuickDeck.length}`;
  $('#commonQuickProgress').textContent = commonQuickGroup.startsWith('sprint')
    ? `${position} · 已学 ${sprintLearnedCount(commonQuickDeck)}` : position;
}

function sprintQuickNote() {
  if (!commonQuickGroup.startsWith('sprint')) return null;
  const card = commonQuickDeck[commonQuickIndex];
  return card && { key: `sprint:${card.id}`, group: card.volume || '冲刺班',
    title: card.title || card.topic || '冲刺速记', prompt: card.question || '',
    answer: card.answer || (card.digestTerms || []).join('、') };
}

function updateCommonQuickStar() {
  const note = sprintQuickNote(), button = $('#commonQuickStar');
  button.hidden = !note;
  $('#commonQuickFooter').classList.toggle('has-star', Boolean(note));
  if (note) updateStarButton(button, note.key);
}

function markSprintQuickLearned(card) {
  if (!commonQuickGroup.startsWith('sprint')) return;
  saved.sprintQuickLearned = saved.sprintQuickLearned || {};
  if (saved.sprintQuickLearned[card.id]) return;
  saved.sprintQuickLearned[card.id] = true;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
  renderCommonQuickProgress();
}

function openCommonDigest() {
  $('#commonDigestSummary').textContent = `五类常识 · ${COMMON_DIGEST.cards.length} 张记忆卡`;
  $('#commonDigestGrid').innerHTML = COMMON_DIGEST.groups.map((group, index) => {
    const cards = commonPool(group.id);
    return `<article class="common-group-card"><small>${String(index + 1).padStart(2, '0')}</small><div class="common-group-copy"><h2>${escapeHTML(group.name)}</h2><p>${escapeHTML(group.description)}</p><div class="common-group-stats"><span>${cards.length} 张记忆卡</span></div></div><div class="common-group-actions"><button data-common-practice="${group.id}">开始速记 →</button></div></article>`;
  }).join('');
  $$('[data-common-practice]').forEach(button => button.onclick = () => startCommonDigest(button.dataset.commonPractice));
  show('commonDigest');
  $$('[data-main]').forEach(button => button.classList.toggle('selected', button.dataset.main === 'knowledge'));
}

function openSprintDigest() {
  restoreSprintQuickProgress();
  const all = commonPool('sprint');
  $('#sprintDigestSummary').textContent = `已学 ${sprintLearnedCount(all)} / ${all.length} 张 · 本机自动保存`;
  $('#sprintDigestGrid').innerHTML = [
    ['sprint-theory', '01', '政治理论', '改革、法治与党的建设固定表述'],
    ['sprint-current', '02', '时政热点', '重要讲话、会议与政策文件'],
    ['sprint-common', '03', '常识判断', '文史、科技、经济、地理与法律'],
    ['sprint', '∞', '一体学习', '按照讲义顺序连续速记']
  ].map(([id, number, title, description]) => {
    const deck = commonPool(id), learned = sprintLearnedCount(deck);
    return `<article class="common-group-card"><small>${number}</small><div class="common-group-copy"><h2>${title}</h2><p>${description}</p><div class="common-group-stats"><span>已学 ${learned} / ${deck.length} 张</span></div><progress value="${learned}" max="${deck.length}" aria-label="${title}学习进度 ${learned}/${deck.length}"></progress></div><div class="common-group-actions"><button data-sprint-practice="${id}">${learned ? '继续速记' : '开始速记'} →</button></div></article>`;
  }).join('');
  $$('[data-sprint-practice]').forEach(button => button.onclick = () => startCommonDigest(button.dataset.sprintPractice));
  show('sprint');
  $$('[data-main]').forEach(button => button.classList.toggle('selected', button.dataset.main === 'sprint'));
}

function returnFromQuick() {
  if (commonQuickGroup.startsWith('sprint')) openSprintDigest();
  else openCommonDigest();
}

function startCommonDigest(groupId) {
  if (groupId.startsWith('sprint')) restoreSprintQuickProgress();
  const deck = commonPool(groupId);
  if (!deck.length) return;
  commonQuickDeck = deck;
  commonQuickGroup = groupId;
  const resumeId = saved.commonQuickPosition?.[groupId];
  commonQuickIndex = Math.max(0, deck.findIndex(card => card.id === resumeId));
  renderCommonQuick();
  show('commonQuick');
  fitCommonQuick();
  $('#commonQuickCard').focus({ preventScroll: true });
}


function renderCommonQuickQuestion(card, revealCount) {
  const question = card.digestBlock ? card.question : digestDisplayText(card.question);
  const emphasis = createStudyEmphasis(question, card);
  let index = 0;
  return question.split(/(_{2,})/g).map(part => {
    if (!/^_{2,}$/.test(part)) return highlightStudyPart(part, emphasis);
    const answer = card.digestTerms[index++] || '';
    const revealed = index <= revealCount;
    // The real answer always occupies its final space, including wrapped lines.
    return `<span class="common-quick-blank${revealed ? ' is-revealed' : ''}"><span class="common-quick-answer" aria-hidden="${!revealed}">${escapeHTML(answer)}</span></span>`;
  }).join('');
}

function renderCommonQuick() {
  const card = commonQuickDeck[commonQuickIndex];
  if (!card) return;
  commonQuickRevealCount = 0;
  $('#commonQuickTitle').textContent = card.volume;
  $('#commonQuickBack').textContent = commonQuickGroup.startsWith('sprint') ? '← 冲刺班' : '← 常识目录';
  $('#commonQuickTopic').textContent = card.title;
  renderCommonQuickProgress();
  $('#commonQuickQuestion').innerHTML = renderCommonQuickQuestion(card, 0);
  updateCommonQuickStar();
  renderCommonQuickMemory(card, false);
  $('#commonQuickHint').textContent = card.digestTerms.length ? `点击显示第 1 空 · 共 ${card.digestTerms.length} 空` : '点击下一张 →';
  $('#commonQuickCard').setAttribute('aria-label', card.digestTerms.length ? '显示第 1 空答案' : '下一张');
  $('#commonQuickPrev').disabled = commonQuickIndex === 0;
  $('#commonQuickCard').scrollTop = 0;
  fitCommonQuick();
}

function renderCommonQuickMemory(card, revealed) {
  const panel = $('#commonQuickMemory');
  const sources = $('#commonQuickMemorySources');
  const tip = typeof COMMON_MEMORY === 'undefined' ? null : COMMON_MEMORY.tips[COMMON_MEMORY.byCard[card.id]];
  panel.hidden = sources.hidden = !tip;
  panel.classList.toggle('is-concealed', !revealed);
  sources.classList.toggle('is-concealed', !revealed);
  panel.setAttribute('aria-hidden', String(!revealed || !tip));
  sources.setAttribute('aria-hidden', String(!revealed || !tip));
  sources.inert = !revealed || !tip;
  panel.innerHTML = sources.innerHTML = '';
  if (panel.hidden) return;
  panel.innerHTML = `<small>记忆提示 · ${escapeHTML(tip.origin)}</small><strong>${escapeHTML(tip.cue)}</strong><p>${escapeHTML(tip.explanation)}</p>`;
  const source = COMMON_MEMORY.sources[tip.source];
  const reference = source && /^https:\/\//.test(source.url || '')
    ? `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)} ↗</a>`
    : `配套讲义 · PDF 第 ${card.answerPage} 页`;
  sources.innerHTML = `<span>依据：${reference}</span><span>点卡片继续 →</span>`;
}

function fitCommonQuick() {
  const card = $('#commonQuickCard');
  const content = $('#commonQuickContent');
  if (!card.clientHeight || !card.clientWidth) return;
  const style = window.getComputedStyle(card);
  const height = card.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const width = card.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  if (height <= 0 || width <= 0) return;
  const mobile = window.matchMedia('(max-width: 600px)').matches;
  const maximum = mobile || card.clientWidth < 560 ? 16 : 18;
  const minimum = mobile ? 12 : 8;
  // Measure the complete layout (concealed answers and mnemonic included) once.
  // Revealing an answer never refits or changes type size.
  for (let size = maximum; size >= minimum; size -= .5) {
    card.style.setProperty('--quick-font-size', `${size}px`);
    if (content.getBoundingClientRect().height <= height + .5 && content.scrollWidth <= width + 1) break;
  }
}

if (typeof ResizeObserver !== 'undefined') {
  const commonQuickResize = new ResizeObserver(fitCommonQuick);
  commonQuickResize.observe($('#commonQuickCard'));
}
if (document.fonts?.ready) document.fonts.ready.then(fitCommonQuick);

function saveCommonQuickPosition() {
  saved.commonQuickPosition = saved.commonQuickPosition || {};
  saved.commonQuickPosition[commonQuickGroup] = commonQuickDeck[commonQuickIndex].id;
  localStorage.setItem('zhizhengStats', JSON.stringify(saved));
}

function advanceCommonQuick() {
  const card = commonQuickDeck[commonQuickIndex];
  if (!card) return;
  if (!card.digestTerms.length) markSprintQuickLearned(card);
  if (commonQuickRevealCount < card.digestTerms.length) {
    commonQuickRevealCount++;
    $('#commonQuickQuestion').innerHTML = renderCommonQuickQuestion(card, commonQuickRevealCount);
    if (commonQuickRevealCount < card.digestTerms.length) {
      $('#commonQuickHint').textContent = `已显示 ${commonQuickRevealCount} / ${card.digestTerms.length} 空 · 再点显示下一空`;
      $('#commonQuickCard').setAttribute('aria-label', `显示第 ${commonQuickRevealCount + 1} 空答案`);
      return;
    }
    const last = commonQuickIndex === commonQuickDeck.length - 1;
    markSprintQuickLearned(card);
    renderCommonQuickMemory(card, true);
    $('#commonQuickHint').textContent = last ? '再点一下，完成本组' : '再点一下，下一张 →';
    $('#commonQuickCard').setAttribute('aria-label', last ? '完成本组' : '下一张');
    return;
  }
  if (commonQuickIndex === commonQuickDeck.length - 1) {
    commonQuickIndex = 0;
    saveCommonQuickPosition();
    returnFromQuick();
    return;
  }
  commonQuickIndex++;
  saveCommonQuickPosition();
  renderCommonQuick();
}

$('#commonPoliticsBack').onclick = openPolitics;
$('#commonLawCourse').onclick = openLawKnowledge;
$('#commonQuickBack').onclick = () => { saveCommonQuickPosition(); returnFromQuick(); };
$('#commonQuickStar').onclick = () => { const note = sprintQuickNote(); if (note) toggleStar(note, $('#commonQuickStar')); };
$('#notebookBack').addEventListener('click', () => { if (notebookReturn === 'commonQuick') updateCommonQuickStar(); });
$('#sprintBack').onclick = openPolitics;
$('#commonQuickCard').onclick = advanceCommonQuick;
$('#commonQuickCard').onkeydown = event => {
  if (event.key !== ' ' && event.key !== 'Enter') return;
  event.preventDefault();
  if (!event.repeat) advanceCommonQuick();
};
$('#commonQuickPrev').onclick = () => {
  if (commonQuickIndex > 0) {
    commonQuickIndex--;
    saveCommonQuickPosition();
    renderCommonQuick();
  }
};
$('#knowledgeView .back-hub').textContent = '← 常识目录';
$('#knowledgeView .back-hub').onclick = openCommonDigest;
