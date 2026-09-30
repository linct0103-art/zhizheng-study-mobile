// Only mark visible question text. Cloze answers keep their separate reveal state.
const studyKeyTerms = {
  politics: '习近平 毛泽东 邓小平 马克思 恩格斯 列宁 中国共产党 中国特色社会主义 社会主义现代化 中国式现代化 新时代 新征程 中国梦 四个全面 五位一体 两个确立 两个维护 四个意识 四个自信 人民至上 以人民为中心 人民当家作主 全过程人民民主 高质量发展 新发展理念 新发展格局 新质生产力 全面深化改革 全面依法治国 全面从严治党 改革开放 共同富裕 科教兴国 人才强国 创新驱动 自立自强 党的领导 党的建设 自我革命 经济建设 国家安全 生态文明 绿水青山 社会主义核心价值观 民族复兴 独立自主 实事求是 群众路线 统一战线 武装斗争 物质 意识 客观规律 主观能动性 绝对运动 相对静止 辩证唯物主义 历史唯物主义 联系 发展 量变 质变 辩证否定 扬弃 同一性 斗争性 普遍性 特殊性 主要矛盾 次要矛盾 主要方面 次要方面 实践 认识 真理 生产力 生产关系 经济基础 上层建筑 社会存在 社会意识 人民群众 使用价值 价值量 具体劳动 抽象劳动 社会必要劳动时间 剩余价值 必要劳动 剩余劳动 可变资本 不变资本 唯一标准 根本保证 根本任务 根本目的 根本动力 根本立场 根本原则 根本制度 本质要求 首要任务 战略支撑 关键 核心 基础 决定性 决定作用 主导作用',
  history: '河姆渡 仰韶 半坡 红山 良渚 龙山 二里头 殷墟 三星堆 水稻 彩陶 黑陶 玉猪龙 甲骨文 青铜器 干栏式建筑 榫卯结构 夏王朝 商朝 西周 春秋 战国 秦朝 西汉 东汉 隋朝 唐朝 北宋 南宋 元朝 明朝 清朝 浙江省 河南省 山东省 四川省 内蒙古 余姚市 杭州市 洛阳市 安阳市 广汉市 秦始皇 汉武帝 唐太宗 武则天 宋神宗 明太祖 明成祖 康熙 雍正 乾隆 张骞 班超 玄奘 郑和 郑成功 孔子 屈原 韩愈 柳宗元 欧阳修 苏轼 苏洵 苏辙 王安石 曾巩 王羲之 颜真卿 柳公权 张仲景 华佗 李时珍 孙思邈 李白 杜甫 白居易 关汉卿 马致远 白朴 郑光祖 孙中山 林则徐 魏源 毛泽东 周恩来 陈独秀 三公九卿 三省六部 中书省 门下省 尚书省 郡县制 行省制 察举制 九品中正制 科举制 乡试 会试 殿试 初税亩 两税法 一条鞭法 摊丁入亩 军机处 辛亥革命 戊戌变法 洋务运动 抗日战争 解放战争 半殖民地半封建社会 现实主义 浪漫主义 编年体 纪传体 国别体',
  science: '惯性 加速度 合力 作用力 反作用力 压强 受力面积 流速 摩擦力 重力 浮力 超重 失重 动力臂 阻力臂 凝华 升华 液化 汽化 凝固 熔化 吸热 放热 蒸发 沸腾 热传导 热对流 热辐射 电磁波 紫外线 红外线 波长 频率 振幅 音调 音色 响度 真空 介质 反射 折射 凸透镜 凹透镜 凸面镜 凹面镜 二氧化碳 二氧化硅 氢氧化钠 氢氧化钙 碳酸钠 碳酸氢钠 甲烷 乙烯 乙醇 半导体 蛋白质 脂肪 葡萄糖 核苷酸 DNA RNA 同化作用 异化作用 光合作用 有氧呼吸 无氧呼吸 红细胞 白细胞 血小板 胰岛素 甲状腺素 生长激素 条件反射 非条件反射 淋巴细胞 中性粒细胞 震级 烈度 纵波 横波 RAM ROM CPU 一次能源 二次能源 可再生能源 不可再生能源 核裂变 核聚变 基因工程 细胞工程 发酵工程 酶工程 嫦娥一号 嫦娥三号 嫦娥四号 嫦娥五号 嫦娥六号 天问一号 天问二号 祝融号 天宫 天舟 神舟 酒泉 文昌 西昌 太原',
  economy: '需求量 需求曲线 替代品 互补品 机会成本 沉没成本 固定成本 可变成本 国内生产总值 国民总收入 通货膨胀 通货紧缩 失业率 财政政策 货币政策 政府支出 税收 存款准备金率 公开市场业务 再贴现率 直接标价法 间接标价法 本国货币 外国货币 恩格尔系数 基尼系数 边际效用 公共物品 非竞争性 非排他性 赤字率 流通中货币 狭义货币 广义货币 挤出效应 棘轮效应 凡勃伦效应 正外部性 负外部性',
  geography: '光球层 色球层 日冕层 太阳黑子 太阳耀斑 水星 金星 地球 火星 木星 土星 天王星 海王星 小行星带 自转 公转 近日点 远日点 北半球 南半球 赤道 地转偏向力 日食 月食 潮汐 对流雨 地形雨 锋面雨 台风雨 迎风坡 背风坡 梅雨 寒潮 沙尘暴 台风 长江中下游 东南沿海 西北 华北 东北 春分 夏至 秋分 冬至 陆上邻国 隔海相望 秦岭 淮河 黑河 腾冲 南岭 长江 珠江 黄河 青藏高原 四川盆地 泰山 华山 衡山 恒山 嵩山 五台山 普陀山 峨眉山 九华山 莫高窟 云冈石窟 龙门石窟 麦积山 鹳雀楼 滕王阁 黄鹤楼 岳阳楼 瞿塘峡 巫峡 西陵峡',
  law: '民事权利能力 民事行为能力 完全民事行为能力 限制民事行为能力 无民事行为能力 法定代理人 善意相对人 追认 撤销 无效 诉讼时效 知道或者应当知道 最后一期 不动产 动产 登记 交付 善意第三人 善意取得 无权处分 抵押权 质权 留置权 定金 保证人 不当得利 无因管理 直系血亲 旁系血亲 冷静期 第一顺序 第二顺序 代位继承 转继承 无过错责任 过错推定 补充责任 连带责任 罪刑法定 属人管辖 保护管辖 从旧兼从轻 直接故意 间接故意 疏忽大意 过于自信 正当防卫 防卫过当 紧急避险 犯罪预备 犯罪中止 犯罪未遂 犯罪既遂 共同故意 共同过失 教唆犯 管制 拘役 有期徒刑 无期徒刑 死刑 附加刑 剥夺政治权利 累犯 自首 立功 行政处罚 行政拘留 行政许可 行政强制措施 行政强制执行 行政复议 行政诉讼 全体代表 全国人民代表大会 全国人大常委会 国务院 人民法院 人民检察院 国家监察委员会 直接选举 间接选举 过半数 三分之二 五分之一 应当 可以 不得 不适用 除外'
};

