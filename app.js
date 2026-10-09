const bank = [
  {cat:'xixiang',type:'单项选择',trap:'定位混淆',q:'习近平新时代中国特色社会主义思想的核心要义是：',opts:['坚持和发展中国特色社会主义','实现中华民族伟大复兴','推进中国式现代化','坚持党的全面领导'],a:0,exp:'坚持和发展中国特色社会主义，是习近平新时代中国特色社会主义思想的核心要义。',tip:'“核心要义”是固定表述，不要与历史使命、实践路径混淆。'},
  {cat:'xixiang',type:'判断题',trap:'时间定位',q:'党的十九大作出中国特色社会主义进入新时代的重大政治论断。',opts:['正确','错误'],a:0,exp:'表述正确。进入新时代的重大政治论断由党的十九大作出。',tip:'十九大对应“进入新时代”，不要与十八大混淆。'},
  {cat:'xixiang',type:'判断题',trap:'基本国情误判',q:'我国社会主要矛盾发生变化，意味着我国的基本国情和国际地位也发生改变。',opts:['正确','错误'],a:1,exp:'主要矛盾发生变化，但社会主义初级阶段的基本国情和世界最大发展中国家的国际地位没有变。',tip:'“主要矛盾变了”不能推出“基本国情、国际地位变了”。'},
  {cat:'xixiang',type:'单项选择',trap:'定位混淆',q:'“两个结合”中的第二个结合是：',opts:['同中国具体实际相结合','同中华优秀传统文化相结合','同世界发展趋势相结合','同现代科技革命相结合'],a:1,exp:'第二个结合是马克思主义基本原理同中华优秀传统文化相结合。',tip:'第一个对应中国具体实际，第二个对应中华优秀传统文化。'},
  {cat:'xixiang',type:'判断题',trap:'认识实践倒置',q:'“十个明确”集中体现实践论，“十四个坚持”集中体现认识论。',opts:['正确','错误'],a:1,exp:'表述颠倒。“十个明确”集中体现认识论，“十四个坚持”集中体现实践论。',tip:'明确回答“是什么”，坚持回答“怎么做”。'},
  {cat:'xixiang',type:'单项选择',trap:'定位混淆',q:'中国特色社会主义最本质的特征是：',opts:['人民当家作主','中国共产党领导','全面依法治国','共同富裕'],a:1,exp:'中国共产党领导是中国特色社会主义最本质的特征，也是制度的最大优势。',tip:'“最本质特征”和“最大优势”都指向党的领导。'},
  {cat:'xixiang',type:'判断题',trap:'概念偷换',q:'中国式现代化是全体人民同步富裕的现代化。',opts:['正确','错误'],a:1,exp:'中国式现代化是全体人民共同富裕的现代化，共同富裕不是同步富裕或同等富裕。',tip:'共同富裕常被偷换为同步、同时、同等富裕。'},
  {cat:'xixiang',type:'单项选择',trap:'根本属性错配',q:'决定中国式现代化根本性质的是：',opts:['人口规模','共同富裕目标','中国共产党的领导','物质文明水平'],a:2,exp:'党的领导决定中国式现代化的根本性质。',tip:'“根本性质”锁定党的领导。'},
  {cat:'xixiang',type:'判断题',trap:'期限夸大',q:'到2035年，我国将基本实现全体人民共同富裕。',opts:['正确','错误'],a:1,exp:'到2035年，全体人民共同富裕取得更为明显的实质性进展。',tip:'“取得进展”不能夸大为“基本实现”。'},
  {cat:'xixiang',type:'单项选择',trap:'地位错配',q:'新发展理念中，解决发展动力问题的是：',opts:['创新','协调','开放','共享'],a:0,exp:'创新发展注重解决发展动力问题。',tip:'创新—动力；协调—不平衡；绿色—人与自然；开放—内外联动；共享—公平正义。'},
  {cat:'xixiang',type:'判断题',trap:'内外循环倒置',q:'新发展格局以国际大循环为主体、国内国际双循环相互促进。',opts:['正确','错误'],a:1,exp:'新发展格局以国内大循环为主体。',tip:'“主体”只能是国内大循环。'},
  {cat:'xixiang',type:'判断题',trap:'战略定位错配',q:'实施乡村振兴战略，是新时代做好“三农”工作的总抓手。',opts:['正确','错误'],a:0,exp:'表述正确。加快建设农业强国是战略总纲。',tip:'总抓手—乡村振兴；战略总纲—农业强国。'},
  {cat:'mayuan',type:'判断题',trap:'绝对化误判',q:'矛盾的斗争性是无条件的、绝对的，同一性是有条件的、相对的。',opts:['正确','错误'],a:0,exp:'表述正确，这是矛盾同一性与斗争性的固定表述。',tip:'此处“绝对”不是错误信号。'},
  {cat:'mayuan',type:'单项选择',trap:'关系倒置',q:'生产力和生产关系的矛盾运动中，起决定作用的是：',opts:['生产关系','生产力','经济基础','上层建筑'],a:1,exp:'生产力决定生产关系，生产关系反作用于生产力。',tip:'“决定”与“反作用”的方向不可倒置。'},
  {cat:'mayuan',type:'判断题',trap:'唯一性偷换',q:'实践是检验真理的唯一标准，因此逻辑证明没有作用。',opts:['正确','错误'],a:1,exp:'实践是唯一标准，但逻辑证明仍是探索和论证真理的重要手段。',tip:'“唯一标准”不等于“唯一手段”。'},
  {cat:'mayuan',type:'单项选择',trap:'概念混淆',q:'认识的本质是：',opts:['主体对客体的直观反映','主体对客体的能动反映','客体对主体的被动反映','纯粹主观创造'],a:1,exp:'认识是主体在实践基础上对客体的能动反映。',tip:'既反对机械直观反映，也反对脱离客体的主观创造。'},
  {cat:'mayuan',type:'判断题',trap:'条件遗漏',q:'真理是绝对的，因此任何真理都不受条件和范围限制。',opts:['正确','错误'],a:1,exp:'真理具有绝对性，也具有相对性；具体真理都有适用条件和范围。',tip:'承认真理绝对性，不能否定其条件性。'},
  {cat:'mayuan',type:'单项选择',trap:'动力错配',q:'人类社会发展的根本动力是：',opts:['科学技术革命','阶级斗争','社会基本矛盾运动','杰出人物活动'],a:2,exp:'社会基本矛盾运动是社会发展的根本动力。',tip:'阶级斗争是阶级社会发展的直接动力，不是所有社会的根本动力。'},
  {cat:'mayuan',type:'判断题',trap:'主次颠倒',q:'社会意识决定社会存在，同时社会存在反作用于社会意识。',opts:['正确','错误'],a:1,exp:'社会存在决定社会意识，社会意识具有相对独立性并反作用于社会存在。',tip:'决定方向不能颠倒。'},
  {cat:'mayuan',type:'单项选择',trap:'标准错配',q:'区分量变和质变的根本标志是：',opts:['变化是否显著','变化是否迅速','变化是否超出度的范围','变化是否由外力引起'],a:2,exp:'是否超出度的范围，是区分量变与质变的根本标志。',tip:'显著、迅速都不是根本标志。'},
  {cat:'mayuan',type:'判断题',trap:'机械否定',q:'辩证否定是对旧事物的彻底抛弃，与旧事物之间没有联系。',opts:['正确','错误'],a:1,exp:'辩证否定是联系和发展的环节，其实质是扬弃。',tip:'辩证否定既克服又保留。'},
  {cat:'mayuan',type:'判断题',trap:'实践主体错配',q:'实践是人们适应外部环境的本能活动。',opts:['正确','错误'],a:1,exp:'实践是人类能动地改造世界的社会性的物质活动，不是被动适应环境的本能活动。',tip:'实践具有自觉能动性、社会历史性和客观实在性。'}
];
const sectionMap={
  xixiang:[
    ['x-zonglun','总论','核心要义、两个结合、科学体系'],
    ['x-modern','中国式现代化','特征、原则、2035年目标'],
    ['x-lead','党的全面领导','根本保证、领导制度'],
    ['x-people','以人民为中心','共同富裕、群众路线'],
    ['x-quality','推动高质量发展','新发展理念、新发展格局'],
    ['x-democracy','全过程人民民主','根本制度、政协定位'],
    ['x-culture','文化强国','文化自信、文化事业产业'],
    ['x-livelihood','保障和改善民生','就业、分配、社会保障'],
    ['x-ecology','生态文明','两山理念、双碳目标'],
    ['x-reform','全面深化改革','总目标、市场与政府'],
    ['x-law','全面依法治国','总目标、法治体系'],
    ['x-party','全面从严治党','自我革命、政治建设'],
    ['x-edu','教育科技人才','根本任务、第一动力'],
    ['x-security','总体国家安全观','宗旨、根本、基础'],
    ['x-defense','国防和军队','强军目标、根本原则'],
    ['x-unity','一国两制与统一','方针、根本保证'],
    ['x-diplomacy','中国特色大国外交','外交宗旨、人类命运共同体']
  ],
  mayuan:[
    ['m-overview','马克思主义概述','诞生、特征、理论来源'],
    ['m-schools','两大哲学派别','唯物主义、唯心主义'],
    ['m-matter','物质与意识','物质、运动、意识能动性'],
    ['m-dialectics','唯物辩证法','联系发展、三大规律'],
    ['m-knowledge','认识论','实践、认识、真理'],
    ['m-history','唯物史观','社会基本矛盾、人民群众'],
    ['m-commodity','商品经济','价值、使用价值、货币'],
    ['m-surplus','剩余价值理论','劳动力商品、剩余价值']
  ]
};
const autoSections={xixiang:['x-zonglun','x-zonglun','x-zonglun','x-zonglun','x-zonglun','x-lead','x-people','x-modern','x-modern','x-quality','x-quality','x-quality'],mayuan:['m-dialectics','m-history','m-knowledge','m-knowledge','m-knowledge','m-history','m-history','m-dialectics','m-dialectics','m-knowledge']};
bank.filter(q=>q.cat==='xixiang').forEach((q,i)=>q.section=autoSections.xixiang[i]||'x-zonglun');
bank.filter(q=>q.cat==='mayuan').forEach((q,i)=>q.section=autoSections.mayuan[i]||'m-dialectics');
bank.push(
  {cat:'xixiang',section:'x-democracy',type:'判断题',trap:'制度性质错配',q:'人民代表大会制度是我国的根本制度。',opts:['正确','错误'],a:1,exp:'人民代表大会制度是我国的根本政治制度；社会主义制度是我国的根本制度。',tip:'“根本制度”与“根本政治制度”是手册高频偷换词。'},
  {cat:'xixiang',section:'x-culture',type:'单项选择',trap:'保护原则错配',q:'保护历史文化遗产应坚持的第一原则是：',opts:['合理利用','最大干预','保护为主','社会效益'],a:2,exp:'手册强调：保护为主、合理利用、最小干预，推动文化遗产系统性保护。',tip:'第一原则是保护，不是开发利用。'},
  {cat:'xixiang',section:'x-livelihood',type:'判断题',trap:'民生定位错配',q:'教育是最大的民生工程、民心工程、根基工程。',opts:['正确','错误'],a:1,exp:'就业是最基本的民生，也是最大的民生工程、民心工程、根基工程。',tip:'题目把“就业”的定位偷换给了教育。'},
  {cat:'xixiang',section:'x-ecology',type:'判断题',trap:'时间节点倒置',q:'我国力争2030年前实现碳中和、2060年前实现碳达峰。',opts:['正确','错误'],a:1,exp:'正确顺序是2030年前碳达峰、2060年前碳中和。',tip:'达峰在前，中和在后。'},
  {cat:'xixiang',section:'x-reform',type:'单项选择',trap:'总目标缩窄',q:'全面深化改革的总目标是：',opts:['建立社会主义市场经济体制','推进社会公平正义','完善和发展中国特色社会主义制度，推进国家治理体系和治理能力现代化','让市场在资源配置中起决定性作用'],a:2,exp:'完善和发展中国特色社会主义制度、推进国家治理体系和治理能力现代化，是全面深化改革的总目标。',tip:'市场经济体制是重要内容，不是全面深化改革总目标的完整表述。'},
  {cat:'xixiang',section:'x-law',type:'判断题',trap:'总目标错配',q:'全面依法治国的总目标是建设中国特色社会主义法治政府。',opts:['正确','错误'],a:1,exp:'总目标是建设中国特色社会主义法治体系、建设社会主义法治国家。',tip:'“法治政府”只是法治建设的重要主体工程，不能替代完整总目标。'},
  {cat:'xixiang',section:'x-party',type:'单项选择',trap:'答案次序混淆',q:'党找到的跳出治乱兴衰历史周期率的第二个答案是：',opts:['人民监督','自我革命','依法治国','统一战线'],a:1,exp:'人民监督是第一个答案，自我革命是第二个答案。',tip:'“第一个—人民监督；第二个—自我革命”要成对记。'},
  {cat:'xixiang',section:'x-edu',type:'判断题',trap:'三者定位互换',q:'科技是第一资源、人才是第一动力、创新是第一生产力。',opts:['正确','错误'],a:1,exp:'科技是第一生产力、人才是第一资源、创新是第一动力。',tip:'生产力—科技；资源—人才；动力—创新。'},
  {cat:'xixiang',section:'x-security',type:'单项选择',trap:'宗旨根本错配',q:'总体国家安全观以什么为宗旨？',opts:['政治安全','人民安全','经济安全','军事安全'],a:1,exp:'总体国家安全观以人民安全为宗旨、政治安全为根本、经济安全为基础。',tip:'宗旨—人民；根本—政治；基础—经济。'},
  {cat:'xixiang',section:'x-defense',type:'判断题',trap:'目标时间提前',q:'到2035年，要把人民军队全面建成世界一流军队。',opts:['正确','错误'],a:1,exp:'到2035年基本实现国防和军队现代化；到本世纪中叶把人民军队全面建成世界一流军队。',tip:'2035年是“基本现代化”，世界一流对应本世纪中叶。'},
  {cat:'xixiang',section:'x-unity',type:'单项选择',trap:'前提基础错配',q:'“一国两制”的前提和基础是：',opts:['两制并存','高度自治','一个中国','和平统一'],a:2,exp:'“一个中国”是“一国两制”的前提和基础。',tip:'一国是两制的前提，两制从属并统一于一国。'},
  {cat:'xixiang',section:'x-diplomacy',type:'判断题',trap:'外交宗旨错配',q:'维护我国主权、安全和发展利益，是我国对外政策的宗旨。',opts:['正确','错误'],a:1,exp:'维护世界和平、促进共同发展是我国对外政策的宗旨。维护国家利益是对外工作的出发点和落脚点。',tip:'“宗旨”与“出发点、落脚点”不能互换。'},
  {cat:'mayuan',section:'m-overview',type:'单项选择',trap:'诞生标志错配',q:'马克思主义诞生的标志是：',opts:['《资本论》出版','《共产党宣言》发表','巴黎公社成立','唯物史观创立'],a:1,exp:'1848年《共产党宣言》的发表，标志着马克思主义的诞生。',tip:'注意“诞生标志”对应具体著作与年份。'},
  {cat:'mayuan',section:'m-schools',type:'判断题',trap:'基本问题偷换',q:'哲学的基本问题是意识与物质谁更重要的问题。',opts:['正确','错误'],a:1,exp:'哲学的基本问题是思维和存在的关系问题，包括何者为第一性以及是否具有同一性。',tip:'不是“谁更重要”，而是思维和存在的关系。'},
  {cat:'mayuan',section:'m-matter',type:'判断题',trap:'属性方式混淆',q:'运动是物质的唯一特性，客观实在性是物质的根本属性。',opts:['正确','错误'],a:1,exp:'客观实在性是物质的唯一特性；运动是物质的根本属性和存在方式。',tip:'唯一特性—客观实在性；根本属性和存在方式—运动。'},
  {cat:'mayuan',section:'m-commodity',type:'判断题',trap:'劳动二重性混淆',q:'具体劳动形成商品的价值，抽象劳动形成商品的使用价值。',opts:['正确','错误'],a:1,exp:'具体劳动创造使用价值，抽象劳动形成价值。',tip:'具体—使用价值；抽象—价值。'},
  {cat:'mayuan',section:'m-surplus',type:'单项选择',trap:'剩余价值来源错配',q:'资本主义剩余价值的真正来源是：',opts:['流通领域的贱买贵卖','资本家的管理劳动','雇佣工人的剩余劳动','机器设备创造的新价值'],a:2,exp:'剩余价值由雇佣工人在剩余劳动时间创造。',tip:'剩余价值不能在流通中产生，机器也不创造新价值。'}
  ,{cat:'mayuan',section:'m-dialectics',type:'判断题',trap:'整体部分倒置',q:'整体功能总是等于各部分功能的简单相加。',opts:['正确','错误'],a:1,exp:'整体具有部分所不具备的功能，整体功能并不必然等于各部分功能的简单相加。',tip:'整体与部分相互联系，但不能把整体机械还原为部分之和。'}
  ,{cat:'mayuan',section:'m-dialectics',type:'单项选择',trap:'普遍特殊混淆',q:'矛盾问题的精髓是：',opts:['主要矛盾与次要矛盾的关系','矛盾普遍性与特殊性的关系','矛盾同一性与斗争性的关系','矛盾主要方面与次要方面的关系'],a:1,exp:'矛盾的普遍性和特殊性的关系，是关于事物矛盾问题的精髓。',tip:'“精髓”是固定定位，不要被其他矛盾关系带偏。'}
  ,{cat:'mayuan',section:'m-knowledge',type:'判断题',trap:'实践作用夸大',q:'实践具有直接现实性，因此实践活动必然都能取得成功。',opts:['正确','错误'],a:1,exp:'实践的直接现实性是指实践能把观念变为现实，不代表每一次实践都必然成功。',tip:'“能够转化”不能偷换成“必然成功”。'}
  ,{cat:'mayuan',section:'m-history',type:'单项选择',trap:'历史主体错配',q:'社会历史的创造者是：',opts:['英雄人物','思想家','人民群众','统治阶级'],a:2,exp:'人民群众是社会历史的主体，是社会历史的创造者。',tip:'承认杰出人物的重要作用，不等于否定人民群众的决定作用。'}
  ,{cat:'mayuan',section:'m-commodity',type:'判断题',trap:'价值属性错配',q:'商品的使用价值是商品的社会属性，价值是商品的自然属性。',opts:['正确','错误'],a:1,exp:'使用价值是商品的自然属性，价值是商品的社会属性。',tip:'自然属性—使用价值；社会属性—价值。'}
);
// 正式题库以《排坑手册》逐条生成的数据为准。
bank.splice(0,bank.length,...manualBank);
bank.filter(q=>q.a===1).forEach((q,i)=>{const verified=VERIFIED_FALSE_TARGETS[i];if(verified)q.wrongTargets=verified.split('|')});
const correctSentenceOverrides={
  '要用新时代中国之“矢”去射马克思主义之“的”。':'要用马克思主义之“矢”去射新时代中国之“的”。',
  '马克思主义这个根脉和中华优秀传统文化这个魂脉内在贯通、相互成就。':'马克思主义这个魂脉和中华优秀传统文化这个根脉内在贯通、相互成就。',
  '中国特色社会主义事业战略布局是“五位一体”，总体布局是“四个全面”。':'中国特色社会主义事业总体布局是“五位一体”，战略布局是“四个全面”。',
  '实现共同富裕，首先要把“蛋糕”切好分好，然后把“蛋糕”做大做好。':'实现共同富裕，首先要把“蛋糕”做大做好，然后把“蛋糕”切好分好。',
  '要用好看不见的手和看得见的手，推动有效政府和有为市场更好结合。':'要用好看不见的手和看得见的手，推动有效市场和有为政府更好结合。',
  '统战工作的关键是要坚持求同存异，在尊重一致性中寻求多样性。':'统战工作的关键是要坚持求同存异，在尊重多样性中寻求一致性。',
  '我国的目标是2035年前实现碳达峰、本世纪中叶前实现碳中和。':'我国力争2030年前实现碳达峰、2060年前实现碳中和。',
  '坚持依宪治国、依宪执政，就必须坚持宪法确定的中国共产党领导地位不动摇，坚持宪法确定的人民民主专政的政体和人民代表大会制度的国体不动摇。':'坚持宪法确定的人民民主专政的国体和人民代表大会制度的政体不动摇。',
  '必须坚持创新是第一生产力、人才是第一资源、科技是第一动力。':'必须坚持科技是第一生产力、人才是第一资源、创新是第一动力。',
  '以为党育人、为国育才为根本任务，以立德树人为根本目标。':'以为党育人、为国育才为根本目标，以立德树人为根本任务。',
  '总体国家安全观以经济安全为根本，以政治安全为基础，以人民安全为宗旨，以军事、科技、文化、社会安全为保障，以促进国际安全为依托。':'总体国家安全观以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、科技、文化、社会安全为保障，以促进国际安全为依托。',
  '党对军队绝对领导的根本原则和制度，发端于三湾改编，奠基于南昌起义，定型于古田会议，是人民军队完全区别于一切旧军队的政治特质和根本优势。':'党对军队绝对领导的根本原则和制度，发端于南昌起义，奠基于三湾改编，定型于古田会议。',
  '“两制”是实行“一国”的前提和基础。':'“一国”是实行“两制”的前提和基础。',
  '正确发挥主观能动性是尊重客观规律的前提。':'尊重客观规律是正确发挥主观能动性的前提。',
  '在整个上层建筑中，观念上层建筑居主导地位，政治法律思想是核心。':'在整个上层建筑中，政治上层建筑居主导地位，国家政权是核心。',
  '商品的二因素决定生产商品的劳动二重性。':'生产商品的劳动二重性决定商品的二因素。',
  '价值围绕价格上下波动。':'价格围绕价值上下波动。'
};
bank.forEach(q=>{if(correctSentenceOverrides[q.q])q.correctSentence=correctSentenceOverrides[q.q]});
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let activeTab='xixiang',section='x-zonglun',sectionPage=0,count=8,learningMode='digest',practiceType='综合',state={questions:[],index:0,answers:[],topic:''};
const saved=JSON.parse(localStorage.getItem('zhizhengStats')||'{"done":0,"correct":0,"wrong":[],"traps":{},"records":{}}');
saved.records=saved.records||{};
saved.starred=saved.starred||{};
const reviewIntervals=[1,2,4,7,15,30];
let sessionMode='new';
let digestIndex=0,digestDeck=[],digestSessionMode='new';
const views={commonDigest:$('#commonDigestView'),sprint:$('#sprintView'),commonQuick:$('#commonQuickView'),hub:$('#hubView'),politicsMenu:$('#politicsMenuView'),current:$('#currentView'),majorTopic:$('#majorTopicView'),examTrap:$('#examTrapView'),currentFlash:$('#currentFlashView'),currentNotes:$('#currentNotesView'),knowledge:$('#knowledgeView'),flash:$('#flashView'),home:$('#homeView'),digest:$('#digestView'),confusion:$('#confusionView'),notebook:$('#notebookView'),quiz:$('#quizView'),result:$('#resultView')};
function show(n){Object.values(views).forEach(v=>v.classList.remove('active'));views[n].classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}

