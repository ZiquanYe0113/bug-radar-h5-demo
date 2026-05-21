const icons = {
  radar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="3"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  walk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13" cy="5" r="2"/><path d="m9 22 3-7-3-3 3-4 4 2 3 1"/><path d="m14 15 4 7"/></svg>`,
  bite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 4c1 5 7 5 8 0M5 12h14M8 20c1-5 7-5 8 0"/><path d="M12 7v10"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/><rect x="4" y="4" width="16" height="16" rx="3"/></svg>`,
  bug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Z"/><path d="M7 8H3M7 14H3M17 8h4M17 14h4M9 3l2 2M15 3l-2 2M9 19l-2 2M15 19l2 2"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>`
};

const appConfig = window.APP_CONFIG || {};
const defaultLocation = appConfig.defaultLocation || {
  name: "杭州",
  latitude: 30.2741,
  longitude: 120.1551
};
const weatherConfig = appConfig.weather || {};
const amapConfig = appConfig.amap || {};
const supabaseConfig = appConfig.supabase || {};

const bugs = [
  { id: "midge", name: "蠓", alias: "小咬、小黑蚊、墨蚊、咬蠓", priority: "P0", danger: "中", tags: ["近水", "湿地", "草丛", "山脚", "树荫", "潮湿"], scene: "西湖景区山脚、余杭/临安山地、溪流河渠、树荫潮湿点位", feature: "体型很小，常仅 1-4 毫米，黑色或深褐色；停在皮肤上像黑点。", bite: "会叮咬，多发红斑、丘疹、肿块，瘙痒明显，部分人可持续数日。", protect: "离开背阴潮湿点位；穿浅色长袖长裤；使用含 DEET、派卡瑞丁等有效成分的驱避产品并按说明补涂。", care: "清洁叮咬处，冷敷，避免抓挠；瘙痒明显可咨询药师或医生。", doctor: "红肿持续扩大、明显疼痛或发热、渗液化脓、出现全身不适时建议就医。", note: "与摇蚊区别：摇蚊常成团飞舞但通常不咬人；蠓更小，更贴近皮肤叮咬。", commerce: "户外驱避产品、皮肤止痒护理、附近药店/皮肤科", verify: "需昆虫/疾控核验" },
  { id: "mosquito", name: "蚊子", alias: "库蚊、伊蚊、按蚊等", priority: "P0", danger: "中", tags: ["积水", "绿化", "近水", "小区", "室内"], scene: "小区、家中、江边、公园、积水点、地下车库、绿化带", feature: "细长身体、长足，不同蚊种体色和花纹不同。", bite: "雌蚊吸血叮咬，常见局部红肿、瘙痒、风团样丘疹。", protect: "清除积水；安装纱窗纱门；户外使用有效驱蚊剂；夜间可用蚊帐、电蚊拍。", care: "清洗叮咬处，冷敷止痒，避免抓破；儿童和敏感人群用药需谨慎。", doctor: "出现发热、皮疹、头痛、关节痛等全身症状，或叮咬处感染迹象，建议就医并说明叮咬史。", note: "不要只按包的形状判断虫种，要结合时间、地点、是否看到虫、暴露部位。", commerce: "驱蚊用品、纱窗纱门、灭蚊灯、社区灭蚊服务", verify: "基础可信，需本地化核验" },
  { id: "chironomid", name: "摇蚊", alias: "不咬人的蚊子、湖蝇", priority: "P0", danger: "低", tags: ["湖边", "河边", "湿地", "灯光", "成团飞舞"], scene: "西湖景区湖岸、京杭运河沿线、钱塘江边、夜间灯光附近", feature: "像小蚊子，常成团飞舞；口器退化，通常不吸血不咬人。", bite: "通常不叮咬，主要造成视觉和体感骚扰。", protect: "避开成团飞舞区域；戴口罩或眼镜；关好纱窗，减少夜间灯光吸引。", care: "一般无需皮肤处理；若同时出现红斑，应考虑蠓、蚋、蚊等其他虫类。", doctor: "如出现明显皮肤反应，按虫咬或过敏处理并排查其他虫源。", note: "作为相似但通常不咬的关键辨识项，避免把所有小飞虫都当成危险虫。", commerce: "防飞虫纱窗、景区提示、社区科普", verify: "本地报道支持，需专家核验" },
  { id: "blackfly", name: "蚋", alias: "黑蝇、蚋虫", priority: "P1", danger: "中", tags: ["溪流", "河边", "山涧", "湿地", "户外"], scene: "溪流、山涧、河边、湿地、植被多的户外区域", feature: "体型较小，常呈黑色或深色，背部拱起。", bite: "部分种类会叮咬吸血，可红肿、瘙痒或疼痛。", protect: "溪流、山涧活动时提高衣物覆盖，避开虫群，使用有效驱避产品。", care: "清洁、冷敷、避免抓挠；症状重者咨询医生或药师。", doctor: "红肿严重、过敏反应、感染迹象或全身症状需就医。", note: "首版作为小型吸血飞虫候选项，不承诺精确识别到种。", commerce: "户外防护用品、药店、皮肤科", verify: "需昆虫/疾控核验" },
  { id: "tick", name: "蜱虫", alias: "草爬子、壁虱", priority: "P1", danger: "高", tags: ["草丛", "林地", "山地", "宠物", "徒步"], scene: "山地、草丛、林地、宠物活动区域、郊野徒步", feature: "八足，吸血后体积会膨大，常附着在皮肤较薄或隐蔽部位。", bite: "会叮咬并吸血，可长时间附着，部分蜱可传播病原体。", protect: "草丛林地穿长袖长裤并扎紧裤脚；回家检查身体和宠物；使用适合蜱虫的驱避产品。", care: "不要拍打、硬拽或用刺激物；用细尖镊子贴近皮肤稳定向上取出，保留虫体并消毒。", doctor: "被蜱叮咬后出现发热、乏力、皮疹、头痛、肌肉痛，或无法完整取出，应尽快就医。", note: "高风险内容必须专家核验，产品应给出明确就医提醒。", commerce: "户外防蜱用品、宠物驱虫、附近医院/皮肤科", verify: "必须专家核验" },
  { id: "rove", name: "隐翅虫", alias: "青腰虫、影子虫", priority: "P1", danger: "中", tags: ["灯光", "潮湿", "绿化", "楼道", "室内误入"], scene: "夏季灯光附近、草地、潮湿绿化、小区楼道、室内误入", feature: "身体细长，常见黑橙或黑红相间。", bite: "通常不叮咬，风险来自拍打或压碎后的体液接触。", protect: "停在皮肤上不要拍打，轻轻吹走或抖落；关纱窗，减少夜间灯光吸引。", care: "疑似接触后及时用清水或肥皂水冲洗；避免抓挠；症状明显及时就医。", doctor: "出现水疱、糜烂、眼周接触、疼痛明显或范围扩大，应就医。", note: "必须强调不要拍打这一禁忌动作。", commerce: "纱窗、防虫灯光、皮肤科", verify: "需皮肤科/疾控核验" },
  { id: "flea", name: "跳蚤", alias: "蚤", priority: "P1", danger: "中", tags: ["宠物", "草地", "旧房", "床垫", "地毯"], scene: "宠物家庭、草地、旧房、床垫地毯、流浪猫狗活动区域", feature: "小而深色，侧扁，善跳，肉眼可见但移动快。", bite: "常在小腿、脚踝形成成簇或成线红疹，瘙痒明显。", protect: "宠物定期驱虫；清洗宠物窝、床品、地毯；吸尘并处理尘袋。", care: "叮咬处清洁止痒，避免抓破；同时处理宠物和家庭环境。", doctor: "严重过敏、感染迹象、儿童大面积反应，建议就医。", note: "只处理人身叮咬不够，必须处理宠物和环境。", commerce: "宠物驱虫、家庭清洁、消杀服务、药店", verify: "基础可信，需本地化核验" },
  { id: "cockroach", name: "蟑螂", alias: "蜚蠊", priority: "P1", danger: "中", tags: ["厨房", "卫生间", "餐饮", "老小区", "下水道"], scene: "厨房、卫生间、餐饮密集区、老旧小区、地下室、下水道附近", feature: "扁平椭圆，夜间活动，常藏在缝隙、橱柜、管道周边。", bite: "通常不以叮咬人为主要问题。", protect: "封堵缝隙，清理食物残渣和积水，垃圾密封，使用合规灭蟑胶饵或诱饵。", care: "小范围先做清洁、封堵和胶饵；严重时建议找专业消杀。", doctor: "若出现明显过敏或哮喘加重，应咨询医生。", note: "科普建议和商业推荐要分离，避免恐慌式销售。", commerce: "上门消杀、灭蟑产品、厨房清洁、物业反馈", verify: "基础可信，需消杀专家核验" },
  { id: "drainfly", name: "蛾蚋", alias: "下水道小飞虫、蛾蠓", priority: "P2", danger: "低", tags: ["卫生间", "厨房", "地漏", "下水道", "潮湿"], scene: "卫生间、厨房地漏、下水管、潮湿角落", feature: "小型飞虫，翅膀有绒毛感，飞行能力弱，常停在墙面或地漏附近。", bite: "通常不叮咬，提示下水道或地漏清洁问题。", protect: "清洁地漏和管道内壁，保持干燥，检查水封，安装防虫地漏。", care: "连续清洁源头比单纯喷杀虫剂更关键。", doctor: "通常无叮咬就医需求；皮肤症状明显需考虑其他虫源。", note: "不应与吸血小飞虫混为一谈。", commerce: "地漏防虫、管道清洁、家庭保洁", verify: "需消杀/环境卫生核验" },
  { id: "fruitfly", name: "果蝇", alias: "水果小飞虫", priority: "P2", danger: "低", tags: ["厨房", "水果", "垃圾桶", "餐厨垃圾", "发酵"], scene: "厨房、水果、垃圾桶、发酵食物、餐厨垃圾", feature: "小型飞虫，常围绕水果、垃圾桶、发酵食物飞行。", bite: "不叮咬，主要造成食品卫生和居家烦扰。", protect: "及时处理过熟水果和厨余垃圾，清洁台面，密封垃圾桶。", care: "先清除滋生源，再使用诱捕方式辅助控制。", doctor: "通常无叮咬就医需求；皮肤红疹应排查其他虫源。", note: "果蝇多在水果/垃圾周边，蛾蚋多在地漏/下水道。", commerce: "厨房清洁、垃圾桶密封、果蝇诱捕器", verify: "需环境卫生核验" }
];

