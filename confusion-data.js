// 从现有消化清单抽取易混表述；sourceIds 用于核对原卡，sourceUrl 指向公开原文。
const CONFUSION_GROUPS=[
  {id:'milestones',name:'年份与程度'},
  {id:'phrases',name:'相近搭配'},
  {id:'roles',name:'定位关系'}
];
const CONFUSION_CARDS=[
  {id:'cm-01',group:'milestones',title:'国家现代化：基本实现与建成',cue:'2035 和本世纪中叶分别到哪一步？',rows:[['2035年','基本实现社会主义现代化'],['本世纪中叶','建成富强民主文明和谐美丽的社会主义现代化强国']],trap:'2035 是“基本实现”，不要提前写成“全面建成强国”。',sourceIds:['digest-033'],sourceUrl:'https://www.mod.gov.cn/gfbw/jmsd/4829377.html'},
  {id:'cm-02',group:'milestones',title:'同是2035年，完成词不同',cue:'给对象配“建成／基本实现／基本建成”。',rows:[['教育、科技、人才、文化、体育强国和健康中国','建成'],['新型工业化、信息化、城镇化、农业现代化','基本实现'],['法治国家、法治政府、法治社会','基本建成']],trap:'先锁定对象，再选完成词；“2035”不能替你判断动词。',sourceIds:['digest-035'],sourceUrl:'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/202103/P020210313315693279320.pdf'},
  {id:'cm-03',group:'milestones',title:'国防和军队：两个终点',cue:'2035 与本世纪中叶不能互换。',rows:[['2035年','基本实现国防和军队现代化'],['本世纪中叶','把人民军队全面建成世界一流军队']],trap:'“世界一流军队”不是2035年目标。',sourceIds:['digest-235','digest-236'],sourceUrl:'https://www.mod.gov.cn/gfbw/jmsd/4875402.html'},
  {id:'cm-04',group:'milestones',title:'教育体系：初步、基本、全面',cue:'同一体系跨三个年份，程度逐级提高。',rows:[['2027年','高质量教育体系初步形成'],['2030年','高质量教育体系基本建成'],['2035年','高质量教育体系全面建成，建成教育强国']],trap:'2030 是体系“基本建成”，教育强国“建成”对应2035。',sourceIds:['cad-06-下-026'],sourceUrl:'https://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202606/t20260629_1442045.html?xxgkhide=1',sourceUrl2:'https://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202501/t20250119_1176193.html?zbb=true'},
  {id:'cm-05',group:'milestones',title:'首都都市圈：框架、构架、全面建成',cue:'2030、2035、2050分别是什么？',rows:[['2030年','京津雄创新三角发展框架基本形成'],['2035年','现代化首都都市圈构架基本形成'],['2050年','现代化首都都市圈全面建成']],trap:'2030 基本形成的是“创新三角发展框架”，不是整个都市圈。',sourceIds:['cad-02-上-026','cad-02-上-027','cad-02-上-028'],sourceUrl:'https://www.beijing.gov.cn/gongkai/guihua/wngh/ybzxgh/202602/t20260203_4487743.html'},
  {id:'cm-06',group:'milestones',title:'城市更新：重要进展与基本建成',cue:'2030 和 2035 的目标程度不同。',rows:[['2030年','城市更新行动取得重要进展'],['2035年','现代化人民城市基本建成']],trap:'“取得重要进展”不要改成“基本建成”。',sourceIds:['cad-05-下-050','cad-05-下-051'],sourceUrl:'https://www.ndrc.gov.cn/fggz/fzzlgh/gjjzxgh/202609/t20260928_1407863_ext.html'},
  {id:'cm-07',group:'milestones',title:'共同富裕：进展与实现',cue:'2035年和本世纪中叶的力度有别。',rows:[['2035年','取得更为明显的实质性进展'],['本世纪中叶','全体人民共同富裕基本实现']],trap:'2035 年是“取得进展”，不是“基本实现共同富裕”。',sourceIds:['digest-065'],sourceUrl:'https://www.ndrc.gov.cn/fggz/jyysr/jysrsbxf/202202/t20220223_1316644.html'},
  {id:'cm-08',group:'milestones',title:'双碳目标：先达峰再中和',cue:'同是气候目标，年份和动作要成对。',rows:[['2030年前','实现碳达峰'],['2060年前','实现碳中和']],trap:'达峰在前，中和在后；年份不能对调。',sourceIds:['digest-162'],sourceUrl:'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/202103/P020210313315693279320.pdf'},

  {id:'cm-09',group:'phrases',title:'贸易领域的两个“一体化”',cue:'两个并列短语，分别连接哪两端？',rows:[['贸易投资','一体化'],['内外贸','一体化']],trap:'原句是“贸易投资一体化、内外贸一体化”；不要换成“服务消费一体化”。',sourceIds:['cad-02-下-017','major-01-016'],sourceUrl:'https://www.mofcom.gov.cn/xwfb/bldhd/art/2026/art_51bc66cb780d43ffb5f20c61d7d0b4a4.html'},
  {id:'cm-10',group:'phrases',title:'县域建设与欠发达地区帮扶',cue:'“一体化”和“分层分类”各修饰什么？',rows:[['县域基础设施','一体化规划建设管护'],['欠发达地区','分层分类帮扶']],trap:'设施强调规划、建设、管护连起来；地区帮扶强调分层分类。',sourceIds:['major-02-063','major-02-067'],sourceUrl:'https://www.ln.gov.cn/web/ywdt/rdgz/2026031407581924489/index.shtml'},
  {id:'cm-11',group:'phrases',title:'生态治理的一体化',cue:'“山水林田湖草沙”后面接什么？',rows:[['山水林田湖草沙','一体化保护和系统治理'],['县域基础设施','一体化规划建设管护']],trap:'同样是“一体化”，保护治理与建设管护的对象不能对调。',sourceIds:['major-04-090','major-02-063'],sourceUrl:'https://www.ln.gov.cn/web/ywdt/rdgz/2026031407581924489/index.shtml'},
  {id:'cm-12',group:'phrases',title:'“分类”后面跟什么',cue:'革命老区与欠发达地区，表述并不相同。',rows:[['革命老区振兴','因地制宜、分类指导、分区施策'],['欠发达地区帮扶','分层分类帮扶']],trap:'“分类指导、分区施策”与“分层分类帮扶”不能拼成一个新提法。',sourceIds:['cad-03-上-009','major-02-067'],sourceUrl:'https://tyjrswj.beijing.gov.cn/fwzl/jycy/202603/t20260318_4560022.html',sourceUrl2:'https://www.ln.gov.cn/web/ywdt/rdgz/2026031407581924489/index.shtml'},

  {id:'cm-13',group:'roles',title:'中心与主题',cue:'“中心”和“主题”只差一个定位词。',rows:[['中心','以经济建设为中心'],['主题','以推动高质量发展为主题']],trap:'经济建设是中心，高质量发展是主题。',sourceIds:['major-02-004','cad-02-下-039'],sourceUrl:'https://www.cppcc.gov.cn/zxww/2026/03/16/ARTI1773644951646391.shtml'},
  {id:'cm-14',group:'roles',title:'动力、目的、保障',cue:'三个“根本”后面的内容如何分？',rows:[['根本动力','改革创新'],['根本目的','满足人民日益增长的美好生活需要'],['根本保障','全面从严治党']],trap:'动力、目的、保障不是同义词，做题先看问的是哪一个。',sourceIds:['major-02-004','cad-02-下-039'],sourceUrl:'https://www.cppcc.gov.cn/zxww/2026/03/16/ARTI1773644951646391.shtml'},
  {id:'cm-15',group:'roles',title:'改革：主线与牵引',cue:'制度建设与经济体制改革各是什么定位？',rows:[['主线','制度建设'],['牵引','经济体制改革']],trap:'把“以经济体制改革为主线”当原句，会丢掉“牵引”的定位。',sourceIds:['sprint-theory-reform-mainline'],sourceUrl:'https://app.www.gov.cn/govdata/gov/202407/21/517490/article.html'},
  {id:'cm-16',group:'roles',title:'依法治国：总目标与总抓手',cue:'两个说法有交集，却不完全一样。',rows:[['总目标','建设中国特色社会主义法治体系、建设社会主义法治国家'],['总抓手','建设中国特色社会主义法治体系']],trap:'“总抓手”只指法治体系；“总目标”还包括建设社会主义法治国家。',sourceIds:['sprint-theory-rule-of-law'],sourceUrl:'https://www.moj.gov.cn/pub/sfbgw/zwgkztzl/xxxcgcxjpfzsx/fzsxllqy/202111/t20211111_441312.html'},
  {id:'cm-17',group:'roles',title:'五位一体与四个全面',cue:'“总体布局”和“战略布局”别互换。',rows:[['总体布局','“五位一体”'],['战略布局','“四个全面”']],trap:'五位一体是总体布局；四个全面是战略布局。',sourceIds:['digest-020'],sourceUrl:'https://www.mod.gov.cn/gfbw/qwfb/4899045.html?big=fan'}
];
