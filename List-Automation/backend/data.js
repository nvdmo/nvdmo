// allmachine names
//JOB ROLE
var machine_names = {

    'Advisor': 'advisor',
    'CEO': 'ceo',
    'CFO': 'cfo',
    'CIO': 'cio',
    'CISO': 'ciso',
    'Consultant': 'consultant',
    'CTO': 'cto',
    'Data Analyst': 'data_analyst',
    'Data Scientist': 'data_scientist',
    'Developer / Engineer': 'engineer',
    'Film / Video Editor': 'video_editor',
    'Financial Analyst': 'financial_analyst',
    'Founder / Co-Founder': 'founder',
    'Gamer': 'gamer',
    'Graphic Designer / Animator': 'graphic_designer',
    'Industrial Designer / Product Designer': 'product_designer',
    'Industry Analyst': 'industry_analyst',
    'IT Specialist': 'it_specialist',
    'Marketing Manager': 'marketing_manager',
    'President / Vice President': 'president',
    'Press': 'press',
    'Professor / Instructor': 'professor',
    'Project Manager': 'project_manager',
    'Researcher: Academic': 'researcher_academic',
    'Researcher: Non-Academic': 'researcher_non_academic',
    'Sales Representative / Manager': 'sales_manager',
    'Security Operations': 'security_operations',
    'Solutions Architect': 'solutions_architect',
    'Student: Graduate': 'student_university',
    'Student: Middle / High School': 'student_non_university',
    'Student: Other': 'student_non_university',
    'Student: Undergraduate': 'student_undergrad',
    'Student: University': 'student_university',
    'System Administrator': 'system_administrator',
    'Venture Capitalist': 'venture_capitalist',
    'Other': 'other',
    '首席执行官': 'ceo', // Translation ja - jp
    '首席财务官': 'cfo',
    '首席信息官': 'cio',
    '首席信息安全官': 'ciso',
    '顾问': 'consultant',
    '首席技术官': 'cto',
    '数据分析师': 'data_analyst',
    '数据科学家': 'data_scientist',
    '开发人员 / 工程师': 'engineer',
    '电影 / 视频编辑': 'video_editor',
    '金融分析师': 'financial_analyst',
    '创始人 / 联合创始人': 'founder',
    '游戏玩家': 'gamer',
    '平面设计师 / 动画师': 'graphic_designer',
    '工业设计师 / 产品设计师': 'product_designer',
    '行业分析师': 'industry_analyst',
    'IT 专家': 'it_specialist',
    '市场经理': 'marketing_manager',
    '总裁 / 副总裁': 'president',
    '媒体工作者': 'press',
    '教授': 'professor',
    '项目经理 ': 'project_manager',
    '学术研究员': 'researcher_academic',
    '非学术研究员': 'researcher_non_academic',
    '安全运营': 'security_operations',
    '销售代表 / 经理 ': 'sales_manager',
    '解决方案架构师': 'solutions_architect',
    '学生： 研究生': 'student_university',
    '学生： 其他': 'student_non_university',
    '学生： 本科生': 'student_undergrad',
    '系统管理员': 'system_administrator',
    '风险投资家': 'venture_capitalist',
    '其他': 'other',
    'CEO': 'ceo',
    'CFO': 'cfo',
    'CIO': 'cio',
    'CISO': 'ciso',
    'コンサルタント': 'consultant',
    'CTO': 'cto',
    'データ アナリスト': 'data_analyst',
    'データ サイエンティスト': 'data_scientist',
    '開発者 / エンジニア': 'engineer',
    '映画 / ビデオ編集者': 'video_editor',
    '金融アナリスト': 'financial_analyst',
    '創業者 / 共同創業者': 'founder',
    'ゲーマー': 'gamer',
    'グラフィック デザイナー / アニメーター': 'graphic_designer',
    'インダストリアル デザイナー / プロダクト デザイナー': 'product_designer',
    '業界担当アナリスト': 'industry_analyst',
    'IT スペシャリスト': 'it_specialist',
    'マーケティング担当': 'marketing_manager',
    '社長 / 副社長': 'president',
    '報道': 'press',
    '教授': 'professor',
    'プロジェクト マネージャー': 'project_manager',
    '研究: 教育機関': 'researcher_academic',
    '研究: 教育機関以外': 'researcher_non_academic',
    'セキュリティ運用': 'security_operations',
    '営業担当者 / セールス マネージャー': 'sales_manager',
    'ソリューション アーキテクト': 'solutions_architect',
    '学生: 大学院生': 'student_university',
    '学生: その他': 'student_non_university',
    '学生: 学部生': 'student_undergrad',
    'システム管理者': 'system_administrator',
    'ベンチャー キャピタル	': 'venture_capitalist',
    'その他': 'other',
    "IT 技術員":"it_specialist",    // tAIWAN zh-tw
    "中小學學生": "student_non_university",
    "公關":"press" ,
    '創始人 / 聯合創始人':"founder",
    "創新投資家":"venture_capitalist",
    "圖形設計師 / 動畫師":"graphic_designer",
    "執行長 (CEO)":	"ceo",
    "學生：其他":	"student_university",
    "學生：大學部":	"student_undergrad",
    "學生：研究所":	"system_administrator",
    "學術研究員":	"researcher_academic",
    "安全行動人員":	"security_operations",
    "專案經理":	"project_manager",
    "工業設計師 / 產品設計師":	"product_designer",
    "幕僚":	"advisor",
    "技術長 (CTO)":	"cto",
    "教授":"professor",
    "業務代表 / 經理":	"sales_manager",
    "產業分析師":	"industry_analyst",
    "總裁 / 副總裁":	"president",
    "行銷專業人員":	"marketing_manager",
    "解決方案架構師":	"solutions_architect",
    "財務分析師":	"financial_analyst",
    "財務長 (CFO)":	"cfo",
    "資料分析師":	"data_analyst",
    "資料科學家":	"data_scientist",
    "資訊安全長 (CISO)":	"ciso",
    "資訊長 (CIO)":	"cio",
    "遊戲玩家":	"gamer",
    "開發人員 / 工程師":	"engineer",
    "電影 / 影片編輯":	"video_editor",
    "非學術研究員":	"researcher_non_academic",
    "顧問":	"consultant",
    "其他":	"other",
    "IT专家":"it_specialist",   // Translation zh-cn
    "会长 / 副会长":	"president",
    "创始人 / 联合创始人":	"founder",
    "咨询":	"consultant",
    "学生：其他":	"student_non_university",
    "学生：本科生":	"student_undergrad",
    "学生：研究生":	"student_university",
    "安全操作":	"security_operations",
    "工业设计师 / 产品设计师":	"product_designer",
    "平面设计师 / 动画师":	"graphic_designer",
    "开发人员 / 工程师":	"engineer",
    "按":	"press",
    "教授":	"professor",
    "数据分析师":	"data_analyst",
    "数据科学家":	"data_scientist",
    "游戏玩家":	"gamer",
    "电影 / 视频编辑":	"video_editor",
    "研究员：学术":	"researcher_academic",
    "研究员：非学术":	"researcher_non_academic",
    "系统管理员":	"system_administrator",
    "营销专业人员":	"marketing_manager",
    "行业分析师":	"industry_analyst",
    "解决方案架构师":	"solutions_architect",
    "金融分析师":	"financial_analyst",
    "销售代表 / 经理":	"sales_manager",
    "项目经理":	"project_manager",
    "顾问":	"advisor",
    "风险投资家":	"venture_capitalist",
    "首席信息安全官（CISO）":	"ciso",
    "首席信息官（CIO）":	"cio",
    "首席执行官":	"ceo",
    "首席技术官":	"cto",
    "首席财务官":	"cfo",
    "其他":	"other",
    "고문":"advisor",  // Translation ko-kr
    "CEO":	"ceo",
    "CFO":	"cfo",
    "CIO":	"cio",
    "CISO":	"ciso",
    "컨설턴트":	"consultant",
    "CTO":	"cto",
    "데이터 애널리스트":	"data_analyst",
    "데이터 사이언티스트":	"data_scientist",
    '개발자 / 엔지니어':	"engineer",
    "필름 / 영상 에디터":	"video_editor",
    "파이낸셜 애널리스트":	"financial_analyst",
    "창립자 / 공동 창립자":	"founder",
    "그래픽 디자이너 / 애니메이터":	"graphic_designer",
    "산업 디자이너 / 제품 디자이너":	"product_designer",
    "산업 애널리스트":	"industry_analyst",
    "IT 스페셜리스트":	"it_specialist",
    "회장 / 부회장":	"president",
    "기자":	"press",
    "교수":	"professor",
    "프로젝트 매니저":	"project_manager",
    "연구원: 학계":	"researcher_academic",
    "연구원: 비학계":	"researcher_non_academic", 
    "세일즈 담당자 / 매니저":	"sales_manager",
    "솔루션 아키텍트":	"solutions_architect",
    "시스템 관리자":	"system_administrator",
    "벤처 캐피탈리스트":	"venture_capitalist",
    "게이머":	"gamer",
    "마케팅 프로페셔널":	"marketing_manager",
    "보안 작업":	"security_operations",
    "학생: 기타":	"student_non_university",
    "학생: 졸업":	"student_university",
    "학생: 학부생":	"student_undergrad",
    "기타":	"other",
    "Cпециалист по финансовому анализу":"financial_analyst",  // Translation ru-ru
    "Архитектор программных решений":	"solutions_architect",
    "Венчурный капиталист":	"venture_capitalist",
    "Геймер":	"gamer",
    "Генеральный директор":	"ceo",
    "Графический дизайнер/художник-аниматор":	"graphic_designer",
    "директор по информационной безопасности":	"ciso",
    "Инженер видеомонтажа/видеомонтажер":	"video_editor",
    "ИТ-директор":	"cio",
    "Консультант":	"consultant",
    "Менеджер по продажам":	"sales_manager",
    "Менеджер по проектам":	"project_manager",
    "Научный сотрудник из академического учреждения":	"researcher_academic",
    "Научный сотрудник из неакадемического учреждения":	"security_operations",
    "Основатель/соучредитель":	"founder",
    "Президент/вице-президент":	"president",
    "Пресс-секретарь":	"press",
    "Промышленный дизайнер/продуктовый дизайнер":	"product_designer",  


}


module.exports = machine_names;