const scenarios = [
  ["西湖景区山脚短停", "出行", ["茶园溪谷", "树荫", "潮湿", "近水", "久坐"], "蠓", "高", "蚊子、蚋、摇蚊", "九溪、龙井、灵隐周边的背阴椅子、溪沟边、茶园草木边。小黑点贴肤叮咬后多发红斑瘙痒，优先按蠓处理。"],
  ["西湖湖岸/运河散步遇虫团", "出行", ["湖岸", "河道", "成团飞舞", "灯光", "不贴肤"], "摇蚊", "低", "蚊子、蠓", "西湖湖岸、京杭运河沿线、桥下灯光附近。成团飞舞但不贴肤叮咬时，多数先按摇蚊骚扰处理。"],
  ["小区绿化带傍晚遛弯", "出行", ["小区", "绿化", "积水", "傍晚", "地下车库"], "蚊子", "高", "蠓、隐翅虫", "老小区绿化带、地下车库、花盆托盘、水培植物和雨后积水点。叮咬高频主角通常是蚊子。"],
  ["西溪湿地/湘湖/公园停留", "出行", ["湿地", "芦苇", "草地", "近水", "傍晚"], "蚊子", "高", "蠓、摇蚊、蚋", "湿地栈道、芦苇草地、公园近水草坪。蚊子最常见；若是极小黑点贴肤叮咬，再提高蠓权重。"],
  ["余杭/临安/富阳山地徒步", "出行", ["山地", "林地", "草丛", "灌木", "遛狗"], "蜱虫", "高", "蚊子、蠓、蚋", "径山、临安、富阳等低山林地、草丛、灌木边和宠物穿行处。蜱虫不一定高频，但一旦附着风险高。"],
  ["萧山/钱塘村镇河渠傍晚", "出行", ["河渠", "农田", "菜地", "积水", "傍晚"], "蚊子", "高", "蠓、蚋", "村镇河渠、农田菜地边、雨后坑洼积水处。最稳定的高频判断是蚊子，近草木潮湿处再考虑蠓。"],
  ["钱塘江边夜跑/露营", "出行", ["江边", "草坪", "灯光", "风小", "夜间"], "蚊子", "中", "摇蚊、蠓", "江边草坪、堤岸灯光附近、风小的夜间停留点。风大时飞虫少，风小且近草坪时蚊子权重上升。"],
  ["宠物去草地后人腿脚成串红疹", "出行", ["宠物", "草地", "流浪猫狗", "脚踝", "成串"], "跳蚤", "中", "蚊子、蜱虫", "宠物活动草地、流浪猫狗出没点、旧小区草坪。脚踝和小腿成串红疹时，跳蚤优先级升高。"]
];

const state = {
  biteScene: "西湖景区山脚",
  bitePattern: "多个红斑肿块",
  sighting: "贴肤小黑点",
  familyBug: "mosquito",
  planScenario: "西湖景区山脚短停",
  reportType: "被咬了",
  weather: {
    status: "idle",
    summary: "等待联网获取",
    temperature: null,
    humidity: null,
    precipitation: null,
    wind: null
  },
  remoteReports: [],
  remoteReportsLoaded: false,
  remoteStatus: "local"
};

const imageManifest = {
  placeholders: {
    bug: "./assets/images/bugs/placeholder-bug.svg",
    bite: "./assets/images/bites/placeholder-bite.svg",
    habitat: "./assets/images/habitats/placeholder-habitat.svg"
  },
  meta: {
    placeholderSource: "本地占位图",
    placeholderLicense: "待替换为自有拍摄或开放授权素材",
    insectVerify: "待昆虫/疾控核验",
    medicalVerify: "待医学/隐私核验"
  }
};

function icon(name) {
  return `<span class="icon" aria-hidden="true">${icons[name] || icons.bug}</span>`;
}

function bugByName(name) {
  return bugs.find((bug) => bug.name === name) || bugs[0];
}

function bugById(id) {
  return bugs.find((bug) => bug.id === id) || bugs[0];
}

function scenarioByName(name) {
  return scenarios.find((scenario) => scenario[0] === name) || scenarios[0];
}

function levelClass(level) {
  if (level === "高") return "high";
  if (level === "中") return "mid";
  return "low";
}

function scoreBugs(tags, options = {}) {
  const monthBoost = options.monthBoost ?? true;
  return bugs.map((bug) => {
    let score = bug.priority === "P0" ? 24 : bug.priority === "P1" ? 16 : 8;
    tags.forEach((tag) => {
      if (bug.tags.some((bugTag) => tag.includes(bugTag) || bugTag.includes(tag))) score += 16;
      if (bug.scene.includes(tag)) score += 8;
      if (bug.bite.includes(tag) || bug.feature.includes(tag) || bug.note.includes(tag)) score += 9;
    });
    if (monthBoost && ["蠓", "蚊子", "蚋", "隐翅虫", "蜱虫"].includes(bug.name)) score += 8;
    if (options.indoor && ["蟑螂", "蛾蚋", "果蝇", "跳蚤", "蚊子"].includes(bug.name)) score += 12;
    if (options.seen && bug.name === options.seen) score += 20;
    return { bug, score: Math.min(score, 98) };
  }).sort((a, b) => b.score - a.score);
}

function riskLevel(score) {
  if (score >= 70) return "高";
  if (score >= 46) return "中";
  return "低";
}

