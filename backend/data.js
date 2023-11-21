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
    "Marketing Professional": "marketing_manager",
    'Other': '',
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
    '其他': '',
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
    'その他': '',
    "IT 技術員": "it_specialist",    // tAIWAN zh-tw
    "中小學學生": "student_non_university",
    "公關": "press",
    '創始人 / 聯合創始人': "founder",
    "創新投資家": "venture_capitalist",
    "圖形設計師 / 動畫師": "graphic_designer",
    "執行長 (CEO)": "ceo",
    "學生：其他": "student_university",
    "學生：大學部": "student_undergrad",
    "學生：研究所": "system_administrator",
    "學術研究員": "researcher_academic",
    "安全行動人員": "security_operations",
    "專案經理": "project_manager",
    "工業設計師 / 產品設計師": "product_designer",
    "幕僚": "advisor",
    "技術長 (CTO)": "cto",
    "教授": "professor",
    "業務代表 / 經理": "sales_manager",
    "產業分析師": "industry_analyst",
    "總裁 / 副總裁": "president",
    "行銷專業人員": "marketing_manager",
    "解決方案架構師": "solutions_architect",
    "財務分析師": "financial_analyst",
    "財務長 (CFO)": "cfo",
    "資料分析師": "data_analyst",
    "資料科學家": "data_scientist",
    "資訊安全長 (CISO)": "ciso",
    "資訊長 (CIO)": "cio",
    "遊戲玩家": "gamer",
    "開發人員 / 工程師": "engineer",
    "電影 / 影片編輯": "video_editor",
    "非學術研究員": "researcher_non_academic",
    "顧問": "consultant",
    "其他": "",
    "IT专家": "it_specialist",   // Translation zh-cn
    "会长 / 副会长": "president",
    "创始人 / 联合创始人": "founder",
    "咨询": "consultant",
    "学生：其他": "student_non_university",
    "学生：本科生": "student_undergrad",
    "学生：研究生": "student_university",
    "安全操作": "security_operations",
    "工业设计师 / 产品设计师": "product_designer",
    "平面设计师 / 动画师": "graphic_designer",
    "开发人员 / 工程师": "engineer",
    "按": "press",
    "教授": "professor",
    "数据分析师": "data_analyst",
    "数据科学家": "data_scientist",
    "游戏玩家": "gamer",
    "电影 / 视频编辑": "video_editor",
    "研究员：学术": "researcher_academic",
    "研究员：非学术": "researcher_non_academic",
    "系统管理员": "system_administrator",
    "营销专业人员": "marketing_manager",
    "行业分析师": "industry_analyst",
    "解决方案架构师": "solutions_architect",
    "金融分析师": "financial_analyst",
    "销售代表 / 经理": "sales_manager",
    "项目经理": "project_manager",
    "顾问": "advisor",
    "风险投资家": "venture_capitalist",
    "首席信息安全官（CISO）": "ciso",
    "首席信息官（CIO）": "cio",
    "首席执行官": "ceo",
    "首席技术官": "cto",
    "首席财务官": "cfo",
    "其他": "",
    "고문": "advisor",  // Translation ko-kr
    "CEO": "ceo",
    "CFO": "cfo",
    "CIO": "cio",
    "CISO": "ciso",
    "컨설턴트": "consultant",
    "CTO": "cto",
    "데이터 애널리스트": "data_analyst",
    "데이터 사이언티스트": "data_scientist",
    '개발자 / 엔지니어': "engineer",
    "필름 / 영상 에디터": "video_editor",
    "파이낸셜 애널리스트": "financial_analyst",
    "창립자 / 공동 창립자": "founder",
    "그래픽 디자이너 / 애니메이터": "graphic_designer",
    "산업 디자이너 / 제품 디자이너": "product_designer",
    "산업 애널리스트": "industry_analyst",
    "IT 스페셜리스트": "it_specialist",
    "회장 / 부회장": "president",
    "기자": "press",
    "교수": "professor",
    "프로젝트 매니저": "project_manager",
    "연구원: 학계": "researcher_academic",
    "연구원: 비학계": "researcher_non_academic",
    "세일즈 담당자 / 매니저": "sales_manager",
    "솔루션 아키텍트": "solutions_architect",
    "시스템 관리자": "system_administrator",
    "벤처 캐피탈리스트": "venture_capitalist",
    "게이머": "gamer",
    "마케팅 프로페셔널": "marketing_manager",
    "보안 작업": "security_operations",
    "학생: 기타": "student_non_university",
    "학생: 졸업": "student_university",
    "학생: 학부생": "student_undergrad",
    "기타": "",
    "Cпециалист по финансовому анализу": "financial_analyst",  // Translation ru-ru
    "Архитектор программных решений": "solutions_architect",
    "Венчурный капиталист": "venture_capitalist",
    "Геймер": "gamer",
    "Генеральный директор": "ceo",
    "Графический дизайнер/художник-аниматор": "graphic_designer",
    "директор по информационной безопасности": "ciso",
    "Инженер видеомонтажа/видеомонтажер": "video_editor",
    "ИТ-директор": "cio",
    "Консультант": "consultant",
    "Менеджер по продажам": "sales_manager",
    "Менеджер по проектам": "project_manager",
    "Научный сотрудник из академического учреждения": "researcher_academic",
    "Научный сотрудник из неакадемического учреждения": "security_operations",
    "Основатель/соучредитель": "founder",
    "Президент/вице-президент": "president",
    "Пресс-секретарь": "press",
    "Промышленный дизайнер/продуктовый дизайнер": "product_designer",
    "Administrador de Sistemas": "system_administrator",  //Translation es-la 
    "Analista de Datos": "data_analyst",
    "Analista de la Industria": "industry_analyst",
    "Analista Financiero": "financial_analyst",
    "Arquitecto de Soluciones": "solutions_architect",
    "Capitalista de Riesgo": "venture_capitalist",
    "Científico de Datos": "data_scientist",
    "Consultor": "consultant",
    "Desarrollador / Ingeniero": "engineer",
    "Diseñador Gráfico / Animador": "graphic_designer",
    "Diseñador Industrial / Diseñador de Producto": "product_designer",
    "Editor de Cine / Video": "video_editor",
    "Especialista en TI": "it_specialist",
    "Estudiante: Graduado": "student_university",
    "Estudiante: Otro nivel": "student_non_university",
    "Fundador / Cofundador": "founder",
    "Gerente de Proyecto": "project_manager",
    "Investigador: Académico": "researcher_academic",
    "Investigador: Académico": "researcher_non_academic",
    "Jugador": "gamer",
    "Operaciones de Seguridad": "security_operations",
    "Prensa": "press",
    "Presidente / Vicepresidente": "president",
    "Profesional de Marketing": "marketing_manager",
    "Profesor/Instructor": "professor",
    "Representante / Gerente de Ventas": "sales_manager",
    "Otros": "",
    "Administrador de Sistemas": "system_administrator",  //Translations pt-br  
    "Analista de Dados": "data_analyst",
    "Analista Financeiro": "financial_analyst",
    "Analista Industrial": "industry_analyst",
    "Arquiteto de Soluções": "solutions_architect",
    "Capitalista de Risco": "venture_capitalist",
    "Cientista de Dados": "data_scientist",
    "Consultor": "consultant",
    "Desenvolvedor / Engenheiro": "engineer",
    "Designer Gráfico / Animador": "graphic_designer",
    "Designer Industrial / Designer de Produto": "product_designer",
    "Editor de Filme / Vídeo": "video_editor",
    "Especialista em IT": "it_specialist",
    "Estudante: Graduação": "student_undergrad",
    "Estudante: Outros": "student_non_university",
    "Estudante: Pós-graduação": "student_university",
    "Fundador / Co-Fundador": "founder",
    "Gerente de Projetos": "project_manager",
    "Imprensa": "press",
    "Operações de Segurança": "security_operations",
    "Pesquisador: Acadêmico": "researcher_academic",
    "Pesquisador: Não-Acadêmico": "researcher_non_academic",
    "Presidente / Vice-Presidente": "president",
    "Professor/Instrutor": "professor",
    "Profissional de Marketing": "marketing_manager",
    "Representante / Gerente de Vendas": "sales_manager",
    "Outros": "",
    "Bearbeiter: Akademisch": "researcher_academic", // Translation de-de 
    "Bearbeiter: Nichtakademisch": "researcher_non_academic",
    "Berater": "consultant",
    "Branchenanalyst": "industry_analyst",
    "Datenanalyst": "data_analyst",
    "Datenwissenschaftler": "data_scientist",
    "Entwickler/Ingenieur": "engineer",
    "Film-/Videobearbeiter": "video_editor",
    "Finanzanalyst": "financial_analyst",
    "Grafikdesigner/Animator": "graphic_designer",
    "Gründer/Mitbegründer": "founder",
    "Industriedesigner/Produktdesigner": "product_designer",
    "IT-Spezialist": "it_specialist",
    "Lösungsarchitekt": "solutions_architect",
    "Marketing-Experte": "marketing_manager",
    "Präsident/Vizepräsident": "president",
    "Presse": "press",
    "Professor/Schulungsleiter": "professor",
    "Projektmanager": "project_manager",
    "Risikokapitalgeber": "venture_capitalist",
    "Sicherheitsmaßnahmen": "security_operations",
    "Student: Andere": "student_non_university",
    "Student: Bachelor": "student_undergrad",
    "Student: Master": "student_university",
    "Systemadministrator": "system_administrator",
    "Vertriebsmitarbeiter/Manager": "sales_manager",
    "Sonstige": "",
    "Administrateur système": "system_administrator",  // Translation fr - fr 
    "Analyste financier": "financial_analyst",
    "Analyste industriel": "industry_analyst",
    "Architecte en solutions": "solutions_architect",
    "Autres étudiants": "student_non_university",
    "Chef de projets": "project_manager",
    "Chercheur non universitaire": "researcher_non_academic",
    "Chercheur universitaire": "researcher_academic",
    "Designer / Concepteur de produits": "product_designer",
    "Développeur / Ingénieur": "engineer",
    "Directeur de la technologie": "cto",
    "Directeur financier": "cfo",
    "Étudiants de premier cycle": "student_undergrad",
    "Étudiants diplômés": "student_university",
    "Fondateur / Cofondateur": "founder",
    "Infographiste / Animateur": "graphic_designer",
    "Investisseur": "venture_capitalist",
    "Monteur / Spécialiste vidéo": "video_editor",
    "Opérations de sécurité": "security_operations",
    "PDG": "ceo",
    "Président / Vice-président": "president",
    "Professeur / Formateur": "professor",
    "Professionnel(le) du marketing": "marketing_manager",
    "Représentant ou gestionnaire commercial": "sales_manager",
    "Responsable de sécurité informatique": "ciso",
    "Responsable de systèmes d’information": "cio",
    "Spécialiste informatique": "it_specialist",
    "Administrador del sistema": "system_administrator", // Translation es-es 
    "Analista de datos": "data_analyst",
    "Analista del sector": "industry_analyst",
    "Analista financiero": "financial_analyst",
    "Animador/diseñador gráfico": "graphic_designer",
    "Arquitecto de soluciones": "solutions_architect",
    "Científico de datos": "data_scientist",
    "Consultor": "consultant",
    "Desarrollador/ingeniero": "engineer",
    "Director de información": "cio",
    "Director de tecnología": "cto",
    "Director ejecutivo": "ceo",
    "Director financiero": "cfo",
    "Diseñador industrial/diseñador de productos": "product_designer",
    "Especialista en TI": "it_specialist",
    "Estudiante: estudiante universitario": "student_undergrad",
    "Estudiante: graduado": "student_university",
    "Estudiante: otros": "student_non_university",
    "Fundador/cofundador": "founder",
    "Gestor de proyectos": "project_manager",
    "Gestor/representante de ventas": "sales_manager",
    "Inversor de capital de riesgo": "venture_capitalist",
    "Investigador: académico": "researcher_academic",
    "Investigador: no académico": "researcher_non_academic",
    "Montador de cine/vídeo": "video_editor",
    "Operaciones de seguridad": "security_operations",
    "Prensa": "press",
    "Presidente/vicepresidente": "president",
    "Profesional del marketing": "marketing_manager",
    "Profesor/Instructor": "professor",
    "Responsable de seguridad de la información": "ciso",
    "Videojugador": "gamer",
    "Amministratore di sistema": "system_administrator",  // Translation it-it
    "Analista di settore": "industry_analyst",
    "Analista finanziario": "financial_analyst",
    "Consulente": "consultant",
    "Designer industriale/Designer di prodotti": "product_designer",
    "Editor di film/video": "video_editor",
    "Esperto di dati": "data_scientist",
    "Fondatore/Co-Fondatore": "founder",
    "Graphic Designer/Animazione": "graphic_designer",
    "Operazioni di sicurezza": "security_operations",
    "Presidente/Vicepresidente": "president",
    "Professionista di marketing": "marketing_manager",
    "Professore/Docente": "professor",
    "Ricercatore accademico": "researcher_academic",
    "Ricercatore non accademico": "researcher_non_academic",
    "Specialista IT": "it_specialist",
    "Stampa": "press",
    "Studente: altro": "student_non_university",
    "Studente: laurea di primo livello": "student_undergrad",
    "Studente: laurea magistrale": "student_university",
    "Sviluppatore/Ingegnere": "engineer",
    "Venditore/Responsabile vendite": "sales_manager",
    "Altro": "",
    "Administrator systemu": "system_administrator", // Transaltion pl-pl 
    "Analityk / badacz danych": "data_scientist",
    "Analityk branżowy": "industry_analyst",
    "Analityk danych": "data_analyst",
    "Analityk finansowy": "financial_analyst",
    "Architekt rozwiązań": "solutions_architect",
    "Badacz akademicki": "researcher_academic",
    "Badacz nieakademicki": "researcher_non_academic",
    "CIO": "cio",
    "CISO": "ciso",
    "Dyrektor finansowy": "cfo",
    "Dyrektor generalny": "ceo",
    "Dyrektor techniczny": "cto",
    "Gracz": "gamer",
    "Inne osoby studiujące lub uczące się": "student_non_university",
    "Inwestor kapitału podwyższonego ryzyka": "venture_capitalist",
    "Kierownik Projektu": "project_manager",
    "Konsultant": "consultant",
    "Montażysta filmów wideo": "video_editor",
    "Operacje bezpieczeństwa": "security_operations",
    "Osoby studiujące na studiach licencjackich": "student_undergrad",
    "Osoby studiujące na studiach magisterskich": "student_university",
    "Prasa": "press",
    "Prezes / wiceprezes": "president",
    "Profesjonalista z branży marketingu": "marketing_manager",
    "Profesor / nauczyciel": "professor",
    "Programista / inżynier": "engineer",
    "Projektant graficzny / animator": "graphic_designer",
    "Projektant przemysłowy / projektant produktu": "product_designer",
    "Przedstawiciel handlowy / kierownik": "sales_manager",
    "Specjalista IT": "it_specialist",
    "Założyciel / współzałożyciel": "founder",
    "Inne": "",
    "Akademik Araştırma Görevlisi": "researcher_academic",  // Traslation tr-tr (turkish) 
    "Akademik Olmayan Araştırma Görevlisi": "researcher_non_academic",
    "Basın": "press",
    "Başkan / Başkan Yardımcısı": "president",
    "BT Uzmanı": "it_specialist",
    "CEO": "ceo",
    "CFO": "cfo",
    "CIO": "cio",
    "CISO": "ciso",
    "Çözüm Mimarı": "solutions_architect",
    "CTO": "cto",
    "Danışman": "consultant",
    "Endüstriyel Tasarımcı / Ürün Tasarımcısı": "product_designer",
    "Film / Video Editörü": "video_editor",
    "Geliştirici / Mühendis": "engineer",
    "Grafik Tasarımcı / Animasyoncu": "graphic_designer",
    "Güvenlik İşlemleri": "security_operations",
    "Hesap Uzmanı": "financial_analyst",
    "Kurucu / Kurucu Ortak": "founder",
    "Öğrenci: Diğer": "student_non_university",
    "Öğrenci: Lisans": "student_undergrad",
    "Öğrenci: Yüksek Lisans": "student_university",
    "Oyuncu": "gamer",
    "Pazarlama Profesyoneli": "marketing_manager",
    "Profesör/Eğitmen": "professor",
    "Proje Yöneticisi": "project_manager",
    "Risk Sermayedarı": "venture_capitalist",
    "Satış Temsilcisi / Yönetici": "sales_manager",
    "Sektör Analiz Uzmanı": "industry_analyst",
    "Sistem Yöneticisi": "system_administrator",
    "Veri Analiz Uzmanı": "data_analyst",
    "Veri Bilimci": "data_scientist",
    "Diğer": "",
    "ADM.DIR": "ceo",   // Translation nb-no (Norwegian) 
    "Bransjeanalytiker": "industry_analyst",
    "CIO": "cio",
    "CISO": "ciso",
    "Dataanalytiker": "data_analyst",
    "Dataforsker": "data_scientist",
    "Film-/Videoklipper": "video_editor",
    "Finansanalytiker": "financial_analyst",
    "Forsker: Akademisk": "researcher_academic",
    "Forsker: Ikke-akademisk": "researcher_non_academic",
    "Gamer": "gamer",
    "Grafisk designer/Animatør": "graphic_designer",
    "Grunnlegger/Medgrunnlegger": "founder",
    "Industri-/Produktdesigner": "product_designer",
    "IT-spesialist": "it_specialist",
    "Konsulent": "consultant",
    "Løsningsarkitekt": "solutions_architect",
    "Markedsføringsprofesjonell": "marketing_manager",
    "President/Visepresident": "president",
    "Presse": "press",
    "Professor/instruktør": "professor",
    "Prosjektleder": "project_manager",
    "Salgsrepresentant/Leder": "sales_manager",
    "Sikkerhetsoperasjoner": "security_operations",
    "Student: annet": "student_non_university",
    "Student: ferdig utdannet": "student_university",
    "Student: under utdanning": "student_undergrad",
    "Systemansvarlig": "system_administrator",
    "TEK.DIR": "cto",
    "Utvikler/Ingeniør": "engineer",
    "ØKO.DIR": "cfo",
    "Annet": "",
    "Branschanalytiker": "industry_analyst", // Translation sv-se (swedish)  
    "Dataanalytiker": "data_analyst",
    "Datavetare": "data_scientist",
    "Film-/videoredigerare": "video_editor",
    "Finansanalytiker": "financial_analyst",
    "Finansdirektör": "cfo",
    "Forskare: akademisk": "researcher_academic",
    "Forskare: icke-akademisk": "researcher_non_academic",
    "Grafisk designer/animatör": "graphic_designer",
    "Grundare/medgrundare": "founder",
    "Industridesigner/produktdesigner": "product_designer",
    "IT-direktör": "cto",
    "IT-specialist": "it_specialist",
    "Konsult": "consultant",
    "Lösningsarkitekt": "solutions_architect",
    "Marknadsföringsansvarig": "marketing_manager",
    "Press": "press",
    "Professor/instruktör": "professor",
    "Projektledare": "project_manager",
    "Riskkapitalist": "venture_capitalist",
    "Säkerhetsåtgärder": "security_operations",
    "Säljare/försäljningschef": "sales_manager",
    "Spelare": "gamer",
    "Student: Examen": "student_university",
    "Student: Grundutbildning": "student_undergrad",
    "Student: Övrig": "student_non_university",
    "Systemadministratör": "system_administrator",
    "Utvecklare/ingenjör": "engineer",
    "VD": "ceo",
    "VD/vice VD": "president",
    "Annan": "",
    "Data-analyytikko": "data_analyst", // Translation fi-fi (finnish) 
    "Datatutkija": "data_scientist", 
    "Elokuva-/videoeditoija": "video_editor",
    "Graafinen suunnittelija / animoija": "graphic_designer",
    "IT-asiantuntija": "it_specialist",
    "Järjestelmänvalvoja": "system_administrator",
    "Kehittäjä / insinööri": "engineer",
    "Konsultti": "consultant",
    "Markkinointiammattilainen": "marketing_manager",
    "Median edustaja": "press",
    "Myyntiedustaja / -johtaja": "sales_manager",
    "Opiskelija: jatko-opiskelija": "student_university",
    "Opiskelija: korkeakoulu": "student_undergrad",
    "Opiskelija: muut": "student_non_university",
    "Pääomasijoittaja": "venture_capitalist",
    "Pelaaja": "gamer",
    "Perustaja / perustajajäsen": "founder",
    "Professori/ohjaaja": "professor",
    "Projektipäällikkö": "project_manager",
    "Ratkaisuarkkitehti": "solutions_architect",
    "Talousanalyytikko": "financial_analyst",
    "Talousjohtaja": "cfo",
    "Tekninen johtaja": "cto",
    "Teollinen suunnittelija / tuotesuunnittelija": "product_designer",
    "Tietohallintojohtaja": "cio",
    "Tietoturvajohtaja": "ciso",
    "Tietoturvatoiminta": "security_operations",
    "Toimiala-analyytikko": "industry_analyst",
    "Toimitusjohtaja": "ceo",
    "Toimitusjohtaja / varatoimitusjohtaja": "president",
    "Tutkija: Akateeminen": "researcher_academic",
    "Tutkija: Muu kuin akateeminen": "researcher_non_academic",
    "Muu": "",
    "Dataanalytiker": "data_analyst",  // translation da-dk (danish)
    "Dataforsker": "data_scientist",
    "Direktør/underdirektør": "president",
    "Film-/videoklipper": "video_editor",
    "Finansanalytiker": "financial_analyst",
    "Forsker: Akademisk": "researcher_academic",
    "Forsker: Ikke-akademisk": "researcher_non_academic",
    "Gamer": "gamer",
    "Grafisk designer/animator": "graphic_designer",
    "Grundlægger/medstifter": "founder",
    "Industrianalytiker": "industry_analyst",
    "Industriel designer/produktdesigner": "product_designer",
    "It-specialist": "it_specialist",
    "Konsulent": "consultant",
    "Løsningsarkitekt": "solutions_architect",
    "Markedsføringsekspert": "marketing_manager",
    "Presse": "press",
    "Professor/underviser": "professor",
    "Projektleder": "project_manager",
    "Salgsrepræsentant/-chef": "sales_manager",
    "Sikkerhedsdrift": "security_operations",
    "Studerende: Andet": "student_non_university",
    "Studerende: Bachelor": "student_undergrad",
    "Studerende: Kandidat": "student_university",
    "Systemadministrator": "system_administrator",
    "Udvikler/tekniker": "engineer",
    "Ventureinvestor": "venture_capitalist",
    "Andet": "",
    "Architekt řešení": "solutions_architect", // Translation   cs-cz (czech)
    "Bezpečnostní operace": "security_operations",
    "Datový analytik": "data_analyst", 
    "Datový vědec": "data_scientist",
    "Editor filmů/videa": "video_editor",
    "Finanční analytik": "financial_analyst",
    "FINANČNÍ ŘEDITEL": "cfo",
    "Grafický designér / animátor": "graphic_designer",
    "Hráč": "gamer",
    "Investor venture kapitálu": "venture_capitalist",
    "IT specialista": "it_specialist",
    "Konzultant": "consultant",
    "Marketingový profesionál": "marketing_manager",
    "Obchodní zástupce/manažer": "sales_manager",
    "Odvětvový analytik": "industry_analyst",
    "Prezident/viceprezident": "president",
    "Profesor/instruktor": "professor",
    "Průmyslový designér / produktový designér": "product_designer",
    "Ředitel IT (CIO)": "cio",
    "Ředitel pro bezpečnost informací (CISO)": "ciso",
    "Správce systémů": "system_administrator",
    "Student: absolvent": "student_university",
    "Student: bakalářské studium": "student_undergrad",
    "Student: jiný": "student_non_university",
    "TECHNICKÝ ŘEDITEL": "cto",
    "Tisk": "press",
    "Vedoucí projektu": "project_manager",
    "VÝKONNÝ ŘEDITEL": "ceo",
    "Vývojář/inženýr": "engineer",
    "Výzkumník: Akademická sféra": "researcher_academic",
    "Výzkumník: Mimo akademickou sféru": "researcher_non_academic",
    "Zakladatel/spoluzakladatel": "founder",
    "Jiné": "",
    "Beveiligingsbeheer": "security_operations", // Transaltion nl-nl (dutch)
    "Consulent": "consultant",
    "Data-analist": "data_analyst", 
    "Durfkapitalist": "venture_capitalist",
    "Film/videomonteur": "video_editor",
    "Financieel analist": "financial_analyst",
    "Gamer": "gamer",
    "Gegevenswetenschapper": "data_scientist",
    "Grafisch ontwerper/animator": "graphic_designer",
    "Industrie-analist": "industry_analyst",
    "Industrieel ontwerper/productontwikkelaar": "product_designer",
    "IT-specialist": "it_specialist",
    "Marketingprofessional": "marketing_manager",
    "Media": "press",
    "Onderzoeker: Academisch": "researcher_academic",
    "Onderzoeker: Niet-academisch": "researcher_non_academic",
    "Ontwikkelaar/engineer": "engineer",
    "Oplossingenarchitect": "solutions_architect",
    "Oprichter/medeoprichter": "founder",
    "Professor/instructeur": "professor",
    "Projectmanager": "project_manager",
    "Student: afgestudeerd": "student_university",
    "Student: niet afgestudeerd": "student_undergrad",
    "Student: overige": "student_non_university",
    "Systeembeheerder": "system_administrator",
    "Vertegenwoordiger/Manager": "sales_manager",
    "Voorzitter/vice-voorzitter": "president",
    "Anders": "",
    "Bearbeiter: Akademisch": "researcher_academic", // Translation de-at (german)
    "Bearbeiter: Nichtakademisch": "researcher_non_academic",
    "Berater": "consultant",
    "Branchenanalyst": "industry_analyst",
    "Datenanalyst": "data_analyst",
    "Datenwissenschaftler": "data_scientist",
    "Entwickler/Ingenieur": "engineer",
    "Film-/Videobearbeiter": "video_editor",
    "Finanzanalyst": "financial_analyst",
    "Gamer": "gamer",
    "Grafikdesigner/Animator": "graphic_designer",
    "Gründer/Mitbegründer": "founder",
    "Industriedesigner/Produktdesigner": "product_designer",
    "IT-Spezialist": "it_specialist",
    "Lösungsarchitekt": "solutions_architect",
    "Marketing-Experte": "marketing_manager",
    "Präsident/Vizepräsident": "president",
    "Presse": "press",
    "Professor/Schulungsleiter": "professor",
    "Projektmanager": "project_manager",
    "Risikokapitalgeber": "venture_capitalist",
    "Sicherheitsmaßnahmen": "security_operations",
    "Student: Andere": "student_non_university",
    "Student: Bachelor": "student_undergrad",
    "Student: Master": "student_university",
    "Systemadministrator": "system_administrator",
    "Vertriebsmitarbeiter/Manager": "sales_manager",
    "Sonstige": "",
    "Administrateur système": "system_administrator", // Translation  fr-br (french)
    "Analyste financier": "financial_analyst",
    "Analyste industriel": "industry_analyst",
    "Architecte en solutions": "solutions_architect",
    "Autres étudiants": "student_non_university",
    "Chef de projets": "project_manager",
    "Chercheur non universitaire": "researcher_non_academic",
    "Chercheur universitaire": "researcher_academic",
    "Designer / Concepteur de produits": "product_designer",
    "Développeur / Ingénieur": "engineer",
    "Directeur de la technologie": "cto",
    "Directeur financier": "cfo",
    "Étudiants de premier cycle": "student_undergrad",
    "Étudiants diplômés": "student_university",
    "Fondateur / Cofondateur": "founder",
    "Gaming": "gamer",
    "Infographiste / Animateur": "graphic_designer", 
    "Investisseur": "venture_capitalist",
    "Monteur / Spécialiste vidéo": "video_editor",
    "Opérations de sécurité": "security_operations", 
    "PDG": "ceo",
    "Président / Vice-président": "president",
    "Presse": "press",
    "Professeur / Formateur": "professor",
    "Professionnel(le) du marketing": "marketing_manager",
    "Représentant ou gestionnaire commercial": "sales_manager",
    "Responsable de sécurité informatique": "ciso",
    "Responsable de systèmes d’information": "cio",
    "Spécialiste informatique": "it_specialist",
    "Autre": "",
    "Administrator de sistem": "system_administrator", // Translation ro-ro (romanian)
    "Analist de date": "data_analyst",
    "Analist financiar": "financial_analyst",
    "Analist în industrie": "industry_analyst",
    "Arhitect de soluții": "solutions_architect",
    "CEO": "ceo",
    "Cercetător: academic": "researcher_academic",
    "Cercetător: neacademic": "researcher_non_academic",
    "Designer grafic/animație": "graphic_designer",
    "Designer industrial/Designer de produs": "product_designer",
    "Dezvoltator/Inginer": "engineer",
    "Director de proiect": "project_manager",
    "Director IT (CIO)": "cio",
    "Editor film/video": "video_editor",
    "Fondator/Cofondator": "founder",
    "Investitor de capital de risc": "venture_capitalist",
    "Manager securitatea informației (CISO)": "ciso",
    "Om de știință": "data_scientist",
    "Operațiuni de securitate": "security_operations",
    "Presă": "press",
    "Președinte/Vicepreședinte": "president",
    "Profesionist de marketing": "marketing_manager",
    "Profesor/Instructor": "professor",
    "Reprezentant/director de vânzări": "sales_manager",
    "Specialist în IT": "it_specialist",
    "Student: absolvent": "student_university",
    "Student: altele": "student_non_university",
    "Student: studii în desfășurare": "student_undergrad",
    "Alt motiv": "" ,
}



module.exports = machine_names; 