const CURRENT_NOTES_DB='zhizhengCurrentAffairsNotes';
const CURRENT_NOTES_STORE='notes';
let currentNotes=[],currentNoteEditId=null,currentNotePendingImages=[],currentNoteKeptImages=[];
let currentNotesListUrls=[],currentNotePreviewUrls=[];
function openCurrentNotesDB(){return new Promise((resolve,reject)=>{const request=indexedDB.open(CURRENT_NOTES_DB,1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(CURRENT_NOTES_STORE)){const store=db.createObjectStore(CURRENT_NOTES_STORE,{keyPath:'id'});store.createIndex('volume','volume',{unique:false})}};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
async function currentNotesRequest(mode,action){const db=await openCurrentNotesDB();return new Promise((resolve,reject)=>{const tx=db.transaction(CURRENT_NOTES_STORE,mode),store=tx.objectStore(CURRENT_NOTES_STORE),request=action(store);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);tx.oncomplete=()=>db.close();tx.onerror=()=>reject(tx.error)})}
function revokeNoteUrls(list){list.splice(0).forEach(url=>URL.revokeObjectURL(url))}
function currentNoteImageURL(blob,list){const url=URL.createObjectURL(blob);list.push(url);return url}
async function loadCurrentNotes(){try{currentNotes=(await currentNotesRequest('readonly',store=>store.getAll())).sort((a,b)=>b.updatedAt-a.updatedAt);renderCurrentNotes();return currentNotes}catch(error){console.error('无法读取月半时政备注',error);$('#currentNotesList').innerHTML='<div class="current-notes-empty"><b>备注暂时无法读取</b><p>当前浏览器可能关闭了本地数据库权限。</p></div>';return []}}
function updateCurrentNotesCount(){const n=currentNotes.length;$('#currentNotesCount').textContent=n;$('#currentNotesTotal').textContent=`${n} 条`}
function orderedCurrentVolumes(){return [...CURRENT_AFFAIRS_VOLUMES].sort((a,b)=>{const monthDiff=(a.month||0)-(b.month||0);return monthDiff||Number(a.half==='下')-Number(b.half==='下')})}
function currentNoteVolumeOptions(includeAll=false){const names=orderedCurrentVolumes().map(x=>x.name);return `${includeAll?'<option value="全部">全部备注</option>':''}<option value="通用提醒">通用提醒</option>${names.map(name=>`<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join('')}`}
function renderCurrentNoteEditorImages(){revokeNoteUrls(currentNotePreviewUrls);const images=[...currentNoteKeptImages.map((image,index)=>({...image,kind:'kept',index})),...currentNotePendingImages.map((image,index)=>({...image,kind:'pending',index}))];$('#currentNoteImagePreview').innerHTML=images.map(image=>`<figure><img src="${currentNoteImageURL(image.blob,currentNotePreviewUrls)}" alt="${escapeHTML(image.name||'备考截图')}"><button type="button" data-remove-note-image="${image.kind}:${image.index}" aria-label="移除截图">×</button></figure>`).join('');$$('[data-remove-note-image]').forEach(button=>button.onclick=()=>{const [kind,index]=button.dataset.removeNoteImage.split(':');(kind==='kept'?currentNoteKeptImages:currentNotePendingImages).splice(Number(index),1);renderCurrentNoteEditorImages()})}
function resetCurrentNoteEditor(){currentNoteEditId=null;currentNotePendingImages=[];currentNoteKeptImages=[];$('#currentNoteText').value='';$('#currentNoteImages').value='';$('#currentNoteVolume').value='通用提醒';$('#currentNoteEditorTitle').textContent='添加一条备注';$('#currentNoteCancel').classList.add('hidden');renderCurrentNoteEditorImages()}
function editCurrentNote(id){const note=currentNotes.find(item=>item.id===id);if(!note)return;currentNoteEditId=id;currentNotePendingImages=[];currentNoteKeptImages=[...(note.images||[])];$('#currentNoteVolume').value=note.volume||'通用提醒';$('#currentNoteText').value=note.text||'';$('#currentNoteEditorTitle').textContent='编辑这条备注';$('#currentNoteCancel').classList.remove('hidden');renderCurrentNoteEditorImages();$('#currentNoteText').focus()}
function openCurrentNoteImage(src){$('#currentNoteLightboxImage').src=src;$('#currentNoteLightbox').classList.remove('hidden')}
function closeCurrentNoteImage(){$('#currentNoteLightbox').classList.add('hidden');$('#currentNoteLightboxImage').removeAttribute('src')}
function renderCurrentNotes(){updateCurrentNotesCount();revokeNoteUrls(currentNotesListUrls);const filter=$('#currentNotesFilter').value||'全部',notes=filter==='全部'?currentNotes:currentNotes.filter(note=>note.volume===filter);if(!notes.length){$('#currentNotesList').innerHTML=`<div class="current-notes-empty"><b>${currentNotes.length?'这个半月还没有备注':'还没有备考备注'}</b><p>把老师的提醒、自己的复盘语言或截图放在左侧保存。</p></div>`;return}$('#currentNotesList').innerHTML=notes.map(note=>`<article class="current-note-item"><header><span>${escapeHTML(note.volume||'通用提醒')}</span><time>${new Intl.DateTimeFormat('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(note.updatedAt))}</time></header>${note.text?`<p>${escapeHTML(note.text).replace(/\n/g,'<br>')}</p>`:''}${note.images?.length?`<div class="current-note-thumbs">${note.images.map((image,index)=>`<button type="button" data-note-image="${note.id}:${index}"><img src="${currentNoteImageURL(image.blob,currentNotesListUrls)}" alt="${escapeHTML(image.name||'备考截图')}"></button>`).join('')}</div>`:''}<footer><button type="button" data-edit-current-note="${note.id}">编辑</button><button type="button" data-delete-current-note="${note.id}">删除</button></footer></article>`).join('');$$('[data-edit-current-note]').forEach(button=>button.onclick=()=>editCurrentNote(button.dataset.editCurrentNote));$$('[data-delete-current-note]').forEach(button=>button.onclick=async()=>{if(!confirm('确定删除这条备注吗？'))return;await currentNotesRequest('readwrite',store=>store.delete(button.dataset.deleteCurrentNote));await loadCurrentNotes();if(currentNoteEditId===button.dataset.deleteCurrentNote)resetCurrentNoteEditor()});$$('[data-note-image]').forEach(button=>button.onclick=()=>{const [id,index]=button.dataset.noteImage.split(':');const note=currentNotes.find(item=>item.id===id);if(note?.images?.[Number(index)])openCurrentNoteImage(button.querySelector('img').src)})}
function addCurrentNoteFiles(files){const accepted=[...files].filter(file=>file.type.startsWith('image/'));const oversized=accepted.filter(file=>file.size>15*1024*1024);if(oversized.length)alert('单张截图请控制在 15MB 以内。');currentNotePendingImages.push(...accepted.filter(file=>file.size<=15*1024*1024).map(file=>({name:file.name||`粘贴截图-${Date.now()}.png`,type:file.type,blob:file})));renderCurrentNoteEditorImages()}
async function saveCurrentNote(){const text=$('#currentNoteText').value.trim(),images=[...currentNoteKeptImages,...currentNotePendingImages];if(!text&&!images.length){alert('请先写一点提示，或添加一张截图。');return}const old=currentNotes.find(note=>note.id===currentNoteEditId),now=Date.now(),note={id:old?.id||`note-${now}-${Math.random().toString(36).slice(2,8)}`,volume:$('#currentNoteVolume').value,text,images,createdAt:old?.createdAt||now,updatedAt:now};await currentNotesRequest('readwrite',store=>store.put(note));resetCurrentNoteEditor();await loadCurrentNotes()}
async function openCurrentNotes(){show('currentNotes');await loadCurrentNotes()}
function dayString(date=new Date()){const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function addDays(days){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+days);return dayString(d)}
function questionKey(q){return q.id||q.q}
function recordFor(q){return saved.records[questionKey(q)]||saved.records[q.q]}
// 排坑复习是全题库总复习：不受当前学科、板块页码或新练习题型筛选影响。
function dueQuestions(){const today=dayString();return allPracticeQuestions().filter(q=>recordFor(q)&&recordFor(q).next<=today)}
function digestRecordFor(q){return (saved.digestRecords||{})[questionKey(q)]}
function ensureDigestRecords(){
  saved.digestRecords=saved.digestRecords||{};let changed=false;
  Object.entries(saved.digestRecords).forEach(([key,value])=>{if(!value||value.next)return;const last=value.date||dayString();saved.digestRecords[key]={stage:0,next:dateFromKey(last,1),last,reviews:0};changed=true});
  if(changed)localStorage.setItem('zhizhengStats',JSON.stringify(saved))
}
function dateFromKey(key,offset){const d=new Date(`${key}T12:00:00`);d.setDate(d.getDate()+offset);return dayString(d)}
function digestDue(scope=null){ensureDigestRecords();const today=dayString();return digestBank.filter(q=>(!scope||q.section===scope)&&digestRecordFor(q)?.next<=today)}
function digestFresh(scope=null){ensureDigestRecords();return digestBank.filter(q=>(!scope||q.section===scope)&&!digestRecordFor(q))}
function migrateTodaySplit(){
  const today=dayString();saved.dailyNew=saved.dailyNew||{};saved.dailyReview=saved.dailyReview||{};saved.dailySplitMigrated=saved.dailySplitMigrated||{};
  if(saved.dailySplitMigrated[today])return;
  const records=Object.values(saved.records||{}).filter(r=>r.last===today),legacy=(saved.daily||{})[today]||0;
  const reviewed=records.filter(r=>r.mode==='review'||(!r.mode&&Number(r.stage)>0)).length;
  const learned=records.filter(r=>r.mode==='new'||(!r.mode&&Number(r.stage)===0)).length;
  if(saved.dailyReview[today]===undefined)saved.dailyReview[today]=reviewed;
  if(saved.dailyNew[today]===undefined)saved.dailyNew[today]=Math.max(learned,legacy-reviewed,0);
  saved.dailySplitMigrated[today]=true;localStorage.setItem('zhizhengStats',JSON.stringify(saved))
}
function updatePlan(){
  migrateTodaySplit();
  const digestMode=learningMode==='digest',due=digestMode?digestDue().length:dueQuestions().length,fresh=digestMode?digestFresh().length:allPracticeQuestions().filter(q=>!recordFor(q)).length;
  $('#dueCount').textContent=due;$('#reviewUnit').textContent=digestMode?' 条到期卡':' 道全库到期题';$('#newCount').textContent=digestMode?fresh:count;$('#newUnit').textContent=digestMode?' 条新知识':' 道新题';$('#reviewModeLabel').textContent=digestMode?'消化清单复习':'排坑手册总复习';$('#newModeLabel').textContent=digestMode?'消化清单新学习':'排坑手册新练习';
  $('#reviewStage').classList.toggle('done',due===0);$('#reviewStage').classList.toggle('active',due>0);$('#newStage').classList.toggle('active',due===0);
  $('#reviewStage').classList.toggle('clickable',due>0);$('#reviewStage').setAttribute('aria-disabled',due?'false':'true');
  $('#newStage').classList.add('clickable');$('#newStage').classList.remove('locked');$('#newStage').setAttribute('aria-disabled','false');
  $('#reviewState').textContent=due?'今日待完成':'今日已完成';$('#newStage').querySelector('i').textContent='可直接开始';
  const subjectQuestions=digestMode?digestBank:allPracticeQuestions().filter(q=>practiceType==='综合'||q.practiceKind===practiceType),learned=subjectQuestions.filter(q=>digestMode?digestRecordFor(q):recordFor(q)).length,total=subjectQuestions.length;
  $('#coverageLabel').textContent=digestMode?'消化清单掌握度':`${practiceType}训练覆盖度`;$('#coverageIncluded').textContent=learned;$('#coverageTotal').textContent=total;$('#coverageLearned').textContent=learned;$('#coverageRemaining').textContent=total-learned;$('#coverageBar').style.width=`${total?learned/total*100:0}%`;
  const digested=!!(saved.digestCompleted||{}).all;
  $('#digestStep').classList.toggle('done',digested);$('#digestState').textContent=digested?'全册已学':'全册混合';
  $('#practiceStep').classList.remove('locked');$('#practiceState').textContent='全库混合';
  $('#digestStep').classList.toggle('selected',learningMode==='digest');$('#practiceStep').classList.toggle('selected',learningMode==='practice');
  $('#directoryModeTitle').textContent=learningMode==='digest'?'消化清单 · 全册混合':'排坑手册 · 全库混合';
  $('.count-label label').textContent=digestMode?'本次学习量':'本次练习题量';$('.count-label span').textContent='习思想与马克思主义基本原理全册随机混合';$('.count-label').classList.remove('mode-muted');$('.count-picker').classList.remove('mode-muted');
  $('#startBtn').querySelector('span').textContent=digestMode?`开始消化清单 · 全册随机 ${count} 条`:`开始排坑手册 · 全库${practiceType} · ${count}题`;
}
function stats(){migrateTodaySplit();const today=dayString();$('#todayDone').textContent=saved.dailyNew[today]||0;$('#totalDone').textContent=saved.done;$('#accuracy').textContent=saved.done?Math.round(saved.correct/saved.done*100)+'%':'—';$('#wrongCount').textContent=saved.wrong.length;const a=Object.entries(saved.traps).sort((x,y)=>y[1]-x[1]).slice(0,3);$('#weaknessList').innerHTML=a.length?a.map(([k,v])=>`<div class="weakness"><span>${k}</span><i>${v} 次</i></div>`).join(''):'<p class="empty">完成练习后，这里会生成你的失分画像。</p>';updatePlan()}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function sectionName(id){for(const group of Object.values(sectionMap)){const item=group.find(x=>x[0]===id);if(item)return item[1]}return '全册混合'}
function buildNewQuestions(){
  const isNew=q=>!recordFor(q);
  const pool=allPracticeQuestions().filter(q=>practiceType==='综合'||q.practiceKind===practiceType);
  const fresh=shuffle(pool.filter(isNew)),learned=shuffle(pool.filter(q=>!isNew(q)));
  return [...fresh,...learned].slice(0,count)
}
function start(custom=null){
  let qs,topic;
  if(custom){sessionMode='retry';qs=[...custom];topic='错题回练'}
  else{
    const due=dueQuestions();
    if(due.length){sessionMode='review';qs=shuffle(due);topic='今日到期复习'}
    else{sessionMode='new';qs=buildNewQuestions();topic='排坑手册 · 全库混合新练习'}
  }
  state={questions:qs,index:0,answers:[],topic};$('#quizTopic').textContent=state.topic;show('quiz');render()
}
function startNew(){sessionMode='new';const qs=buildNewQuestions();state={questions:qs,index:0,answers:[],topic:'排坑手册 · 全库混合新练习'};$('#quizTopic').textContent=state.topic;show('quiz');render()}
function digestCorrectText(q){
  if(q.answer)return q.answer;
  if(q.a===0)return q.q;
  if(q.correctSentence)return q.correctSentence;
  const targets=q.wrongTargets||[];
  if(targets.length===1&&q.correction)return q.q.replace(targets[0],q.correction);
  return q.correction
}
let derivedPracticeCache=null;
const MATERIAL_PRACTICE=[
  {id:'apply-x-01',cat:'xixiang',section:'x-quality',practiceKind:'材料应用',type:'单项选择题',trap:'材料主题识别',q:'某地以关键核心技术突破带动产业升级，并将科技成果加快转化为现实生产力。这一做法最直接体现的新发展理念是：',opts:['创新','协调','绿色','共享'],a:0,exp:'材料强调科技突破和成果转化，直接对应创新发展。',tip:'先找材料中的核心动作，再匹配发展理念。'},
  {id:'apply-x-02',cat:'xixiang',section:'x-people',practiceKind:'材料应用',type:'单项选择题',trap:'根本立场识别',q:'某项公共政策把群众是否得到实惠、生活是否改善作为评价标准，最直接体现：',opts:['坚持以人民为中心','坚持系统观念','坚持独立自主','坚持胸怀天下'],a:0,exp:'把人民获得感和生活改善作为评价标准，体现以人民为中心。',tip:'群众利益、获得感、幸福感通常对应人民立场。'},
  {id:'apply-x-03',cat:'xixiang',section:'x-ecology',practiceKind:'材料应用',type:'单项选择题',trap:'两山理念识别',q:'某地停止破坏性开发，通过生态修复发展绿色产业，实现环境改善与群众增收。这体现：',opts:['绿水青山就是金山银山','发展只能服从保护','先污染后治理','生态效益排斥经济效益'],a:0,exp:'材料体现生态保护与经济发展的统一。',tip:'“保护中发展、发展中保护”不是二选一。'},
  {id:'apply-x-04',cat:'xixiang',section:'x-democracy',practiceKind:'材料应用',type:'单项选择题',trap:'民主形式识别',q:'一项地方立法在立项、起草、审议、实施和监督环节持续吸收群众意见，主要体现：',opts:['全过程人民民主','民主只存在于选举环节','协商可以代替法定程序','基层自治等同国家立法'],a:0,exp:'群众参与贯穿立法和治理全过程，体现全过程人民民主。',tip:'“全过程”强调全链条、全方位、全覆盖。'},
  {id:'apply-x-05',cat:'xixiang',section:'x-reform',practiceKind:'材料应用',type:'单项选择题',trap:'改革方法识别',q:'某项改革先在部分地区试点，根据实践效果调整后再逐步推广。这种方法体现：',opts:['摸着石头过河与加强顶层设计相结合','只要局部经验不要整体谋划','改革可以脱离法治轨道','改革目标可以随意改变'],a:0,exp:'试点探索与整体谋划相结合，是推进改革的重要方法。',tip:'试点不是否定顶层设计。'},
  {id:'apply-m-01',cat:'mayuan',section:'m-dialectics',practiceKind:'材料应用',type:'单项选择题',trap:'矛盾特殊性识别',q:'同一治理方案在不同地区根据人口、产业和资源条件分别细化，体现的哲学原理是：',opts:['矛盾具有特殊性，要具体问题具体分析','矛盾具有普遍性，方法必须完全相同','事物之间不存在共同规律','外因决定事物发展'],a:0,exp:'依据不同地区具体条件采取不同办法，体现具体问题具体分析。',tip:'看到“因地制宜、分类施策”，优先考虑矛盾特殊性。'},
  {id:'apply-m-02',cat:'mayuan',section:'m-knowledge',practiceKind:'材料应用',type:'单项选择题',trap:'实践认识关系',q:'科研团队经过多次实验修正原有假设，最终形成新的认识。这说明：',opts:['实践是认识发展的动力和检验认识真理性的唯一标准','认识可以脱离实践自行完成','一次实践即可获得终极真理','错误认识不能通过实践纠正'],a:0,exp:'实验推动认识修正和发展，并检验假设是否正确。',tip:'实践的来源、动力、目的和检验标准要结合材料判断。'},
  {id:'apply-m-03',cat:'mayuan',section:'m-dialectics',practiceKind:'材料应用',type:'单项选择题',trap:'量变质变识别',q:'一项工程长期积累关键技术，最终实现从跟跑到领跑的突破，主要体现：',opts:['量变是质变的必要准备','质变可以脱离量变发生','任何量变都立即引起质变','质变后不再发生量变'],a:0,exp:'长期积累形成突破，体现量变积累达到一定程度引起质变。',tip:'“积累—突破”是量变质变关系的典型结构。'},
  {id:'apply-m-04',cat:'mayuan',section:'m-history',practiceKind:'材料应用',type:'单项选择题',trap:'社会存在决定作用',q:'随着数字经济发展，相关法律制度和治理规则不断调整。这主要说明：',opts:['社会存在的变化发展决定社会意识的变化发展','社会意识与社会存在毫无关系','上层建筑决定经济基础的一切变化','制度变化只由个人意志决定'],a:0,exp:'经济社会条件变化推动制度和观念调整，体现社会存在的决定作用。',tip:'同时要承认社会意识具有相对独立性和反作用。'},
  {id:'apply-m-05',cat:'mayuan',section:'m-history',practiceKind:'材料应用',type:'单项选择题',trap:'群众史观识别',q:'重大社会改革既需要领导者科学决策，也必须依靠广大群众共同参与。这表明：',opts:['人民群众是社会历史的主体和创造者','英雄人物可以代替人民群众','历史发展与群众实践无关','个人意志决定社会历史'],a:0,exp:'领导者作用不能取代人民群众的历史主体地位。',tip:'承认杰出人物作用，不等于英雄史观。'},
  {id:'apply-m-06',cat:'mayuan',section:'m-commodity',practiceKind:'材料应用',type:'单项选择题',trap:'商品属性识别',q:'同一种商品能够满足需要，但不同生产者生产它所耗费的个别劳动时间不同。决定商品价值量的是：',opts:['社会必要劳动时间','个别劳动时间','商品使用价值大小','购买者主观评价'],a:0,exp:'商品价值量由生产该商品的社会必要劳动时间决定。',tip:'个别劳动时间影响生产者竞争处境，不直接决定商品价值量。'},
  {id:'apply-m-07',cat:'mayuan',section:'m-surplus',practiceKind:'材料应用',type:'单项选择题',trap:'剩余价值来源',q:'在工作日长度不变的情况下，企业通过提高劳动生产率缩短必要劳动时间，从而延长剩余劳动时间。这属于：',opts:['相对剩余价值生产','绝对剩余价值生产','资本原始积累','商品等价交换'],a:0,exp:'通过缩短必要劳动时间相对延长剩余劳动时间，属于相对剩余价值生产。',tip:'延长工作日偏绝对，提高生产率缩短必要劳动时间偏相对。'}
];
function buildDerivedPractice(){
  const result=[...MATERIAL_PRACTICE],sections=[...new Set(bank.map(q=>q.section))];
  sections.forEach((sectionId,si)=>{
    const items=bank.filter(q=>q.section===sectionId),correct=items.filter(q=>q.a===0),wrong=items.filter(q=>q.a===1);
    for(let j=0;j<Math.min(2,correct.length);j++)if(wrong.length>=3){const right=correct[j].q,options=[wrong[j%wrong.length].q,wrong[(j+1)%wrong.length].q,wrong[(j+2)%wrong.length].q],at=(si+j)%4;options.splice(at,0,right);result.push({id:`single-${sectionId}-${j+1}`,cat:items[0].cat,section:sectionId,practiceKind:'单项选择',type:'单项选择题',trap:'近似表述辨析',q:`下列关于“${sectionName(sectionId)}”的表述，正确的是：`,opts:options,a:at,exp:right,tip:'逐项核对主体、定位词、范围和时间。',sourceSection:correct[j].sourceSection})}
    if(correct.length>=2&&wrong.length>=2){const statements=[correct[0].q,wrong[0].q,correct[1].q,wrong[1].q];result.push({id:`combo-${sectionId}`,cat:items[0].cat,section:sectionId,practiceKind:'组合判断',type:'组合判断题',trap:'多句组合辨析',q:`关于“${sectionName(sectionId)}”，下列表述正确的有几项？\n①${statements[0]}\n②${statements[1]}\n③${statements[2]}\n④${statements[3]}`,opts:['1项','2项','3项','4项'],a:1,exp:`正确的是①③，共2项。`,tip:'分别判断每一句，不要凭整体语感作答。'})}
  });
  return result
}
function allPracticeQuestions(){
  bank.forEach(q=>q.practiceKind=q.practiceKind||'判断辨错');
  if(!derivedPracticeCache)derivedPracticeCache=buildDerivedPractice();
  return [...bank,...derivedPracticeCache]
}
function renderDigest(){
  const q=digestDeck[digestIndex];if(!q)return;
  $('#digestTitle').textContent=`政治理论全册混合 · ${digestSessionMode==='review'?'到期复习':digestSessionMode==='new'?'新学习':'全部浏览'}`;$('#digestProgress').textContent=`${digestIndex+1} / ${digestDeck.length}`;$('#digestPageLabel').textContent=`第 ${digestIndex+1} 条 · 共 ${digestDeck.length} 条`;
  $('#digestKind').textContent='填空回忆';$('#digestSource').textContent=`${q.sourceLabel || '《消化清单》PDF'} 第 ${q.page} 页 · ${q.topic}`;$('#digestPrompt').innerHTML=highlightStudyText(q.prompt);$('#digestCoreLabel').textContent='正确填词';$('#digestCore').textContent=digestCorrectText(q);$('#digestTip').textContent='先遮住答案回忆，再核对固定表述。';
  updateStarButton($('#digestStar'),`digest:${questionKey(q)}`);
  $('#digestPrev').disabled=digestIndex===0;const last=digestIndex===digestDeck.length-1;$('#digestNext').classList.toggle('hidden',last);$('#digestComplete').classList.toggle('hidden',!last)
}
function openDigest(mode='new'){
  digestSessionMode=mode;digestDeck=shuffle(mode==='review'?digestDue():digestFresh());
  if(mode!=='review')digestDeck=digestDeck.slice(0,count);
  if(!digestDeck.length){digestDeck=shuffle(digestBank).slice(0,count);digestSessionMode='browse'}
  digestIndex=0;renderDigest();show('digest')
}
function markDigestCurrent(known=true){
  const q=digestDeck[digestIndex];if(!q)return;ensureDigestRecords();const old=digestRecordFor(q),reviewing=digestSessionMode==='review';
  if(reviewing&&old){const stage=known?Math.min((old.stage||0)+1,reviewIntervals.length-1):0;saved.digestRecords[questionKey(q)]={stage,next:addDays(known?reviewIntervals[stage]:1),last:dayString(),reviews:(old.reviews||0)+1}}
  else if(digestSessionMode==='browse'&&old)saved.digestRecords[questionKey(q)]=old;
  else saved.digestRecords[questionKey(q)]={stage:0,next:addDays(1),last:dayString(),reviews:0};
  localStorage.setItem('zhizhengStats',JSON.stringify(saved))
}
function finishDigest(){saved.digestCompleted=saved.digestCompleted||{};if(!digestFresh().length)saved.digestCompleted.all={date:dayString()};localStorage.setItem('zhizhengStats',JSON.stringify(saved));updatePlan();show('home')}
function advanceDigest(known){markDigestCurrent(known);if(digestIndex<digestDeck.length-1){digestIndex++;renderDigest()}else finishDigest()}
function startReview(){
  if(learningMode==='digest'){if(digestDue().length)openDigest('review');return}
  const qs=shuffle(dueQuestions());if(!qs.length)return;
  sessionMode='review';state={questions:qs,index:0,answers:[],topic:'排坑手册 · 全库到期复习'};$('#quizTopic').textContent=state.topic;show('quiz');render()
}
function render(){const q=state.questions[state.index],n=state.questions.length,done=state.answers[state.index];$('#progressText').textContent=`${state.index+1} / ${n}`;$('#progressBar').style.width=`${(state.index+1)/n*100}%`;$('#questionType').textContent=q.type;$('#trapTag').textContent='易错点 · '+q.trap;$('#trapTag').classList.remove('answer-state');$('#answerBadge').className='answer-badge hidden';$('#questionText').innerHTML=highlightStudyText(q.q);$('#questionText').classList.remove('corrected-question');$('#theoryConnections').classList.add('hidden');$('#theoryConnections').innerHTML='';$('#nextBtn').classList.toggle('hidden',!done);$('#prevQuestionBtn').classList.toggle('hidden',state.index===0);$('#options').innerHTML=q.opts.map((o,i)=>`<button class="option" data-i="${i}"><b>${q.type==='判断题'?(i?'×':'√'):String.fromCharCode(65+i)}</b><span>${highlightStudyText(o)}</span></button>`).join('');$$('.option').forEach(b=>b.onclick=()=>answer(+b.dataset.i));if(done)showAnswered(q,done)}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function saveStarred(){localStorage.setItem('zhizhengStats',JSON.stringify(saved))}
function updateStarButton(button,key){if(!button)return;const on=Boolean(saved.starred[key]);button.classList.toggle('starred',on);button.textContent=on?'★ 已标星':'☆ 标星';button.setAttribute('aria-pressed',String(on))}
function toggleStar(note,button){if(saved.starred[note.key])delete saved.starred[note.key];else saved.starred[note.key]={...note,savedAt:new Date().toISOString()};saveStarred();updateStarButton(button,note.key)}
function digestNote(){const q=digestDeck[digestIndex];return q&&{key:`digest:${questionKey(q)}`,group:'政治理论 · 消化清单',title:q.topic||'固定表述',prompt:q.prompt||'',answer:digestCorrectText(q),tip:'核对固定表述与易替换关键词'}}
function currentNote(){const x=currentFlashDeck[currentFlashIndex];if(!x)return null;const isQuestion=currentContentKind==='question'||x.reviewKind==='question',isDrill=currentContentKind==='drill'||currentContentKind==='examTrap'||x.reviewKind==='drill'||Boolean(x.drillType),group=currentContentKind==='commonDigest'?'常识消化清单':currentContentKind==='majorDigest'?'重大专题时政':currentContentKind==='examTrap'?'卷子排坑清单':'月半时政';return {key:`current:${x.id}`,group:`${group} · ${x.volume||''}`,title:x.newsTitle||x.title||'时政重点',prompt:currentContentKind==='commonDigest'?x.question:isQuestion?currentCleanText(x.question):isDrill?x.drillQuestion:x.title,answer:isQuestion?currentQuestionReference(x):currentCleanText(x.answer),tip:isDrill?(x.drillIsCorrect?'原句正确，防止见熟词一律判错':`${x.drillSwap} ≠ ${x.drillTerm}`):(x.trap||'核对主体、范围、对应关系和数字')}}
function lawNote(){const x=flashDeck[flashIndex];return x&&{key:`law:${x.title}`,group:`法律常识 · ${knowledgeLawGroup(x)}`,title:x.title,prompt:knowledgeExamQuestion(x),answer:knowledgeCoreAnswer(x),tip:x.trap||'',points:(x.points||[]).slice(0,3)}}
let notebookReturn='home';
function renderNotebook(){const notes=Object.values(saved.starred).sort((a,b)=>String(b.savedAt||'').localeCompare(String(a.savedAt||'')));$('#notebookCount').textContent=`${notes.length} 条`;$('#notebookClear').disabled=!notes.length;$('#notebookList').innerHTML=notes.length?notes.map(note=>`<article><header><span>${escapeHTML(note.group)}</span><button data-remove-star="${escapeHTML(note.key)}" title="取消标星">★</button></header><h2>${escapeHTML(note.title)}</h2>${note.prompt?`<p class="note-prompt">${highlightStudyText(note.prompt,'all')}</p>`:''}<div class="note-answer"><small>核心内容</small><strong>${highlightStudyText(note.answer,'all')}</strong></div>${note.points?.length?`<ul>${note.points.map(x=>`<li>${highlightStudyText(x,'all')}</li>`).join('')}</ul>`:''}${note.tip?`<p class="note-tip"><b>易混</b>${escapeHTML(note.tip)}</p>`:''}</article>`).join(''):'<div class="notebook-empty"><b>还没有标星内容</b><span>学习闪卡时点击“☆ 标星”，重点会集中到这里。</span></div>';$$('[data-remove-star]').forEach(button=>button.onclick=()=>{delete saved.starred[button.dataset.removeStar];saveStarred();renderNotebook()})}
function openNotebook(){notebookReturn=Object.entries(views).find(([,view])=>view.classList.contains('active'))?.[0]||'home';renderNotebook();show('notebook');$$('.subject-nav button').forEach(button=>button.classList.toggle('selected',button.id==='notebookEntry'))}
function editSimilarity(a,b){if(!a||!b)return 0;const rows=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)rows[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return 1-rows[a.length][b.length]/Math.max(a.length,b.length)}
const correctionPairs=[['十八大','十九大'],['十九大','十八大'],['化学反应','物理反应'],['中华优秀传统文化','中国具体实际'],['共同富裕','同等富裕'],['共同富裕','同步富裕'],['党的领导','高质量发展'],['市场','政府'],['市场','国家'],['国内','国际'],['人民安全','政治安全'],['政治安全','人民安全'],['经济安全','政治安全'],['自我革命','人民监督'],['科技','人才'],['人才','创新'],['具体劳动','抽象劳动'],['使用价值','价值'],['价值','使用价值'],['生产力','生产关系'],['社会存在','社会意识'],['实践','认识']];
const wrongTargetOverrides={
  '要用新时代中国之“矢”去射马克思主义之“的”。':['新时代中国','马克思主义'],
  '“十四个坚持”是习近平新时代中国特色社会主义思想的世界观、方法论。':['十四个坚持'],
  '中国特色社会主义事业战略布局是“五位一体”，总体布局是“四个全面”。':['五位一体','四个全面'],
  '实现共同富裕，首先要把“蛋糕”切好分好，然后把“蛋糕”做大做好。':['切好分好','做大做好'],
  '必须把加快建设农业强国作为统领“三农”工作的总抓手。':['总抓手'],
  '实施乡村振兴战略，是新时代做好“三农”工作的战略总纲。':['战略总纲'],
  '坚持把增加农民收入，作为“三农”工作的头等大事。':['头等大事'],
  '从严治党，关键是要抓住高级干部这个“关键少数”。':['高级干部'],
  '总体国家安全观的关键和灵魂是“安全”，突出大安全理念。':['安全'],
  '“两制”是实行“一国”的前提和基础。':['两制','一国'],
  '“一国两制”的提出是从解决香港问题开始的。':['香港']
};
function replacementTargets(q){
  if(q.wrongTargets?.length)return q.wrongTargets;
  if(wrongTargetOverrides[q.q])return wrongTargetOverrides[q.q];
  const prompt=q.q,correction=q.correction||'',parts=correction.split(/[；;]/).map(x=>x.trim()).filter(Boolean),targets=[];
  const promptTitles=[...prompt.matchAll(/《([^》]+)》/g)].map(x=>`《${x[1]}》`);
  const correctionTitles=[...correction.matchAll(/《([^》]+)》/g)].map(x=>`《${x[1]}》`);
  if(correctionTitles.length&&promptTitles.length){
    const wrongTitles=promptTitles.filter(title=>!correctionTitles.includes(title));
    if(wrongTitles.length)return wrongTitles
  }
  for(const [right,wrong] of correctionPairs)if(correction.includes(right)&&prompt.includes(wrong))targets.push(wrong);
  const quoted=[...prompt.matchAll(/[“"]([^”"]+)[”"]/g)].map(x=>x[1]);
  for(const right of parts){
    const quotedMatch=quoted.find(wrong=>{
      if(right.includes(wrong)||wrong.includes(right))return true;
      for(let size=Math.min(right.length,wrong.length);size>=2;size--)for(let i=0;i<=right.length-size;i++)if(wrong.includes(right.slice(i,i+size)))return true;
      return false
    });
    if(quotedMatch)targets.push(quotedMatch)
  }
  for(const right of parts){
    if(targets.length)break;
    if(prompt.includes(right)){targets.push(right);continue}
    let best='',score=0,min=Math.max(1,right.length-2),max=Math.min(prompt.length,right.length+3);
    for(let len=min;len<=max;len++)for(let i=0;i<=prompt.length-len;i++){const candidate=prompt.slice(i,i+len);if(/[，。；、“”]/.test(candidate))continue;const current=editSimilarity(candidate,right);if(current>score){score=current;best=candidate}}
    if(score>=.72)targets.push(best)
  }
  let result=[...new Set(targets.filter(Boolean))].sort((a,b)=>prompt.indexOf(a)-prompt.indexOf(b));
  if(!result.length){
    const candidates=[];
    const predicate=/是|为|作为|包括|指的是|主张|要求|必须|要把|要以/g;
    let match;
    while((match=predicate.exec(prompt))){
      const start=match.index+match[0].length;
      const tail=prompt.slice(start);
      const endMark=tail.search(/[，。；]/);
      const phrase=tail.slice(0,endMark<0?tail.length:endMark).trim();
      if(phrase.length>=2)candidates.push(phrase)
    }
    if(candidates.length)result=[candidates[candidates.length-1]];
  }
  if(!result.length){
    const clauses=prompt.replace(/[。！？]$/,'').split(/[，；]/).map(x=>x.trim()).filter(x=>x.length>=2);
    if(clauses.length)result=[clauses[clauses.length-1]]
  }
  return result
}
function rigorousCorrection(q){
  const prompt=q.q,targets=replacementTargets(q);
  let original=escapeHTML(prompt);
  if(targets.length){
    let html='',cursor=0;
    targets.forEach(target=>{const at=prompt.indexOf(target,cursor);if(at<0)return;html+=escapeHTML(prompt.slice(cursor,at));html+=`<del>${escapeHTML(target)}</del>`;cursor=at+target.length});
    original=html+escapeHTML(prompt.slice(cursor))
  }
  return `<span class="correction-row original-line"><small>原题（错误）</small><span>${original}</span></span><span class="correction-row manual-correction-line"><small>正确表述</small><strong>${highlightStudyText(q.correctSentence||q.correction)}</strong></span>`
}
function correctPlainSentence(q){
  if(q.correctSentence)return q.correctSentence;
  if(q.type==='判断题'&&q.a===0)return q.q;
  if(q.type!=='判断题')return q.exp||q.opts?.[q.a]||'';
  const targets=replacementTargets(q),rights=String(q.correction||'').split(/[；;]/).map(x=>x.trim()).filter(Boolean);
  if(targets.length&&targets.length===rights.length){let text=q.q;targets.forEach((target,i)=>{text=text.replace(target,rights[i])});return text}
  return q.exp||q.tip||''
}
function theorySectionInfo(q){
  const entry=Object.values(sectionMap).flat().find(([id])=>id===q.section);
  return entry?{name:entry[1],scope:entry[2]}:{name:q.sourceSection||'同主题知识',scope:'固定表述与易混关系'}
}
const THEORY_LINK_GROUPS={
  objective_law:['客观规律','主观能动性','尊重规律','发挥主观能动性'],
  matter_motion:['物质的根本属性','物质的存在方式','运动是物质','运动和静止','绝对运动','相对静止'],
  quantity_quality:['量变','质变','度的范围','必要准备','必然结果'],
  contradiction_relation:['矛盾的同一性','矛盾的斗争性','同一性和斗争性'],
  primary_contradiction:['主要矛盾','次要矛盾','矛盾主要方面','矛盾次要方面'],
  practice_knowledge:['实践是认识','认识来源于实践','认识反作用于实践','实践和认识'],
  truth_value:['真理尺度','价值尺度','真理和价值','真理的客观性'],
  negation:['辩证否定','否定之否定','扬弃'],
  social_structure:['生产力','生产关系','经济基础','上层建筑'],
  labor_value:['具体劳动','抽象劳动','使用价值','价值量','剩余价值'],
  history_subject:['人民群众','历史创造者','英雄人物'],
  social_being:['社会存在','社会意识']
};
function theoryConceptGroups(item){const text=[item.q,item.exp,item.correction,item.tip].filter(Boolean).join('');return Object.entries(THEORY_LINK_GROUPS).filter(([,terms])=>terms.some(term=>text.includes(term))).map(([group])=>group)}
function theoryConceptTerms(item){const text=[item.q,item.exp,item.correction,item.tip].filter(Boolean).join('');return [...new Set(Object.values(THEORY_LINK_GROUPS).flat().filter(term=>text.includes(term)))]}
function relatedTheoryItems(q){
  const groups=theoryConceptGroups(q),terms=theoryConceptTerms(q);if(!groups.length||terms.length<2)return [];
  return bank.filter(item=>item.id!==q.id).map(item=>{const sharedGroups=theoryConceptGroups(item).filter(group=>groups.includes(group)),sharedTerms=theoryConceptTerms(item).filter(term=>terms.includes(term));return {item,score:sharedGroups.length*10+sharedTerms.length,sharedTerms}}).filter(x=>x.sharedTerms.length>=2).sort((a,b)=>b.score-a.score).slice(0,1).map(x=>x.item)
}
function renderTheoryConnections(q,showConnection=true){
  const box=$('#theoryConnections'),related=showConnection?relatedTheoryItems(q):[];if(!related.length){box.classList.add('hidden');box.innerHTML='';return}
  const item=related[0];box.innerHTML=`<header><b>关联辨析</b></header><article><i>${escapeHTML(item.trap||'同概念易错点')}</i><p>${highlightStudyText(correctPlainSentence(item))}</p></article>`;
  box.classList.remove('hidden')
}
function showAnswered(q,result){
  $$('.option').forEach((b,i)=>{b.disabled=true;if(i===q.a)b.classList.add('correct');if(i===result.choice&&!result.ok)b.classList.add('wrong')});
  const badge=$('#answerBadge');badge.textContent=result.ok?'√ 答对了':'× 答错了';badge.className=`answer-badge ${result.ok?'is-correct':'is-wrong'}`;
  const hasCorrection=q.type==='判断题'&&q.a===1&&q.correction;
  if(hasCorrection){$('#questionText').innerHTML=rigorousCorrection(q);$('#questionText').classList.add('corrected-question')}
  else if(q.type!=='判断题'){$('#questionText').innerHTML=`<span class="answered-stem">${highlightStudyText(q.q).replace(/\n/g,'<br>')}</span><span class="choice-explanation"><small>正确答案</small><strong>${highlightStudyText(q.exp||q.opts[q.a])}</strong></span>`;$('#questionText').classList.add('corrected-question')}
  $('#trapTag').textContent=hasCorrection?'原句有误 · 手册纠错如下':result.ok?'答案正确 · 核心表述已核对':'答案有误 · 请核对正确选项';$('#trapTag').classList.add('answer-state');renderTheoryConnections(q,!result.ok);$('#nextBtn').classList.remove('hidden')
}
function persistAnswer({q,ok}){
  saved.done+=1;if(ok)saved.correct+=1;
  const today=dayString();saved.dailyNew=saved.dailyNew||{};saved.dailyReview=saved.dailyReview||{};
  if(sessionMode==='new'){saved.dailyNew[today]=(saved.dailyNew[today]||0)+1;$('#todayDone').textContent=saved.dailyNew[today]}
  if(sessionMode==='review')saved.dailyReview[today]=(saved.dailyReview[today]||0)+1;
  const old=recordFor(q)||{stage:-1},stage=ok?Math.min(old.stage+1,reviewIntervals.length-1):0;
  saved.records[questionKey(q)]={stage,next:addDays(reviewIntervals[stage]),last:dayString(),mode:sessionMode,correct:ok};
  if(!ok){saved.traps[q.trap]=(saved.traps[q.trap]||0)+1;if(!saved.wrong.some(w=>w.q===q.q))saved.wrong.push(q);saved.mistakes=saved.mistakes||{};const key=questionKey(q),oldMistake=saved.mistakes[key]||{count:0};saved.mistakes[key]={count:oldMistake.count+1,last:dayString()}}
  localStorage.setItem('zhizhengStats',JSON.stringify(saved))
}
function answer(c){if(state.answers[state.index])return;const q=state.questions[state.index],result={q,ok:c===q.a,choice:c};state.answers[state.index]=result;persistAnswer(result);showAnswered(q,result)}
function finish(){
  const total=state.answers.length,correct=state.answers.filter(x=>x.ok).length,wrong=state.answers.filter(x=>!x.ok);
  stats();const score=Math.round(correct/total*100);
  $('#resultScore').textContent=score;$('#resultTitle').textContent=sessionMode==='review'?'今日复习完成。':score>=85?'今天的知识，接住了。':score>=60?'基本掌握，再磨一遍。':'坑点已暴露，正是好事。';
  $('#resultDesc').textContent=sessionMode==='review'?`已复习 ${total} 道到期题，接下来进入今日新学习。`:`共 ${total} 题，答对 ${correct} 题；系统已安排下一次复习。`;
  $('#resultBreakdown').innerHTML=wrong.length?wrong.map(x=>`<span>${x.q.trap}</span>`).join(''):'<span>全部排坑成功</span>';
  $('#continueBtn').classList.toggle('hidden',sessionMode!=='review');$('#retryBtn').classList.toggle('hidden',sessionMode==='review');$('#retryBtn').disabled=!wrong.length;$('#retryBtn').style.opacity=wrong.length?1:.4;show('result')
}
function sectionLearningState(id){
  const digestMode=learningMode==='digest',items=digestMode?digestBank.filter(q=>q.section===id):allPracticeQuestions().filter(q=>q.section===id&&(practiceType==='综合'||q.practiceKind===practiceType)),records=items.map(q=>digestMode?digestRecordFor(q):recordFor(q)).filter(Boolean),today=dayString();
  if(!records.length)return {label:'未学',cls:'state-unseen',learned:0,total:items.length};
  if(records.some(r=>r.next<=today))return {label:'待复习',cls:'state-due',learned:records.length,total:items.length};
  if(records.length===items.length&&records.every(r=>(r.stage||0)>=3))return {label:'稳定掌握',cls:'state-stable',learned:records.length,total:items.length};
  return {label:'初记',cls:'state-learning',learned:records.length,total:items.length}
}
function renderSections(){
  $('#sectionPicker').classList.add('hidden');$('#sectionPager').classList.add('hidden')
}
function switchSubject(tab){
  activeTab=tab;sectionPage=0;section=sectionMap[tab][0][0];
  $$('[data-page]').forEach(x=>x.classList.toggle('selected',x.dataset.page===tab));
  renderSections();stats();show('home');
}
$$('[data-page]').forEach(b=>b.onclick=()=>switchSubject(b.dataset.page));
$('#sectionPrev').onclick=()=>{if(sectionPage>0){sectionPage--;section=sectionMap[activeTab][sectionPage*6][0];renderSections()}};
$('#sectionNext').onclick=()=>{const pages=Math.ceil((sectionMap[activeTab]||[]).length/6);if(sectionPage<pages-1){sectionPage++;section=sectionMap[activeTab][sectionPage*6][0];renderSections()}};
function renderCountChoice(){
  const labels={8:'快速',12:'标准',20:'强化'},unit=learningMode==='digest'?'条':'题';
  $$('[data-count]').forEach(b=>{const n=+b.dataset.count,selected=n===count;b.classList.toggle('selected',selected);b.innerHTML=`${selected?'✓ 已选 ':''}${n}${unit} <small>${labels[n]}</small>`})
}
$$('[data-count]').forEach(b=>b.onclick=()=>{count=+b.dataset.count;renderCountChoice();updatePlan()});
$$('[data-practice-type]').forEach(b=>b.onclick=()=>{practiceType=b.dataset.practiceType;$$('[data-practice-type]').forEach(x=>x.classList.toggle('selected',x===b));updatePlan()});
$('#startBtn').onclick=()=>learningMode==='digest'?openDigest('new'):startNew();$('#continueBtn').onclick=()=>learningMode==='digest'?openDigest('new'):startNew();$('#prevQuestionBtn').onclick=()=>{if(state.index>0){state.index--;render()}};$('#nextBtn').onclick=()=>{state.index++;state.index<state.questions.length?render():finish()};$('#exitBtn').onclick=()=>{stats();show('home')};$('#homeBtn').onclick=()=>{stats();show('home')};$('#retryBtn').onclick=()=>{const w=state.answers.filter(x=>!x.ok).map(x=>x.q);if(w.length)start(w)};$('#reviewBtn').onclick=()=>saved.wrong.length?start(saved.wrong):alert('还没有错题，先完成一组练习吧。');
$('#reviewStage').onclick=startReview;$('#newStage').onclick=()=>learningMode==='digest'?openDigest('new'):startNew();
function selectLearningMode(mode){learningMode=mode;renderCountChoice();updatePlan()}
$('#digestStep').onclick=()=>selectLearningMode('digest');$('#practiceStep').onclick=()=>selectLearningMode('practice');$('#digestBack').onclick=()=>{updatePlan();show('home')};$('#digestPrev').onclick=()=>{if(digestIndex>0){digestIndex--;renderDigest()}};$('#digestAgain').onclick=()=>advanceDigest(false);$('#digestNext').onclick=()=>advanceDigest(true);$('#digestComplete').onclick=()=>advanceDigest(true);
[$('#reviewStage'),$('#newStage')].forEach(el=>el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}});
function renderCurrent(){
  ensureCurrentReviewData();saved.currentLessons=saved.currentLessons||{};
  const allDigest=currentDrillPool(CURRENT_AFFAIRS_CARDS),allDigestLearned=allDigest.filter(x=>saved.currentKnown[x.id]).length;
  $('#currentDigestAllProgress').textContent=`${allDigestLearned}/${allDigest.length}`;$('#currentDigestAll').setAttribute('aria-label',`一体学习全部月份消化清单，已学 ${allDigestLearned}/${allDigest.length}`);
  const today=currentDateKey(),allQuestions=CURRENT_AFFAIRS_QUESTIONS,allDrills=currentDrillPool(CURRENT_AFFAIRS_CARDS),allDue=[...allQuestions,...allDrills].filter(x=>saved.currentReview[x.id]?.next<=today).length;
  $('#currentAll').textContent=allDue?`错题与不确定题 ${allDue} →`:'全部月份综合练习 →';
  $('#currentGrid').innerHTML=orderedCurrentVolumes().map(volume=>{
    const cards=CURRENT_AFFAIRS_CARDS.filter(x=>x.volume===volume.name);
    const questions=CURRENT_AFFAIRS_QUESTIONS.filter(x=>x.volume===volume.name);
    const practice=currentDrillPool(cards);
    const usesDigest=practice.length>0;
    const qlearned=questions.filter(x=>saved.currentKnown[x.id]).length;
    const dlearned=practice.filter(x=>saved.currentKnown[x.id]).length;
    const qPct=questions.length?Math.round(qlearned/questions.length*100):0;
    const dPct=practice.length?Math.round(dlearned/practice.length*100):0;
    const rawLesson=saved.currentLessons[volume.name];
    const lessonState=rawLesson===true||rawLesson==='all'?'all':rawLesson==='two-star'?'two-star':'none';
    const heard=lessonState==='all',twoStar=lessonState==='two-star';
    const lessonLabel=heard?'全部已听，点击改为仅听两颗星':twoStar?'仅听两颗星，点击清除':'未听，点击标记全部已听';
    const studyLabel=volume.studyLabel||'消化清单';
    const digestAction=usesDigest?`<button class="current-progress-entry" data-current-drills="${volume.name}" aria-label="${studyLabel} ${dlearned}/${practice.length}，进入学习"><span>${studyLabel} ${dlearned}/${practice.length}</span><em aria-label="${studyLabel}进度 ${dPct}%"><u style="width:${dPct}%"></u></em></button>`:'';
    return `<article class="${heard?'lesson-heard':twoStar?'lesson-two-star':''}"><div class="current-volume-main"><div class="current-volume-title"><button class="lesson-check has-label ${heard||twoStar?'checked':''} ${twoStar?'two-star':''}" data-current-lesson="${volume.name}" data-lesson-state="${lessonState}" aria-label="${lessonLabel}" title="${lessonLabel}"><i>${heard?'✓ 全听':twoStar?'★★ 两星':'未听'}</i></button><b>${volume.name}</b></div></div><div class="current-actions current-actions-training ${usesDigest?'':'single-action'}"${usesDigest?'':' style="grid-template-columns:minmax(0,1fr)!important"'}>${digestAction}<button class="current-progress-entry current-question-entry" data-current-questions="${volume.name}" aria-label="资料题目 ${qlearned}/${questions.length}，进入学习" ${questions.length?'':'disabled'}><span>资料题目 ${qlearned}/${questions.length}</span><em aria-label="资料题目进度 ${qPct}%"><u style="width:${qPct}%"></u></em></button></div></article>`;
  }).join('');
  $$('[data-current-lesson]').forEach(button=>button.onclick=()=>{const name=button.dataset.currentLesson,state=button.dataset.lessonState;saved.currentLessons[name]=state==='none'?'all':state==='all'?'two-star':false;localStorage.setItem('zhizhengStats',JSON.stringify(saved));renderCurrent()});$$('[data-current-questions]').forEach(button=>button.onclick=()=>startCurrentQuestions(button.dataset.currentQuestions));$$('[data-current-drills]').forEach(button=>button.onclick=()=>startCurrentDrills(button.dataset.currentDrills))
}
function renderMajorTopics(){
  ensureCurrentReviewData();saved.majorTopicLessons=saved.majorTopicLessons||{};
  const allMajorLearned=MAJOR_TOPIC_CARDS.filter(card=>saved.currentKnown[card.id]).length;
  $('#majorDigestAllProgress').textContent=`${allMajorLearned}/${MAJOR_TOPIC_CARDS.length}`;$('#majorDigestAll').setAttribute('aria-label',`一体学习全部重大专题消化清单，已学 ${allMajorLearned}/${MAJOR_TOPIC_CARDS.length}`);
  $('#majorTopicGrid').innerHTML=MAJOR_TOPIC_VOLUMES.map((volume,index)=>{
    const cards=MAJOR_TOPIC_CARDS.filter(card=>card.volume===volume.name),learned=cards.filter(card=>saved.currentKnown[card.id]).length,pct=cards.length?Math.round(learned/cards.length*100):0,available=volume.available!==false&&cards.length>0,heard=Boolean(saved.majorTopicLessons[volume.name]);
    return `<article class="major-topic-card ${available?'':'is-unavailable'} ${heard?'lesson-heard':''}"><span class="major-topic-number">${String(index+1).padStart(2,'0')}</span><div class="major-topic-copy"><small>${escapeHTML(volume.shortTitle||'重大专题')}</small><h2>${escapeHTML(volume.name)}</h2><p>${available?`消化清单 ${learned} / ${cards.length}`:'讲义未附消化清单，暂不生成题库'}</p><em><u style="width:${pct}%"></u></em></div><div class="major-topic-actions"><button class="major-topic-lesson ${heard?'is-heard':''}" data-major-topic-lesson="${escapeHTML(volume.name)}" aria-pressed="${heard?'true':'false'}">${heard?'✓ 已听课':'未听课'}</button><button class="major-topic-enter" data-major-topic="${escapeHTML(volume.name)}" ${available?'':'disabled'}>${available?'进入题库 →':'暂无清单'}</button></div></article>`;
  }).join('');
  $$('[data-major-topic-lesson]').forEach(button=>button.onclick=()=>{const name=button.dataset.majorTopicLesson;saved.majorTopicLessons[name]=!saved.majorTopicLessons[name];localStorage.setItem('zhizhengStats',JSON.stringify(saved));renderMajorTopics()});
  $$('[data-major-topic]').forEach(button=>button.onclick=()=>startMajorTopic(button.dataset.majorTopic));
}
const EXAM_TRAP_REVIEW_INTERVALS=[1,2,4,7,15,30];
function ensureExamTrapReviewData(){
  saved.examTrapChoices=saved.examTrapChoices||{};
  saved.examTrapReview=saved.examTrapReview||{};
  let changed=false;
  for(const card of EXAM_TRAP_CARDS){
    const choice=saved.examTrapChoices[card.id];
    if(typeof choice==='boolean'&&choice!==card.drillIsCorrect&&!saved.examTrapReview[card.id]){
      saved.examTrapReview[card.id]={stage:0,next:currentDateKey(),last:currentDateKey(),reviews:0};
      changed=true;
    }
  }
  if(changed)localStorage.setItem('zhizhengStats',JSON.stringify(saved));
}
function examTrapDue(pool=EXAM_TRAP_CARDS){
  const today=currentDateKey();
  return pool.filter(card=>saved.examTrapReview[card.id]?.next<=today);
}
function renderExamTraps(){
  ensureCurrentReviewData();ensureExamTrapReviewData();
  const totalLearned=EXAM_TRAP_CARDS.filter(card=>saved.currentKnown[card.id]).length;
  const due=examTrapDue();
  $('#examTrapAllProgress').textContent=`${totalLearned}/${EXAM_TRAP_CARDS.length}`;
  $('#examTrapAll').setAttribute('aria-label',`连续学习全部卷子排坑判断题，已学 ${totalLearned}/${EXAM_TRAP_CARDS.length}`);
  $('#examTrapReview').disabled=!due.length;
  $('#examTrapReview').querySelector('b').textContent=due.length;
  $('#examTrapReview').setAttribute('aria-label',`今日到期错题复习 ${due.length} 张`);
  $('#examTrapGrid').innerHTML=EXAM_TRAP_GROUPS.map(group=>{
    const cards=EXAM_TRAP_CARDS.filter(card=>card.groupId===group.id),learned=cards.filter(card=>saved.currentKnown[card.id]).length,pct=cards.length?Math.round(learned/cards.length*100):0;
    const groupDue=examTrapDue(cards).length;
    return `<article class="exam-trap-card"><span class="exam-trap-number">${group.symbol}</span><div><small>${escapeHTML(group.description)}</small><h2>${escapeHTML(group.name)}</h2><p>已辨析 ${learned} / ${cards.length}${groupDue?` · 今日待复习 ${groupDue}`:''}</p><em><u style="width:${pct}%"></u></em></div><button data-exam-trap="${group.id}">判断排坑 →</button></article>`;
  }).join('');
  $$('[data-exam-trap]').forEach(button=>button.onclick=()=>startExamTrap(button.dataset.examTrap));
}
const CURRENT_REVIEW_INTERVALS=[1,2,4,7,15,30];
function currentCardHasExamValue(x){
  const text=currentCleanText(x.answer),compact=text.replace(/\s/g,''),emphasis=currentCourseEmphasis(x),flags=emphasis?.flags||[];
  if(x.digestChecklist)return Boolean((x.digestTerms||[]).length&&x.question&&x.answer);
  const publicationOnly=/^\d{4}年\d{1,2}月，第\d+期《求是》杂志(?:发表|刊发)习近平(?:的)?重要文章《[^》]+》。?$/.test(compact);
  if(publicationOnly)return false;
  if(/^(?:第一|第二|第三|第四|第五|第六|其一|其二|一是|二是|三是|四是|五是|六是)[，,、]/.test(compact))return false;
  if(/^(?:文章指出，?)?(?:一是|二是|三是|四是|五是|六是)[^。]{0,26}[。；]?$/.test(compact)&&!flags.length)return false;
  if(/^(?:以上几条|抓好学习|领导干部学习理论也要有这三种境界)[^。]*。?$/.test(compact))return false;
  const examSignal=/根本|核心|关键|主体|基础|本质|首要|第一|唯一|最大|最早|首次|必须|应当|不得|严禁|坚持|统筹|相结合|有利于|标志|意味着|决定|目的|目标|原则|制度|机制|体系|职责|条件|范围|包括|分为|区别|高质量发展|新质生产力|中国式现代化/;
  const factualSignal=/\d+(?:\.\d+)?(?:%|项|个|次|周年|亿吨|万亿元|EFLOPS)|《[^》]+》/;
  return currentKeyTerms(x).length>0
}
// 正式学习队列只保留具有独立命题价值的内容；刊期、标题和无意义残句不计入进度或复习。
CURRENT_AFFAIRS_CARDS.forEach(x=>{
  if(x.id==='ca-07-上-05-p02'){
    const verified='2026年7月10日，长征十号乙运载火箭首飞及一子级回收任务取得成功。这是我国首次成功实施运载火箭一子级可控回收，也是全球首次实现运载火箭海上网系回收，标志着我国重复使用火箭技术取得重大突破。注意：2026年2月11日完成的是低空演示验证后的海上溅落与打捞，不是此次海上网系可控回收。';
    x.answer=verified;
    x.points=[verified];
  }
  if(x.id==='ca-02-上-10'){
    const verified='此次试验是长征十号运载火箭首次初样状态下的点火飞行，也是我国首次飞船最大动压逃逸试验；后续分别完成我国首次载人飞船返回舱海上搜索回收任务和首次火箭一级箭体海上打捞回收任务。文昌航天发射场新建发射工位也首次执行点火飞行试验任务。';
    x.answer=verified;
    x.points=[verified];
  }
  const verifiedCardText={
    'ca-02-下-02-p04':'当地时间2026年2月20日，王心迪在米兰冬奥会自由式滑雪男子空中技巧比赛中获得金牌。',
    'ca-02-下-03-p05':'PM2.5：环境空气中空气动力学当量直径小于等于2.5微米的颗粒物，也称细颗粒物。',
    'ca-02-下-03-p06':'PM10：环境空气中空气动力学当量直径小于等于10微米的颗粒物，也称可吸入颗粒物。',
    'ca-02-下-04':'“本源司南”是我国首款自主研发并正式开放线上下载的量子计算机操作系统。当前国际范围内尚无成熟量子计算机操作系统完全开放本地下载部署；该系统开放下载有助于降低使用门槛、推动量子计算生态建设。',
    'ca-03-上-03-p02':'2026年3月，据中国科学院消息，中国科学院物理研究所研究员靳常青凭借在超导新材料领域的一系列开创性发现，荣获2026年马蒂亚斯奖，成为本届唯一获奖者。',
    'ca-03-上-03-p03':'该奖将在2026年7月于德国举行的国际超导材料和机理大会上正式颁发。'
    ,'ca-03-上-05-p02':'2026年2月11日，自然资源部印发《城镇开发边界管理办法（试行）》，自印发之日起施行。'
    ,'ca-03-上-08-p02':'2026年3月7日，十四届全国人大四次会议举行民生主题记者会，教育部、民政部、人力资源社会保障部、文化和旅游部、国家卫生健康委有关负责人回答中外记者提问。'
    ,'ca-03-下-03-p04':'2026年3月20日，国务院令第833号公布修订后的《全国农业普查条例》，自2026年5月1日起施行。'
    ,'ca-03-下-05-p03':'坚持公平适度、保障基本、统筹有序，建立适应我国基本国情，覆盖全民、统筹城乡、公平统一、安全规范、可持续的长期护理保险制度，不断增强人民群众的获得感、幸福感、安全感。'
    ,'ca-03-下-09':'中国是目前唯一能够提供全部17种稀土金属的国家，并拥有完整的稀土产业链。'
    ,'ca-03-下-09-p06':'2026年3月，自然资源部公布找矿成果：四川冕宁牦牛坪矿区新增稀土氧化物资源量约966.6万吨，经评审备案后累计保有资源量约1040.8万吨，成为全球在产稀土矿山中资源储量第二大的轻稀土矿，仅次于内蒙古包头白云鄂博矿。'
    ,'ca-04-上-05-p04':'截至2026年4月，我国已设立23个自由贸易试验区，并建设海南自由贸易港，形成覆盖沿海、内陆、沿边的开放布局。'
    ,'ca-04-下-09-p06':'1项及以上控制指标不达标或者3项及以上支撑指标不达标的省（自治区、直辖市），评价考核结果为“不合格”；'
    ,'ca-04-下-14-p03':'2026年上海合作组织绿色和可持续发展论坛当日在浙江宁波开幕，主题为“践行全球治理倡议，共促上合组织绿色和可持续发展”。'
  };
  if(verifiedCardText[x.id]){
    x.answer=verifiedCardText[x.id];
    x.points=[verifiedCardText[x.id]];
  }
  if(x.id.startsWith('ca-03-上-03'))x.title='靳常青荣获2026年马蒂亚斯奖';
  const textFixes=[
    ['学、8思、用贯通','学、思、用贯通'],
    ['丽城市建设比例达到60%','美丽城市建设比例达到60%']
  ];
  for(const [before,after] of textFixes){
    x.answer=String(x.answer||'').replace(before,after);
    x.points=(x.points||[]).map(point=>String(point||'').replace(before,after));
  }
});
// 原课件把另一则“中央八项规定精神学习教育”材料误接在第5期《求是》文章之后；
// 这些句子并非《让愿担当、敢担当、善担当蔚然成风》的正文，避免以错误标题进入学习队列。
const CURRENT_MISGROUPED_CARD_IDS=new Set(['ca-03-上-01-p02','ca-03-上-01-p03','ca-03-上-01-p08','ca-03-上-01-p09','ca-03-上-01-p10']);
CURRENT_AFFAIRS_CARDS.splice(0,CURRENT_AFFAIRS_CARDS.length,...CURRENT_AFFAIRS_CARDS.filter(x=>!CURRENT_MISGROUPED_CARD_IDS.has(x.id)));
CURRENT_AFFAIRS_CARDS.splice(0,CURRENT_AFFAIRS_CARDS.length,...CURRENT_AFFAIRS_CARDS.filter(currentCardHasExamValue));
function currentDateKey(offset=0){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+offset);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function ensureCurrentReviewData(){saved.currentKnown=saved.currentKnown||{};saved.currentReview=saved.currentReview||{};let changed=false;Object.keys(saved.currentKnown).forEach(id=>{if(saved.currentKnown[id]&&!saved.currentReview[id]){saved.currentReview[id]={stage:0,next:currentDateKey(1),last:currentDateKey(),reviews:0};changed=true}});if(changed)localStorage.setItem('zhizhengStats',JSON.stringify(saved))}
function currentCleanText(value){return String(value||'').replace(/([\u4e00-\u9fa5])\s+(?=[\u4e00-\u9fa5])/g,'$1')}
function currentKeyTerms(x){
  const full=currentCleanText(x.answer),terms=new Set(),emphasis=currentCourseEmphasis(x),flags=emphasis?.flags||[];
  (x.digestTerms||[]).forEach(term=>{term=currentCleanText(term);if(term&&full.includes(term))terms.add(term)});
  const publicationLead=/^\s*\d{4}\s*年(?:\s*\d{1,2}\s*月)?[^。]{0,35}(?:第\s*\d+\s*期|《求是》|杂志|发表|刊发)/.test(full);
  if(flags.includes('数字坑')&&!publicationLead)for(const hit of full.matchAll(/\d{4}\s*年(?:\s*\d{1,2}\s*月(?:\s*\d{1,2}\s*日)?)?|\d+(?:\.\d+)?\s*(?:%|项|个|次|周年|亿吨|万亿元|EFLOPS)/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/[\u4e00-\u9fa5]{2,12}(?:第一|为根本|为基础|为宗旨|为主题|为主线|为牵引|为目标)/g))terms.add(hit[0].replace(/^[，。；、\s]+/,''));
  for(const hit of full.matchAll(/整体保护|系统修复|综合治理|政府主导|多方参与|社会共享/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/坚持[^，。；、]{2,16}|(?:以|把)[^，。；、]{2,14}(?:为|作为)[^，。；、]{1,10}|[^，。；、]{2,12}(?:为主体|为基础|为根本|为核心|为宗旨|为主题|为主线|为牵引|为目标|为原则|相结合)/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/(?:首个|首次|第一|唯一|最大|最早|根本|核心|主体|基础|关键|本质)[^，。；、]{1,10}/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/[\u4e00-\u9fa5]{2,10}(?:规律|目标|特点|优势|原则|要求|制度|体系|机制|政策|道路|方向|任务)/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/[“"]([^”"]{2,12})[”"]/g))if(!/第\d+期|求是|讲话|文章/.test(hit[1]))terms.add(hit[1]);
  for(const hit of full.matchAll(/[\u4e00-\u9fa5]{2,8}(?:性、[\u4e00-\u9fa5]{1,8}性(?:、[\u4e00-\u9fa5]{1,8}性)?|化、[\u4e00-\u9fa5]{1,8}化)/g))terms.add(hit[0]);
  for(const hit of full.matchAll(/(?:攻坚战、持久战|常态化长效化|积极性、主动性、创造性|愿担当、敢担当、善担当|守土有责、守土负责、守土尽责|高端化、智能化、绿色化|教育优先发展、科技自立自强、人才引领驱动)/g))terms.add(hit[0]);
  const score=term=>(/相结合|为主体|为基础|为根本|为核心|为主线|为牵引/.test(term)?20:0)+(/首次|首个|第一|唯一|最大|最早/.test(term)?16:0)+(/\d/.test(term)&&flags.includes('数字坑')?14:0)+(/统筹|安全|领导|人民至上/.test(term)?10:0)+(/目标|原则|制度|体系|机制/.test(term)?7:0)+(/性、|化、|攻坚战|持久战|常态化|长效化/.test(term)?9:0)+Math.min(term.length,12)/20;
  const ranked=[...terms].filter(term=>term.length>1&&term.length<=22&&full.includes(term)).sort((a,b)=>score(b)-score(a));
  const chosen=[];for(const term of ranked){if(chosen.some(old=>old.includes(term)||term.includes(old)))continue;chosen.push(term);if(chosen.length===3)break}return chosen
}
function currentExamProfile(x){
  const text=String(x.answer||''),terms=currentKeyTerms(x),methods=[];
  if(/政府|市场|党|人民|国家|部门|机构|企业|主体|主导|参与/.test(text))methods.push('主体错配：把政策主体、主导者或参与者换成相关主体');
  if(/坚持|相结合|既要|又要|不仅|还要|统筹|协调|主体|基础/.test(text))methods.push('搭配换位：颠倒固定顺序，或拆开必须同时成立的表述');
  if(/\d|年|月|日|首次|首个|第一|最大|最早/.test(text))methods.push('限定词偷换：改动时间、数字、首次/首个/第一等唯一性表述');
  if(/全面|一切|所有|必须|严禁|禁止|有条件|无条件|根本|唯一/.test(text))methods.push('范围程度扩大：把“有条件、部分、推动”改成“无条件、全部、彻底”');
  if(!methods.length)methods.push('关键词替换：将原文中的核心动词、对象或政策方向换成近义词或反义词');
  return {terms,method:methods.slice(0,2).join('；')}
}
function currentSwapHint(term){
  const exact={
    '坚持有效市场和有为政府相结合':'有为市场和有效政府相结合',
    '有效市场和有为政府相结合':'有为市场和有效政府相结合',
    '坚持统筹发展和安全等重大原则':'只强调发展、忽视安全',
    '坚持统筹发展和安全':'发展优先于安全',
    '坚持党的全面领导':'政府或市场的全面领导',
    '坚持人民至上':'效率或资本至上',
    '坚持高质量发展':'追求高速增长',
    '坚持全面深化改革':'局部、单项改革'
  };if(exact[term])return exact[term];
  if(term.includes('政府'))return term.replaceAll('政府','市场');
  if(term.includes('市场'))return term.replaceAll('市场','政府');
  if(term.includes('为主体'))return term.replace('为主体','为基础');
  if(term.includes('为基础'))return term.replace('为基础','为主体');
  if(term.includes('第一'))return term.replace('第一','重要');
  if(term.includes('首次'))return term.replace('首次','再次');
  if(term.includes('唯一'))return term.replace('唯一','主要');
  if(term.includes('坚持'))return term.replace('坚持','弱化或取消');
  if(term.startsWith('一以贯之'))return `不再${term}`;
  if(term.includes('目标'))return '随意调整目标';
  if(term.includes('规律'))return '主观意志';
  if(term.includes('优势'))return term.replace('优势','劣势');
  return '【仅适合挖空回忆】'
}
function currentQuestionReference(x){
  if(x.correctOption)return `正确答案：${x.correctOption}。${currentCleanText(x.answer)}`;
  const question=currentCleanText(x.question),points=(x.points||[]).map(currentCleanText);if(!points.length)return currentCleanText(x.answer);
  const grams=text=>{const clean=text.replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g,'');const set=new Set();for(let i=0;i<=clean.length-4;i++)set.add(clean.slice(i,i+4));return set};
  const qgrams=grams(question);return points.map((point,index)=>({point,index,score:[...grams(point)].filter(g=>qgrams.has(g)).length+(/正确的是|属于|包括|原则|目标|要求/.test(question)&&/原则|目标|要求|包括|明确/.test(point)?3:0)})).sort((a,b)=>b.score-a.score||a.index-b.index)[0].point
}
function currentStandaloneDrillText(x,value){
  let text=currentCleanText(value);
  if(x?.digestChecklist&&x?.title&&!text.startsWith(`【${x.title}】`))text=`【${currentCleanText(x.title)}】${text}`;
  // 原课件前文明确指向长征十号乙；独立成题时必须把指代对象写回题干。
  if(x?.title?.includes('重复使用运载火箭')||/运载火箭一级可控回收/.test(text)){
    text=text.replace(/^此次任务是我国首次成功实施运载火箭一级可控回收/,'2026年7月10日长征十号乙运载火箭首飞任务，是我国首次成功实施运载火箭一子级可控回收');
  }
  // “文章指出、会议强调、此次、本次”等只有放回新闻主题后才能成为合格的独立题干。
  const needsContext=/^(?:此次|本次|这次|该任务|该项目|该工程|上述|前述|这项|这一|其中|文章(?:指出|强调|提出)|会议(?:指出|强调|提出)|《(?:建议|规划|方案)》(?:指出|强调|明确|提出))/;
  if(x?.title&&needsContext.test(text))text=`【${currentCleanText(x.title)}】${text}`;
  return text
}
function makeCurrentDrill(x,index=0){
  if(!currentDrillEligible(x))return null;
  const term=(x.digestTerms||[]).find(value=>currentCleanText(x.answer).includes(currentCleanText(value)))||currentKeyTerms(x).find(value=>!currentSwapHint(value).startsWith('【'));if(!term)return null;
  const swap=x.digestDistractor||currentSwapHint(term),original=currentStandaloneDrillText(x,x.answer),hash=String(x.id).split('').reduce((sum,ch)=>sum+ch.charCodeAt(0),0),isCorrect=hash%4===0||String(swap).startsWith('【');
  return {...x,id:`${x.id}-drill`,drillType:'判断题',drillTerm:term,drillSwap:swap,drillIsCorrect:isCorrect,drillQuestion:isCorrect?original:original.replace(term,swap)}
}
function highlightCurrentText(value,x){
  const text=currentCleanText(value),terms=currentKeyTerms(x);if(!terms.length)return highlightStudyText(text,'current');
  // 排坑题翻面只核对本题所考的一个词，避免把其他关键词和替换提示一并塞进原句。
  if(x.drillTerm&&text.includes(x.drillTerm)){
    const at=text.indexOf(x.drillTerm);
    return escapeHTML(text.slice(0,at))+`<mark class="current-key">${escapeHTML(x.drillTerm)}</mark>`+escapeHTML(text.slice(at+x.drillTerm.length));
  }
  const pattern=new RegExp(terms.map(term=>term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');let html='',cursor=0;
  for(const hit of text.matchAll(pattern)){const swap=currentSwapHint(hit[0]),hasSwap=!swap.startsWith('【');html+=escapeHTML(text.slice(cursor,hit.index))+`<span class="exam-key"><mark class="current-key">${escapeHTML(hit[0])}</mark>${hasSwap?`<small><b>≠</b>${escapeHTML(swap)}</small>`:''}</span>`;cursor=hit.index+hit[0].length}
  return html+escapeHTML(text.slice(cursor))
}
const CURRENT_CATEGORY_LABELS={'学习':'重要讲话','文件':'政策文件','会议':'重大会议','科技':'科技成果','文体':'文化体育','综合':'综合时政'};
CURRENT_AFFAIRS_CARDS.forEach(x=>{x.category=CURRENT_CATEGORY_LABELS[x.category]||x.category});
function currentBaseId(id){return String(id||'').replace(/-drill$/,'').replace(/-p\d+$/,'')}
function currentCourseEmphasis(x){return (typeof CURRENT_AFFAIRS_COURSE_EMPHASIS==='object'&&CURRENT_AFFAIRS_COURSE_EMPHASIS[currentBaseId(x.id)])||null}
function currentDrillEligible(x){
  const text=currentStandaloneDrillText(x,x.answer).replace(/\s/g,''),emphasis=currentCourseEmphasis(x),flags=emphasis?.flags||[];
  if(!currentCardHasExamValue(x))return false;
  if(!x.digestChecklist&&(!emphasis||!flags.some(flag=>['高频','易替换','易混','主体坑','顺序坑','条件坑','数字坑'].includes(flag))))return false;
  if(text.length<18||text.length>(x.digestChecklist?280:220)||!/。|；/.test(text))return false;
  if(!x.digestChecklist&&/^(?:【知识链接】|\d+[.、．]|[一二三四五六七八九十]+[、.．、]|第一|第二|第三|第四|第五|第六|其一|其二|一是|二是|三是|四是|五是|六是)[，,、]?/.test(text))return false;
  // 判断题必须脱离课程上下文也能独立成立；无法还原主体的指代句不进入题库。
  if(/^(?:此次|本次|这次|该任务|该项目|该工程|上述|前述|这项|这一)/.test(text))return false;
  return x.digestChecklist?Boolean((x.digestTerms||[]).length):currentKeyTerms(x).some(term=>!currentSwapHint(term).startsWith('【'))
}
function currentDrillPool(cards){
  const digest=cards.filter(x=>x.digestChecklist&&x.question&&x.answer&&currentCardHasExamValue(x));
  return digest.sort((a,b)=>currentPriority(a)-currentPriority(b))
}
function currentPriority(x){if(x.digestChecklist)return x.level==='两星'||x.level==='两星优先'?0:1;const e=currentCourseEmphasis(x),flags=e?.flags||[];return flags.includes('高频')?0:e?.teacherConfirmed?1:x.level==='重点'||x.level==='两星'||x.level==='两星优先'?2:3}
let currentFlashDeck=[],currentFlashIndex=0,currentFlashVolume='全部时政',currentFlashMode='new',currentContentKind='flash',currentFlashReturn='current';
function renderCurrentFlash(){
  const x=currentFlashDeck[currentFlashIndex];if(!x)return;saved.currentKnown=saved.currentKnown||{};
  const emphasis=currentCourseEmphasis(x),courseLabel=emphasis?.flags?.length?` · 课堂：${emphasis.flags.slice(0,3).join(' / ')}`:'',isQuestion=currentContentKind==='question'||x.reviewKind==='question',isDigest=!isQuestion&&Boolean(x.digestChecklist),isDrill=!isDigest&&(currentContentKind==='drill'||x.reviewKind==='drill'||Boolean(x.drillType)),isExamTrap=currentContentKind==='examTrap',studyText=isQuestion?currentQuestionReference(x):x.answer,studyItem={...x,answer:studyText},volumeMeta=CURRENT_AFFAIRS_VOLUMES.find(v=>v.name===x.volume),studyLabel=x.studyLabel||volumeMeta?.studyLabel||'消化清单';
  $('#currentFlashOptions').classList.toggle('hidden',(isDrill||isDigest)&&!isExamTrap);
  $('#currentFlashCard').classList.remove('flipped','revealed','digest-answer-visible');$('#currentFlashCard').classList.toggle('digest-mode',isDigest);$('#currentFlashFeedback').classList.add('hidden');$('#currentFlashFlip').classList.remove('hidden');$('#currentFlashAnswer').classList.remove('hidden');
  $('#currentFlashLevel').textContent=(isQuestion?`${x.type} · 资料题目`:isDigest?`挖空题 · ${studyLabel}`:isDrill&&isExamTrap&&currentFlashMode==='review'?'错题复习':isDrill?'判断训练':`${currentFlashMode==='review'?'今日复习':'新学习'} · ${x.category}`)+courseLabel;
  $('#currentFlashSource').textContent=currentContentKind==='commonDigest'?[x.volume,x.title,`清单 PDF 第${x.digestPage}页`,`答案见讲义 PDF 第${x.answerPage}页`].join(' · '):currentContentKind==='majorDigest'?[x.volume,`清单第${x.digestPage}页`,x.answerPage?`答案第${x.answerPage}页`:'答案经权威来源核对'].join(' · '):currentContentKind==='examTrap'?[x.volume,x.focus,x.verifiedSource].filter(Boolean).join(' · '):isQuestion?[x.volume,x.newsTitle].filter(Boolean).join(' · '):isDrill?[x.volume,x.title,x.focus].filter(Boolean).join(' · '):[x.volume,x.title,x.focus].filter(Boolean).join(' · ');
  $('#currentFlashQuestion').classList.toggle('digest-cloze-question',isDigest);$('#currentFlashQuestion').onclick=isDigest?toggleDigestSlot:null;$('#currentFlashQuestion').onkeydown=isDigest?toggleDigestSlotByKeyboard:null;if(isDigest)$('#currentFlashQuestion').innerHTML=renderDigestCloze(x,false);else $('#currentFlashQuestion').innerHTML=highlightStudyText(isQuestion?currentCleanText(x.question):isDrill?x.drillQuestion:x.title,'current');
  $('#currentFlashOptions').innerHTML=isExamTrap?'<button type="button" class="judgment-choice" data-judgment="true">√ 正确</button><button type="button" class="judgment-choice" data-judgment="false">× 错误</button>':isQuestion?(x.options||[]).map(option=>`<p>${highlightStudyText(currentCleanText(option),'current')}</p>`).join(''):'';
  if(isQuestion)$$('#currentFlashOptions p').forEach(option=>option.onclick=()=>{$$('#currentFlashOptions p').forEach(item=>item.classList.remove('selected'));option.classList.add('selected')});
  if(isExamTrap)$$('#currentFlashOptions [data-judgment]').forEach(button=>button.onclick=()=>chooseExamTrapAnswer(button.dataset.judgment==='true'));
  $('#currentFlashFlip').textContent=isQuestion?'查看答案与解析':isDigest?'逐个显示答案':isDrill?'核对判断':'查看核心内容';
  $('#currentFlashFlip').classList.toggle('hidden',isExamTrap);
  $('#currentFlashAnswer').innerHTML=highlightCurrentText(studyText,studyItem);
  $('#currentFlashPoints').innerHTML=isExamTrap?'':isQuestion?(x.points||[]).slice(0,3).map(p=>`<li>${highlightStudyText(currentCleanText(p),'current')}</li>`).join(''):isDrill?`${x.digestChecklist?`<li><b>清单答案：</b>${(x.digestTerms||[]).map(term=>escapeHTML(currentCleanText(term))).join('；')}</li>`:''}<li><b>${x.drillIsCorrect?'判断正确':'判断错误'}</b>${x.drillIsCorrect?'：原句没有替换。':`：题干将“${escapeHTML(x.drillTerm)}”替换成了“${escapeHTML(x.drillSwap)}”。`}</li>`:'';
  $('#currentFlashMemory').textContent=isDigest?'': '先看主体、范围、程度词和对应关系，再判断选项；无需逐句背诵。';
  $('#currentFlashMemory').parentElement.classList.toggle('hidden',isExamTrap);
  $('#currentFlashTrap').textContent=isExamTrap?(x.drillIsCorrect?'原句无误，别见到熟悉表述就判错。':`${x.drillSwap} ≠ ${x.drillTerm}`):isDrill?(x.drillIsCorrect?'本题保留原文，用来防止“见到熟悉表述就一律判错”。':`排坑点：${x.drillSwap} ≠ ${x.drillTerm}`):'做完题再看解析，只记录导致失分的那个陷阱。';
  $('#currentFlashTopic').textContent=`${currentFlashVolume} · ${isQuestion?'资料题目':isDigest?studyLabel:isDrill&&isExamTrap&&currentFlashMode==='review'?'今日错题复习':isDrill?'判断训练':currentFlashMode==='review'?'错题回练':'学习'}`;
  const priorChoice=saved.examTrapChoices?.[x.id];
  $('#currentFlashProgress').textContent=`${currentFlashIndex+1} / ${currentFlashDeck.length}`;$('#currentFlashPrev').disabled=currentFlashIndex===0;$('#currentFlashNext').disabled=isExamTrap?typeof priorChoice!=='boolean':currentFlashIndex===currentFlashDeck.length-1;$('#currentFlashNext').textContent=isExamTrap&&currentFlashIndex===currentFlashDeck.length-1?'完成本组 →':'下一张 →';
  updateStarButton($('#currentFlashStar'),`current:${x.id}`);
  $('#currentFlashKnown').textContent=isDigest?'记住了 ✓':'做对了 ✓';$('#currentFlashAgain').textContent=isDigest?'还不熟':'做错了';currentFlashFuzzy.textContent=isDigest?'有点模糊':'不确定 / 蒙对';
  for(const button of [$('#currentFlashKnown'),$('#currentFlashAgain'),currentFlashFuzzy])button.classList.toggle('hidden',isExamTrap);
  if(isExamTrap&&typeof priorChoice==='boolean')showExamTrapAnswer(priorChoice)
}
function showExamTrapAnswer(choice){
  const x=currentFlashDeck[currentFlashIndex];if(!x||currentContentKind!=='examTrap')return;
  revealCurrentFlash();
  const correct=choice===x.drillIsCorrect;
  $$('#currentFlashOptions [data-judgment]').forEach(button=>{const value=button.dataset.judgment==='true';button.disabled=true;button.classList.toggle('is-selected',value===choice);button.classList.toggle('is-correct',value===x.drillIsCorrect);button.classList.toggle('is-wrong',value===choice&&!correct)});
  $('#currentFlashPoints').insertAdjacentHTML('afterbegin',`<li class="judgment-result ${correct?'is-correct':'is-wrong'}"><b>${correct?'答对 ✓':`答错 · 正确：${x.drillIsCorrect?'√':'×'}`}</b></li>`);
  $('#currentFlashNext').disabled=false
}
function chooseExamTrapAnswer(choice){
  const x=currentFlashDeck[currentFlashIndex];if(!x||currentContentKind!=='examTrap'||typeof saved.examTrapChoices?.[x.id]==='boolean')return;
  saved.examTrapChoices=saved.examTrapChoices||{};saved.examTrapChoices[x.id]=choice;saved.currentKnown=saved.currentKnown||{};saved.currentKnown[x.id]=true;
  saved.examTrapReview=saved.examTrapReview||{};
  const old=saved.examTrapReview[x.id],correct=choice===x.drillIsCorrect;
  if(!correct||old){
    const stage=correct?Math.min((old?.stage||0)+1,EXAM_TRAP_REVIEW_INTERVALS.length-1):0;
    saved.examTrapReview[x.id]={stage,next:currentDateKey(EXAM_TRAP_REVIEW_INTERVALS[stage]),last:currentDateKey(),reviews:(old?.reviews||0)+1};
  }
  localStorage.setItem('zhizhengStats',JSON.stringify(saved));showExamTrapAnswer(choice)
}
function digestDisplayText(value){return currentCleanText(value).replace(/^\s*\d{1,3}\s*[.．、](?!\s*\d)\s*/,'')}
function highlightDigestAnswer(x){
  const text=digestDisplayText(x.answer),terms=[...(x.digestTerms||[])].map(currentCleanText).filter(Boolean).sort((a,b)=>b.length-a.length);if(!terms.length)return escapeHTML(text);
  const pattern=new RegExp(terms.map(term=>term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');let html='',cursor=0;for(const hit of text.matchAll(pattern)){html+=escapeHTML(text.slice(cursor,hit.index))+`<mark class="inline-correct-term">${escapeHTML(hit[0])}</mark>`;cursor=hit.index+hit[0].length}return html+escapeHTML(text.slice(cursor))
}
function renderDigestCloze(x,revealed=false){
  const contextualQuestions={
    'cad-05-下-002':'“十五五”时期，我国未来产业发展的相关重点领域是未来产业发展的______，要聚焦发力、精准施策，确保取得明显进展。',
    'cad-05-下-051':'神舟二十三号乘组与神舟二十一号乘组进行在轨轮换，未来将择1人执行______年期在轨驻留任务。',
    'cad-06-上-011':'新时代党的建设思想鲜明提出坚持______是中国特色社会主义最本质的特征，坚持党中央集中统一领导，坚持全面从严治党，坚持不忘初心、牢记使命，坚持以党的______为统领，坚持用党的创新理论凝心铸魂，坚持锤炼坚强______，坚持健全上下贯通、执行有力的组织体系，坚持建设堪当民族复兴重任的高素质干部队伍，坚持推进______常态化长效化，坚持用严明的纪律管全党治全党，坚持一体推进______，坚持制度治党、依规治党，坚持落实管党治党政治责任。',
    'cad-07-上-008':'习近平指出，我们党矢志追求真理、始终把准前进方向，深深植根人民、始终拥有坚实根基，勇担历史使命、始终掌握战略主动，顺应发展潮流、始终走在时代前列，敢于善于斗争、始终保持必胜信心，注重强健自身、始终充满生机活力。这些优秀特质，是中国共产党为什么______的关键密码。',
    'cad-07-上-032':'长征十号乙运载火箭首飞任务，是我国首次成功实施运载火箭______级可控回收，也是全球首次实现运载火箭______回收，标志着我国重复使用火箭技术取得重大突破。'
  };
  const question=digestDisplayText(contextualQuestions[x.id]||x.question),terms=(x.digestTerms||[]).map(currentCleanText),parts=question.split(/(_{2,})/g),emphasis=createStudyEmphasis(question,{group:'current'});let slot=0;
  return parts.map(part=>{if(!/^_{2,}$/.test(part))return highlightStudyPart(part,emphasis);const answer=terms[slot++]||'',width=Math.max(2,Array.from(answer).length);return `<span class="digest-answer-slot ${revealed?'is-revealed':''}" style="--answer-ch:${width}" data-answer="${escapeHTML(answer)}" role="button" tabindex="0" aria-label="${revealed?`答案：${escapeHTML(answer)}`:'点击显示答案'}" aria-pressed="${revealed?'true':'false'}">${revealed?escapeHTML(answer):'&nbsp;'}</span>`}).join('')
}
function toggleDigestSlot(event){
  const slot=event.target.closest?.('.digest-answer-slot');if(!slot)return;event.stopPropagation();revealCurrentFlash()
}
function toggleDigestSlotByKeyboard(event){if((event.key==='Enter'||event.key===' ')&&event.target.classList.contains('digest-answer-slot')){event.preventDefault();toggleDigestSlot(event)}}
function setDigestSlotState(slot,showing){const answer=slot.dataset.answer||'';slot.classList.toggle('is-revealed',showing);slot.textContent=showing?answer:'\u00a0';slot.setAttribute('aria-pressed',showing?'true':'false');slot.setAttribute('aria-label',showing?`答案：${answer}`:'点击显示答案')}
function refreshDigestControls(){const slots=[...$('#currentFlashQuestion').querySelectorAll('.digest-answer-slot')],shown=slots.filter(slot=>slot.classList.contains('is-revealed')).length,allShown=slots.length>0&&shown===slots.length;$('#currentFlashCard').classList.toggle('digest-answer-visible',allShown);$('#currentFlashFlip').textContent=allShown?'再点一下，下一张 →':shown?`显示下一处答案 ${shown}/${slots.length}`:'逐个显示答案'}
function annotateCurrentDrillPrompt(x){
  const text=currentCleanText(x.drillQuestion),term=currentCleanText(x.drillTerm),swap=currentCleanText(x.drillSwap);
  if(x.drillIsCorrect){const at=text.indexOf(term);return at<0?escapeHTML(text):escapeHTML(text.slice(0,at))+`<mark class="inline-correct-term">${escapeHTML(term)}</mark>`+escapeHTML(text.slice(at+term.length))}
  const at=text.indexOf(swap);return at<0?escapeHTML(text):escapeHTML(text.slice(0,at))+`<span class="inline-correction"><del>${escapeHTML(swap)}</del><ins>${escapeHTML(term)}</ins></span>`+escapeHTML(text.slice(at+swap.length))
}
function revealCurrentFlash(){
  const x=currentFlashDeck[currentFlashIndex];if(!x)return;
  const isQuestion=currentContentKind==='question'||x.reviewKind==='question',isDigest=!isQuestion&&Boolean(x.digestChecklist),isDrill=!isDigest&&(currentContentKind==='drill'||x.reviewKind==='drill'||Boolean(x.drillType));
  if(isDigest){const slots=[...$('#currentFlashQuestion').querySelectorAll('.digest-answer-slot')],next=slots.find(slot=>!slot.classList.contains('is-revealed'));if(next){setDigestSlotState(next,true);refreshDigestControls();$('#currentFlashFeedback').classList.add('hidden')}else markCurrentFlash('known');return}
  $('#currentFlashCard').classList.add('revealed');$('#currentFlashFlip').classList.add('hidden');
  $('#currentFlashFeedback').classList.remove('hidden');
  if(isDrill){$('#currentFlashQuestion').innerHTML=annotateCurrentDrillPrompt(x);$('#currentFlashAnswer').classList.add('hidden')}
  if(isQuestion){
    const correct=String(x.correctOption||'').toUpperCase();
    $$('#currentFlashOptions p').forEach(option=>{const letter=(option.textContent.trim().match(/^([A-Z])/i)||[])[1]?.toUpperCase()||'';const selected=option.classList.contains('selected');option.classList.toggle('answer-correct',correct.includes(letter));option.classList.toggle('answer-wrong',selected&&!correct.includes(letter));if(correct.includes(letter))option.dataset.answer='正确选项';else if(selected)option.dataset.answer='你的选择'})
  }
}
function startCurrentFlash(volume=null,requestedMode='auto'){
  ensureCurrentReviewData();currentFlashReturn='current';$('#currentFlashBack').textContent='← 返回月半时政';$('#currentFlashEyebrow').textContent='MONTHLY CURRENT AFFAIRS';currentContentKind='flash';currentFlashVolume=volume||'全部时政内容';const source=(volume?CURRENT_AFFAIRS_CARDS.filter(x=>x.volume===volume):[...CURRENT_AFFAIRS_CARDS]).filter(currentCardHasExamValue),pool=source.sort((a,b)=>currentPriority(a)-currentPriority(b)),today=currentDateKey();
  const due=pool.filter(x=>saved.currentReview[x.id]?.next<=today),fresh=pool.filter(x=>!saved.currentKnown[x.id]);
  currentFlashMode=requestedMode==='review'?'review':requestedMode==='new'?'new':due.length?'review':'new';currentFlashDeck=currentFlashMode==='review'?due:(fresh.length?fresh:pool);currentFlashIndex=0;
  if(!currentFlashDeck.length)return;renderCurrentFlash();show('currentFlash')
}
function startCurrentQuestions(volume){
  currentFlashReturn='current';$('#currentFlashBack').textContent='← 返回月半时政';$('#currentFlashEyebrow').textContent='MONTHLY CURRENT AFFAIRS';currentContentKind='question';currentFlashMode='question';currentFlashVolume=volume;$('#currentFlashOptions').classList.remove('hidden');const pool=CURRENT_AFFAIRS_QUESTIONS.filter(x=>x.volume===volume).sort((a,b)=>currentPriority(a)-currentPriority(b)||a.number-b.number),fresh=pool.filter(x=>!saved.currentKnown[x.id]);currentFlashDeck=fresh.length?fresh:pool;currentFlashIndex=0;if(!currentFlashDeck.length)return;renderCurrentFlash();show('currentFlash')
}
function startCurrentDrills(volume){
  currentFlashReturn='current';$('#currentFlashBack').textContent='← 返回月半时政';$('#currentFlashEyebrow').textContent='MONTHLY CURRENT AFFAIRS';currentContentKind='drill';currentFlashMode='drill';currentFlashVolume=volume||'全部月份';$('#currentFlashOptions').classList.add('hidden');const cards=CURRENT_AFFAIRS_CARDS.filter(x=>(!volume||x.volume===volume)&&currentCardHasExamValue(x)),pool=currentDrillPool(cards),fresh=pool.filter(x=>!saved.currentKnown[x.id]);currentFlashDeck=fresh.length?fresh:pool;currentFlashIndex=0;if(!currentFlashDeck.length)return;renderCurrentFlash();show('currentFlash')
}
function startMajorTopic(volume=null){
  ensureCurrentReviewData();currentFlashReturn='majorTopic';$('#currentFlashBack').textContent='← 返回重大专题';$('#currentFlashEyebrow').textContent='MAJOR CURRENT AFFAIRS';currentContentKind='majorDigest';currentFlashMode='new';currentFlashVolume=volume||'全部重大专题';$('#currentFlashOptions').classList.add('hidden');const pool=MAJOR_TOPIC_CARDS.filter(card=>!volume||card.volume===volume),fresh=pool.filter(card=>!saved.currentKnown[card.id]);currentFlashDeck=fresh.length?fresh:pool;currentFlashIndex=0;if(!currentFlashDeck.length)return;renderCurrentFlash();show('currentFlash')
}
function startExamTrap(groupId=null,requestedMode='auto'){
  ensureCurrentReviewData();ensureExamTrapReviewData();currentFlashReturn='examTrap';$('#currentFlashBack').textContent='← 返回卷子排坑';$('#currentFlashEyebrow').textContent='EXAM TRAP CHECKLIST';currentContentKind='examTrap';const group=EXAM_TRAP_GROUPS.find(item=>item.id===groupId);currentFlashVolume=group?.name||'全部卷子排坑';$('#currentFlashOptions').classList.add('hidden');const pool=EXAM_TRAP_CARDS.filter(card=>!group||card.groupId===group.id),due=examTrapDue(pool),fresh=pool.filter(card=>!saved.currentKnown[card.id]);currentFlashMode=requestedMode==='review'||(requestedMode==='auto'&&due.length)?'review':'drill';currentFlashDeck=currentFlashMode==='review'?due:(fresh.length?fresh:pool);currentFlashIndex=0;if(!currentFlashDeck.length)return;for(const card of currentFlashDeck)delete saved.examTrapChoices[card.id];localStorage.setItem('zhizhengStats',JSON.stringify(saved));renderCurrentFlash();show('currentFlash')
}
function startCurrentTrainingReview(){
  ensureCurrentReviewData();const today=currentDateKey(),questions=CURRENT_AFFAIRS_QUESTIONS.map(x=>({...x,reviewKind:'question'})),drills=currentDrillPool(CURRENT_AFFAIRS_CARDS).map(x=>({...x,reviewKind:'drill'})),rank=x=>saved.currentReview[x.id]?.rating==='again'?0:saved.currentReview[x.id]?.rating==='fuzzy'?1:2,due=[...questions,...drills].filter(x=>saved.currentReview[x.id]?.next<=today).sort((a,b)=>rank(a)-rank(b)||currentPriority(a)-currentPriority(b));
  if(!due.length)return startCurrentDrills();currentContentKind='review';currentFlashMode='review';currentFlashVolume='全部月份';$('#currentFlashOptions').classList.remove('hidden');currentFlashDeck=due;currentFlashIndex=0;renderCurrentFlash();show('currentFlash')
}
function openCurrentOverview(){ensureCurrentReviewData();const today=currentDateKey(),pool=[...CURRENT_AFFAIRS_QUESTIONS,...currentDrillPool(CURRENT_AFFAIRS_CARDS)];pool.some(x=>saved.currentReview[x.id]?.next<=today)?startCurrentTrainingReview():startCurrentDrills()}
function markCurrentFlash(rating){
  const x=currentFlashDeck[currentFlashIndex],old=saved.currentReview[x.id];saved.currentKnown[x.id]=true;
  const known=rating==='known',fuzzy=rating==='fuzzy';let stage=old?.stage||0,days=1;if(known){stage=Math.max(3,Math.min(stage+1,CURRENT_REVIEW_INTERVALS.length-1));days=CURRENT_REVIEW_INTERVALS[stage]}else if(fuzzy){stage=0;days=1}else{stage=0;days=1}saved.currentReview[x.id]={stage,next:currentDateKey(days),last:currentDateKey(),rating,reviews:(old?.reviews||0)+(old?1:0)};
  localStorage.setItem('zhizhengStats',JSON.stringify(saved));
  if(currentFlashIndex<currentFlashDeck.length-1){currentFlashIndex++;renderCurrentFlash()}else if(currentFlashReturn==='commonDigest'){openCommonDigest()}else if(currentFlashReturn==='majorTopic'){renderMajorTopics();show('majorTopic')}else if(currentFlashReturn==='examTrap'){renderExamTraps();show('examTrap')}else{renderCurrent();show('current')}
}
const KNOWLEDGE_REVIEW_INTERVALS=[1,2,4,7,15,30];
const KNOWLEDGE_DAILY_NEW=8;
KNOWLEDGE_UNITS.forEach((x,index)=>x.courseSourceOrder=index);
KNOWLEDGE_UNITS.splice(0,KNOWLEDGE_UNITS.length,...KNOWLEDGE_UNITS.filter(x=>x.cat==='法律'));
let knowledgeFilter='全部法律',knowledgePage=0,knowledgeFlashMode='new';
function knowledgeLawGroup(x){
  const topic=x.topic||'',title=x.title||'';
  if(['民法','物权','合同','债法','婚姻继承','侵权'].includes(topic)||/民事|物权|合同|继承|侵权/.test(title))return '民法';
  if(topic==='刑法'||/刑事|犯罪|防卫|避险|主刑|附加刑/.test(title))return '刑法';
  if(topic==='行政法'||/行政/.test(title))return '行政法';
  if(topic==='宪法'||/国家机构|国家权力|国家主席|公民基本权利|宪法/.test(title))return '宪法';
  if(topic==='法理学'||/法律渊源|法律效力|规范作用|执法与司法/.test(title))return '法理学';
  return '法律基础'
}
const KNOWLEDGE_COURSE_GROUPS=['民法','刑法','行政法','宪法','法理学'];
const LAW_COURSE_ORDER={
  '民法':['民事权利能力','民事行为能力','宣告失踪与死亡','监护顺序','民事法律行为效力','意思表示瑕疵','代理','诉讼时效','物权变动','善意取得','合同成立与生效','不当得利','无因管理','离婚冷静期','法定继承顺序','特殊侵权责任'],
  '刑法':['刑法基本原则','刑法空间效力','从旧兼从轻','刑事责任年龄','直接故意与间接故意','正当防卫','紧急避险','犯罪未遂与中止','共同犯罪','主刑附加刑'],
  '行政法':['行政法基本原则','行政许可','行政处罚与行政强制','一事不再罚','行政处罚听证','行政复议定位','复议前置','行政复议与行政诉讼'],
  '宪法':['宪法修改','国家权力机关','国家机构职权','国家主席职权','公民基本权利'],
  '法理学':['法的规范作用','正式法律渊源','法律效力冲突','执法与司法']
};
function knowledgeCourseSort(a,b){const ga=knowledgeLawGroup(a),gb=knowledgeLawGroup(b),groupDiff=KNOWLEDGE_COURSE_GROUPS.indexOf(ga)-KNOWLEDGE_COURSE_GROUPS.indexOf(gb);if(groupDiff)return groupDiff;const order=LAW_COURSE_ORDER[ga]||[];return order.indexOf(a.title)-order.indexOf(b.title)}
function ensureKnowledgeReview(){saved.knowledgeDone=saved.knowledgeDone||{};saved.knowledgeReview=saved.knowledgeReview||{};let changed=false;Object.keys(saved.knowledgeDone).forEach(title=>{if(saved.knowledgeDone[title]&&!saved.knowledgeReview[title]){saved.knowledgeReview[title]={stage:0,next:dayString(),last:dayString(),reviews:0,knownStreak:2,mastered:true,rating:'known'};changed=true}});Object.entries(saved.knowledgeReview).forEach(([title,record])=>{if(record.mastered===undefined){record.mastered=Boolean(saved.knowledgeDone[title]);record.knownStreak=record.mastered?2:(record.knownStreak||0);changed=true}});if(changed)localStorage.setItem('zhizhengStats',JSON.stringify(saved))}
function knowledgeDueUnits(units=currentKnowledgeUnits()){ensureKnowledgeReview();const today=dayString();return units.filter(x=>saved.knowledgeReview[x.title]?.next<=today)}
function knowledgeFreshUnits(units=currentKnowledgeUnits()){ensureKnowledgeReview();return units.filter(x=>!saved.knowledgeReview[x.title])}
function interleaveKnowledge(units,limit=KNOWLEDGE_DAILY_NEW){return [...units].sort(knowledgeCourseSort).slice(0,limit)}
function knowledgeSourceMeta(x){const source=String(x.source||''),authoritative=/《[^》]+》|国家法律法规数据库|政府网|新华社|中国政府网/.test(source);return {label:authoritative?'权威原文':'讲义索引',className:authoritative?'authoritative':'lecture',text:source,note:authoritative?'已标明正式文件来源':'用于定位资料；涉及现行法律、数据或政策时需复核原文'}}
function knowledgeExamQuestion(x){
  const q=String(x.q||''),generated=/^判断“.+”相关选项时|^请回忆“.+”的核心结论|的核心考点是什么/.test(q);if(q&&!generated)return q;
  const group=knowledgeLawGroup(x),templates={
    '民法':`题目涉及“${x.title}”时，先核对哪些成立条件，再判断什么法律效果与例外？`,
    '刑法':`题目涉及“${x.title}”时，如何依次判断行为、主观状态与责任边界？`,
    '行政法':`题目涉及“${x.title}”时，如何判断行为性质、法定程序与法律效果？`,
    '宪法':`题目涉及“${x.title}”时，应重点核对哪个主体、哪项职权与何种程序？`,
    '法理学':`题目涉及“${x.title}”时，怎样识别概念边界与常见错配？`
  };return templates[group]||`关于“${x.title}”，应作出什么准确法律判断？`
}
function knowledgeCoreAnswer(x){return x.summary||(x.points||[])[0]||x.m||''}
function knowledgeDecisionSteps(x){const direct=knowledgeCoreAnswer(x);return (x.points||[]).filter(point=>point&&point!==direct).slice(0,2)}
function knowledgeMemoryAid(x){const direct=knowledgeCoreAnswer(x),memory=String(x.m||'');return memory&&memory!==direct&&!/先抓核心定义，再用易错提醒/.test(memory)?memory:''}
function renderKnowledge(){
  const categories=['全部法律','民法','刑法','行政法','宪法','法理学'];
  const categoryCount=x=>x==='全部法律'?KNOWLEDGE_UNITS.length:KNOWLEDGE_UNITS.filter(k=>knowledgeLawGroup(k)===x).length;
  ensureKnowledgeReview();
  $('#knowledgeFilters').innerHTML=categories.map(x=>{const groupUnits=x==='全部法律'?[...KNOWLEDGE_UNITS]:knowledgeGroupUnits(x),learned=groupUnits.filter(k=>saved.knowledgeDone[k.title]).length,total=categoryCount(x);return `<button data-kfilter="${x}"><span>${x}</span><small>${learned}/${total}</small><i>${learned===total?'已完成':'进入学习 →'}</i></button>`}).join('');
  let units=[...KNOWLEDGE_UNITS].sort(knowledgeCourseSort);
  $('#knowledgeCards').innerHTML='';
  const learned=units.filter(x=>saved.knowledgeDone[x.title]).length,due=knowledgeDueUnits(units).length;$('#knowledgeCounter').textContent=`已学 ${learned} / ${units.length} · 到期 ${due}`;$('#knowledgePage').textContent='';
  const reviewButton=$('#knowledgeReview');if(reviewButton){reviewButton.disabled=!due;reviewButton.innerHTML=`今日到期复习 <b>${due}</b>`}
  $$('[data-kfilter]').forEach(b=>b.onclick=()=>startFlash('section',b.dataset.kfilter))
}
let flashDeck=[],flashIndex=0;
function knowledgeCourseSortIndex(x){return [...KNOWLEDGE_UNITS].sort(knowledgeCourseSort).findIndex(item=>item.title===x.title)}
function knowledgeGroupUnits(group){return [...KNOWLEDGE_UNITS].filter(x=>knowledgeLawGroup(x)===group).sort(knowledgeCourseSort)}
function knowledgeGroupIndex(x){return knowledgeGroupUnits(knowledgeLawGroup(x)).findIndex(item=>item.title===x.title)}
function knowledgeModuleName(x){
  const group=knowledgeLawGroup(x),title=x.title||'';
  if(group==='民法'){
    if(/行为能力|权利能力|失踪|死亡|监护|意思表示|代理|时效|法律行为效力/.test(title))return '民事主体与法律行为';
    if(/物权|善意取得/.test(title))return '物权';
    if(/合同|不当得利|无因管理/.test(title))return '债与合同';
    if(/离婚|继承/.test(title))return '婚姻继承';
    return '侵权责任';
  }
  if(group==='刑法')return /主刑|附加刑/.test(title)?'刑罚论':/基本原则|空间效力|从旧兼从轻/.test(title)?'刑法总则':'犯罪论';
  if(group==='行政法')return /复议|诉讼/.test(title)?'行政救济':/处罚|强制|听证|一事不再罚/.test(title)?'行政行为':'基本原则';
  if(group==='宪法')return /权利/.test(title)?'公民基本权利':'国家制度与机构';
  return group==='法理学'?'法理基础':'';
}
function currentKnowledgeUnits(){let units=knowledgeFilter!=='全部法律'?KNOWLEDGE_UNITS.filter(x=>knowledgeLawGroup(x)===knowledgeFilter):[...KNOWLEDGE_UNITS];return units.sort(knowledgeCourseSort)}
function renderFlash(){
  const x=flashDeck[flashIndex];if(!x)return;const sourceMeta=knowledgeSourceMeta(x);
  const direct=knowledgeCoreAnswer(x),steps=knowledgeDecisionSteps(x),memory=knowledgeMemoryAid(x);
  $('#flashAnswer').previousElementSibling.textContent='题目怎么考';$('#flashTrap').previousElementSibling.textContent='排坑结论';
  const group=knowledgeLawGroup(x),groupIndex=knowledgeGroupIndex(x)+1,groupTotal=knowledgeGroupUnits(group).length;
  $('#flashCard').classList.remove('flipped');$('#flashLevel').textContent=`${group} · ${knowledgeModuleName(x)} · ${groupIndex}/${groupTotal}`;$('#flashQuestion').innerHTML=highlightStudyText(x.title,'law');
  const front=$('#flashQuestion').closest('.flash-front');let preview=$('#flashCorePreview');if(!preview){preview=document.createElement('div');preview.id='flashCorePreview';preview.className='flash-core-preview';$('#flashQuestion').after(preview)}
  const memoryRules=(x.points||[]).filter(Boolean);if(!memoryRules.length)memoryRules.push(direct);
  preview.innerHTML=`<div><small>需要记住</small><ul class="law-memory-list">${memoryRules.slice(0,3).map((rule,i)=>`<li><b>${i+1}</b><span>${highlightStudyText(rule,'law')}</span></li>`).join('')}</ul></div><p><b>必须区分</b><span>${highlightStudyText(x.trap,'law')}</span></p>`;
  front.querySelector(':scope>small').textContent='直接记规则 · 对照辨析易混项';front.querySelector(':scope>button').textContent='查看题目会怎么考';
  $('#flashAnswer').innerHTML=highlightStudyText(knowledgeExamQuestion(x),'law');const rawBackPoints=(x.points||[]).filter(Boolean),backPoints=rawBackPoints.length?rawBackPoints.slice(0,3):[direct,`区分：${x.trap}`];$('#flashPoints').hidden=false;$('#flashPoints').innerHTML=backPoints.map((p,i)=>`<li><b>${rawBackPoints.length?String.fromCharCode(9312+i):i===0?'规则':'≠'}</b><span>${highlightStudyText(p,'law')}</span></li>`).join('');const memoryBox=$('#flashMemory').closest('.memory-hook');memoryBox.hidden=!memory;memoryBox.querySelector('small').textContent='记忆抓手';$('#flashMemory').textContent=memory;const trapBox=$('#flashTrap').closest('p');trapBox.hidden=!rawBackPoints.length;$('#flashTrap').innerHTML=highlightStudyText(x.trap,'law');let sourceBox=$('#knowledgeSourceBadge');if(!sourceBox){sourceBox=document.createElement('div');sourceBox.id='knowledgeSourceBadge';trapBox.after(sourceBox)}sourceBox.className=`knowledge-source ${sourceMeta.className}`;sourceBox.innerHTML=`<b>${sourceMeta.label}</b><span>${escapeHTML(sourceMeta.text)}</span>`;$('#flashProgress').textContent=`本组 ${groupIndex} / ${groupTotal}　·　本次 ${flashIndex+1} / ${flashDeck.length}`;$('#flashPrev').disabled=flashIndex===0;$('#flashNext').disabled=flashIndex===flashDeck.length-1;
  $('#flashTopic').textContent=knowledgeFlashMode==='review'?'法律到期复习':knowledgeFlashMode==='new'?'按课程顺序新学':knowledgeFlashMode==='section'?`${knowledgeLawGroup(x)} · 连续学习`:'法律常识闪卡';
  saved.knowledgeDone=saved.knowledgeDone||{};$('#flashKnown').textContent=saved.knowledgeDone[x.title]?'已记住 ✓':'记住了 ✓';$('#flashFlipBack').textContent=flashIndex===flashDeck.length-1?'学完本组，返回目录 ✓':'学完了，下一张 →'
  updateStarButton($('#flashStar'),`law:${x.title}`)
}
function startFlash(mode='new',value='',startTitle=''){
  ensureKnowledgeReview();const all=[...KNOWLEDGE_UNITS].sort(knowledgeCourseSort),units=currentKnowledgeUnits();knowledgeFlashMode=mode;
  if(mode==='review')flashDeck=interleaveKnowledge(knowledgeDueUnits(all),999);
  else if(mode==='section'){
    const section=value==='全部法律'?all:all.filter(x=>knowledgeLawGroup(x)===value);
    let startAt=startTitle?section.findIndex(x=>x.title===startTitle):section.findIndex(x=>!saved.knowledgeReview[x.title]?.mastered);
    if(startAt<0)startAt=0;
    flashDeck=section.slice(startAt).concat(section.slice(0,startAt));
  }else flashDeck=interleaveKnowledge(knowledgeFreshUnits(all));
  if(!flashDeck.length)flashDeck=mode==='new'?interleaveKnowledge(all):units;
  flashIndex=0;renderFlash();show('flash')
}
function markFlash(rating){const x=flashDeck[flashIndex];ensureKnowledgeReview();const old=saved.knowledgeReview[x.title]||{stage:0,reviews:0,knownStreak:0},known=rating==='known',fuzzy=rating==='fuzzy';let stage=old.stage||0,days=0,knownStreak=known?(old.knownStreak||0)+1:0;if(known){days=KNOWLEDGE_REVIEW_INTERVALS[stage];stage=Math.min(stage+1,KNOWLEDGE_REVIEW_INTERVALS.length-1)}else if(fuzzy){days=1}else{stage=0;days=0}const mastered=knownStreak>=2;saved.knowledgeDone[x.title]=mastered;saved.knowledgeReview[x.title]={stage,next:addDays(days),last:dayString(),reviews:(old.reviews||0)+1,rating,knownStreak,mastered};localStorage.setItem('zhizhengStats',JSON.stringify(saved));if(flashIndex<flashDeck.length-1){flashIndex++;renderFlash()}else{renderKnowledge();show('knowledge')}}
function openPolitics(){show('home');renderSections();stats();$$('[data-main]').forEach(x=>x.classList.toggle('selected',x.dataset.main==='politics'))}
function enhanceKnowledgeUI(){
  if(!$('#knowledgeReview')){const button=document.createElement('button');button.id='knowledgeReview';button.className='knowledge-review';button.textContent='今日先复习 0';$('#flashStart').before(button)}
  if(!$('#flashFuzzy')){const button=document.createElement('button');button.id='flashFuzzy';button.textContent='有点模糊';$('#flashKnown').before(button)}
  const hint=$('.knowledge-toolbar p');if(hint)hint.textContent='按课程顺序学习 · 到期内容单独复习';
}
function openKnowledge(){openCommonDigest()}
function openLawKnowledge(){knowledgePage=0;renderKnowledge();show('knowledge');$$('[data-main]').forEach(x=>x.classList.toggle('selected',x.dataset.main==='knowledge'))}
$('#openTheory').onclick=()=>{show('home');renderSections();stats()};$('#openCurrent').onclick=()=>{renderCurrent();show('current')};$('#openKnowledge').onclick=openKnowledge;
$('#theoryEntry').onclick=()=>{show('home');renderSections();stats()};$('#currentEntry').onclick=()=>{renderCurrent();show('current')};$('#majorTopicEntry').onclick=()=>{renderMajorTopics();show('majorTopic')};$('#examTrapEntry').onclick=()=>{renderExamTraps();show('examTrap')};
$$('.back-hub').forEach(b=>b.onclick=openPolitics);$$('[data-main]').forEach(b=>b.onclick=()=>b.dataset.main==='knowledge'?openKnowledge():b.dataset.main==='sprint'?openSprintDigest():openPolitics());$$('[data-politics-view]').forEach(b=>b.onclick=()=>{if(b.dataset.politicsView==='current'){renderCurrent();show('current')}else if(b.dataset.politicsView==='majorTopic'){renderMajorTopics();show('majorTopic')}else if(b.dataset.politicsView==='examTrap'){renderExamTraps();show('examTrap')}else{renderSections();stats();show('home')}});$('.brand').onclick=e=>{e.preventDefault();openPolitics()};
$('#knowledgePrev').onclick=()=>{if(knowledgePage>0){knowledgePage--;renderKnowledge()}};$('#knowledgeNext').onclick=()=>{knowledgePage++;renderKnowledge()};
enhanceKnowledgeUI();$('#flashStart').onclick=()=>knowledgeFilter==='全部法律'?startFlash('new'):startFlash('section',knowledgeFilter);$('#knowledgeReview').onclick=()=>startFlash('review');$('#flashBack').onclick=()=>{renderKnowledge();show('knowledge')};$('#flashFlip').onclick=()=>$('#flashCard').classList.add('flipped');$('#flashFlipBack').onclick=()=>markFlash('known');$('#flashPrev').onclick=()=>{if(flashIndex>0){flashIndex--;renderFlash()}};$('#flashNext').onclick=()=>{if(flashIndex<flashDeck.length-1){flashIndex++;renderFlash()}};$('#flashKnown').onclick=()=>markFlash('known');$('#flashFuzzy').onclick=()=>markFlash('fuzzy');$('#flashAgain').onclick=()=>markFlash('again');
$('#digestStar').onclick=()=>{const note=digestNote();if(note)toggleStar(note,$('#digestStar'))};$('#currentFlashStar').onclick=()=>{const note=currentNote();if(note)toggleStar(note,$('#currentFlashStar'))};$('#flashStar').onclick=()=>{const note=lawNote();if(note)toggleStar(note,$('#flashStar'))};$('#notebookEntry').onclick=openNotebook;$('#notebookBack').onclick=()=>{show(notebookReturn);const sprintSide=notebookReturn==='sprint'||(notebookReturn==='commonQuick'&&commonQuickGroup.startsWith('sprint'));const knowledgeSide=['knowledge','flash','commonDigest'].includes(notebookReturn)||(notebookReturn==='commonQuick'&&!sprintSide)||(notebookReturn==='currentFlash'&&currentFlashReturn==='commonDigest');$$('.subject-nav button').forEach(button=>button.classList.toggle('selected',button.dataset.main===(sprintSide?'sprint':knowledgeSide?'knowledge':'politics')))};$('#notebookClear').onclick=()=>{if(confirm('确定清空全部标星笔记吗？')){saved.starred={};saveStarred();renderNotebook()}};
const currentFlashFuzzy=document.createElement('button');currentFlashFuzzy.id='currentFlashFuzzy';currentFlashFuzzy.textContent='有点模糊';$('#currentFlashKnown').before(currentFlashFuzzy);
$('#currentAll').onclick=openCurrentOverview;$('#currentDigestAll').onclick=()=>startCurrentDrills();$('#majorTopicAll').onclick=()=>startMajorTopic();$('#majorDigestAll').onclick=()=>startMajorTopic();$('#examTrapAll').onclick=()=>startExamTrap();$('#examTrapReview').onclick=()=>startExamTrap(null,'review');$('#currentFlashBack').onclick=()=>{if(currentFlashReturn==='commonDigest'){openCommonDigest()}else if(currentFlashReturn==='majorTopic'){renderMajorTopics();show('majorTopic')}else if(currentFlashReturn==='examTrap'){renderExamTraps();show('examTrap')}else{renderCurrent();show('current')}};$('#currentFlashFlip').onclick=revealCurrentFlash;$('#currentFlashPrev').onclick=()=>{if(currentFlashIndex>0){currentFlashIndex--;renderCurrentFlash()}};$('#currentFlashNext').onclick=()=>{if(currentFlashIndex<currentFlashDeck.length-1){currentFlashIndex++;renderCurrentFlash()}else if(currentContentKind==='examTrap'&&typeof saved.examTrapChoices?.[currentFlashDeck[currentFlashIndex]?.id]==='boolean'){renderExamTraps();show('examTrap')}};$('#currentFlashKnown').onclick=()=>markCurrentFlash('known');currentFlashFuzzy.onclick=()=>markCurrentFlash('fuzzy');$('#currentFlashAgain').onclick=()=>markCurrentFlash('again');
$('#currentFlashCard .flash-front').onclick=event=>{if(currentContentKind==='examTrap'&&event.target===event.currentTarget&&typeof saved.examTrapChoices?.[currentFlashDeck[currentFlashIndex]?.id]==='boolean')$('#currentFlashNext').click()};
$('#currentFlashView .flash-stage').onclick=event=>{if(currentContentKind==='examTrap'&&(event.target===event.currentTarget||event.target===$('#currentFlashCard'))&&typeof saved.examTrapChoices?.[currentFlashDeck[currentFlashIndex]?.id]==='boolean')$('#currentFlashNext').click()};
$('#currentNoteVolume').innerHTML=currentNoteVolumeOptions();$('#currentNotesFilter').innerHTML=currentNoteVolumeOptions(true);$('#currentNotesEntry').onclick=openCurrentNotes;$('#currentNotesBack').onclick=()=>{closeCurrentNoteImage();resetCurrentNoteEditor();renderCurrent();show('current')};$('#currentNoteSave').onclick=()=>saveCurrentNote().catch(error=>{console.error(error);alert('保存失败，请稍后再试。')});$('#currentNoteCancel').onclick=resetCurrentNoteEditor;$('#currentNoteImages').onchange=event=>{addCurrentNoteFiles(event.target.files);event.target.value=''};$('#currentNoteText').onpaste=event=>{const files=[...event.clipboardData.items].filter(item=>item.type.startsWith('image/')).map(item=>item.getAsFile()).filter(Boolean);if(files.length){event.preventDefault();addCurrentNoteFiles(files)}};$('#currentNotesFilter').onchange=renderCurrentNotes;$('#currentNoteLightboxClose').onclick=closeCurrentNoteImage;$('#currentNoteLightbox').onclick=event=>{if(event.target===$('#currentNoteLightbox'))closeCurrentNoteImage()};document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#currentNoteLightbox').classList.contains('hidden'))closeCurrentNoteImage()});
$('#today').textContent=new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'short'}).format(new Date());renderCountChoice();renderSections();stats();renderCurrent();renderMajorTopics();renderExamTraps();renderKnowledge();loadCurrentNotes();openPolitics();