function matchLabel(score) {
  if (score >= 70) return "高度匹配";
  if (score >= 46) return "中度匹配";
  return "低度匹配";
}

function scenarioRiskScore(row) {
  const base = row[4] === "高" ? 86 : row[4] === "中" ? 62 : 34;
  const priorityBoost = bugByName(row[3]).priority === "P0" ? 8 : 0;
  return Math.min(base + priorityBoost, 96);
}

function topScenarioRows(limit = 4) {
  return [...scenarios]
    .sort((a, b) => scenarioRiskScore(b) - scenarioRiskScore(a))
    .slice(0, limit);
}

function supabaseEnabled() {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey && supabaseConfig.table);
}

function amapEnabled() {
  return Boolean(amapConfig.key);
}

function configStatusLabel(enabled) {
  return enabled ? "已配置" : "未配置";
}

function weatherRiskHint() {
  const { humidity, precipitation, wind } = state.weather;
  if (humidity === null) return "未接入前使用本地规则。";
  if (humidity >= 78 && wind <= 2.5) return "湿度高、风小，近水和绿化点位虫感会更明显。";
  if (precipitation > 0) return "降雨会增加积水线索，雨后小区和河渠需重点关注。";
  if (wind >= 5) return "风较大，江边和开阔地飞虫活动通常会下降。";
  return "天气条件平稳，继续按地点微环境判断。";
}

function integrationPanel() {
  return `
    <section class="section">
      <div class="section-head">
        <h2>联网 MVP 状态</h2>
        <span class="subtle">第一阶段接口基座</span>
      </div>
      <div class="integration-grid">
        ${weatherCard()}
        ${mapStatusCard()}
        ${dbStatusCard()}
      </div>
    </section>
  `;
}

function weatherCard() {
  const weather = state.weather;
  const badgeClass = weather.status === "error" ? "mid" : "low";
  const metric = weather.status === "ready"
    ? `${Math.round(weather.temperature)}°C · 湿度 ${Math.round(weather.humidity)}%`
    : weather.summary;
  return `
    <article class="integration-card">
      <div class="integration-title">
        <span class="status-dot ${weather.status === "ready" ? "ok" : ""}"></span>
        <strong>天气风险</strong>
        <span class="pill ${badgeClass}">${weather.status === "ready" ? "已联网" : "演示"}</span>
      </div>
      <div class="weather-metric">${metric}</div>
      <p class="subtle">${weatherRiskHint()}</p>
    </article>
  `;
}

function mapStatusCard() {
  const enabled = amapEnabled();
  return `
    <article class="integration-card">
      <div class="integration-title">
        <span class="status-dot ${enabled ? "ok" : ""}"></span>
        <strong>地图定位</strong>
        <span class="pill ${enabled ? "low" : "mid"}">${configStatusLabel(enabled)}</span>
      </div>
      <div id="amap-container" class="amap-box ${enabled ? "" : "fallback"}">
        <span>${enabled ? "正在加载高德地图" : "未填高德 Key，先显示杭州示意底图"}</span>
      </div>
      <p class="subtle">接入后可把上报按经纬度聚合到附近风险。</p>
    </article>
  `;
}

function dbStatusCard() {
  const enabled = supabaseEnabled();
  const label = enabled ? (state.remoteStatus === "ready" ? "已连接" : "已配置") : "本地";
  return `
    <article class="integration-card">
      <div class="integration-title">
        <span class="status-dot ${state.remoteStatus === "ready" ? "ok" : ""}"></span>
        <strong>上报数据库</strong>
        <span class="pill ${enabled ? "low" : "mid"}">${label}</span>
      </div>
      <div class="weather-metric">${enabled ? "Supabase REST" : "localStorage"}</div>
      <p class="subtle">${enabled ? "上报会先本地保存，再同步到云端表。" : "未配置 Supabase 前，上报只保存在当前浏览器。"}</p>
      <button class="secondary-btn compact" data-route="admin">${icon("report")}查看后台</button>
    </article>
  `;
}

function photoItem(kind, label, src, options = {}) {
  return {
    kind,
    label,
    src,
    source: options.source || imageManifest.meta.placeholderSource,
    license: options.license || imageManifest.meta.placeholderLicense,
    verify: options.verify || (kind === "叮咬反应" ? imageManifest.meta.medicalVerify : imageManifest.meta.insectVerify)
  };
}

function bugImageSet(bug) {
  return [
    photoItem("虫体", `${bug.name}虫体`, imageManifest.placeholders.bug),
    photoItem("环境", "典型场景", imageManifest.placeholders.habitat),
    photoItem("叮咬反应", "叮咬/接触反应", imageManifest.placeholders.bite)
  ];
}

function biteImageSet() {
  return [
    photoItem("叮咬反应", "多发红斑", imageManifest.placeholders.bite),
    photoItem("叮咬反应", "成串脚踝", imageManifest.placeholders.bite),
    photoItem("叮咬反应", "条索状红斑", imageManifest.placeholders.bite)
  ];
}

function seenImageSet() {
  return [
    photoItem("虫体", "虫体近照", imageManifest.placeholders.bug),
    photoItem("环境", "停留环境", imageManifest.placeholders.habitat),
    photoItem("特征", "对比特征", imageManifest.placeholders.bug)
  ];
}

function normalizePhotoItem(item) {
  if (typeof item === "string") {
    return photoItem("占位", item, imageManifest.placeholders.bug);
  }
  return item;
}

function photoStrip(title, items, note) {
  const normalized = items.map(normalizePhotoItem);
  return `
    <article class="photo-panel card">
      <div class="section-head">
        <h2>${title}</h2>
        <span class="pill low">素材接口</span>
      </div>
      <div class="photo-grid">
        ${normalized.map(photoCard).join("")}
      </div>
      <p class="subtle">${note}</p>
    </article>
  `;
}

function photoCard(item) {
  return `
    <figure class="photo-slot">
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <figcaption>
        <strong>${item.label}</strong>
        <span>${item.kind}</span>
        <small>来源：${item.source}</small>
        <small>${item.verify}</small>
      </figcaption>
    </figure>
  `;
}

