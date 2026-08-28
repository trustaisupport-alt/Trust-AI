/* =====================================================
   TRUSTAI LANGUAGE SYSTEM — MULTILINGUAL VERSION
   ===================================================== */

(function () {

"use strict";


/* =====================================================
   SUPPORTED LANGUAGES
===================================================== */

const LANGUAGES = {

    en: {
        name: "English",
        nativeName: "English",
        flag: "🇬🇧",
        locale: "en"
    },

    fr: {
        name: "French",
        nativeName: "Français",
        flag: "🇫🇷",
        locale: "fr"
    },

    es: {
        name: "Spanish",
        nativeName: "Español",
        flag: "🇪🇸",
        locale: "es"
    },

    pt: {
        name: "Portuguese",
        nativeName: "Português",
        flag: "🇵🇹",
        locale: "pt"
    },

    zh: {
        name: "Chinese",
        nativeName: "中文",
        flag: "🇨🇳",
        locale: "zh-CN"
    },

    hi: {
        name: "Hindi",
        nativeName: "हिन्दी",
        flag: "🇮🇳",
        locale: "hi-IN"
    },

    ar: {
        name: "Arabic",
        nativeName: "العربية",
        flag: "🇸🇦",
        locale: "ar"
    },

    ru: {
        name: "Russian",
        nativeName: "Русский",
        flag: "🇷🇺",
        locale: "ru"
    },

    ja: {
        name: "Japanese",
        nativeName: "日本語",
        flag: "🇯🇵",
        locale: "ja-JP"
    },

    de: {
        name: "German",
        nativeName: "Deutsch",
        flag: "🇩🇪",
        locale: "de"
    },

    ko: {
        name: "Korean",
        nativeName: "한국어",
        flag: "🇰🇷",
        locale: "ko-KR"
    },

    it: {
        name: "Italian",
        nativeName: "Italiano",
        flag: "🇮🇹",
        locale: "it"
    },

    tr: {
        name: "Turkish",
        nativeName: "Türkçe",
        flag: "🇹🇷",
        locale: "tr"
    },

    id: {
        name: "Indonesian",
        nativeName: "Bahasa Indonesia",
        flag: "🇮🇩",
        locale: "id"
    },

    ha: {
        name: "Hausa",
        nativeName: "Hausa",
        flag: "🇳🇬",
        locale: "ha"
    },

    yo: {
        name: "Yoruba",
        nativeName: "Yorùbá",
        flag: "🇳🇬",
        locale: "yo"
    },

    ig: {
        name: "Igbo",
        nativeName: "Igbo",
        flag: "🇳🇬",
        locale: "ig"
    }

};


/* =====================================================
   DEFAULT LANGUAGE
===================================================== */

const DEFAULT_LANGUAGE = "en";


/* =====================================================
   TRANSLATIONS
===================================================== */

const TRANSLATIONS = {


/* =====================================================
   ENGLISH
===================================================== */

en: {

    home: "Home",
    messageChecker: "Message Checker",
    conversationChecker: "Conversation Checker",
    websiteChecker: "Website Checker",
    deviceSecurity: "Device Security",
    protection: "TrustAI Protection",
    upgradePlan: "Upgrade Plan",
    securityCenter: "Security Center",
    scamAlerts: "Scam Alerts",
    reportScam: "Report a Scam",
    contactTrustAI: "Contact TrustAI",
    settingsPrivacy: "Settings & Privacy",
    logout: "Log Out",

    checkSomething: "Check Something",
    security: "Security",

    stayAhead:
        "Stay one step ahead of scams.",

    checkMessage:
        "Check Message",

    checkConversation:
        "Check Conversation",

    checkWebsite:
        "Check Website",

    language:
        "Language",

    country:
        "Country",

    free:
        "Free",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Upgrade to Pro",

    upgradeToPremier:
        "Upgrade to Premier",

    monthly:
        "Monthly",

    yearly:
        "Yearly",

    mostPopular:
        "MOST POPULAR",

    maximumProtection:
        "MAXIMUM PROTECTION",

    currentPlan:
        "Current plan",

    languageTitle:
        "Language",

    languageDescription:
        "Choose the language you want TrustAI to use.",

    currentLanguage:
        "Current language",

    searchLanguages:
        "Search languages...",

    languageNoticeTitle:
        "🌍 TrustAI languages",

    languageNotice:
        "Your language selection is saved on this device and used across supported TrustAI pages."

},


/* =====================================================
   FRENCH
===================================================== */

fr: {

    home: "Accueil",
    messageChecker: "Vérificateur de messages",
    conversationChecker: "Vérificateur de conversations",
    websiteChecker: "Vérificateur de sites",
    deviceSecurity: "Sécurité de l'appareil",
    protection: "Protection TrustAI",
    upgradePlan: "Mettre à niveau",
    securityCenter: "Centre de sécurité",
    scamAlerts: "Alertes aux arnaques",
    reportScam: "Signaler une arnaque",
    contactTrustAI: "Contacter TrustAI",
    settingsPrivacy: "Paramètres et confidentialité",
    logout: "Se déconnecter",

    checkSomething: "Vérifier quelque chose",
    security: "Sécurité",

    stayAhead:
        "Gardez une longueur d'avance sur les arnaques.",

    checkMessage:
        "Vérifier le message",

    checkConversation:
        "Vérifier la conversation",

    checkWebsite:
        "Vérifier le site",

    language: "Langue",
    country: "Pays",

    free: "Gratuit",
    pro: "Pro",
    premier: "Premier",

    upgradeToPro:
        "Passer à Pro",

    upgradeToPremier:
        "Passer à Premier",

    monthly: "Mensuel",
    yearly: "Annuel",

    mostPopular:
        "LE PLUS POPULAIRE",

    maximumProtection:
        "PROTECTION MAXIMALE",

    currentPlan:
        "Plan actuel",

    languageTitle:
        "Langue",

    languageDescription:
        "Choisissez la langue que TrustAI doit utiliser.",

    currentLanguage:
        "Langue actuelle",

    searchLanguages:
        "Rechercher une langue...",

    languageNoticeTitle:
        "🌍 Langues TrustAI",

    languageNotice:
        "Votre choix de langue est enregistré sur cet appareil et utilisé sur les pages TrustAI prises en charge."

},


/* =====================================================
   SPANISH
===================================================== */

es: {

    home: "Inicio",
    messageChecker: "Verificador de mensajes",
    conversationChecker: "Verificador de conversaciones",
    websiteChecker: "Verificador de sitios web",
    deviceSecurity: "Seguridad del dispositivo",
    protection: "Protección TrustAI",
    upgradePlan: "Mejorar plan",
    securityCenter: "Centro de seguridad",
    scamAlerts: "Alertas de estafas",
    reportScam: "Denunciar una estafa",
    contactTrustAI: "Contactar con TrustAI",
    settingsPrivacy: "Configuración y privacidad",
    logout: "Cerrar sesión",

    checkSomething:
        "Comprobar algo",

    security:
        "Seguridad",

    stayAhead:
        "Mantente un paso por delante de las estafas.",

    checkMessage:
        "Comprobar mensaje",

    checkConversation:
        "Comprobar conversación",

    checkWebsite:
        "Comprobar sitio web",

    language: "Idioma",
    country: "País",

    free: "Gratis",
    pro: "Pro",
    premier: "Premier",

    upgradeToPro:
        "Actualizar a Pro",

    upgradeToPremier:
        "Actualizar a Premier",

    monthly: "Mensual",
    yearly: "Anual",

    mostPopular:
        "MÁS POPULAR",

    maximumProtection:
        "MÁXIMA PROTECCIÓN",

    currentPlan:
        "Plan actual",

    languageTitle:
        "Idioma",

    languageDescription:
        "Elige el idioma que quieres que utilice TrustAI.",

    currentLanguage:
        "Idioma actual",

    searchLanguages:
        "Buscar idiomas...",

    languageNoticeTitle:
        "🌍 Idiomas de TrustAI",

    languageNotice:
        "Tu selección de idioma se guarda en este dispositivo y se utiliza en las páginas compatibles de TrustAI."

},


/* =====================================================
   PORTUGUESE
===================================================== */

pt: {

    home: "Início",
    messageChecker: "Verificador de mensagens",
    conversationChecker: "Verificador de conversas",
    websiteChecker: "Verificador de sites",
    deviceSecurity: "Segurança do dispositivo",
    protection: "Proteção TrustAI",
    upgradePlan: "Atualizar plano",
    securityCenter: "Central de segurança",
    scamAlerts: "Alertas de golpes",
    reportScam: "Denunciar golpe",
    contactTrustAI: "Contactar TrustAI",
    settingsPrivacy: "Configurações e privacidade",
    logout: "Sair",

    checkSomething:
        "Verificar algo",

    security:
        "Segurança",

    stayAhead:
        "Fique um passo à frente dos golpes.",

    checkMessage:
        "Verificar mensagem",

    checkConversation:
        "Verificar conversa",

    checkWebsite:
        "Verificar site",

    language: "Idioma",
    country: "País",

    free: "Grátis",
    pro: "Pro",
    premier: "Premier",

    upgradeToPro:
        "Atualizar para Pro",

    upgradeToPremier:
        "Atualizar para Premier",

    monthly: "Mensal",
    yearly: "Anual",

    mostPopular:
        "MAIS POPULAR",

    maximumProtection:
        "PROTEÇÃO MÁXIMA",

    currentPlan:
        "Plano atual",

    languageTitle:
        "Idioma",

    languageDescription:
        "Escolha o idioma que deseja que o TrustAI use.",

    currentLanguage:
        "Idioma atual",

    searchLanguages:
        "Pesquisar idiomas...",

    languageNoticeTitle:
        "🌍 Idiomas do TrustAI",

    languageNotice:
        "Sua seleção de idioma é salva neste dispositivo e usada nas páginas compatíveis do TrustAI."

},


/* =====================================================
   CHINESE
===================================================== */

zh: {

    home: "首页",
    messageChecker: "消息检查器",
    conversationChecker: "对话检查器",
    websiteChecker: "网站检查器",
    deviceSecurity: "设备安全",
    protection: "TrustAI 保护",
    upgradePlan: "升级计划",
    securityCenter: "安全中心",
    scamAlerts: "诈骗警报",
    reportScam: "举报诈骗",
    contactTrustAI: "联系 TrustAI",
    settingsPrivacy: "设置与隐私",
    logout: "退出登录",

    checkSomething:
        "检查内容",

    security:
        "安全",

    stayAhead:
        "领先诈骗一步。",

    checkMessage:
        "检查消息",

    checkConversation:
        "检查对话",

    checkWebsite:
        "检查网站",

    language:
        "语言",

    country:
        "国家/地区",

    free:
        "免费",

    pro:
        "专业版",

    premier:
        "高级版",

    upgradeToPro:
        "升级到专业版",

    upgradeToPremier:
        "升级到高级版",

    monthly:
        "每月",

    yearly:
        "每年",

    mostPopular:
        "最受欢迎",

    maximumProtection:
        "最高级保护",

    currentPlan:
        "当前计划",

    languageTitle:
        "语言",

    languageDescription:
        "选择 TrustAI 使用的语言。",

    currentLanguage:
        "当前语言",

    searchLanguages:
        "搜索语言...",

    languageNoticeTitle:
        "🌍 TrustAI 语言",

    languageNotice:
        "您的语言选择会保存在此设备上，并用于支持的 TrustAI 页面。"

},


/* =====================================================
   HINDI
===================================================== */

hi: {

    home: "होम",
    messageChecker: "संदेश जाँचकर्ता",
    conversationChecker: "बातचीत जाँचकर्ता",
    websiteChecker: "वेबसाइट जाँचकर्ता",
    deviceSecurity: "डिवाइस सुरक्षा",
    protection: "TrustAI सुरक्षा",
    upgradePlan: "प्लान अपग्रेड करें",
    securityCenter: "सुरक्षा केंद्र",
    scamAlerts: "घोटाला अलर्ट",
    reportScam: "घोटाले की रिपोर्ट करें",
    contactTrustAI: "TrustAI से संपर्क करें",
    settingsPrivacy: "सेटिंग्स और गोपनीयता",
    logout: "लॉग आउट",

    checkSomething:
        "कुछ जाँचें",

    security:
        "सुरक्षा",

    stayAhead:
        "घोटालों से एक कदम आगे रहें।",

    checkMessage:
        "संदेश जाँचें",

    checkConversation:
        "बातचीत जाँचें",

    checkWebsite:
        "वेबसाइट जाँचें",

    language:
        "भाषा",

    country:
        "देश",

    free:
        "मुफ़्त",

    pro:
        "प्रो",

    premier:
        "प्रीमियर",

    upgradeToPro:
        "प्रो में अपग्रेड करें",

    upgradeToPremier:
        "प्रीमियर में अपग्रेड करें",

    monthly:
        "मासिक",

    yearly:
        "वार्षिक",

    mostPopular:
        "सबसे लोकप्रिय",

    maximumProtection:
        "अधिकतम सुरक्षा",

    currentPlan:
        "वर्तमान प्लान",

    languageTitle:
        "भाषा",

    languageDescription:
        "TrustAI के लिए अपनी पसंदीदा भाषा चुनें।",

    currentLanguage:
        "वर्तमान भाषा",

    searchLanguages:
        "भाषाएँ खोजें...",

    languageNoticeTitle:
        "🌍 TrustAI भाषाएँ",

    languageNotice:
        "आपकी भाषा इस डिवाइस पर सहेजी जाती है और समर्थित TrustAI पेजों पर उपयोग की जाती है।"

},


/* =====================================================
   ARABIC
===================================================== */

ar: {

    home: "الرئيسية",
    messageChecker: "فاحص الرسائل",
    conversationChecker: "فاحص المحادثات",
    websiteChecker: "فاحص المواقع",
    deviceSecurity: "أمان الجهاز",
    protection: "حماية TrustAI",
    upgradePlan: "ترقية الخطة",
    securityCenter: "مركز الأمان",
    scamAlerts: "تنبيهات الاحتيال",
    reportScam: "الإبلاغ عن عملية احتيال",
    contactTrustAI: "التواصل مع TrustAI",
    settingsPrivacy: "الإعدادات والخصوصية",
    logout: "تسجيل الخروج",

    checkSomething:
        "فحص شيء ما",

    security:
        "الأمان",

    stayAhead:
        "ابقَ متقدماً بخطوة على عمليات الاحتيال.",

    checkMessage:
        "فحص الرسالة",

    checkConversation:
        "فحص المحادثة",

    checkWebsite:
        "فحص الموقع",

    language:
        "اللغة",

    country:
        "البلد",

    free:
        "مجاني",

    pro:
        "احترافي",

    premier:
        "بريميوم",

    upgradeToPro:
        "الترقية إلى Pro",

    upgradeToPremier:
        "الترقية إلى Premier",

    monthly:
        "شهري",

    yearly:
        "سنوي",

    mostPopular:
        "الأكثر شعبية",

    maximumProtection:
        "أقصى حماية",

    currentPlan:
        "الخطة الحالية",

    languageTitle:
        "اللغة",

    languageDescription:
        "اختر اللغة التي تريد أن يستخدمها TrustAI.",

    currentLanguage:
        "اللغة الحالية",

    searchLanguages:
        "البحث عن اللغات...",

    languageNoticeTitle:
        "🌍 لغات TrustAI",

    languageNotice:
        "يتم حفظ اختيار اللغة على هذا الجهاز واستخدامه في صفحات TrustAI المدعومة."

},


/* =====================================================
   RUSSIAN
===================================================== */

ru: {

    home: "Главная",
    messageChecker: "Проверка сообщений",
    conversationChecker: "Проверка разговоров",
    websiteChecker: "Проверка сайтов",
    deviceSecurity: "Безопасность устройства",
    protection: "Защита TrustAI",
    upgradePlan: "Обновить план",
    securityCenter: "Центр безопасности",
    scamAlerts: "Предупреждения о мошенничестве",
    reportScam: "Сообщить о мошенничестве",
    contactTrustAI: "Связаться с TrustAI",
    settingsPrivacy: "Настройки и конфиденциальность",
    logout: "Выйти",

    checkSomething:
        "Проверить",

    security:
        "Безопасность",

    stayAhead:
        "Будьте на шаг впереди мошенников.",

    checkMessage:
        "Проверить сообщение",

    checkConversation:
        "Проверить разговор",

    checkWebsite:
        "Проверить сайт",

    language:
        "Язык",

    country:
        "Страна",

    free:
        "Бесплатный",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Перейти на Pro",

    upgradeToPremier:
        "Перейти на Premier",

    monthly:
        "Ежемесячно",

    yearly:
        "Ежегодно",

    mostPopular:
        "САМЫЙ ПОПУЛЯРНЫЙ",

    maximumProtection:
        "МАКСИМАЛЬНАЯ ЗАЩИТА",

    currentPlan:
        "Текущий план",

    languageTitle:
        "Язык",

    languageDescription:
        "Выберите язык, который будет использовать TrustAI.",

    currentLanguage:
        "Текущий язык",

    searchLanguages:
        "Поиск языков...",

    languageNoticeTitle:
        "🌍 Языки TrustAI",

    languageNotice:
        "Ваш выбор языка сохраняется на этом устройстве и используется на поддерживаемых страницах TrustAI."

},


/* =====================================================
   JAPANESE
===================================================== */

ja: {

    home: "ホーム",
    messageChecker: "メッセージチェッカー",
    conversationChecker: "会話チェッカー",
    websiteChecker: "ウェブサイトチェッカー",
    deviceSecurity: "デバイスセキュリティ",
    protection: "TrustAI 保護",
    upgradePlan: "プランをアップグレード",
    securityCenter: "セキュリティセンター",
    scamAlerts: "詐欺アラート",
    reportScam: "詐欺を報告",
    contactTrustAI: "TrustAI に連絡",
    settingsPrivacy: "設定とプライバシー",
    logout: "ログアウト",

    checkSomething:
        "チェックする",

    security:
        "セキュリティ",

    stayAhead:
        "詐欺より一歩先を行きましょう。",

    checkMessage:
        "メッセージをチェック",

    checkConversation:
        "会話をチェック",

    checkWebsite:
        "ウェブサイトをチェック",

    language:
        "言語",

    country:
        "国",

    free:
        "無料",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Pro にアップグレード",

    upgradeToPremier:
        "Premier にアップグレード",

    monthly:
        "月額",

    yearly:
        "年額",

    mostPopular:
        "人気",

    maximumProtection:
        "最大保護",

    currentPlan:
        "現在のプラン",

    languageTitle:
        "言語",

    languageDescription:
        "TrustAI で使用する言語を選択してください。",

    currentLanguage:
        "現在の言語",

    searchLanguages:
        "言語を検索...",

    languageNoticeTitle:
        "🌍 TrustAI の言語",

    languageNotice:
        "言語設定はこのデバイスに保存され、対応している TrustAI ページで使用されます。"

},


/* =====================================================
   GERMAN
===================================================== */

de: {

    home: "Startseite",
    messageChecker: "Nachrichtenprüfung",
    conversationChecker: "Konversationsprüfung",
    websiteChecker: "Website-Prüfung",
    deviceSecurity: "Gerätesicherheit",
    protection: "TrustAI Schutz",
    upgradePlan: "Tarif upgraden",
    securityCenter: "Sicherheitscenter",
    scamAlerts: "Betrugswarnungen",
    reportScam: "Betrug melden",
    contactTrustAI: "TrustAI kontaktieren",
    settingsPrivacy: "Einstellungen & Datenschutz",
    logout: "Abmelden",

    checkSomething:
        "Etwas prüfen",

    security:
        "Sicherheit",

    stayAhead:
        "Bleiben Sie Betrügern immer einen Schritt voraus.",

    checkMessage:
        "Nachricht prüfen",

    checkConversation:
        "Konversation prüfen",

    checkWebsite:
        "Website prüfen",

    language:
        "Sprache",

    country:
        "Land",

    free:
        "Kostenlos",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Auf Pro upgraden",

    upgradeToPremier:
        "Auf Premier upgraden",

    monthly:
        "Monatlich",

    yearly:
        "Jährlich",

    mostPopular:
        "AM BELIEBTESTEN",

    maximumProtection:
        "MAXIMALER SCHUTZ",

    currentPlan:
        "Aktueller Tarif",

    languageTitle:
        "Sprache",

    languageDescription:
        "Wählen Sie die Sprache für TrustAI.",

    currentLanguage:
        "Aktuelle Sprache",

    searchLanguages:
        "Sprachen suchen...",

    languageNoticeTitle:
        "🌍 TrustAI Sprachen",

    languageNotice:
        "Ihre Sprachauswahl wird auf diesem Gerät gespeichert und auf unterstützten TrustAI-Seiten verwendet."

},


/* =====================================================
   KOREAN
===================================================== */

ko: {

    home: "홈",
    messageChecker: "메시지 검사기",
    conversationChecker: "대화 검사기",
    websiteChecker: "웹사이트 검사기",
    deviceSecurity: "기기 보안",
    protection: "TrustAI 보호",
    upgradePlan: "플랜 업그레이드",
    securityCenter: "보안 센터",
    scamAlerts: "사기 알림"
   reportScam: "사기 신고",
    contactTrustAI: "TrustAI 문의",
    settingsPrivacy: "설정 및 개인정보",
    logout: "로그아웃",

    checkSomething:
        "검사하기",

    security:
        "보안",

    stayAhead:
        "사기보다 한발 앞서세요.",

    checkMessage:
        "메시지 검사",

    checkConversation:
        "대화 검사",

    checkWebsite:
        "웹사이트 검사",

    language:
        "언어",

    country:
        "국가",

    free:
        "무료",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Pro로 업그레이드",

    upgradeToPremier:
        "Premier로 업그레이드",

    monthly:
        "월간",

    yearly:
        "연간",

    mostPopular:
        "가장 인기 있음",

    maximumProtection:
        "최대 보호",

    currentPlan:
        "현재 플랜",

    languageTitle:
        "언어",

    languageDescription:
        "TrustAI에서 사용할 언어를 선택하세요.",

    currentLanguage:
        "현재 언어",

    searchLanguages:
        "언어 검색...",

    languageNoticeTitle:
        "🌍 TrustAI 언어",

    languageNotice:
        "언어 선택은 이 기기에 저장되며 지원되는 TrustAI 페이지에서 사용됩니다."

},


/* =====================================================
   ITALIAN
===================================================== */

it: {

    home: "Home",
    messageChecker: "Controllo messaggi",
    conversationChecker: "Controllo conversazioni",
    websiteChecker: "Controllo siti web",
    deviceSecurity: "Sicurezza del dispositivo",
    protection: "Protezione TrustAI",
    upgradePlan: "Aggiorna piano",
    securityCenter: "Centro sicurezza",
    scamAlerts: "Avvisi truffe",
    reportScam: "Segnala una truffa",
    contactTrustAI: "Contatta TrustAI",
    settingsPrivacy: "Impostazioni e privacy",
    logout: "Esci",

    checkSomething:
        "Controlla qualcosa",

    security:
        "Sicurezza",

    stayAhead:
        "Resta un passo avanti alle truffe.",

    checkMessage:
        "Controlla messaggio",

    checkConversation:
        "Controlla conversazione",

    checkWebsite:
        "Controlla sito web",

    language:
        "Lingua",

    country:
        "Paese",

    free:
        "Gratis",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Passa a Pro",

    upgradeToPremier:
        "Passa a Premier",

    monthly:
        "Mensile",

    yearly:
        "Annuale",

    mostPopular:
        "PIÙ POPOLARE",

    maximumProtection:
        "PROTEZIONE MASSIMA",

    currentPlan:
        "Piano attuale",

    languageTitle:
        "Lingua",

    languageDescription:
        "Scegli la lingua che TrustAI deve utilizzare.",

    currentLanguage:
        "Lingua attuale",

    searchLanguages:
        "Cerca lingue...",

    languageNoticeTitle:
        "🌍 Lingue TrustAI",

    languageNotice:
        "La tua scelta della lingua viene salvata su questo dispositivo e utilizzata nelle pagine TrustAI supportate."

},


/* =====================================================
   TURKISH
===================================================== */

tr: {

    home: "Ana Sayfa",
    messageChecker: "Mesaj Denetleyici",
    conversationChecker: "Konuşma Denetleyici",
    websiteChecker: "Web Sitesi Denetleyici",
    deviceSecurity: "Cihaz Güvenliği",
    protection: "TrustAI Koruması",
    upgradePlan: "Planı Yükselt",
    securityCenter: "Güvenlik Merkezi",
    scamAlerts: "Dolandırıcılık Uyarıları",
    reportScam: "Dolandırıcılık Bildir",
    contactTrustAI: "TrustAI ile İletişim",
    settingsPrivacy: "Ayarlar ve Gizlilik",
    logout: "Çıkış Yap",

    checkSomething:
        "Bir şeyi kontrol et",

    security:
        "Güvenlik",

    stayAhead:
        "Dolandırıcılardan bir adım önde olun.",

    checkMessage:
        "Mesajı kontrol et",

    checkConversation:
        "Konuşmayı kontrol et",

    checkWebsite:
        "Web sitesini kontrol et",

    language:
        "Dil",

    country:
        "Ülke",

    free:
        "Ücretsiz",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Pro'ya yükselt",

    upgradeToPremier:
        "Premier'a yükselt",

    monthly:
        "Aylık",

    yearly:
        "Yıllık",

    mostPopular:
        "EN POPÜLER",

    maximumProtection:
        "MAKSİMUM KORUMA",

    currentPlan:
        "Mevcut plan",

    languageTitle:
        "Dil",

    languageDescription:
        "TrustAI'nin kullanmasını istediğiniz dili seçin.",

    currentLanguage:
        "Mevcut dil",

    searchLanguages:
        "Dilleri ara...",

    languageNoticeTitle:
        "🌍 TrustAI dilleri",

    languageNotice:
        "Dil seçiminiz bu cihaza kaydedilir ve desteklenen TrustAI sayfalarında kullanılır."

},


/* =====================================================
   INDONESIAN
===================================================== */

id: {

    home: "Beranda",
    messageChecker: "Pemeriksa Pesan",
    conversationChecker: "Pemeriksa Percakapan",
    websiteChecker: "Pemeriksa Situs Web",
    deviceSecurity: "Keamanan Perangkat",
    protection: "Perlindungan TrustAI",
    upgradePlan: "Tingkatkan Paket",
    securityCenter: "Pusat Keamanan",
    scamAlerts: "Peringatan Penipuan",
    reportScam: "Laporkan Penipuan",
    contactTrustAI: "Hubungi TrustAI",
    settingsPrivacy: "Pengaturan & Privasi",
    logout: "Keluar",

    checkSomething:
        "Periksa sesuatu",

    security:
        "Keamanan",

    stayAhead:
        "Tetap selangkah lebih maju dari penipuan.",

    checkMessage:
        "Periksa Pesan",

    checkConversation:
        "Periksa Percakapan",

    checkWebsite:
        "Periksa Situs Web",

    language:
        "Bahasa",

    country:
        "Negara",

    free:
        "Gratis",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Tingkatkan ke Pro",

    upgradeToPremier:
        "Tingkatkan ke Premier",

    monthly:
        "Bulanan",

    yearly:
        "Tahunan",

    mostPopular:
        "PALING POPULER",

    maximumProtection:
        "PERLINDUNGAN MAKSIMUM",

    currentPlan:
        "Paket saat ini",

    languageTitle:
        "Bahasa",

    languageDescription:
        "Pilih bahasa yang ingin digunakan TrustAI.",

    currentLanguage:
        "Bahasa saat ini",

    searchLanguages:
        "Cari bahasa...",

    languageNoticeTitle:
        "🌍 Bahasa TrustAI",

    languageNotice:
        "Pilihan bahasa Anda disimpan di perangkat ini dan digunakan di halaman TrustAI yang didukung."

},


/* =====================================================
   HAUSA
===================================================== */

ha: {

    home: "Gida",
    messageChecker: "Mai duba saƙonni",
    conversationChecker: "Mai duba tattaunawa",
    websiteChecker: "Mai duba yanar gizo",
    deviceSecurity: "Tsaron na'ura",
    protection: "Kariyar TrustAI",
    upgradePlan: "Haɓaka tsari",
    securityCenter: "Cibiyar tsaro",
    scamAlerts: "Faɗakarwar zamba",
    reportScam: "Kai rahoton zamba",
    contactTrustAI: "Tuntuɓi TrustAI",
    settingsPrivacy: "Saituna da sirri",
    logout: "Fita",

    checkSomething:
        "Duba wani abu",

    security:
        "Tsaro",

    stayAhead:
        "Kasance mataki ɗaya gaba da masu zamba.",

    checkMessage:
        "Duba saƙo",

    checkConversation:
        "Duba tattaunawa",

    checkWebsite:
        "Duba yanar gizo",

    language:
        "Harshe",

    country:
        "Ƙasa",

    free:
        "Kyauta",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Haɓaka zuwa Pro",

    upgradeToPremier:
        "Haɓaka zuwa Premier",

    monthly:
        "Kowane wata",

    yearly:
        "Kowace shekara",

    mostPopular:
        "Mafi shahara",

    maximumProtection:
        "Matsakaicin kariya",

    currentPlan:
        "Tsarin yanzu",

    languageTitle:
        "Harshe",

    languageDescription:
        "Zaɓi harshen da kake son TrustAI ya yi amfani da shi.",

    currentLanguage:
        "Harshen yanzu",

    searchLanguages:
        "Nemo harsuna...",

    languageNoticeTitle:
        "🌍 Harsunan TrustAI",

    languageNotice:
        "Za a adana zaɓin harshenka a wannan na'urar kuma a yi amfani da shi a shafukan TrustAI masu tallafi."

},


/* =====================================================
   YORUBA
===================================================== */

yo: {

    home: "Ilé",
    messageChecker: "Olùṣàyẹ̀wò Ìránṣẹ́",
    conversationChecker: "Olùṣàyẹ̀wò Ìjíròrò",
    websiteChecker: "Olùṣàyẹ̀wò Ojúlé Ayelujara",
    deviceSecurity: "Ààbò Ẹ̀rọ",
    protection: "Ààbò TrustAI",
    upgradePlan: "Gbé Ètò Ga",
    securityCenter: "Àárín Ààbò",
    scamAlerts: "Ìkìlọ̀ Àṣejù",
    reportScam: "Ròyìn Àṣejù",
    contactTrustAI: "Kàn sí TrustAI",
    settingsPrivacy: "Ètò àti Àṣírí",
    logout: "Jáde",

    checkSomething:
        "Ṣàyẹ̀wò Ohun Kan",

    security:
        "Ààbò",

    stayAhead:
        "Máa wà ní ìgbésẹ̀ kan ṣáájú àwọn aṣejù.",

    checkMessage:
        "Ṣàyẹ̀wò Ìránṣẹ́",

    checkConversation:
        "Ṣàyẹ̀wò Ìjíròrò",

    checkWebsite:
        "Ṣàyẹ̀wò Ojúlé",

    language:
        "Èdè",

    country:
        "Orílẹ̀-èdè",

    free:
        "Ọ̀fẹ́",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Gbé sí Pro",

    upgradeToPremier:
        "Gbé sí Premier",

    monthly:
        "Oṣooṣù",

    yearly:
        "Ọdọọdún",

    mostPopular:
        "ÈYÍ TÓ GBAYÌ JÙ",

    maximumProtection:
        "ÀÀBÒ PÍPAKÒ",

    currentPlan:
        "Ètò lọwọlọwọ",

    languageTitle:
        "Èdè",

    languageDescription:
        "Yan èdè tí o fẹ́ kí TrustAI máa lò.",

    currentLanguage:
        "Èdè lọwọlọwọ",

    searchLanguages:
        "Wa àwọn èdè...",

    languageNoticeTitle:
        "🌍 Àwọn èdè TrustAI",

    languageNotice:
        "A óò fi yíyan èdè rẹ pamọ́ sínú ẹ̀rọ yìí, a ó sì lò ó lórí àwọn ojúlé TrustAI tí ó ṣe àtìlẹ́yìn."

},


/* =====================================================
   IGBO
===================================================== */

ig: {

    home: "Ụlọ",
    messageChecker: "Onye Nyocha Ozi",
    conversationChecker: "Onye Nyocha Mkparịtaụka",
    websiteChecker: "Onye Nyocha Weebụsaịtị",
    deviceSecurity: "Nchekwa Ngwaọrụ",
    protection: "Nchekwa TrustAI",
    upgradePlan: "Kwalite Atụmatụ",
    securityCenter: "Ebe Nchekwa",
    scamAlerts: "Ịdọ aka ná ntị aghụghọ",
    reportScam: "Kọọ Aghụghọ",
    contactTrustAI: "Kpọtụrụ TrustAI",
    settingsPrivacy: "Ntọala na Nzuzo",
    logout: "Pụọ",

    checkSomething:
        "Nyochaa ihe",

    security:
        "Nchekwa",

    stayAhead:
        "Nọrọ otu nzọụkwụ n'ihu ndị aghụghọ.",

    checkMessage:
        "Nyochaa Ozi",

    checkConversation:
        "Nyochaa Mkparịtaụka",

    checkWebsite:
        "Nyochaa Weebụsaịtị",

    language:
        "Asụsụ",

    country:
        "Mba",

    free:
        "N'efu",

    pro:
        "Pro",

    premier:
        "Premier",

    upgradeToPro:
        "Kwalite na Pro",

    upgradeToPremier:
        "Kwalite na Premier",

    monthly:
        "Kwa ọnwa",

    yearly:
        "Kwa afọ",

    mostPopular:
        "NKE A KACHAM AMA",

    maximumProtection:
        "Nchekwa Kasị Elu",

    currentPlan:
        "Atụmatụ ugbu a",

    languageTitle:
        "Asụsụ",

    languageDescription:
        "Họrọ asụsụ ịchọrọ ka TrustAI jiri.",

    currentLanguage:
        "Asụsụ ugbu a",

    searchLanguages:
        "Chọọ asụsụ...",

    languageNoticeTitle:
        "🌍 Asụsụ TrustAI",

    languageNotice:
        "A ga-echekwa nhọrọ asụsụ gị na ngwaọrụ a ma jiri ya na ibe TrustAI ndị na-akwado ya."

}

};


/* =====================================================
   GET SAVED LANGUAGE
===================================================== */

function getSavedLanguage() {

    const saved =
        localStorage.getItem(
            "trustai_language"
        );

    if (
        saved &&
        LANGUAGES[saved]
    ) {

        return saved;

    }

    return DEFAULT_LANGUAGE;

}


/* =====================================================
   GET LANGUAGE
===================================================== */

function getLanguage() {

    return LANGUAGES[
        getSavedLanguage()
    ];

}


/* =====================================================
   GET LANGUAGE CODE
===================================================== */

function getLanguageCode() {

    return getSavedLanguage();

}


/* =====================================================
   SET LANGUAGE
===================================================== */

function setLanguage(languageCode) {

    if (
        !LANGUAGES[languageCode]
    ) {

        return false;

    }


    localStorage.setItem(
        "trustai_language",
        languageCode
    );


    const language =
        LANGUAGES[languageCode];


    document.documentElement.setAttribute(
        "lang",
        language.locale
    );


    document.documentElement.setAttribute(
        "data-language",
        languageCode
    );


    /*
       Arabic and other RTL languages
       automatically receive RTL direction.
    */

    const rtlLanguages = [
        "ar"
    ];


    document.documentElement.setAttribute(
        "dir",
        rtlLanguages.includes(languageCode)
            ? "rtl"
            : "ltr"
    );


    applyTranslations();


    /*
       Tell other TrustAI pages that
       the language has changed.
    */

    window.dispatchEvent(
        new CustomEvent(
            "trustai-language-changed",
            {
                detail: {
                    language:
                        languageCode
                }
            }
        )
    );


    return true;

}


/* =====================================================
   TRANSLATE
===================================================== */

function translate(key) {

    const languageCode =
        getSavedLanguage();


    if (
        TRANSLATIONS[languageCode] &&
        TRANSLATIONS[languageCode][key]
    ) {

        return TRANSLATIONS[
            languageCode
        ][key];

    }


    if (
        TRANSLATIONS.en &&
        TRANSLATIONS.en[key]
    ) {

        return TRANSLATIONS.en[key];

    }


    return key;

}


/* =====================================================
   APPLY TRANSLATIONS
===================================================== */

function applyTranslations() {


    /*
       Normal text
    */

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            function(element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                const translated =
                    translate(key);


                if (
                    translated
                ) {

                    element.textContent =
                        translated;

                }

            }
        );


    /*
       Placeholders
    */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(
            function(element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );


                element.placeholder =
                    translate(key);

            }
        );


    /*
       Titles
    */

    document
        .querySelectorAll(
            "[data-i18n-title]"
        )
        .forEach(
            function(element) {

                const key =
                    element.getAttribute(
                        "data-i18n-title"
                    );


                element.title =
                    translate(key);

            }
        );


    /*
       ARIA labels
    */

    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach(
            function(element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria-label"
                    );


                element.setAttribute(
                    "aria-label",
                    translate(key)
                );

            }
        );

}


/* =====================================================
   INITIALIZE
===================================================== */

function initialize() {

    const languageCode =
        getSavedLanguage();


    const language =
        LANGUAGES[
            languageCode
        ];


    document.documentElement.setAttribute(
        "lang",
        language.locale
    );


    document.documentElement.setAttribute(
        "data-language",
        languageCode
    );


    document.documentElement.setAttribute(
        "dir",
        languageCode === "ar"
            ? "rtl"
            : "ltr"
    );


    applyTranslations();

}


/* =====================================================
   EXPOSE GLOBAL SYSTEM
===================================================== */

window.TrustAILanguage = {

    languages:
        LANGUAGES,

    translations:
        TRANSLATIONS,

    getLanguage:
        getLanguage,

    getLanguageCode:
        getLanguageCode,

    setLanguage:
        setLanguage,

    translate:
        translate,

    applyTranslations:
        applyTranslations

};


/* =====================================================
   START
===================================================== */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

} else {

    initialize();

}

})(),