function createStudyEmphasis(question, card) {
  const vocabulary = card.group === 'current' ? [studyKeyTerms.politics, studyKeyTerms.science, studyKeyTerms.history].join(' ') : card.group === 'all' ? Object.values(studyKeyTerms).join(' ') : studyKeyTerms[card.group] || studyKeyTerms.politics;
  const terms = vocabulary.split(' ');
  const subject = question.match(/^(?:[（(]?\d+[）).、]?|[①-⑳])?\s*([^：:。；，_()（）]{2,16})[：:]/)?.[1];
  if (subject && !/^(含义|概念|特点|应用|示例|起算|构成要件|法律后果|主要内容|影响因素)$/.test(subject)) terms.push(subject);
  terms.push(...(question.match(/《[^《》_]{2,16}》|\d{2,4}年(?:\d{1,2}月(?:\d{1,2}日)?)?|\d+(?:\.\d+)?(?:%|％|周岁|个月|年|日)|首次|最早|唯一/g) || []));
  const selected = [...new Set(terms)].filter(term => term && question.includes(term)).sort((a, b) => b.length - a.length);
  return {
    pattern: selected.length ? new RegExp(selected.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g') : null,
    used: new Set(), remaining: 4,
    characters: Math.max(8, Math.floor(question.replace(/_{2,}/g, '').length * .32))
  };
}

function highlightStudyPart(text, emphasis) {
  if (!emphasis.pattern) return escapeHTML(text);
  let cursor = 0, html = '';
  emphasis.pattern.lastIndex = 0;
  for (const match of text.matchAll(emphasis.pattern)) {
    html += escapeHTML(text.slice(cursor, match.index));
    const term = match[0];
    const repeated = [...emphasis.used].some(previous => previous.includes(term) || term.includes(previous));
    if (emphasis.remaining && term.length <= emphasis.characters && !repeated) {
      html += `<span class="study-keyword">${escapeHTML(term)}</span>`;
      emphasis.remaining--; emphasis.characters -= term.length; emphasis.used.add(term);
    } else html += escapeHTML(term);
    cursor = match.index + term.length;
  }
  return html + escapeHTML(text.slice(cursor));
}

function highlightStudyText(value, group = 'politics') {
  const text = String(value || '');
  return highlightStudyPart(text, createStudyEmphasis(text, { group }));
}