function appFrame(content) {
  const route = location.hash.replace("#/", "").split("?")[0] || "home";
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">${icons.radar}</div>
        <div>
          <h1 class="brand-title">虫情雷达</h1>
          <div class="brand-sub">杭州春夏首发版</div>
        </div>
      </div>
      <button class="location-chip" data-route="report">${icon("pin")}杭州</button>
    </header>
    <main>${content}</main>
    <button class="demo-guide-btn" data-route="demo">${icon("eye")}演示指南</button>
    <nav class="bottom-nav" aria-label="核心页面">
      ${navItem("home", "首页", "radar", route)}
      ${navItem("bite", "被咬了", "bite", route)}
      ${navItem("seen", "看到虫", "eye", route)}
      ${navItem("family", "家庭", "home", route)}
      ${navItem("report", "上报", "report", route)}
    </nav>
  `;
}

function navItem(routeName, label, iconName, activeRoute) {
  return `<a class="nav-btn ${activeRoute === routeName ? "active" : ""}" href="#/${routeName}">${icon(iconName)}<span>${label}</span></a>`;
}

function renderHome() {
  const todayScenarios = topScenarioRows(4);
  const focusedScenario = scenarioByName(state.planScenario);
  const topScenario = todayScenarios.some((row) => row[0] === focusedScenario[0]) ? focusedScenario : todayScenarios[0];
  const topBug = bugByName(topScenario[3]);
  const topScore = scenarioRiskScore(topScenario);
  const level = topScenario[4];
  const ranked = todayBugRanking(todayScenarios);
  const summary = reportSummary(topScenario);
  return appFrame(`
    <section class="hero-risk">
      <p class="hero-kicker">今日附近虫情风险</p>
      <h2>今日优先关注：${topScenario[0]}</h2>
      <p>最可能虫类是${topBug.name}。首发版按真实高频微环境排序：蠓偏背阴潮湿点，蚊子偏积水和傍晚绿化，摇蚊多是湖岸河道虫团且通常不咬人，蜱虫低频但高危。</p>
      <div class="risk-meter">
        <div class="meter-track"><div class="meter-fill" style="width:${topScore}%"></div></div>
        <div class="risk-level"><strong>${level}</strong><span>风险</span></div>
      </div>
      <div class="focus-strip">
        <span>你关注的场景</span>
        <strong>${topScenario[0]}</strong>
      </div>
      <div class="focus-strip">
        <span>附近 7 天上报</span>
        <strong>${summary.count} 条 · ${summary.recentBug}</strong>
      </div>
      <div class="quick-actions">
        <a class="primary-btn" href="#/bite">${icon("bite")}我被咬了</a>
        <a class="secondary-btn" href="#/seen">${icon("eye")}看到虫了</a>
      </div>
    </section>

    ${integrationPanel()}

    <section class="section">
      <div class="section-head">
        <h2>三个问题入口</h2>
        <span class="subtle">A+C 首页结构</span>
      </div>
      <div class="grid-3">
        <button class="entry-btn" data-route="home-plan">${icon("walk")}<strong>我要出门</strong><span>目的地风险和装备</span></button>
        <button class="entry-btn" data-route="bite">${icon("bite")}<strong>我被咬了</strong><span>可能虫类和处理</span></button>
        <button class="entry-btn" data-route="family">${icon("home")}<strong>我家有虫</strong><span>排查清单和治理</span></button>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>今日重点虫类</h2>
        <a class="text-btn" href="#/detail?id=${ranked[0].bug.id}">查看详情</a>
      </div>
      <div class="risk-list">
        ${ranked.map((item, index) => riskItem(item, index + 1)).join("")}
      </div>
    </section>

    <section class="section radar card">
      <div class="section-head">
        <h2>杭州首发遇虫地点</h2>
        <span class="pill high">真实场景优先</span>
      </div>
      <div class="map-board" aria-label="杭州虫情风险示意图">
        <div class="water-line"></div>
        <div class="hotspot" style="left:22%;top:38%"><span>西湖山脚</span></div>
        <div class="hotspot" style="left:54%;top:28%"><span>运河湖岸</span></div>
        <div class="hotspot" style="left:72%;top:63%"><span>萧山河渠</span></div>
        <div class="hotspot" style="left:32%;top:70%"><span>余杭山地</span></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>今日重点出行场景</h2>
      </div>
      <div class="scenario-list">
        ${todayScenarios.map(scenarioCard).join("")}
      </div>
    </section>
  `);
}

function renderDemoGuide() {
  return appFrame(`
    <button class="back-btn" data-route="home">${icon("back")}返回首页</button>
    <section class="page-title">
      <h1>演示指南</h1>
      <p>这是一版杭州春夏虫情雷达 H5 Demo，用规则模型演示“出门前看风险、现场遇虫判断、被咬后处理、用户上报反哺风险”的闭环。</p>
    </section>
    <section class="panel">
      <div class="section-head">
        <h2>三条主路径</h2>
        <span class="pill mid">推荐演示</span>
      </div>
      <div class="demo-steps">
        <article>
          <strong>1. 出门前</strong>
          <span>进入“我要出门”，选择“余杭/临安/富阳山地徒步”，看蜱虫高危提醒和装备清单。</span>
        </article>
        <article>
          <strong>2. 被咬了</strong>
          <span>进入“被咬了”，切换地点和表现，观察候选虫类如何变化。</span>
        </article>
        <article>
          <strong>3. 用户上报</strong>
          <span>进入“上报”，选择“看到虫”或“被咬了”提交一次，再回首页看附近 7 天上报信号。</span>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="tip-card">
        <h3>当前边界</h3>
        <p class="subtle">图片仍为本地占位素材；叮咬图只做风险提示，不做医学诊断。天气、定位、真实地图、真实图片授权和专家核验是下一阶段接入项。</p>
      </div>
    </section>
    <section class="section">
      <div class="quick-actions">
        <a class="primary-btn" href="#/home-plan">${icon("walk")}开始演示</a>
        <a class="secondary-btn" href="#/report">${icon("report")}演示上报</a>
      </div>
    </section>
  `);
}

function todayBugRanking(rows) {
  const scores = new Map();
  rows.forEach((row) => {
    const names = [row[3], ...row[5].split("、")].filter(Boolean);
    names.forEach((name, index) => {
      const bug = bugByName(name);
      const next = (scores.get(bug.id) || 0) + scenarioRiskScore(row) - index * 12;
      scores.set(bug.id, next);
    });
  });
  return [...scores.entries()]
    .map(([id, score]) => ({ bug: bugById(id), score: Math.min(score, 98) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function reportMatchesScenario(report, row) {
  const place = report.place || "";
  const text = report.text || "";
  const bug = report.bug || "";
  const haystack = `${place} ${text} ${bug}`;
  return row[2].some((tag) => haystack.includes(tag)) || haystack.includes(row[0].split("/")[0]) || bug === row[3];
}

function reportSummary(row) {
  const reports = getReports();
  const matched = reports.filter((report) => reportMatchesScenario(report, row));
  const recentBug = matched[0]?.bug || row[3];
  return { count: matched.length, recentBug, matched };
}

function riskItem(item, index) {
  return `
    <a class="risk-item" href="#/detail?id=${item.bug.id}">
      <span class="rank">${index}</span>
      <span>
        <span class="bug-name">${item.bug.name}</span>
        <span class="subtle">${item.bug.scene}</span>
      </span>
      <span class="pill ${levelClass(riskLevel(item.score))}">${riskLevel(item.score)}</span>
    </a>
  `;
}

function scenarioCard(row) {
  return `
    <article class="scenario-card">
      <div class="section-head">
        <h3>${row[0]}</h3>
        <span class="pill ${levelClass(row[4])}">${row[4]}风险</span>
      </div>
      <div class="scenario-facts">
        <div><span>遇虫地点</span><strong>${row[2].slice(0, 3).join(" / ")}</strong></div>
        <div><span>最可能虫类</span><strong>${row[3]}</strong></div>
      </div>
      <div class="subtle">相似或次要候选：${row[5]}</div>
      <div class="meta-row">${row[2].map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <p class="subtle">${row[6]}</p>
    </article>
  `;
}

function renderHomePlan() {
  const selected = scenarioByName(state.planScenario);
  const guide = scenarioGuide(selected);
  const ranked = scoreBugs([...selected[2], selected[3], selected[5], selected[0]]).slice(0, 4);
  return appFrame(`
    <button class="back-btn" data-route="home">${icon("back")}返回首页</button>
    <section class="page-title">
      <h1>出门前风险</h1>
      <p>按杭州最常见的出行微环境细分：不是只看行政区，而是看近水、树荫、积水、草丛、灯光和停留时间。</p>
    </section>
    <section class="panel">
      <div class="field">
        <label>目的地类型</label>
        <div class="chips" data-state="planScenario">
          ${scenarios.map((scenario) => chip(scenario[0], state.planScenario)).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      ${planActionCard(selected, guide, ranked)}
    </section>
    <section class="section">
      <div class="section-head"><h2>这个场景的候选虫类</h2><span class="pill ${levelClass(selected[4])}">${selected[4]}风险</span></div>
      <div class="risk-list">${ranked.slice(0, 3).map((item, index) => riskItem(item, index + 1)).join("")}</div>
    </section>
    <section class="panel section">
      <div class="field">
        <label>建议带上</label>
        <div class="check-list">
          ${guide.pack.map((item, index) => `<label><input type="checkbox" ${index < 2 ? "checked" : ""}> ${item}</label>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><h2>出行场景矩阵</h2></div>
      <div class="scenario-list">${scenarios.map(scenarioCard).join("")}</div>
    </section>
  `);
}

function scenarioGuide(row) {
  const name = row[0];
  const common = {
    pack: ["浅色长袖长裤或提高暴露皮肤覆盖", "查看驱避产品有效成分和补涂说明", "纸巾/湿巾，便于离开后清洁皮肤"],
    onsite: "先看是否贴肤叮咬，再看是否只是成团飞舞；不要只按包的形状判断虫种。",
    afterBite: "清洁叮咬处，冷敷，避免抓挠；红肿扩大、发热、渗液或全身不适时就医。"
  };
  const guides = {
    "西湖景区山脚短停": {
      pack: ["长袖长裤，尽量减少脚踝和手臂暴露", "含 DEET 或派卡瑞丁等有效成分的驱避产品", "避免久坐背阴潮湿椅子，可带薄外套或垫布"],
      onsite: "看到像黑芝麻的小黑点贴在皮肤上，且停留后出现多个红斑瘙痒，优先怀疑蠓；若只是空中虫团不贴肤，另看摇蚊。",
      afterBite: "离开树荫潮湿点，清洁后冷敷；多发红斑瘙痒明显时别抓破，持续扩大或渗液需就医。"
    },
    "西湖湖岸/运河散步遇虫团": {
      pack: ["口罩或眼镜，减少虫团入口鼻眼", "晚间少在桥下强灯附近久停", "基础驱蚊产品即可，重点是避开虫团"],
      onsite: "成团飞舞、像黑烟或小云团，但不贴肤、不叮咬，多数先按摇蚊骚扰处理；不要把虫团直接等同于会咬人的虫。",
      afterBite: "如果没有实际叮咬，一般无需皮肤处理；若同时出现红肿，再按蚊子、蠓等吸血飞虫排查。"
    },
    "小区绿化带傍晚遛弯": {
      pack: ["儿童推车蚊帐或长裤袜子", "驱蚊产品，重点覆盖脚踝、小腿和手臂", "留意花盆托盘、水培、雨后积水点"],
      onsite: "傍晚绿化带、地下车库、积水容器附近被叮咬，最常见优先按蚊子；同时看到极小黑点贴肤再考虑蠓。",
      afterBite: "清洗叮咬处并冷敷止痒；家门口反复出现时优先清积水，再考虑上报物业。"
    },
    "西溪湿地/湘湖/公园停留": {
      pack: ["长袖长裤，草地停留时减少裸露皮肤", "有效驱避产品，傍晚前补涂", "儿童、敏感人群准备物理防护"],
      onsite: "湿地、芦苇、草地和近水栈道以蚊子最常见；如果是小黑点贴肤且多发强痒，再提高蠓权重。",
      afterBite: "先清洁冷敷，观察 24-48 小时；红肿持续扩大或明显疼痛时就医。"
    },
    "余杭/临安/富阳山地徒步": {
      pack: ["长袖长裤并扎紧裤脚", "回家后全身检查，尤其腋下、腰腹、腿弯", "同行宠物也要检查并做好驱虫"],
      onsite: "山地林地不一定高频遇蜱，但草丛灌木穿行后若发现八足小虫附着皮肤，应按蜱虫高风险处理。",
      afterBite: "不要拍打、硬拽或涂刺激物；尽快规范取出，无法完整取出或出现发热乏力等症状应就医。"
    },
    "萧山/钱塘村镇河渠傍晚": {
      pack: ["傍晚河渠边减少裸露皮肤", "驱蚊产品，重点覆盖脚踝和手臂", "避开雨后坑洼积水、菜地沟渠边久停"],
      onsite: "河渠、农田、菜地、坑洼积水附近，稳定高频主角是蚊子；近草木潮湿处再考虑蠓和蚋。",
      afterBite: "按蚊虫叮咬清洁冷敷；同一区域反复严重时记录地点，后续可作为社区上报线索。"
    },
    "钱塘江边夜跑/露营": {
      pack: ["夜间江边风小再加强驱蚊", "露营时避免贴近草坪边缘和强灯", "带长袜，减少脚踝暴露"],
      onsite: "江边风大时飞虫少；风小、灯光、草坪停留叠加时，蚊子权重上升，虫团骚扰再考虑摇蚊。",
      afterBite: "先按蚊虫叮咬处理；若没有叮咬只是不停有虫扑脸，优先换到风更大的开阔处。"
    },
    "宠物去草地后人腿脚成串红疹": {
      pack: ["宠物定期驱虫", "回家后检查宠物腹部、耳后和脚趾缝", "草地活动后清洗床品和宠物窝"],
      onsite: "脚踝、小腿出现成串或成簇红疹，且近期宠物去过草地或接触流浪猫狗，跳蚤优先级升高。",
      afterBite: "人身止痒只是一半，必须同步处理宠物和环境；反复出现时考虑宠物医院或专业消杀。"
    }
  };
  return { ...common, ...(guides[name] || {}) };
}

function planActionCard(row, guide, ranked) {
  const top = ranked[0].bug;
  const summary = reportSummary(row);
  return `
    <article class="plan-card card">
      <div class="section-head">
        <div>
          <p class="section-kicker dark">当前选择</p>
          <h2>${row[0]}</h2>
        </div>
        <span class="pill ${levelClass(row[4])}">${row[4]}风险</span>
      </div>
      <div class="scenario-facts">
        <div><span>最可能遇虫地点</span><strong>${row[2].slice(0, 4).join(" / ")}</strong></div>
        <div><span>最可能虫类</span><strong>${row[3]}</strong></div>
      </div>
      <div class="report-signal">
        <span>附近 7 天上报</span>
        <strong>${summary.count} 条</strong>
        <small>最近相关：${summary.recentBug}</small>
      </div>
      <div class="action-grid">
        <div>
          <span>为什么</span>
          <p>${row[6]}</p>
        </div>
        <div>
          <span>到现场怎么看</span>
          <p>${guide.onsite}</p>
        </div>
        <div>
          <span>被咬第一步</span>
          <p>${guide.afterBite}</p>
        </div>
      </div>
      <div class="quick-actions">
        <a class="primary-btn" href="#/detail?id=${top.id}">${icon("bug")}查看 ${top.name}</a>
        <a class="secondary-btn" href="#/bite">${icon("bite")}被咬后判断</a>
      </div>
    </article>
  `;
}

function renderBite() {
  const candidates = biteCandidates();
  return appFrame(`
    <section class="page-title">
      <h1>被咬了</h1>
      <p>根据地点、叮咬模式和是否看到虫给出可能性。这里做风险提示，不做医学诊断。</p>
    </section>
    <section class="form-panel card">
      <div class="field">
        <label>刚才在哪里</label>
        <div class="chips" data-state="biteScene">
          ${["西湖景区山脚", "湖岸/运河虫团", "小区绿化积水", "湿地公园草地", "余杭山地草丛", "萧山村镇河渠", "宠物/旧房"].map((x) => chip(x, state.biteScene)).join("")}
        </div>
      </div>
      <div class="field">
        <label>更像哪种表现</label>
        <div class="chips" data-state="bitePattern">
          ${["多个红斑肿块", "成串脚踝红疹", "单个风团", "八足附着", "条索状水疱"].map((x) => chip(x, state.bitePattern)).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      ${photoStrip("叮咬反应照片位", biteImageSet(), "后续可放真实伤口示例；需要标注来源、严重程度和“非诊断”提示。")}
    </section>
    <section class="result-panel card">
      <div class="section-head">
        <h2>可能性排序</h2>
        <span class="pill mid">匹配度 · 非诊断</span>
      </div>
      ${candidates.map(candidateRow).join("")}
    </section>
    <section class="section">
      <div class="tip-card">
        <h3>${icon("warn")}需要留意的信号</h3>
        <p class="subtle">红肿持续扩大、明显疼痛或发热、渗液化脓、出现发热/头痛/乏力等全身不适，或疑似蜱虫无法完整取出，应及时就医。</p>
      </div>
    </section>
  `);
}

function chip(label, active) {
  return `<button class="chip ${label === active ? "active" : ""}" data-value="${label}">${label}</button>`;
}

function biteCandidates() {
  const tags = [state.biteScene, state.bitePattern];
  if (state.biteScene.includes("西湖")) tags.push("近水", "树荫", "山脚", "潮湿", "蠓");
  if (state.biteScene.includes("运河") || state.biteScene.includes("湖岸")) tags.push("河边", "湖边", "近水", "灯光", "摇蚊", "蚊子");
  if (state.biteScene.includes("小区")) tags.push("小区", "绿化", "积水", "傍晚", "蚊子");
  if (state.biteScene.includes("湿地")) tags.push("湿地", "近水", "草地", "蚊子", "蠓");
  if (state.biteScene.includes("萧山")) tags.push("河渠", "积水", "傍晚", "蚊子");
  if (state.biteScene.includes("草丛") || state.biteScene.includes("余杭")) tags.push("草丛", "林地", "蜱虫");
  if (state.biteScene.includes("宠物")) tags.push("宠物", "地毯", "跳蚤");
  if (state.bitePattern.includes("成串")) tags.push("脚踝", "跳蚤");
  if (state.bitePattern.includes("八足")) tags.push("蜱虫");
  if (state.bitePattern.includes("条索")) tags.push("隐翅虫");
  return scoreBugs(tags).slice(0, 3);
}

function candidateRow(item) {
  return `
    <div class="candidate">
      <div>
        <div class="bug-name">${item.bug.name}</div>
        <div class="subtle">${item.bug.care}</div>
        <div class="quick-actions"><a class="text-btn" href="#/detail?id=${item.bug.id}">看详情</a></div>
      </div>
      <div class="match-badge ${levelClass(riskLevel(item.score))}">
        <strong>${matchLabel(item.score)}</strong>
        <span>${riskLevel(item.score)}风险</span>
      </div>
    </div>
  `;
}

function renderSeen() {
  const candidates = seenCandidates();
  return appFrame(`
    <section class="page-title">
      <h1>看到虫了</h1>
      <p>先按形态和出现位置判断大类。拍照识别入口先做 Demo 占位，后续可接模型或人工核验。</p>
    </section>
    <section class="form-panel card">
      <div class="empty-upload">
        <div>${icon("eye")}上传虫体照片识别占位<br><span class="subtle">当前 Demo 用下方特征按钮模拟识别</span></div>
      </div>
      <div class="field">
        <label>你看到的更像</label>
        <div class="chips" data-state="sighting">
          ${["贴肤小黑点", "湖边成团飞舞", "八足附着", "黑橙细长虫", "厨房爬行", "地漏小飞虫", "水果旁小飞虫"].map((x) => chip(x, state.sighting)).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      ${photoStrip("虫体照片示例位", seenImageSet(), "后续可接自有拍摄、开放授权图库或用户上传；先按虫体和环境两类保存。")}
    </section>
    <section class="result-panel card">
      <div class="section-head"><h2>识别候选</h2><span class="pill low">需核验</span></div>
      ${candidates.map(candidateRow).join("")}
    </section>
  `);
}

function seenCandidates() {
  const map = {
    "贴肤小黑点": ["蠓", "近水", "潮湿"],
    "湖边成团飞舞": ["摇蚊", "湖边", "成团飞舞"],
    "八足附着": ["蜱虫", "草丛"],
    "黑橙细长虫": ["隐翅虫", "灯光"],
    "厨房爬行": ["蟑螂", "厨房"],
    "地漏小飞虫": ["蛾蚋", "地漏", "下水道"],
    "水果旁小飞虫": ["果蝇", "水果", "垃圾桶"]
  };
  return scoreBugs(map[state.sighting] || [state.sighting], { indoor: true }).slice(0, 3);
}

function renderDetail() {
  const params = new URLSearchParams((location.hash.split("?")[1] || ""));
  const bug = bugById(params.get("id"));
  return appFrame(`
    <button class="back-btn" data-route="home">${icon("back")}返回</button>
    <section class="detail-hero card section">
      <span class="pill ${levelClass(bug.danger)}">${bug.priority} · 危害${bug.danger}</span>
      <h1>${bug.name}</h1>
      <div class="subtle">${bug.alias}</div>
      <div class="meta-row">${bug.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </section>
    <section class="section">
      ${photoStrip("图片证据", bugImageSet(bug), "图片位已预留：虫体图用于识别，叮咬图只做风险提示，不能替代医生诊断。")}
    </section>
    <section class="section detail-grid">
      ${detailBlock("常见场景", bug.scene)}
      ${detailBlock("外形特征", bug.feature)}
      ${detailBlock("是否叮咬", bug.bite)}
      ${detailBlock("即时防护", bug.protect)}
      ${detailBlock("处理建议", bug.care)}
      ${detailBlock("就医提示", bug.doctor)}
      ${detailBlock("识别注意", bug.note)}
      ${detailBlock("服务入口", bug.commerce)}
      ${detailBlock("核验状态", bug.verify)}
    </section>
  `);
}

function detailBlock(title, body) {
  return `<article class="tip-card"><h3>${title}</h3><p class="subtle">${body}</p></article>`;
}

function renderFamily() {
  const familyIds = ["mosquito", "cockroach", "drainfly", "fruitfly", "flea"];
  const active = bugById(state.familyBug);
  return appFrame(`
    <section class="page-title">
      <h1>家庭防虫</h1>
      <p>从源头治理做起：积水、食物残渣、地漏管道、宠物环境和缝隙是首版重点。</p>
    </section>
    <section class="section">
      <div class="tabs" data-state="familyBug">
        ${familyIds.map((id) => `<button class="tab ${state.familyBug === id ? "active" : ""}" data-value="${id}">${bugById(id).name}</button>`).join("")}
      </div>
    </section>
    <section class="panel section">
      <div class="section-head">
        <h2>${active.name}处理链路</h2>
        <a class="text-btn" href="#/detail?id=${active.id}">虫类详情</a>
      </div>
      <p class="subtle">${active.protect}</p>
      <div class="field">
        <label>家庭排查清单</label>
        <div class="check-list">
          ${familyChecklist(active.id).map((item, index) => `<label><input type="checkbox" ${index < 2 ? "checked" : ""}> ${item}</label>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tip-card">
        <h3>低干扰服务入口</h3>
        <p class="subtle">${active.commerce}。Demo 中只展示入口方向，科普建议与商业转化保持分离。</p>
        <div class="quick-actions"><button class="secondary-btn" data-toast="已记录：后续可接附近服务商或物业工单。">${icon("report")}需要上门处理</button></div>
      </div>
    </section>
  `);
}

function familyChecklist(id) {
  const dict = {
    mosquito: ["翻盆倒罐，清掉阳台和水培积水", "检查纱窗、门缝和下水口", "夜间睡眠区加蚊帐或物理阻隔", "小区公共积水点可上报物业"],
    cockroach: ["清理灶台和橱柜食物残渣", "封堵管道、踢脚线和柜体缝隙", "胶饵少量多点放置，避免随意喷雾冲散", "高频出现时考虑专业消杀"],
    drainfly: ["拆洗地漏盖和过滤网", "刷洗管道内壁有机污垢", "保持卫生间干燥通风", "检查地漏水封和防虫地漏"],
    fruitfly: ["处理过熟水果和厨余垃圾", "清洁台面、砧板和垃圾桶盖", "减少开放发酵食物", "诱捕只能辅助，源头清理优先"],
    flea: ["宠物定期驱虫并咨询兽医", "清洗宠物窝、床品、地毯", "吸尘后及时处理尘袋", "人身叮咬与环境治理同步进行"]
  };
  return dict[id] || dict.mosquito;
}

function renderReport() {
  const reports = getReports();
  const type = state.reportType;
  return appFrame(`
    <section class="page-title">
      <h1>用户上报</h1>
      <p>上报会作为附近 7 天低权重信号进入 Demo 风险提示。照片默认不公开，叮咬图只做风险提示，不作医学诊断。</p>
    </section>
    <section class="form-panel card">
      <div class="field">
        <label>上报类型</label>
        <div class="chips" data-state="reportType">
          ${["被咬了", "看到虫", "家里有虫"].map((item) => chip(item, type)).join("")}
        </div>
      </div>
      <div class="field">
        <label for="report-place">地点</label>
        <input class="input" id="report-place" value="${reportDefaultPlace(type)}" />
      </div>
      <div class="field">
        <label for="report-bug">虫类或现象</label>
        <select class="select" id="report-bug">
          ${bugs.map((bug) => `<option>${bug.name}</option>`).join("")}
          <option>不确定的小飞虫</option>
        </select>
      </div>
      ${reportDynamicFields(type)}
      <div class="field">
        <label for="report-text">补充描述</label>
        <textarea class="textarea" id="report-text">${reportDefaultText(type)}</textarea>
      </div>
      <div class="report-privacy">
        <strong>隐私提示</strong>
        <span>仅保存文字模拟数据；后续接入照片时会区分虫体照片和叮咬反应照片，默认不公开敏感图片。</span>
      </div>
      <div class="quick-actions">
        <button class="primary-btn" id="submit-report">${icon("report")}提交上报</button>
        <button class="secondary-btn" data-toast="照片上传将在后续接入，区分虫体照片和叮咬反应照片，默认不保存敏感图片。">${icon("eye")}添加照片</button>
        <button class="secondary-btn" data-route="admin">${icon("radar")}查看上报后台</button>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><h2>附近 7 天模拟上报</h2><span class="pill mid">${reports.length} 条</span></div>
      <div class="report-list">
        ${reports.map(reportItem).join("")}
      </div>
    </section>
  `);
}

function reportDefaultPlace(type) {
  if (type === "看到虫") return "杭州 · 西湖湖岸/运河沿线";
  if (type === "家里有虫") return "杭州 · 家中卫生间/厨房";
  return "杭州 · 西湖景区山脚";
}

function reportDefaultText(type) {
  if (type === "看到虫") return "傍晚河边看到成团小飞虫，主要是扑脸但没有明显叮咬。";
  if (type === "家里有虫") return "卫生间地漏附近反复出现小飞虫，飞行较弱，常停在墙面。";
  return "树荫下停留几分钟后，胳膊出现多个红斑和瘙痒。";
}

function reportDynamicFields(type) {
  if (type === "看到虫") {
    return `
      <div class="field">
        <label for="report-env">环境</label>
        <select class="select" id="report-env">
          <option>湖岸/河道/运河</option>
          <option>树荫潮湿点</option>
          <option>草地/灌木</option>
          <option>灯光附近</option>
        </select>
      </div>
      <div class="field">
        <label for="report-feature">虫体特征</label>
        <input class="input" id="report-feature" value="成团飞舞，不贴肤叮咬" />
      </div>
    `;
  }
  if (type === "家里有虫") {
    return `
      <div class="field">
        <label for="report-room">出现位置</label>
        <select class="select" id="report-room">
          <option>卫生间/地漏</option>
          <option>厨房/垃圾桶</option>
          <option>卧室/床垫</option>
          <option>宠物活动区</option>
        </select>
      </div>
      <div class="field">
        <label for="report-frequency">出现频率</label>
        <select class="select" id="report-frequency">
          <option>连续几天反复出现</option>
          <option>偶尔一两只</option>
          <option>夜间明显增多</option>
          <option>清洁后仍反复</option>
        </select>
      </div>
    `;
  }
  return `
    <div class="field">
      <label for="report-body">叮咬部位</label>
      <select class="select" id="report-body">
        <option>手臂/小腿等暴露部位</option>
        <option>脚踝成串</option>
        <option>腰腹/衣物边缘</option>
        <option>疑似虫体附着处</option>
      </select>
    </div>
    <div class="field">
      <label for="report-pattern">表现</label>
      <select class="select" id="report-pattern">
        <option>多个红斑肿块，瘙痒明显</option>
        <option>成串小红疹</option>
        <option>条索状红斑/水疱</option>
        <option>单个红肿风团</option>
      </select>
    </div>
  `;
}

function reportItem(item) {
  const normalized = normalizeReport(item);
  return `
    <article class="report-item">
      <div class="section-head">
        <strong>${normalized.bug}</strong>
        <span class="pill ${normalized.status === "pending" ? "mid" : "low"}">${normalized.type}</span>
      </div>
      <div class="subtle">${normalized.place} · ${normalized.text}</div>
      ${normalized.extra.length ? `<div class="meta-row">${normalized.extra.map((x) => `<span class="tag">${x}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

function normalizeReport(item) {
  return {
    type: item.type || "模拟",
    place: item.place || "杭州",
    bug: item.bug || "不确定",
    text: item.text || "无补充描述",
    extra: Array.isArray(item.extra) ? item.extra.filter(Boolean) : [],
    status: item.status || (item.createdAt ? "pending" : "seeded"),
    createdAt: item.createdAt || item.created_at || ""
  };
}

function countBy(items, getter) {
  return items.reduce((acc, item) => {
    const key = getter(item) || "未填写";
    acc.set(key, (acc.get(key) || 0) + 1);
    return acc;
  }, new Map());
}

function topCounts(items, getter, limit = 5) {
  return [...countBy(items, getter).entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function shortPlace(place) {
  return place.replace(/^杭州\s*·\s*/, "").replace(/\/.*$/, "");
}

function renderAdmin() {
  const reports = getReports().map(normalizeReport);
  const pending = reports.filter((report) => report.status === "pending").length;
  const bugRows = topCounts(reports, (report) => report.bug, 5);
  const placeRows = topCounts(reports, (report) => shortPlace(report.place), 5);
  const maxBug = Math.max(...bugRows.map((row) => row[1]), 1);
  const maxPlace = Math.max(...placeRows.map((row) => row[1]), 1);
  return appFrame(`
    <button class="back-btn" data-route="home">${icon("back")}返回首页</button>
    <section class="page-title">
      <h1>上报审核后台</h1>
      <p>这是第一阶段的运营工作台雏形：先把上报数据看得见、导得出、能反哺首页风险；后面接 Supabase 后就能变成真实后台。</p>
    </section>
    <section class="admin-stats">
      ${adminStat("总上报", reports.length, "含本地、云端和演示种子")}
      ${adminStat("待审核", pending, "用户新增默认待审核")}
      ${adminStat("重点虫类", bugRows[0]?.[0] || "暂无", "当前样本最高频")}
    </section>
    <section class="section">
      <div class="quick-actions">
        <button class="primary-btn" id="export-reports">${icon("report")}导出 CSV</button>
        <a class="secondary-btn" href="#/report">${icon("report")}新增上报</a>
      </div>
    </section>
    <section class="section admin-grid">
      <article class="admin-card">
        <div class="section-head"><h2>虫类分布</h2><span class="pill low">${bugRows.length} 类</span></div>
        ${bugRows.map(([label, count]) => metricBar(label, count, maxBug)).join("")}
      </article>
      <article class="admin-card">
        <div class="section-head"><h2>热点地点</h2><span class="pill low">${placeRows.length} 个</span></div>
        ${placeRows.map(([label, count]) => metricBar(label, count, maxPlace)).join("")}
      </article>
    </section>
    <section class="section">
      <div class="section-head"><h2>最新上报</h2><span class="pill mid">${reports.length} 条</span></div>
      <div class="admin-report-list">
        ${reports.map(adminReportItem).join("")}
      </div>
    </section>
  `);
}

function adminStat(label, value, note) {
  return `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `;
}

function metricBar(label, count, max) {
  const width = Math.max(12, Math.round((count / max) * 100));
  return `
    <div class="metric-row">
      <div class="metric-label"><strong>${label}</strong><span>${count} 条</span></div>
      <div class="metric-track"><span style="width:${width}%"></span></div>
    </div>
  `;
}

function adminReportItem(report) {
  return `
    <article class="admin-report">
      <div class="section-head">
        <strong>${report.bug}</strong>
        <span class="pill ${report.status === "pending" ? "mid" : "low"}">${report.status === "pending" ? "待审核" : "演示数据"}</span>
      </div>
      <div class="subtle">${report.type} · ${report.place}</div>
      <p>${report.text}</p>
      ${report.extra.length ? `<div class="meta-row">${report.extra.map((x) => `<span class="tag">${x}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

function getReports() {
  const seeded = [
    { type: "看到虫", place: "京杭运河拱墅段", bug: "摇蚊", text: "傍晚河边成团飞舞，未明显叮咬。", extra: ["湖岸/河道", "成团飞舞"] },
    { type: "被咬了", place: "西湖景区山脚", bug: "蠓", text: "树荫潮湿处停留后有多处红斑。", extra: ["手臂/小腿", "多发红斑"] },
    { type: "被咬了", place: "萧山村镇河渠", bug: "蚊子", text: "傍晚散步被叮咬，附近有积水。", extra: ["河渠积水", "单个风团"] }
  ];
  try {
    return [...state.remoteReports, ...JSON.parse(localStorage.getItem("bugReports") || "[]"), ...seeded];
  } catch {
    return [...state.remoteReports, ...seeded];
  }
}

function saveReport() {
  const type = state.reportType;
  const place = document.querySelector("#report-place")?.value.trim() || "杭州";
  const bug = document.querySelector("#report-bug")?.value || "不确定";
  const text = document.querySelector("#report-text")?.value.trim() || "用户未填写补充描述";
  const extra = [
    document.querySelector("#report-env")?.value,
    document.querySelector("#report-feature")?.value,
    document.querySelector("#report-room")?.value,
    document.querySelector("#report-frequency")?.value,
    document.querySelector("#report-body")?.value,
    document.querySelector("#report-pattern")?.value
  ].filter(Boolean);
  const report = {
    type,
    place,
    bug,
    text,
    extra,
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude,
    createdAt: new Date().toISOString()
  };
  const stored = JSON.parse(localStorage.getItem("bugReports") || "[]");
  const next = [report, ...stored].slice(0, 12);
  localStorage.setItem("bugReports", JSON.stringify(next));
  syncReportToRemote(report);
  showToast(supabaseEnabled() ? "已提交，上报会尝试同步到云端数据库。" : "已提交模拟上报，首页和出门页会以低权重参考。");
  render();
}

async function loadWeather() {
  if (state.weather.status !== "idle") return;
  state.weather.status = "loading";
  const latitude = defaultLocation.latitude;
  const longitude = defaultLocation.longitude;
  const endpoint = weatherConfig.endpoint || `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&timezone=Asia%2FShanghai`;
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`weather ${res.status}`);
    const data = await res.json();
    const current = data.current || {};
    state.weather = {
      status: "ready",
      summary: "杭州实时天气",
      temperature: Number(current.temperature_2m ?? 0),
      humidity: Number(current.relative_humidity_2m ?? 0),
      precipitation: Number(current.precipitation ?? 0),
      wind: Number(current.wind_speed_10m ?? 0)
    };
  } catch {
    state.weather = {
      status: "error",
      summary: "天气暂不可用",
      temperature: null,
      humidity: null,
      precipitation: null,
      wind: null
    };
  }
  render();
}

async function loadRemoteReports() {
  if (!supabaseEnabled() || state.remoteReportsLoaded) return;
  state.remoteReportsLoaded = true;
  const base = supabaseConfig.url.replace(/\/$/, "");
  const table = encodeURIComponent(supabaseConfig.table);
  const endpoint = `${base}/rest/v1/${table}?select=type,place,bug,text,extra,status,created_at&order=created_at.desc&limit=20`;
  try {
    const res = await fetch(endpoint, {
      headers: {
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`
      }
    });
    if (!res.ok) throw new Error(`supabase ${res.status}`);
    const rows = await res.json();
    state.remoteReports = rows.map((row) => ({
      type: row.type,
      place: row.place,
      bug: row.bug,
      text: row.text,
      extra: Array.isArray(row.extra) ? row.extra : [],
      status: row.status || "pending",
      createdAt: row.created_at
    }));
    state.remoteStatus = "ready";
  } catch {
    state.remoteStatus = "error";
  }
  render();
}

async function syncReportToRemote(report) {
  if (!supabaseEnabled()) return;
  const base = supabaseConfig.url.replace(/\/$/, "");
  const endpoint = `${base}/rest/v1/${encodeURIComponent(supabaseConfig.table)}`;
  const payload = {
    type: report.type,
    place: report.place,
    bug: report.bug,
    text: report.text,
    extra: report.extra,
    latitude: report.latitude,
    longitude: report.longitude,
    status: "pending"
  };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`supabase ${res.status}`);
    state.remoteStatus = "ready";
  } catch {
    state.remoteStatus = "error";
    showToast("本地已保存，云端同步暂时失败。");
  }
}

function hydrateIntegrations() {
  loadWeather();
  loadRemoteReports();
  hydrateAmap();
}

function loadAmapScript() {
  if (window.AMap) return Promise.resolve();
  if (window.__bugRadarAmapLoading) return window.__bugRadarAmapLoading;
  if (amapConfig.securityJsCode) {
    window._AMapSecurityConfig = { securityJsCode: amapConfig.securityJsCode };
  }
  window.__bugRadarAmapLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(amapConfig.key)}&plugin=AMap.Geolocation,AMap.Marker`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return window.__bugRadarAmapLoading;
}

async function hydrateAmap() {
  const container = document.querySelector("#amap-container");
  if (!container || !amapEnabled() || container.dataset.mounted) return;
  container.dataset.mounted = "true";
  try {
    await loadAmapScript();
    const map = new window.AMap.Map(container, {
      zoom: 11,
      center: [defaultLocation.longitude, defaultLocation.latitude],
      viewMode: "2D"
    });
    new window.AMap.Marker({
      position: [defaultLocation.longitude, defaultLocation.latitude],
      title: defaultLocation.name,
      map
    });
  } catch {
    container.classList.add("fallback");
    container.innerHTML = "<span>地图加载失败，继续使用杭州示意底图</span>";
  }
}

function showToast(text) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2100);
}

function csvCell(value) {
  const text = String(value ?? "").replace(/"/g, '""');
  return `"${text}"`;
}

function reportsToCsv(reports) {
  const header = ["type", "place", "bug", "text", "extra", "status", "createdAt"];
  const rows = reports.map((report) => [
    report.type,
    report.place,
    report.bug,
    report.text,
    report.extra.join("|"),
    report.status,
    report.createdAt
  ]);
  return [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
}

function exportReportsCsv() {
  const csv = reportsToCsv(getReports().map(normalizeReport));
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bug-radar-reports-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("已导出 CSV，可用于人工整理和专家复核。");
}

function route() {
  const name = location.hash.replace("#/", "").split("?")[0] || "home";
  const routes = {
    home: renderHome,
    "home-plan": renderHomePlan,
    bite: renderBite,
    seen: renderSeen,
    detail: renderDetail,
    family: renderFamily,
    report: renderReport,
    admin: renderAdmin,
    demo: renderDemoGuide
  };
  return (routes[name] || renderHome)();
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((el) => {
    el.addEventListener("click", () => {
      location.hash = `#/${el.dataset.route}`;
    });
  });

  document.querySelectorAll("[data-state]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const target = event.target.closest("[data-value]");
      if (!target) return;
      state[group.dataset.state] = target.dataset.value;
      render();
    });
  });

  document.querySelectorAll("[data-toast]").forEach((el) => {
    el.addEventListener("click", () => showToast(el.dataset.toast));
  });

  document.querySelector("#submit-report")?.addEventListener("click", saveReport);
  document.querySelector("#export-reports")?.addEventListener("click", exportReportsCsv);
}

function render() {
  document.querySelector("#app").innerHTML = route();
  bindEvents();
  hydrateIntegrations();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
render();
