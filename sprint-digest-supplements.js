// 冲刺班清单只补充旧清单与月半时政尚未覆盖的易混考点。
// 页码均为《国省考冲刺-政治理论&常识判断》PDF 的实际页码。
const sprintDigestSource = '【消化清单】国省考冲刺-政治理论&常识判断.pdf';

const sprintTheoryCards = [
  { id: 'sprint-theory-reform-mainline', section: 'x-reform', topic: '进一步全面深化改革', page: 20,
    prompt: '进一步全面深化改革，以____为主线，以____为牵引。', answers: ['制度建设', '经济体制改革'] },
  { id: 'sprint-theory-rule-of-law', section: 'x-law', topic: '全面依法治国', page: 20,
    prompt: '全面推进依法治国的总抓手是建设____。', answers: ['中国特色社会主义法治体系'] },
  { id: 'sprint-theory-party-politics', section: 'x-party', topic: '党的建设', page: 21,
    prompt: '党的政治建设是党的____建设，必须摆在____。', answers: ['根本性', '首位'] }
];
digestBank.push(...sprintTheoryCards.map(card => ({
  ...card, cat: 'xixiang', answer: card.answers.join('；'), source: sprintDigestSource,
  sourceLabel: '冲刺班《消化清单》PDF'
})));

// 题面与答案分离；每个下划线对应一次点击，保持手机端原有的速记节奏。
const sprintCommonRows = [
  ['history', '古田会议', 72, '古田会议确立了____、____的原则。', ['思想建党', '政治建军'], 'https://www.12371.cn/2021/02/09/ARTI1612833488693964.shtml'],
  ['science', '华龙一号', 80, '“华龙一号”全球首堆是福建____核电____号机组。', ['福清', '5'], 'https://hunb.nea.gov.cn/dtyw/ywdd/202309/t20230913_65078.html'],
  ['geography', '潮汐锁定', 92, '月球总以同一面朝向地球，是因为其____周期与绕地球的____周期相同。', ['自转', '公转'], 'https://science.nasa.gov/moon/tidal-locking/'],
  ['geography', '丹霞地貌', 95, '丹霞地貌主要发育于____色陆相沉积岩，以陡崖等侵蚀地貌为特征。', ['红'], 'https://whc.unesco.org/en/list/1335/'],

  ['law', '生态环境法典·原则', 97, '生态环境保护坚持____为主、____治理，并坚持生态优先、绿色发展等原则。', ['预防', '系统'], 'https://ecro.mee.gov.cn/fgbz/fl/202604/t20260416_1148993.html'],
  ['law', '生态环境法典·生态补偿', 98, '生态保护补偿包括财政____补偿、地区间____补偿和____补偿。', ['纵向', '横向', '市场机制'], 'https://ecro.mee.gov.cn/fgbz/fl/202604/t20260416_1148993.html'],
  ['law', '生态环境法典·排污许可', 98, '固定污染源监督管理以____制为核心；依法应取得许可证而未取得的，不得排放污染物。', ['排污许可'], 'https://ecro.mee.gov.cn/fgbz/fl/202604/t20260416_1148993.html'],
  ['law', '生态环境法典·光污染', 99, '过度或不恰当使用____，干扰周围生活环境中人的视觉，属于光污染。', ['人工照明'], 'https://ecro.mee.gov.cn/fgbz/fl/202604/t20260416_1148993.html'],

  ['law', '社会救助法·施行', 100, '《社会救助法》自____年____月____日起施行。', ['2026', '7', '1'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105779'],
  ['law', '社会救助法·工作机制', 100, '社会救助实行党委领导、政府负责、____牵头、____协同、社会参与的工作机制。', ['民政', '部门'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105779'],
  ['law', '社会救助法·救助类别', 100, '社会救助分为基本生活救助、____社会救助和____社会救助。', ['专项', '急难'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105779'],
  ['law', '社会救助法·低保', 100, '最低生活保障面向家庭人均收入低于当地标准、且____状况符合规定的家庭。', ['财产'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105779'],
  ['law', '社会救助法·急难救助', 101, '急难社会救助事项紧急、救助金额较小的，可以____，再补齐相关手续。', ['先行救助'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105779'],

  ['law', '民族团结进步促进法·施行', 101, '《民族团结进步促进法》自____年____月____日起施行。', ['2026', '7', '1'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105440'],
  ['law', '民族团结进步促进法·民族团结之本', 101, '____是民族团结之本。', ['中华民族共同体意识'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105440'],
  ['law', '民族团结进步促进法·共同体理念', 101, '牢固树立休戚与共、荣辱与共、____、____的共同体理念。', ['生死与共', '命运与共'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105440'],
  ['law', '民族团结进步促进法·通用语言', 102, '国家全面推广普及____；国家机关以其作为公务用语用字。', ['国家通用语言文字'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105440'],
  ['law', '民族团结进步促进法·互嵌社区', 102, '推进各民族人口流动融居，构建____社区环境。', ['互嵌式'], 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105440']
];

const sprintGroupNames = { history: '文史常识', science: '科技常识', geography: '地理常识', law: '法律常识' };
const sprintCommonCards = sprintCommonRows.map(([group, title, page, question, digestTerms, referenceUrl], index) => {
  const blanks = question.match(/_{2,}/g) || [];
  if (blanks.length !== digestTerms.length) throw new Error(`冲刺清单填空数量不匹配：${title}`);
  let answerIndex = 0;
  return {
    id: `sprint-common-${String(index + 1).padStart(3, '0')}`,
    group, volume: sprintGroupNames[group], category: '常识判断', title, topic: title,
    question, answer: question.replace(/_{2,}/g, () => digestTerms[answerIndex++]), digestTerms,
    digestChecklist: true, studyLabel: '常识消化清单', digestPage: page, endPage: page,
    sourceFile: sprintDigestSource, answerSource: referenceUrl, referenceUrl, sprintSupplement: true
  };
});
COMMON_DIGEST.cards.push(...sprintCommonCards);
for (const group of COMMON_DIGEST.groups) {
  group.count += sprintCommonCards.filter(card => card.group === group.id).length;
}
