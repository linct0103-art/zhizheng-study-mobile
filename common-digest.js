// Rapid browsing keeps only a resume position; it never schedules reviews or grades recall.
let commonQuickDeck = [], commonQuickIndex = 0, commonQuickGroup = '', commonQuickRevealCount = 0;

function commonPool(groupId) {
  if (groupId === 'sprint') return SPRINT_DIGEST.cards;
  if (groupId === 'sprint-theory') return SPRINT_DIGEST.cards.filter(card => card.group === 'theory');
  if (groupId === 'sprint-common') return SPRINT_DIGEST.cards.filter(card => card.group !== 'theory');
  return COMMON_DIGEST.cards.filter(card => card.group === groupId);
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
  $('#sprintDigestSummary').textContent = `政治理论 ${commonPool('sprint-theory').length} 张 · 常识判断 ${commonPool('sprint-common').length} 张`;
  $('#sprintDigestGrid').innerHTML = [
    ['sprint-theory', '01', '政治理论', '改革、法治与党的建设固定表述'],
    ['sprint-common', '02', '常识判断', '2026 年新法、文史科技与地理易混点'],
    ['sprint', '∞', '一体学习', '政治理论与常识判断连续速记']
  ].map(([id, number, title, description]) => `<article class="common-group-card"><small>${number}</small><div class="common-group-copy"><h2>${title}</h2><p>${description}</p><div class="common-group-stats"><span>${commonPool(id).length} 张记忆卡</span></div></div><div class="common-group-actions"><button data-sprint-practice="${id}">开始速记 →</button></div></article>`).join('');
  $$('[data-sprint-practice]').forEach(button => button.onclick = () => startCommonDigest(button.dataset.sprintPractice));
  show('sprint');
  $$('[data-main]').forEach(button => button.classList.toggle('selected', button.dataset.main === 'sprint'));
}

function returnFromQuick() {
  if (commonQuickGroup.startsWith('sprint')) openSprintDigest();
  else openCommonDigest();
}

function startCommonDigest(groupId) {
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
  const question = digestDisplayText(card.question);
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
  $('#commonQuickProgress').textContent = `${commonQuickIndex + 1} / ${commonQuickDeck.length}`;
  $('#commonQuickQuestion').innerHTML = renderCommonQuickQuestion(card, 0);
  renderCommonQuickMemory(card, false);
  $('#commonQuickHint').textContent = `点击显示第 1 空 · 共 ${card.digestTerms.length} 空`;
  $('#commonQuickCard').setAttribute('aria-label', '显示第 1 空答案');
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
  if (window.matchMedia('(max-width: 600px)').matches) {
    card.style.setProperty('--quick-font-size', '16px');
    return;
  }
  if (!card.clientHeight || !card.clientWidth) return;
  const style = window.getComputedStyle(card);
  const height = card.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const width = card.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  if (height <= 0 || width <= 0) return;
  const maximum = card.clientWidth < 560 ? 16 : 18;
  // Measure the complete layout (concealed answers and mnemonic included) once.
  // Revealing an answer never refits or changes type size.
  for (let size = maximum; size >= 8; size -= .5) {
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
  if (commonQuickRevealCount < card.digestTerms.length) {
    commonQuickRevealCount++;
    $('#commonQuickQuestion').innerHTML = renderCommonQuickQuestion(card, commonQuickRevealCount);
    if (commonQuickRevealCount < card.digestTerms.length) {
      $('#commonQuickHint').textContent = `已显示 ${commonQuickRevealCount} / ${card.digestTerms.length} 空 · 再点显示下一空`;
      $('#commonQuickCard').setAttribute('aria-label', `显示第 ${commonQuickRevealCount + 1} 空答案`);
      return;
    }
    const last = commonQuickIndex === commonQuickDeck.length - 1;
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
