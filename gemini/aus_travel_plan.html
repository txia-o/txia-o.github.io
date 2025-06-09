import React, { useState, useEffect, useRef } from 'react';

// Tailwind CSS is assumed to be available
// You can include it in your HTML like this: <script src="https://cdn.tailwindcss.com"></script>

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // 旅行日程数据 (Itinerary Data)
  const itineraryData = [
    {
      id: 'day1',
      date: '8月29日 (周五)',
      title: '启程前往墨尔本',
      activities: [
        { id: 'act1-1', time: '全天', name: '从新加坡出发，搭乘国际航班前往墨尔本', type: 'travel' },
        { id: 'act1-2', time: '晚上', name: '抵达墨尔本，办理租车及酒店入住', type: 'logistics' },
        { id: 'act1-3', time: '20:00 - 22:00', name: '晚餐与休息', type: 'meal' },
      ],
    },
    {
      id: 'day2',
      date: '8月30日 (周六)',
      title: '墨尔本轻松游与朋友聚餐',
      activities: [
        { id: 'act2-1', time: '09:00 - 10:00', name: '酒店早餐', type: 'meal' },
        { id: 'act2-2', time: '10:00 - 12:00', name: '墨尔本市区自驾适应，购买零食', type: 'leisure' },
        { id: 'act2-3', time: '12:00 - 14:00', name: '与在墨尔本的朋友共进午餐', type: 'social' },
        { id: 'act2-4', time: '14:00 - 17:00', name: '参观联邦广场 (Federation Square)', type: 'sightseeing', locationIds: ['federation-square'] },
        { id: 'act2-5', time: '17:00 - 18:00', name: '返回酒店休息', type: 'leisure' },
        { id: 'act2-6', time: '18:00 - 20:00', name: '墨尔本市区晚餐', type: 'meal' },
        { id: 'act2-7', time: '20:00以后', name: '自由活动，休息', type: 'leisure' },
      ],
    },
    {
      id: 'day3',
      date: '8月31日 (周日)',
      title: '婚礼日',
      activities: [
        { id: 'act3-1', time: '全天', name: '参加朋友的婚礼', type: 'event' },
      ],
    },
    {
      id: 'day4',
      date: '9月1日 (周一)',
      title: '墨尔本自然风光体验',
      activities: [
        { id: 'act4-1', time: '09:00 - 10:00', name: '酒店早餐', type: 'meal' },
        { id: 'act4-2', time: '10:00 - 13:00', name: '参观墨尔本皇家植物园 (Royal Botanic Gardens)', type: 'sightseeing', locationIds: ['royal-botanic-gardens'] },
        { id: 'act4-3', time: '13:00 - 14:00', name: '午餐', type: 'meal' },
        { id: 'act4-4', time: '14:00 - 18:00', name: '周边自驾短途', type: 'sightseeing', locationIds: ['phillip-island', 'brighton-bathing-boxes', 'queen-victoria-market'] },
        { id: 'act4-5', time: '18:00 - 20:00', name: '晚餐', type: 'meal' },
        { id: 'act4-6', time: '20:00以后', name: '整理行李，准备前往悉尼', type: 'logistics' },
      ],
    },
    {
      id: 'day5',
      date: '9月2日 (周二)',
      title: '飞往悉尼，市区地标游',
      activities: [
        { id: 'act5-1', time: '08:00 - 09:00', name: '酒店早餐，办理退房', type: 'meal' },
        { id: 'act5-2', time: '09:00 - 10:00', name: '驾车前往墨尔本机场，办理还车手续', type: 'logistics' },
        { id: 'act5-3', time: '10:00 - 12:00', name: '搭乘国内航班飞往悉尼', type: 'travel' },
        { id: 'act5-4', time: '12:00 - 13:00', name: '抵达悉尼机场，办理租车及酒店入住', type: 'logistics' },
        { id: 'act5-5', time: '13:00 - 14:00', name: '午餐', type: 'meal' },
        { id: 'act5-6', time: '14:00 - 16:30', name: '游览悉尼歌剧院 (Sydney Opera House)', type: 'sightseeing', locationIds: ['sydney-opera-house'] },
        { id: 'act5-7', time: '16:30 - 18:00', name: '步行至悉尼海港大桥 (Sydney Harbour Bridge)', type: 'sightseeing', locationIds: ['sydney-harbour-bridge'] },
        { id: 'act5-8', time: '18:00 - 20:00', name: '达令港 (Darling Harbour) 晚餐', type: 'meal' },
        { id: 'act5-9', time: '20:00以后', name: '欣赏夜景，感受悉尼夜生活', type: 'leisure' },
      ],
    },
    {
      id: 'day6',
      date: '9月3日 (周三)',
      title: '悉尼自然与海滩',
      activities: [
        { id: 'act6-1', time: '09:00 - 10:00', name: '酒店早餐', type: 'meal' },
        { id: 'act6-2', time: '10:00 - 13:00', name: '驾车前往邦迪海滩 (Bondi Beach)', type: 'sightseeing', locationIds: ['bondi-beach'] },
        { id: 'act6-3', time: '13:00 - 14:00', name: '午餐', type: 'meal' },
        { id: 'act6-4', time: '14:00 - 18:00', name: '动物园或市区探索', type: 'sightseeing', locationIds: ['taronga-zoo', 'the-rocks-circular-quay'] },
        { id: 'act6-5', time: '18:00 - 20:00', name: '晚餐', type: 'meal' },
        { id: 'act6-6', time: '20:00以后', name: '自由活动', type: 'leisure' },
      ],
    },
    {
      id: 'day7',
      date: '9月4日 (周四)',
      title: '蓝山国家公园一日游',
      activities: [
        { id: 'act7-1', time: '08:00 - 09:00', name: '酒店早餐，准备午餐和零食', type: 'meal' },
        { id: 'act7-2', time: '09:00 - 11:00', name: '驾车前往蓝山国家公园 (Blue Mountains National Park)', type: 'travel', locationIds: ['blue-mountains'] },
        { id: 'act7-3', time: '11:00 - 13:00', name: '回音角观景点欣赏三姐妹峰', type: 'sightseeing', locationIds: ['blue-mountains'] },
        { id: 'act7-4', time: '13:00 - 14:00', name: '蓝山小镇午餐', type: 'meal' },
        { id: 'act7-5', time: '14:00 - 17:00', name: '体验景观世界 (Scenic World) 缆车和索道', type: 'sightseeing', locationIds: ['blue-mountains'] },
        { id: 'act7-6', time: '17:00 - 19:00', name: '返回悉尼市区', type: 'travel' },
        { id: 'act7-7', time: '19:00 - 20:00', name: '晚餐', type: 'meal' },
        { id: 'act7-8', time: '20:00以后', name: '自由活动，整理行李', type: 'leisure' },
      ],
    },
    {
      id: 'day8',
      date: '9月5日 (周五)',
      title: '悉尼自由活动与返回墨尔本',
      activities: [
        { id: 'act8-1', time: '09:00 - 12:00', name: '悉尼自由购物或补遗', type: 'leisure' },
        { id: 'act8-2', time: '12:00 - 13:00', name: '午餐', type: 'meal' },
        { id: 'act8-3', time: '13:00 - 14:00', name: '办理酒店退房', type: 'logistics' },
        { id: 'act8-4', time: '14:00 - 15:00', name: '驾车前往悉尼机场，办理还车手续', type: 'logistics' },
        { id: 'act8-5', time: '15:00 - 17:00', name: '搭乘国内航班从悉尼飞往墨尔本', type: 'travel' },
        { id: 'act8-6', time: '17:00 - 18:00', name: '抵达墨尔本机场，前往酒店办理入住', type: 'logistics' },
        { id: 'act8-7', time: '18:00 - 20:00', name: '墨尔本告别晚餐', type: 'meal' },
        { id: 'act8-8', time: '20:00以后', name: '整理行李，准备回国', type: 'logistics' },
      ],
    },
    {
      id: 'day9',
      date: '9月6日 (周六)',
      title: '启程回国',
      activities: [
        { id: 'act9-1', time: '上午', name: '根据航班时间，前往墨尔本机场，办理登机手续，启程回国。', type: 'travel' },
      ],
    },
  ];

  // 地点详细信息 (Location Details)
  const locationDetailsData = {
    'federation-square': {
      id: 'federation-square',
      name: '联邦广场 (Federation Square)',
      introduction: '联邦广场是墨尔本市中心的文化和艺术枢纽，以其独特的现代建筑和多样的活动而闻名，是感受墨尔本城市活力的绝佳场所。',
      specialFeatures: [
        '参观澳大利亚活动影像中心 (ACMI) 或维多利亚国家美术馆 (NGV Australia)。',
        '在大屏幕上观看活动直播或体育赛事。',
        '在广场上放松，感受当地的街头表演或节庆活动。',
      ],
      travelAdvice: [
        '位于墨尔本市中心弗林德斯街车站对面，交通便利，步行可达。',
        '建议游玩时间：1-3小时，如果参观博物馆则需更久。',
      ],
      notes: [
        '许多活动免费，是个感受墨尔本城市活力的好地方。',
        '广场周边有各种餐厅和咖啡馆。',
      ],
    },
    'royal-botanic-gardens': {
      id: 'royal-botanic-gardens',
      name: '墨尔本皇家植物园 (Royal Botanic Gardens)',
      introduction: '墨尔本皇家植物园是世界级的植物园，拥有丰富的植物种类和优美的园林景观，是市民休闲放松的好去处。',
      specialFeatures: [
        '漫步园内，探索不同主题的区域，如玫瑰园、热带植物馆等。',
        '在广阔的草坪上野餐或小憩，享受宁静的自然环境。',
        '参加免费的导览步行，了解植物园的历史和特色植物。',
      ],
      travelAdvice: [
        '位于墨尔本市中心附近，可步行或乘坐有轨电车到达。',
        '建议游玩时间：2-3小时，如果深度游览或野餐则需更久。',
      ],
      notes: [
        '免费入场。',
        '植物园面积较大，建议穿着舒适的鞋子。',
        '园内有咖啡馆和礼品店。',
      ],
    },
    'phillip-island': {
      id: 'phillip-island',
      name: '菲利普岛 (Phillip Island) - 企鹅归巢',
      introduction: '菲利普岛位于墨尔本东南方，以其独特的野生动物和自然风光而闻名，尤其是每晚小企鹅从海里摇摇摆摆归巢的奇观。',
      specialFeatures: [
        '**企鹅归巢 (Penguin Parade):** 观看成千上万只小企鹅从海里回到巢穴的壮观景象。',
        '**考拉保育中心 (Koala Conservation Centre):** 近距离观察野生的考拉。',
        '**丘吉尔岛传统农场 (Churchill Island Heritage Farm):** 体验澳洲传统农场生活，观看剪羊毛表演。',
      ],
      travelAdvice: [
        '距离墨尔本市中心约 2 小时车程，建议自驾或参加一日游。',
        '企鹅归巢在日落时分进行，具体时间随季节变化，请提前查询。',
        '往返行程通常需要 6-8 小时（包括交通和游览时间）。',
      ],
      notes: [
        '**购票建议：** 企鹅归巢观赏区有多种票务选项，包括：',
        '  * **普通票 (General Viewing):** 最基本的观赏区，价格实惠。',
        '  * **升级看台票 (Penguins Plus):** 更好的观赏位置，通常在主看台的前排，视野更佳。',
        '  * **地下观景台票 (Underground Viewing):** 可以在地下玻璃幕墙后近距离观看企鹅从您脚下经过，不受天气影响。',
        '  * **VIP 导游团 (Ultimate Penguin Tour):** 小团体验，有专业导游讲解，提供毯子和热饮，并有机会在非公共区域观赏。',
        '建议提前在菲利普岛官网预订门票，尤其是在旺季（节假日或学校假期）。',
        '**重要提示：** 企鹅归巢时严禁拍照和使用闪光灯，因为这会伤害企鹅的眼睛。请遵守规定。',
        '菲利普岛夜晚海风较大，气温较低，即使是夏天也建议携带保暖衣物。',
      ],
    },
    'brighton-bathing-boxes': {
      id: 'brighton-bathing-boxes',
      name: '布莱顿彩虹小屋 (Brighton Bathing Boxes)',
      introduction: '布莱顿彩虹小屋是墨尔本著名的地标，沿海滩一字排开，每座小屋都拥有独特的色彩和设计，是拍照打卡的绝佳地点，也体现了墨尔本独特的海滨文化。',
      specialFeatures: [
        '欣赏并拍摄**色彩斑斓的维多利亚时代风格海滩小屋**。',
        '在海滩上散步，感受墨尔本的海岸风情。',
      ],
      travelAdvice: [
        '位于墨尔本市郊的布莱顿海滩，距离市中心约 13 公里，驾车约 20-30 分钟。',
        '也可乘坐火车（Sandringham线）至Brighton Beach站。',
      ],
      notes: [
        '小屋是私人财产，通常不能进入内部。',
        '**早晨或傍晚的光线**更适合拍照。',
        '免费参观。',
      ],
    },
    'queen-victoria-market': {
      id: 'queen-victoria-market',
      name: '维多利亚女王市场 (Queen Victoria Market)',
      introduction: '维多利亚女王市场是南半球最大的露天市场，也是墨尔本的历史地标之一。这里汇聚了新鲜的农产品、海鲜、肉类、熟食，以及各种服装、纪念品等，是体验墨尔本当地生活和品尝美食的好地方。',
      specialFeatures: [
        '品尝**新鲜的当地农产品和美食小吃**。',
        '购买纪念品和当地特色商品。',
        '感受热闹的市场氛围和历史建筑。',
      ],
      travelAdvice: [
        '位于墨尔本市中心，可步行、乘坐有轨电车或巴士到达。',
        '建议游玩时间：2-3小时。',
      ],
      notes: [
        '市场并非每天开放，请**提前查询开放时间**（通常周一、周三关闭）。',
        '夏季（11月-3月）周三晚上有夜市，提供更多美食和娱乐活动。',
        '人流较多，注意保管个人物品。',
      ],
    },
    'sydney-opera-house': {
      id: 'sydney-opera-house',
      name: '悉尼歌剧院 (Sydney Opera House)',
      introduction: '悉尼歌剧院是澳大利亚的标志性建筑，世界文化遗产，以其独特的贝壳造型闻名于世，是表演艺术的殿堂。',
      specialFeatures: [
        '**内部导览：** 参加歌剧院内部导览（有中文讲解），深入了解其独特的建筑设计、历史和幕后故事。',
        '**观看表演：** 如果时间允许，观看一场歌剧、音乐剧、戏剧或舞蹈表演，感受世界级的艺术氛围。',
        '**海滨餐饮：** 在歌剧院外的餐厅或酒吧用餐，一边享受美食，一边欣赏悉尼港和海港大桥的壮丽景色。',
        '**拍照打卡：** 从不同角度拍摄歌剧院，尤其是在日出、日落或夜晚灯光亮起时。',
      ],
      travelAdvice: [
        '位于悉尼市中心环形码头，交通便利，可步行或搭乘公共交通。',
        '建议参观时间：内部导览约 1 小时，观看表演则需根据演出时长。',
      ],
      notes: [
        '导览和演出门票建议**提前通过悉尼歌剧院官方网站预订**。',
        '歌剧院区域是免费开放的，但进入表演厅或参加导览需购票。',
      ],
    },
    'sydney-harbour-bridge': {
      id: 'sydney-harbour-bridge',
      name: '悉尼海港大桥 (Sydney Harbour Bridge)',
      introduction: '悉尼海港大桥是世界最大的钢拱桥，也是悉尼的另一地标，被誉为“衣架”，连接着悉尼南北两岸。',
      specialFeatures: [
        '**步行过桥：** 在专门的人行道上步行过桥，可以从不同角度欣赏悉尼港和歌剧院的美景，这是免费的。',
        '**攀登海港大桥 (BridgeClimb Sydney)：** 这是最具标志性的体验之一。在专业导游的带领下，攀登到大桥的顶端，360度俯瞰悉尼全景，包括歌剧院、达令港和蓝山。分为不同的攀登项目（如黎明、白天、黄昏、夜晚攀登，以及不同时长和高度的选项）。',
        '**参观桥塔瞭望台 (Pylon Lookout)：** 如果不想攀登，可以付费参观东南桥塔内的瞭望台和博物馆，了解大桥的历史和建造过程，并欣赏景色。',
      ],
      travelAdvice: [
        '位于悉尼市中心，与歌剧院隔水相望，可步行或搭乘公共交通。',
        '步行过桥约需 30-60 分钟。攀登项目通常需要 2.5-3.5 小时（含准备时间）。桥塔瞭望台约需 1-1.5 小时。',
      ],
      notes: [
        '**攀登海港大桥 (BridgeClimb Sydney) 购票建议：**',
        '  * 攀登项目非常热门，务必**提前通过其官方网站预订**。',
        '  * 价格较高，但体验非常独特。建议根据预算和兴趣选择不同的攀登选项。',
        '  * 攀登时禁止携带任何个人物品（包括手机和相机），会有专业的摄影师拍照，照片可在结束后购买。',
        '桥塔瞭望台有入场费，无需提前预订。',
      ],
    },
    'bondi-beach': {
      id: 'bondi-beach',
      name: '邦迪海滩 (Bondi Beach)',
      introduction: '邦迪海滩是悉尼最著名和最具活力的海滩之一，以其细腻的沙滩、冲浪文化和海滨生活方式而闻名。',
      specialFeatures: [
        '**日光浴和游泳：** 在金色沙滩上放松，享受阳光和海风，或者在指定的安全区域游泳。',
        '**冲浪体验：** 邦迪是冲浪爱好者的天堂，即使是初学者也可以在这里找到冲浪学校学习。',
        '**邦迪到库吉沿海步道 (Bondi to Coogee Coastal Walk):** 沿着风景壮丽的海岸线徒步，欣赏悬崖、海湾和海蚀洞。',
        '**海滨咖啡馆和餐厅：** 在邦迪海滩附近有许多时尚的咖啡馆、餐厅和酒吧，可以品尝美食和享受海滨氛围。',
      ],
      travelAdvice: [
        '距离悉尼市中心约 8 公里，驾车或乘坐公共交通（巴士）均可到达。',
        '建议游玩时间：2-4小时，如果进行徒步则需更久。',
      ],
      notes: [
        '海滩全年开放，免费入场。',
        '**注意防晒**，即使是阴天紫外线也很强。',
        '冲浪时请注意安全，遵循海滩的警示标志和救生员的指示。',
      ],
    },
    'taronga-zoo': {
      id: 'taronga-zoo',
      name: '塔龙加动物园 (Taronga Zoo)',
      introduction: '塔龙加动物园是悉尼的知名动物园，不仅拥有来自世界各地的动物，还因其独特的地理位置而能俯瞰悉尼港的壮丽景色。',
      specialFeatures: [
        '**澳洲本土动物：** 近距离观赏袋鼠、考拉、鸭嘴兽、塔斯马尼亚恶魔等澳洲特有动物。',
        '**海港景色：** 动物园位于山坡上，许多区域都可俯瞰悉尼歌剧院和海港大桥的景色，是拍照的好地方。',
        '**动物表演：** 观看海豹表演、鸟类飞行表演等。',
        '**缆车体验：** 乘坐 Sky Safari 缆车在动物园内移动，同时欣赏美景。',
      ],
      travelAdvice: [
        '从悉尼市中心乘坐渡轮是最便捷和风景优美的交通方式，渡轮直接抵达动物园下方的码头。',
        '建议游玩时间：至少 3-4 小时，如果观看表演或深度游览则需要一整天。',
      ],
      notes: [
        '建议**提前在官网购买门票**，可以节省排队时间。',
        '动物园内有餐饮服务，也可以自带食物野餐。',
        '园内坡度较大，建议穿着舒适的鞋子。',
      ],
    },
    'the-rocks-circular-quay': {
      id: 'the-rocks-circular-quay',
      name: '岩石区与环形码头 (The Rocks & Circular Quay)',
      introduction: '岩石区是悉尼最古老的街区，保留着殖民时期的历史建筑和鹅卵石街道，充满了艺术氛围和独特的魅力。环形码头是悉尼主要的交通枢纽和海港游览的起点，连接着歌剧院和海港大桥。',
      specialFeatures: [
        '在岩石区漫步，探索**历史悠久的巷道和建筑**。',
        '参观**岩石区周末市场**（如果恰逢周末），寻找手工艺品和艺术品。',
        '在环形码头乘坐渡轮，**从水上欣赏悉尼港、歌剧院和海港大桥的美景**。',
        '在海滨餐厅享用美食。',
      ],
      travelAdvice: [
        '岩石区和环形码头紧邻悉尼市中心，可步行或搭乘公共交通（火车、巴士、渡轮）到达。',
        '建议游玩时间：2-4小时。',
      ],
      notes: [
        '周末市场（The Rocks Markets）通常在**周六和周日开放**，具体时间请查询官网。',
        '环形码头是前往塔龙加动物园、曼利海滩等地的渡轮起点。',
      ],
    },
    'blue-mountains': {
      id: 'blue-mountains',
      name: '蓝山国家公园 (Blue Mountains National Park)',
      introduction: '蓝山国家公园是世界遗产，以其壮丽的砂岩悬崖、茂密的桉树林和因桉树油挥发而产生的蓝色薄雾而闻名，三姐妹峰是其标志性景观。',
      specialFeatures: [
        '**回音角观景点 (Echo Point Lookout) 与三姐妹峰：** 最佳观景点，可以看到标志性的三姐妹峰和杰米逊谷 (Jamison Valley) 的壮丽景色。',
        '**景观世界 (Scenic World)：** 体验世界上最陡峭的铁路 (Scenic Railway)、空中缆车 (Scenic Cableway) 和雨林步道 (Scenic Walkway)，从不同角度探索峡谷。',
        '**丛林徒步：** 公园内有多种难度和时长的徒步路线，从轻松的短途步行到挑战性的长途徒步。',
        '**探索小镇：** 游览蓝山地区古朴的小镇，如卡通巴 (Katoomba) 和鲁拉 (Leura)，有艺术画廊、咖啡馆和特色商店。',
      ],
      travelAdvice: [
        '距离悉尼市区约 1.5 - 2 小时车程，建议自驾或参加一日游。',
        '蓝山面积较大，景点分散，自驾更方便安排行程。',
        '建议游玩时间：一整天 (8-10小时)。',
      ],
      notes: [
        '蓝山国家公园本身免费入场，但景观世界的各项设施需购票。建议购买景观世界通票。',
        '蓝山天气变化较快，即使是夏季也可能较凉，尤其是在雨林中，建议携带外套和防水衣物。',
        '徒步时务必穿着舒适防滑的鞋子，并带足饮用水。',
      ],
    },
  };

  const handleDayClick = (dayId) => {
    setSelectedDay(itineraryData.find((day) => day.id === dayId));
    setSelectedLocation(null); // Clear location detail when selecting a new day
  };

  const handleBackToTimeline = () => {
    setSelectedDay(null);
    setSelectedLocation(null);
  };

  const handleLocationClick = (locationId) => {
    setSelectedLocation(locationDetailsData[locationId]);
  };

  const handleCloseLocationDetail = () => {
    setSelectedLocation(null);
  };

  // Helper function to render text with simple Markdown bolding
  const renderMarkdownText = (text) => {
    if (!text) return { __html: '' };
    // Replace **text** with <strong>text</strong>
    const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return { __html: html };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Header - Apple-like frosted glass effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md py-4 px-4 md:px-8 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight cursor-pointer" onClick={handleBackToTimeline}>
            澳大利亚之旅
          </h1>
          <nav>
            {selectedDay && (
              <button
                onClick={handleBackToTimeline}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                ← 返回时间线
              </button>
            )}
            {selectedLocation && (
              <button
                onClick={handleCloseLocationDetail}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                ← 返回行程详情
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 pt-24"> {/* Added padding top to account for fixed header */}
        {!selectedDay && (
          <Timeline itinerary={itineraryData} onDayClick={handleDayClick} />
        )}

        {selectedDay && !selectedLocation && (
          <DayDetail day={selectedDay} onLocationClick={handleLocationClick} locationDetailsData={locationDetailsData} />
        )}

        {selectedLocation && (
          <LocationDetail location={selectedLocation} onClose={handleCloseLocationDetail} renderMarkdownText={renderMarkdownText} />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 bg-gray-900 text-white text-center text-sm mt-12 rounded-t-xl">
        <p>&copy; 2025 您的旅行计划助手。所有权利保留。</p>
      </footer>
    </div>
  );
}

// Timeline Component
function Timeline({ itinerary, onDayClick }) {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center relative z-10 animate-fade-in-up">
        您的澳大利亚精彩旅程
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></span>
      </h2>
      <div className="w-full max-w-4xl space-y-8">
        {itinerary.map((day, index) => (
          <div
            key={day.id}
            className="relative flex items-center group cursor-pointer"
            onClick={() => onDayClick(day.id)}
          >
            {/* Timeline Connector Line */}
            <div className="absolute left-1/2 -ml-0.5 w-1 bg-gradient-to-b from-blue-300 to-blue-500 h-full transform -translate-x-1/2 z-0"></div>

            {/* Date Bubble */}
            <div className="w-2/5 text-right pr-8 flex-shrink-0 relative z-10">
              <div className="inline-block bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                {day.date}
              </div>
            </div>

            {/* Event Card */}
            <div className="w-3/5 pl-8 relative z-10">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:translate-x-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  {day.activities.slice(0, 2).map((activity) => ( // Show first 2 activities
                    <li key={activity.id} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 10.586V6z" clipRule="evenodd" />
                      </svg>
                      {activity.time}: {activity.name}
                    </li>
                  ))}
                  {day.activities.length > 2 && (
                    <li className="text-blue-500 font-semibold">
                      ...更多详情
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// DayDetail Component
function DayDetail({ day, onLocationClick, locationDetailsData }) { // Pass locationDetailsData
  return (
    <div className="py-8 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center relative z-10">
        {day.date} - {day.title}
        <span className="block w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></span>
      </h2>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto space-y-6">
        {day.activities.map((activity) => (
          <div key={activity.id} className="border-b border-gray-100 last:border-b-0 pb-4 mb-4">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold text-blue-700 w-24 flex-shrink-0">{activity.time}</span>
              <p className="text-gray-800 text-lg ml-4">{activity.name}</p>
            </div>
            {/* Conditional rendering for multiple location buttons */}
            {activity.locationIds && activity.locationIds.length > 0 && (
              <div className="ml-28 flex flex-wrap gap-2 mt-2"> {/* Added flex container for buttons */}
                {activity.locationIds.map((locationId) => (
                  <button
                    key={locationId}
                    onClick={() => onLocationClick(locationId)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    查看 {locationDetailsData[locationId]?.name.split(' ')[0]} 详情 → {/* Display first word of location name */}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// LocationDetail Component (Modal-like view)
function LocationDetail({ location, onClose, renderMarkdownText }) {
  if (!location) return null;

  return (
    // Outer overlay for modal, clickable to close
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 animate-fade-in-slow"
      onClick={onClose}
    >
      {/* Inner modal content container */}
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative
                   transform scale-100 opacity-100 transition-all duration-300 ease-out" // Fixed: ensure visible, add transition
        onClick={(e) => e.stopPropagation()} // Prevent click bubbling up to close modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="关闭"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center pb-2 border-b-2 border-blue-100">
          {location.name}
        </h3>

        <div className="overflow-y-auto max-h-[70vh] pr-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 rounded-lg">
          <section className="mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
              简介
            </h4>
            {/* Using dangerouslySetInnerHTML to render parsed Markdown */}
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={renderMarkdownText(location.introduction)}></p>
          </section>

          {location.specialFeatures && location.specialFeatures.length > 0 && (
            <section className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v4a1 1 0 102 0V3zM14.586 6.172a1 1 0 00-1.414-1.414l-2.829 2.828a1 1 0 101.414 1.414l2.829-2.828zM18 11a1 1 0 100-2h-4a1 1 0 100 2h4zM14.586 13.828a1 1 0 001.414 1.414l2.829-2.828a1 1 0 00-1.414-1.414l-2.829 2.828zM11 17a1 1 0 10-2 0v4a1 1 0 102 0v-4zM6.172 14.586a1 1 0 00-1.414 1.414l-2.828-2.829a1 1 0 101.414-1.414l2.828 2.829zM2 11a1 1 0 100-2H-.5a1 1 0 100 2H2zM6.172 6.172a1 1 0 00-1.414-1.414L.5 2.829a1 1 0 101.414 1.414l2.828 2.829z"/></svg>
                特色玩法
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {location.specialFeatures.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={renderMarkdownText(feature)}></li>
                ))}
              </ul>
            </section>
          )}

          {location.travelAdvice && location.travelAdvice.length > 0 && (
            <section className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v6a2 2 0 002 2h2V4H4z"/><path fillRule="evenodd" d="M18 8H6v10a2 2 0 002 2h10a2 2 0 002-2V8zm-2 6H8l3-4 3 4z" clipRule="evenodd"/></svg>
                交通建议
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {location.travelAdvice.map((advice, index) => (
                  <li key={index} dangerouslySetInnerHTML={renderMarkdownText(advice)}></li>
                ))}
              </ul>
            </section>
          )}

          {location.notes && location.notes.length > 0 && (
            <section>
              <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.332a.995.995 0 01.93-.574h.624c.355 0 .694.195.875.52l.279.508c.55.999 1.638 1.62 2.87 1.62h.2c.414 0 .75.336.75.75v3.253a.75.75 0 01-1.5 0v-2.916a.25.25 0 00-.244-.244H13.25c-1.077 0-2.036-.599-2.529-1.564l-.279-.508c-.06-.11-.186-.17-.31-.17H8.5c-.124 0-.25-.06-.31-.17l-.279-.508c-.493-.965-1.452-1.564-2.529-1.564H4.25c-.138 0-.25.112-.25.25v2.916a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75h.2c1.232 0 2.32-.621 2.87-1.62l.279-.508a.995.995 0 01.875-.52h.624c.355 0 .694.195.875.52zM10 12.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM10 15.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM8.257 3.332a.995.995 0 01.93-.574h.624c.355 0 .694.195.875.52l.279-.508c-.493-.965-1.452-1.564-2.529-1.564H4.25c-.138 0-.25.112-.25.25v2.916a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75h.2c1.232 0 2.32-.621 2.87-1.62l.279-.508a.995.995 0 01.875-.52h.624c.355 0 .694.195.875.52zM10 12.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM10 15.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                注意事项
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {location.notes.map((note, index) => (
                  <li key={index} dangerouslySetInnerHTML={renderMarkdownText(note)}></li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

