let industry_names = {
    "Agriculture": "agriculture",
    "Cloud Services": "cloud_services",
    "Aerospace": "aerospace",
    "Architecture / Engineering / Construction": "architecture_engineering_construction",
    "Automotive / Transportation": "automotive",
    "Consumer Internet": "internet",
    "Energy": "energy",
    "Financial Services": "financial_services",
    "Game Development": "game_development",
    "Hardware / Semiconductor": "hardware",
    "Healthcare & Life Sciences": "healthcare_lifesciences",
    "Higher Education / Academia": "higher_education",
    "HPC / Scientific Computing": "supercomputing",
    "Manufacturing": "manufacturing",
    "Media & Entertainment": "media_entertainment",
    "Public Sector": "public_sector",
    "Retail / Consumer Packaged Goods": "retail",
    "Telecommunications": "telecommunications",
    "Other": "other",
    '科研 / 高等教育': 'higher_education', // JAPANESE TRANSLATION ja-jp 
    '高等教育 / 研究':'higher_education',
    '航空 / 航天 / 国防': 'aerospace',
    '农业': 'agriculture',
    '建筑 / 工程  / 房地产 / 設計': 'architecture_engineering_construction', 
    '汽车 / 物流 / 交通运输': 'automotive',
    '云服务 / クラウド サービス プロバイダー': 'cloud_services', 
    '消费互联网 / IT サービス': 'internet', 
    '能源': 'energy',
    '金融服务': 'financial_services',
    '游戏业': 'game_development',
    '硬件 / 半导体': 'hardware',
    '医疗健康和生命科学': 'healthcare_lifesciences',
    '高性能计算 / 超级计算': 'supercomputing',
    '制造业': 'manufacturing',
    '媒体和娱乐 / メディア / エンターテイメント': 'media_entertainment', 
    '公共部门 / 公共部門': 'public_sector', 
    '餐饮 / 酒店': 'restaurants',
    '零售 / 批发 ': 'retail',
    '智慧城市 / 空间': 'smart_spaces', 
    '电信': 'telecommunications',
    '其他': 'other',
    "その他":'others', 
    '学術機関  / 高等教育': 'higher_education', 
    '航空宇宙': 'aerospace',
    '農業': 'agriculture',
    '建築 / エンジニアリング / 建設': 'architecture_engineering_construction',
    '自動車 / 輸送': 'automotive',  
    'クラウド サービス': 'cloud_services',
    '個人向けインターネット': 'internet',
    'エネルギー': 'energy',
    '金融サービス': 'financial_services',
    'ゲーミング': 'game_development',
    'ハードウェア / 半導体': 'hardware',
    'ヘルスケア & ライフ サイエンス': 'healthcare_lifesciences',
    'HPC / スーパーコンピューティング': 'supercomputing',
    '製造': 'manufacturing',
    'メディア & エンターテイメント': 'media_entertainment',
    '公共部門': 'public_sector',
    '飲食店 / クイック サービス': 'restaurants',
    '小売': 'retail',
    'スマート シティ / スマート空間 / テレコミュニケーション': 'telecommunications', 
    'テレコミュニケーション': 'telecommunications', 
    "物流 & 輸送" : "transportation",  
    '通信': 'other',
    "公共部門":"public_sector",   //Translation zh-tw 
    "媒體與娛樂":	"media_entertainment",
    "學術研究 / 高等教育":	"higher_education",
    "建築/工程/營造":	"architecture_engineering_construction",
    "智慧城市 / 太空":	"smart_spaces",
    "汽車/運輸":	"automotive",
    "消費者網際網路":	"internet",
    "硬體 / 半導體":	"hardware",
    "能源":	"energy",
    "航太":	"aerospace",
    "製造":	"manufacturing",
    "農業":	"agriculture",
    "遊戲":	"game_development",
    "醫療照護與生命科學":	"healthcare_lifesciences",
    "金融服務":	"financial_services",
    "雲端服務":	"cloud_services",
    "零售業":	"retail",
    "電信業":	"telecommunications",
    "餐飲 / 快速服務":	"restaurant",
    "高效能運算 / 超級運算":	"supercomputing", 
    "其他":	"other",
    "云服务":	"cloud_services",    // Translation zh-cn
    "公共部门":	"public_sector",
    "农业":	"agriculture",
    "制造业":	"manufacturing",
    "医疗健康和生命科学":	"healthcare_lifesciences",
    "媒体与娱乐":	"media_entertainment",
    "学院 / 高等教育":	"higher_education",
    "建筑 / 工程 / 建造":	"architecture_engineering_construction",
    "智慧城市 / 空间"	:"smart_spaces",
    "汽车 / 运输":	"automotive",
    "活力":	"energy",
    "消费互联网":	"internet",
    "游戏":	"game_development",
    "电信":	"telecommunications",
    "硬件 / 半导体":	"hardware",
    "航天":	"aerospace",
    "金融服务":	"financial_services",
    "零售":	"retail",
    "餐厅 / 快速服务":	"restaurant",
    "高性能计算 / 超级计算":	"supercomputing",
    "其他":	"other",
    "HPC / 슈퍼컴퓨팅":	"supercomputing",  // Translation ko-kr
    "게임":	"game_development",
    "공공 부문"	:"public_sector",
    "금융 서비스":	"financial_services",
    "농업":	"agriculture",
    "레스토랑 / 퀵서비스":	"restaurant",
    "리테일":	"retail",
    "미디어 및 엔터테인먼트":	"media_entertainment",
    "소비자 인터넷":	"internet",
    "스마트 시티 / 공간":	"smart_spaces",
    "아키텍처 / 엔지니어링/건설":	"architecture_engineering_construction",
    "에너지":	"energy",
    "자동차 / 운송":	"automotive",
    "제조":	"manufacturing",
    "클라우드 서비스":	"cloud_services",
    "통신":	"telecommunications",
    "하드웨어 / 반도체":	"hardware",
    "학계 / 고등교육":	"higher_education",
    "항공 우주":	"aerospace",
    "헬스케어 및 생명과학":	"healthcare_lifesciences",
    "기타":	"other",
    "Aeroespacial":	"aerospace",   //Translation pt-br
    "Agricultura":	"agriculture",
    "Arquitectura / ingeniería / construcción":	"architecture_engineering_construction",
    "Automoción / transporte":	"automotive",
    "Cidades Inteligentes / Espaços":	"smart_spaces",
    "Energía":	"energy",
    "Fabricación":	"manufacturing",
    "Games"	:"game_development",
    "Hardware / semiconductor":	"hardware",
    "HPC / supercomputación":	"supercomputing",
    "Internet de consumo":	"internet",
    "Medios audiovisuales y entretenimiento":	"media_entertainment",
    "Meio Acadêmico / Ensino Superior":	"higher_education",
    "Restaurantes / Fast Food":	"restaurant",
    "Salud y biociencias":	"healthcare_lifesciences",
    "Sector público":	"public_sector",
    "Servicios en la nube":	"cloud_services",
    "Servicios financieros":	"financial_services",
    "Telecomunicaciones":	"telecommunications",
    "Venta al por menor":	"retail",
    "Otros":	"other",
    "Academia / Educación Superior":	"higher_education",   // Translation es-la
    "Aeroespacial":	"aerospace",
    "Agricultura":	"agriculture",
    "Área de la Salud y Ciencias Biológicas":	"healthcare_lifesciences",
    "Arquitectura / Ingeniería / Construcción":	"architecture_engineering_construction",
    "Automoción / Transporte":	"automotive",
    "Ciudades Inteligentes / Espacios":	"smart_spaces",
    "Energía":	"energy",
    "Gaming":	"game_development",
    "Hardware / Semiconductor":	"hardware",
    "HPC / Supercomputación":	"supercomputing",
    "Internet del Consumidor":	"internet",
    "Manufactura":	"manufacturing",
    "Medios y Entretenimiento":	"media_entertainment",
    "Restaurantes / Fast Food":	"restaurant",
    "Sector público":	"public_sector",
    "Servicios en el Cloud":	"cloud_services",
    "Servicios Financieros":	"financial_services",
    "Telecomunicaciones":	"telecommunications",
    "Venta Minorista":	"retail",
    "Otros":	"other"

}

module.exports = industry_names;     