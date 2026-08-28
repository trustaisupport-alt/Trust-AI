/* =========================================================
   TRUSTAI INTERNATIONAL LANGUAGE & CURRENCY SYSTEM
   File: language.js
   ========================================================= */

(function () {
    "use strict";

    /* =====================================================
       20 SUPPORTED COUNTRIES
    ===================================================== */

    const TRUSTAI_COUNTRIES = {

        NG: {
            name: "Nigeria",
            flag: "🇳🇬",
            language: "en",
            currency: "NGN",
            symbol: "₦"
        },

        GH: {
            name: "Ghana",
            flag: "🇬🇭",
            language: "en",
            currency: "GHS",
            symbol: "GH₵"
        },

        KE: {
            name: "Kenya",
            flag: "🇰🇪",
            language: "en",
            currency: "KES",
            symbol: "KSh"
        },

        ZA: {
            name: "South Africa",
            flag: "🇿🇦",
            language: "en",
            currency: "ZAR",
            symbol: "R"
        },

        US: {
            name: "United States",
            flag: "🇺🇸",
            language: "en",
            currency: "USD",
            symbol: "$"
        },

        CA: {
            name: "Canada",
            flag: "🇨🇦",
            language: "en",
            currency: "CAD",
            symbol: "C$"
        },

        GB: {
            name: "United Kingdom",
            flag: "🇬🇧",
            language: "en",
            currency: "GBP",
            symbol: "£"
        },

        AU: {
            name: "Australia",
            flag: "🇦🇺",
            language: "en",
            currency: "AUD",
            symbol: "A$"
        },

        FR: {
            name: "France",
            flag: "🇫🇷",
            language: "fr",
            currency: "EUR",
            symbol: "€"
        },

        DE: {
            name: "Germany",
            flag: "🇩🇪",
            language: "de",
            currency: "EUR",
            symbol: "€"
        },

        ES: {
            name: "Spain",
            flag: "🇪🇸",
            language: "es",
            currency: "EUR",
            symbol: "€"
        },

        PT: {
            name: "Portugal",
            flag: "🇵🇹",
            language: "pt",
            currency: "EUR",
            symbol: "€"
        },

        BR: {
            name: "Brazil",
            flag: "🇧🇷",
            language: "pt",
            currency: "BRL",
            symbol: "R$"
        },

        IN: {
            name: "India",
            flag: "🇮🇳",
            language: "hi",
            currency: "INR",
            symbol: "₹"
        },

        AE: {
            name: "United Arab Emirates",
            flag: "🇦🇪",
            language: "ar",
            currency: "AED",
            symbol: "د.إ"
        },

        SA: {
            name: "Saudi Arabia",
            flag: "🇸🇦",
            language: "ar",
            currency: "SAR",
            symbol: "﷼"
        },

        CN: {
            name: "China",
            flag: "🇨🇳",
            language: "zh",
            currency: "CNY",
            symbol: "¥"
        },

        JP: {
            name: "Japan",
            flag: "🇯🇵",
            language: "ja",
            currency: "JPY",
            symbol: "¥"
        },

        KR: {
            name: "South Korea",
            flag: "🇰🇷",
            language: "ko",
            currency: "KRW",
            symbol: "₩"
        },

        MX: {
            name: "Mexico",
            flag: "🇲🇽",
            language: "es",
            currency: "MXN",
            symbol: "MX$"
        }

    };


    /* =====================================================
       SUPPORTED LANGUAGES
    ===================================================== */

    const TRUSTAI_LANGUAGES = {

        en: {
            name: "English",
            nativeName: "English"
        },

        fr: {
            name: "French",
            nativeName: "Français"
        },

        es: {
            name: "Spanish",
            nativeName: "Español"
        },

        pt: {
            name: "Portuguese",
            nativeName: "Português"
        },

        de: {
            name: "German",
            nativeName: "Deutsch"
        },

        ar: {
            name: "Arabic",
            nativeName: "العربية"
        },

        hi: {
            name: "Hindi",
            nativeName: "हिन्दी"
        },

        zh: {
            name: "Chinese",
            nativeName: "中文"
        },

        ja: {
            name: "Japanese",
            nativeName: "日本語"
        },

        ko: {
            name: "Korean",
            nativeName: "한국어"
        },

        yo: {
            name: "Yoruba",
            nativeName: "Yorùbá"
        },

        ig: {
            name: "Igbo",
            nativeName: "Igbo"
        },

        ha: {
            name: "Hausa",
            nativeName: "Hausa"
        }

    };


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const TRANSLATIONS = {

        en: {
            appName: "TrustAI",
            home: "Home",
            settings: "Settings",
            security: "Security",
            profile: "Profile",
            upgradePlan: "Upgrade Plan",
            free: "Free",
            pro: "Pro",
            premier: "Premier",
            monthly: "Monthly",
            yearly: "Yearly",
            save: "Save",
            continue: "Continue",
            cancel: "Cancel",
            back: "Back",
            language: "Language",
            country: "Country",
            currency: "Currency",
            messageChecker: "Message Checker",
            conversationChecker: "Conversation Checker",
            websiteChecker: "Website Checker",
            deviceSecurity: "Device Security",
            protection: "TrustAI Protection",
            scamAlerts: "Scam Alerts",
            reportScam: "Report a Scam",
            contact: "Contact TrustAI",
            securityCenter: "Security Center",
            logout: "Log Out",
            checkSomething: "Check Something",
            choosePlan: "Choose your protection plan.",
            upgradeToPro: "Upgrade to Pro",
            upgradeToPremier: "Upgrade to Premier",
            currentPlan: "Current plan",
            mostPopular: "MOST POPULAR",
            maximumProtection: "MAXIMUM PROTECTION",
            forever: "forever",
            perMonth: "/ month",
            perYear: "/ year"
        },

        fr: {
            appName: "TrustAI",
            home: "Accueil",
            settings: "Paramètres",
            security: "Sécurité",
            profile: "Profil",
            upgradePlan: "Mettre à niveau",
            free: "Gratuit",
            pro: "Pro",
            premier: "Premier",
            monthly: "Mensuel",
            yearly: "Annuel",
            save: "Économiser",
            continue: "Continuer",
            cancel: "Annuler",
            back: "Retour",
            language: "Langue",
            country: "Pays",
            currency: "Devise",
            messageChecker: "Vérificateur de messages",
            conversationChecker: "Vérificateur de conversations",
            websiteChecker: "Vérificateur de sites web",
            deviceSecurity: "Sécurité de l'appareil",
            protection: "Protection TrustAI",
            scamAlerts: "Alertes d'arnaque",
            reportScam: "Signaler une arnaque",
            contact: "Contacter TrustAI",
            securityCenter: "Centre de sécurité",
            logout: "Se déconnecter",
            checkSomething: "Vérifier quelque chose",
            choosePlan: "Choisissez votre plan de protection.",
            upgradeToPro: "Passer à Pro",
            upgradeToPremier: "Passer à Premier",
            currentPlan: "Plan actuel",
            mostPopular: "LE PLUS POPULAIRE",
            maximumProtection: "PROTECTION MAXIMALE",
            forever: "pour toujours",
            perMonth: "/ mois",
            perYear: "/ an"
        },

        es: {
            appName: "TrustAI",
            home: "Inicio",
            settings: "Configuración",
            security: "Seguridad",
            profile: "Perfil",
            upgradePlan: "Mejorar plan",
            free: "Gratis",
            pro: "Pro",
            premier: "Premier",
            monthly: "Mensual",
            yearly: "Anual",
            save: "Ahorrar",
            continue: "Continuar",
            cancel: "Cancelar",
            back: "Atrás",
            language: "Idioma",
            country: "País",
            currency: "Moneda",
            messageChecker: "Comprobador de mensajes",
            conversationChecker: "Comprobador de conversaciones",
            websiteChecker: "Comprobador de sitios web",
            deviceSecurity: "Seguridad del dispositivo",
            protection: "Protección TrustAI",
            scamAlerts: "Alertas de estafa",
            reportScam: "Reportar una estafa",
            contact: "Contactar con TrustAI",
            securityCenter: "Centro de seguridad",
            logout: "Cerrar sesión",
            checkSomething: "Comprobar algo",
            choosePlan: "Elige tu plan de protección.",
            upgradeToPro: "Actualizar a Pro",
            upgradeToPremier: "Actualizar a Premier",
            currentPlan: "Plan actual",
            mostPopular: "MÁS POPULAR",
            maximumProtection: "PROTECCIÓN MÁXIMA",
            forever: "para siempre",
            perMonth: "/ mes",
            perYear: "/ año"
        },

        pt: {
            appName: "TrustAI",
            home: "Início",
            settings: "Configurações",
            security: "Segurança",
            profile: "Perfil",
            upgradePlan: "Atualizar plano",
            free: "Grátis",
            pro: "Pro",
            premier: "Premier",
            monthly: "Mensal",
            yearly: "Anual",
            save: "Economizar",
            continue: "Continuar",
            cancel: "Cancelar",
            back: "Voltar",
            language: "Idioma",
            country: "País",
            currency: "Moeda",
            messageChecker: "Verificador de mensagens",
            conversationChecker: "Verificador de conversas",
            websiteChecker: "Verificador de sites",
            deviceSecurity: "Segurança do dispositivo",
            protection: "Proteção TrustAI",
            scamAlerts: "Alertas de golpe",
            reportScam: "Denunciar golpe",
            contact: "Contactar TrustAI",
            securityCenter: "Central de segurança",
            logout: "Sair",
            checkSomething: "Verificar algo",
            choosePlan: "Escolha seu plano de proteção.",
            upgradeToPro: "Atualizar para Pro",
            upgradeToPremier: "Atualizar para Premier",
            currentPlan: "Plano atual",
            mostPopular: "MAIS POPULAR",
            maximumProtection: "PROTEÇÃO MÁXIMA",
            forever: "para sempre",
            perMonth: "/ mês",
            perYear: "/ ano"
        },

        de: {
            appName: "TrustAI",
            home: "Startseite",
            settings: "Einstellungen",
            security: "Sicherheit",
            profile: "Profil",
            upgradePlan: "Plan upgraden",
            free: "Kostenlos",
            pro: "Pro",
            premier: "Premier",
            monthly: "Monatlich",
            yearly: "Jährlich",
            save: "Sparen",
            continue: "Weiter",
            cancel: "Abbrechen",
            back: "Zurück",
            language: "Sprache",
            country: "Land",
            currency: "Währung",
            messageChecker: "Nachrichtenprüfung",
            conversationChecker: "Gesprächsprüfung",
            websiteChecker: "Website-Prüfung",
            deviceSecurity: "Gerätesicherheit",
            protection: "TrustAI-Schutz",
            scamAlerts: "Betrugswarnungen",
            reportScam: "Betrug melden",
            contact: "TrustAI kontaktieren",
            securityCenter: "Sicherheitscenter",
            logout: "Abmelden",
            checkSomething: "Etwas prüfen",
            choosePlan: "Wählen Sie Ihren Schutzplan.",
            upgradeToPro: "Auf Pro upgraden",
            upgradeToPremier: "Auf Premier upgraden",
            currentPlan: "Aktueller Plan",
            mostPopular: "AM BELIEBTESTEN",
            maximumProtection: "MAXIMALER SCHUTZ",
            forever: "für immer",
            perMonth: "/ Monat",
            perYear: "/ Jahr"
        },

        ar: {
            appName: "TrustAI",
            home: "الرئيسية",
            settings: "الإعدادات",
            security: "الأمان",
            profile: "الملف الشخصي",
            upgradePlan: "ترقية الخطة",
            free: "مجاني",
            pro: "Pro",
            premier: "Premier",
            monthly: "شهري",
            yearly: "سنوي",
            save: "توفير",
            continue: "متابعة",
            cancel: "إلغاء",
            back: "رجوع",
            language: "اللغة",
            country: "الدولة",
            currency: "العملة",
            messageChecker: "فحص الرسائل",
            conversationChecker: "فحص المحادثات",
            websiteChecker: "فحص المواقع",
            deviceSecurity: "أمان الجهاز",
            protection: "حماية TrustAI",
            scamAlerts: "تنبيهات الاحتيال",
            reportScam: "الإبلاغ عن احتيال",
            contact: "اتصل بـ TrustAI",
            securityCenter: "مركز الأمان",
            logout: "تسجيل الخروج",
            checkSomething: "فحص شيء",
            choosePlan: "اختر خطة الحماية الخاصة بك.",
            upgradeToPro: "الترقية إلى Pro",
            upgradeToPremier: "الترقية إلى Premier",
            currentPlan: "الخطة الحالية",
            mostPopular: "الأكثر شعبية",
            maximumProtection: "أقصى حماية",
            forever: "للأبد",
            perMonth: "/ شهر",
            perYear: "/ سنة"
        },

        hi: {
            appName: "TrustAI",
            home: "होम",
            settings: "सेटिंग्स",
            security: "सुरक्षा",
            profile: "प्रोफ़ाइल",
            upgradePlan: "प्लान अपग्रेड करें",
            free: "मुफ़्त",
            pro: "Pro",
            premier: "Premier",
            monthly: "मासिक",
            yearly: "वार्षिक",
            save: "बचत",
            continue: "जारी रखें",
            cancel: "रद्द करें",
            back: "वापस",
            language: "भाषा",
            country: "देश",
            currency: "मुद्रा",
            messageChecker: "मैसेज चेकर",
            conversationChecker: "कन्वर्सेशन चेकर",
            websiteChecker: "वेबसाइट चेकर",
            deviceSecurity: "डिवाइस सुरक्षा",
            protection: "TrustAI सुरक्षा",
            scamAlerts: "स्कैम अलर्ट",
            reportScam: "स्कैम रिपोर्ट करें",
            contact: "TrustAI से संपर्क करें",
            securityCenter: "सुरक्षा केंद्र",
            logout: "लॉग आउट",
            checkSomething: "कुछ जांचें",
            choosePlan: "अपना सुरक्षा प्लान चुनें।",
            upgradeToPro: "Pro में अपग्रेड करें",
            upgradeToPremier: "Premier में अपग्रेड करें",
            currentPlan: "वर्तमान प्लान",
            mostPopular: "सबसे लोकप्रिय",
            maximumProtection: "अधिकतम सुरक्षा",
            forever: "हमेशा",
            perMonth: "/ माह",
            perYear: "/ वर्ष"
        },

        zh: {
            appName: "TrustAI",
            home: "首页",
            settings: "设置",
            security: "安全",
            profile: "个人资料",
            upgradePlan: "升级方案",
            free: "免费",
            pro: "Pro",
            premier: "Premier",
            monthly: "每月",
            yearly: "每年",
            save: "节省",
            continue: "继续",
            cancel: "取消",
            back: "返回",
            language: "语言",
            country: "国家",
            currency: "货币",
            messageChecker: "消息检查",
            conversationChecker: "对话检查",
            websiteChecker: "网站检查",
            deviceSecurity: "设备安全",
            protection: "TrustAI 防护",
            scamAlerts: "诈骗提醒",
            reportScam: "举报诈骗",
            contact: "联系 TrustAI",
            securityCenter: "安全中心",
            logout: "退出登录",
            checkSomething: "检查内容",
            choosePlan: "选择您的防护方案。",
            upgradeToPro: "升级到 Pro",
            upgradeToPremier: "升级到 Premier",
            currentPlan: "当前方案",
            mostPopular: "最受欢迎",
            maximumProtection: "最高级防护",
            forever: "永久",
            perMonth: "/ 月",
            perYear: "/ 年"
        },

        ja: {
            appName: "TrustAI",
            home: "ホーム",
            settings: "設定",
            security: "セキュリティ",
            profile: "プロフィール",
            upgradePlan: "プランをアップグレード",
            free: "無料",
            pro: "Pro",
            premier: "Premier",
            monthly: "月額",
            yearly: "年額",
            save: "節約",
            continue: "続ける",
            cancel: "キャンセル",
            back: "戻る",
            language: "言語",
            country: "国",
            currency: "通貨",
            messageChecker: "メッセージチェッカー",
            conversationChecker: "会話チェッカー",
            websiteChecker: "ウェブサイトチェッカー",
            deviceSecurity: "デバイスセキュリティ",
            protection: "TrustAI プロテクション",
            scamAlerts: "詐欺アラート",
            reportScam: "詐欺を報告",
            contact: "TrustAI に連絡",
            securityCenter: "セキュリティセンター",
            logout: "ログアウト",
            checkSomething: "チェックする",
            choosePlan: "保護プランを選択してください。",
            upgradeToPro: "Pro にアップグレード",
            upgradeToPremier: "Premier にアップグレード",
            currentPlan: "現在のプラン",
            mostPopular: "人気No.1",
            maximumProtection: "最大限の保護",
            forever: "永久",
            perMonth: "/ 月",
            perYear: "/ 年"
        },

        ko: {
            appName: "TrustAI",
            home: "홈",
            settings: "설정",
            security: "보안",
            profile: "프로필",
            upgradePlan: "플랜 업그레이드",
            free: "무료",
            pro: "Pro",
            premier: "Premier",
            monthly: "월간",
            yearly: "연간",
            save: "절약",
            continue: "계속",
            cancel: "취소",
            back: "뒤로",
            language: "언어",
            country: "국가",
            currency: "통화",
            messageChecker: "메시지 검사",
            conversationChecker: "대화 검사",
            websiteChecker: "웹사이트 검사",
            deviceSecurity: "기기 보안",
            protection: "TrustAI 보호",
            scamAlerts: "사기 알림",
            reportScam: "사기 신고",
            contact: "TrustAI 문의",
            securityCenter: "보안 센터",
            logout: "로그아웃",
            checkSomething: "검사하기",
            choosePlan: "보호 플랜을 선택하세요.",
            upgradeToPro: "Pro로 업그레이드",
            upgradeToPremier: "Premier로 업그레이드",
            currentPlan: "현재 플랜",
            mostPopular: "가장 인기",
            maximumProtection: "최대 보호",
            forever: "영구",
            perMonth: "/ 월",
            perYear: "/ 년"
        },

        yo: {
            appName: "TrustAI",
            home: "Ile",
            settings: "Ètò",
            security: "Ààbò",
            profile: "Profaili",
            upgradePlan: "Ṣe igbesoke Eto",
            free: "Ọfẹ",
            pro: "Pro",
            premier: "Premier",
            monthly: "Oṣooṣu",
            yearly: "Ọdọọdún",
            save: "Fipamọ",
            continue: "Tẹsiwaju",
            cancel: "Fagilee",
            back: "Pada",
            language: "Èdè",
            country: "Orílẹ̀-èdè",
            currency: "Owó",
            messageChecker: "Olùṣàyẹ̀wò Ìfiránṣẹ́",
            conversationChecker: "Olùṣàyẹ̀wò Ìjíròrò",
            websiteChecker: "Olùṣàyẹ̀wò Oju-òpó",
            deviceSecurity: "Ààbò Ẹ̀rọ",
            protection: "Ààbò TrustAI",
            scamAlerts: "Ìkìlọ̀ Ẹ̀tàn",
            reportScam: "Jábọ̀ Ẹ̀tàn",
            contact: "Kan sí TrustAI",
            securityCenter: "Àárín Ààbò",
            logout: "Jáde",
            checkSomething: "Ṣàyẹ̀wò Nkankan",
            choosePlan: "Yan eto ààbò rẹ.",
            upgradeToPro: "Ṣe igbesoke sí Pro",
            upgradeToPremier: "Ṣe igbesoke sí Premier",
            currentPlan: "Eto lọwọlọwọ",
            mostPopular: "Eyi ti o gbajumo julo",
            maximumProtection: "Ààbò tó pọ̀jù",
            forever: "Láéláé",
            perMonth: "/ oṣù",
            perYear: "/ ọdún"
        },

        ig: {
            appName: "TrustAI",
            home: "Ụlọ",
            settings: "Ntọala",
            security: "Nchekwa",
            profile: "Profaịlụ",
            upgradePlan: "Bulite Atụmatụ",
            free: "N'efu",
            pro: "Pro",
            premier: "Premier",
            monthly: "Kwa ọnwa",
            yearly: "Kwa afọ",
            save: "Chekwaa",
            continue: "Gaa n'ihu",
            cancel: "Kagbuo",
            back: "Laghachi",
            language: "Asụsụ",
            country: "Obodo",
            currency: "Ego",
            messageChecker: "Nyocha Ozi",
            conversationChecker: "Nyocha Mkparịta ụka",
            websiteChecker: "Nyocha Weebụsaịtị",
            deviceSecurity: "Nchekwa Ngwaọrụ",
            protection: "Nchekwa TrustAI",
            scamAlerts: "Ịdọ aka ná ntị aghụghọ",
            reportScam: "Kpọpụta Aghụghọ",
            contact: "Kpọtụrụ TrustAI",
            securityCenter: "Ebe Nchekwa",
            logout: "Pụọ",
            checkSomething: "Nyochaa ihe",
            choosePlan: "Họrọ atụmatụ nchekwa gị.",
            upgradeToPro: "Bulite gaa Pro",
            upgradeToPremier: "Bulite gaa Premier",
            currentPlan: "Atụmatụ ugbu a",
            mostPopular: "Kachasị ewu ewu",
            maximumProtection: "Nchekwa kachasị",
            forever: "Ruo mgbe ebighị ebi",
            perMonth: "/ ọnwa",
            perYear: "/ afọ"
        },

        ha: {
            appName: "TrustAI",
            home: "Gida",
            settings: "Saituna",
            security: "Tsaro",
            profile: "Bayanan martaba",
            upgradePlan: "Haɓaka Tsari",
            free: "Kyauta",
            pro: "Pro",
            premier: "Premier",
            monthly: "Kowane wata",
            yearly: "Shekara-shekara",
            save: "Ajiye",
            continue: "Ci gaba",
            cancel: "Soke",
            back: "Koma",
            language: "Harshe",
            country: "Ƙasa",
            currency: "Kuɗi",
            messageChecker: "Mai Duba Saƙo",
            conversationChecker: "Mai Duba Tattaunawa",
            websiteChecker: "Mai Duba Yanar Gizo",
            deviceSecurity: "Tsaron Na'ura",
            protection: "Kariyar TrustAI",
            scamAlerts: "Gargadin Damfara",
            reportScam: "Ba da Rahoton Damfara",
            contact: "Tuntuɓi TrustAI",
            securityCenter: "Cibiyar Tsaro",
            logout: "Fita",
            checkSomething: "Duba Wani Abu",
            choosePlan: "Zaɓi tsarin kariyarka.",
            upgradeToPro: "Haɓaka zuwa Pro",
            upgradeToPremier: "Haɓaka zuwa Premier",
            currentPlan: "Tsarin yanzu",
            mostPopular: "Mafi Shahara",
            maximumProtection: "Matsakaicin Kariya",
            forever: "Har abada",
            perMonth: "/ wata",
            perYear: "/ shekara"
        }

    };


    /* =====================================================
       DEFAULT SETTINGS
    ===================================================== */

    const DEFAULT_COUNTRY = "NG";
    const DEFAULT_LANGUAGE = "en";


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const COUNTRY_KEY =
        "trustai_country";

    const LANGUAGE_KEY =
        "trustai_language";

    const CURRENCY_KEY =
        "trustai_currency";


    /* =====================================================
       GET SAVED COUNTRY
    ===================================================== */

    function getCountry() {

        const saved =
            localStorage.getItem(COUNTRY_KEY);

        if (
            saved &&
            TRUSTAI_COUNTRIES[saved]
        ) {
            return saved;
        }

        return DEFAULT_COUNTRY;
    }


    /* =====================================================
       GET SAVED LANGUAGE
    ===================================================== */

    function getLanguage() {

        const saved =
            localStorage.getItem(LANGUAGE_KEY);

        if (
            saved &&
            TRUSTAI_LANGUAGES[saved]
        ) {
            return saved;
        }

        const country =
            TRUSTAI_COUNTRIES[getCountry()];

        return country
            ? country.language
            : DEFAULT_LANGUAGE;
    }


    /* =====================================================
       GET CURRENT COUNTRY DATA
    ===================================================== */

    function getCurrentCountry() {

        return TRUSTAI_COUNTRIES[
            getCountry()
        ];

    }


    /* =====================================================
       GET CURRENT CURRENCY
    ===================================================== */

    function getCurrency() {

        const country =
            getCurrentCountry();

        const saved =
            localStorage.getItem(CURRENCY_KEY);

        if (saved) {
            return saved;
        }

        return country
            ? country.currency
            : "NGN";
    }


    /* =====================================================
       SET COUNTRY
    ===================================================== */

    function setCountry(countryCode) {

        if (
            !TRUSTAI_COUNTRIES[countryCode]
        ) {
            console.warn(
                "TrustAI: Unsupported country:",
                countryCode
            );

            return false;
        }


        const country =
            TRUSTAI_COUNTRIES[countryCode];


        localStorage.setItem(
            COUNTRY_KEY,
            countryCode
        );


        localStorage.setItem(
            LANGUAGE_KEY,
            country.language
        );


        localStorage.setItem(
            CURRENCY_KEY,
            country.currency
        );


        applyLanguage();


        document.dispatchEvent(
            new CustomEvent(
                "trustaiCountryChanged",
                {
                    detail: {
                        countryCode,
                        country
                    }
                }
            )
        );


        return true;

    }


    /* =====================================================
       SET LANGUAGE
    ===================================================== */

    function setLanguage(languageCode) {

        if (
            !TRUSTAI_LANGUAGES[languageCode]
        ) {
            console.warn(
                "TrustAI: Unsupported language:",
                languageCode
            );

            return false;
        }


        localStorage.setItem(
            LANGUAGE_KEY,
            languageCode
        );


        applyLanguage();


        document.dispatchEvent(
            new CustomEvent(
                "trustaiLanguageChanged",
                {
                    detail: {
                        languageCode
                    }
                }
            )
        );


        return true;

    }


    /* =====================================================
       TRANSLATION FUNCTION
    ===================================================== */

    function translate(key) {

        const language =
            getLanguage();

        const dictionary =
            TRANSLATIONS[language] ||
            TRANSLATIONS.en;


        return dictionary[key] ||
            TRANSLATIONS.en[key] ||
            key;

    }


    /* =====================================================
       APPLY TRANSLATIONS
    ===================================================== */

    function applyLanguage() {

        const language =
            getLanguage();


        document.documentElement
            .setAttribute(
                "lang",
                language
            );


        if (language === "ar") {

            document.documentElement
                .setAttribute(
                    "dir",
                    "rtl"
                );

        } else {

            document.documentElement
                .setAttribute(
                    "dir",
                    "ltr"
                );

        }


        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );

                    element.textContent =
                        translate(key);

                }
            );


        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-placeholder"
                        );

                    element.placeholder =
                        translate(key);

                }
            );


        document
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-title"
                        );

                    element.title =
                        translate(key);

                }
            );

    }


    /* =====================================================
       FORMAT MONEY
    ===================================================== */

    function formatMoney(
        amount,
        currency = getCurrency()
    ) {

        const country =
            getCurrentCountry();


        let locale =
            "en-NG";


        if (country) {

            const localeMap = {

                NG: "en-NG",
                GH: "en-GH",
                KE: "en-KE",
                ZA: "en-ZA",
                US: "en-US",
                CA: "en-CA",
                GB: "en-GB",
                AU: "en-AU",
                FR: "fr-FR",
                DE: "de-DE",
                ES: "es-ES",
                PT: "pt-PT",
                BR: "pt-BR",
                IN: "en-IN",
                AE: "ar-AE",
                SA: "ar-SA",
                CN: "zh-CN",
                JP: "ja-JP",
                KR: "ko-KR",
                MX: "es-MX"

            };


            locale =
                localeMap[
                    getCountry()
                ] || "en-US";

        }


        try {

            return new Intl.NumberFormat(
                locale,
                {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits:
                        currency === "JPY" ||
                        currency === "KRW"
                            ? 0
                            : 2
                }
            ).format(amount);

        } catch (error) {

            console.warn(
                "TrustAI currency formatting failed:",
                error
            );


            const country =
                getCurrentCountry();


            return (
                country
                    ? country.symbol
                    : "₦"
            ) +
            Number(amount).toLocaleString();

        }

    }


    /* =====================================================
       GET COUNTRY LIST
    ===================================================== */

    function getCountries() {

        return Object.keys(
            TRUSTAI_COUNTRIES
        ).map(
            function (code) {

                return {
                    code: code,
                    ...TRUSTAI_COUNTRIES[code]
                };

            }
        );

    }


    /* =====================================================
       GET LANGUAGE LIST
    ===================================================== */

    function getLanguages() {

        return Object.keys(
            TRUSTAI_LANGUAGES
        ).map(
            function (code) {

                return {
                    code: code,
                    ...TRUSTAI_LANGUAGES[code]
                };

            }
        );

    }


    /* =====================================================
       GLOBAL TRUSTAI LANGUAGE OBJECT
    ===================================================== */

    window.TrustAILanguage = {

        countries:
            TRUSTAI_COUNTRIES,

        languages:
            TRUSTAI_LANGUAGES,

        translations:
            TRANSLATIONS,

        getCountry:
            getCountry,

        setCountry:
            setCountry,

        getCurrentCountry:
            getCurrentCountry,

        getLanguage:
            getLanguage,

        setLanguage:
            setLanguage,

        getCurrency:
            getCurrency,

        translate:
            translate,

        applyLanguage:
            applyLanguage,

        formatMoney:
            formatMoney,

        getCountries:
            getCountries,

        getLanguages:
            getLanguages

    };


    /* =====================================================
       AUTO INITIALIZATION
    ===================================================== */

    function initializeTrustAIInternational() {

        const country =
            getCountry();

        const language =
            getLanguage();

        const currency =
            getCurrency();


        localStorage.setItem(
            COUNTRY_KEY,
            country
        );

        localStorage.setItem(
            LANGUAGE_KEY,
            language
        );

        localStorage.setItem(
            CURRENCY_KEY,
            currency
        );


        applyLanguage();


        document.dispatchEvent(
            new CustomEvent(
                "trustaiLanguageReady",
                {
                    detail: {
                        country,
                        language,
                        currency
                    }
                }
            )
        );

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTrustAIInternational
        );

    } else {

        initializeTrustAIInternational();

    }

})();
