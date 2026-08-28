/* =====================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   ===================================================== */

(function () {

    const STORAGE_KEY = "trustai_language";

    const languages = {

        en: {
            name: "English",
            nativeName: "English",
            flag: "🇬🇧",
            locale: "en",
            translations: {
                languageTitle: "Language",
                languageDescription: "Choose the language you want TrustAI to use.",
                currentLanguage: "Current language",
                searchLanguages: "Search languages...",
                languageNoticeTitle: "🌍 TrustAI languages",
                languageNotice:
                    "Your language selection is saved on this device and will be used across supported TrustAI pages.",

                analyzeMessage: "🔍 Analyze Message",
                clear: "Clear",
                randomSample: "🎲 Random Sample",
                analyzeText: "Analyze Text",
                pasteMessage:
                    "Paste any personal text, business email, notification, or suspicious message below.",
                noMessage: "⚠️ No message provided",
                pasteBeforeScanning:
                    "Paste a message into the checker before scanning.",
                lowRisk: "🟢 LOW RISK",
                caution: "🟡 CAUTION REQUIRED",
                highRisk: "🟠 HIGH RISK / SUSPICIOUS",
                critical: "🚨 CRITICAL THREAT DETECTED",
                riskScore: "Risk Score",
                detectedCategories: "Detected Categories",
                detectionFindings: "🔎 Detection Findings",
                recommendation: "🛡️ TrustAI Recommendation:"
            }
        },

        fr: {
            name: "French",
            nativeName: "Français",
            flag: "🇫🇷",
            locale: "fr",
            translations: {
                languageTitle: "Langue",
                languageDescription: "Choisissez la langue que TrustAI doit utiliser.",
                currentLanguage: "Langue actuelle",
                searchLanguages: "Rechercher une langue...",
                languageNoticeTitle: "🌍 Langues TrustAI",
                languageNotice:
                    "Votre choix de langue est enregistré sur cet appareil.",
                analyzeMessage: "🔍 Analyser le message",
                clear: "Effacer",
                randomSample: "🎲 Exemple aléatoire",
                analyzeText: "Analyser le texte",
                pasteMessage:
                    "Collez ci-dessous un texte personnel, un e-mail ou un message suspect.",
                noMessage: "⚠️ Aucun message fourni",
                pasteBeforeScanning:
                    "Collez un message avant de lancer l'analyse.",
                lowRisk: "🟢 RISQUE FAIBLE",
                caution: "🟡 PRUDENCE REQUISE",
                highRisk: "🟠 RISQUE ÉLEVÉ / SUSPECT",
                critical: "🚨 MENACE CRITIQUE DÉTECTÉE",
                riskScore: "Score de risque",
                detectedCategories: "Catégories détectées",
                detectionFindings: "🔎 Résultats de détection",
                recommendation: "🛡️ Recommandation TrustAI :"
            }
        },

        es: {
            name: "Spanish",
            nativeName: "Español",
            flag: "🇪🇸",
            locale: "es",
            translations: {
                languageTitle: "Idioma",
                languageDescription: "Elige el idioma que quieres que utilice TrustAI.",
                currentLanguage: "Idioma actual",
                searchLanguages: "Buscar idiomas...",
                languageNoticeTitle: "🌍 Idiomas de TrustAI",
                languageNotice:
                    "Tu selección de idioma se guarda en este dispositivo.",
                analyzeMessage: "🔍 Analizar mensaje",
                clear: "Borrar",
                randomSample: "🎲 Ejemplo aleatorio",
                analyzeText: "Analizar texto",
                pasteMessage:
                    "Pega aquí un texto personal, correo electrónico o mensaje sospechoso.",
                noMessage: "⚠️ No se proporcionó ningún mensaje",
                pasteBeforeScanning:
                    "Pega un mensaje antes de analizarlo.",
                lowRisk: "🟢 RIESGO BAJO",
                caution: "🟡 PRECAUCIÓN",
                highRisk: "🟠 ALTO RIESGO / SOSPECHOSO",
                critical: "🚨 AMENAZA CRÍTICA DETECTADA",
                riskScore: "Puntuación de riesgo",
                detectedCategories: "Categorías detectadas",
                detectionFindings: "🔎 Resultados de detección",
                recommendation: "🛡️ Recomendación de TrustAI:"
            }
        },

        pt: {
            name: "Portuguese",
            nativeName: "Português",
            flag: "🇵🇹",
            locale: "pt",
            translations: {
                languageTitle: "Idioma",
                languageDescription: "Escolha o idioma que deseja que o TrustAI use.",
                currentLanguage: "Idioma atual",
                searchLanguages: "Pesquisar idiomas...",
                languageNoticeTitle: "🌍 Idiomas do TrustAI",
                languageNotice:
                    "Sua seleção de idioma é salva neste dispositivo.",
                analyzeMessage: "🔍 Analisar mensagem",
                clear: "Limpar",
                randomSample: "🎲 Exemplo aleatório",
                analyzeText: "Analisar texto",
                pasteMessage:
                    "Cole abaixo um texto pessoal, e-mail ou mensagem suspeita.",
                noMessage: "⚠️ Nenhuma mensagem fornecida",
                pasteBeforeScanning:
                    "Cole uma mensagem antes de analisar.",
                lowRisk: "🟢 BAIXO RISCO",
                caution: "🟡 ATENÇÃO NECESSÁRIA",
                highRisk: "🟠 ALTO RISCO / SUSPEITO",
                critical: "🚨 AMEAÇA CRÍTICA DETECTADA",
                riskScore: "Pontuação de risco",
                detectedCategories: "Categorias detectadas",
                detectionFindings: "🔎 Resultados da detecção",
                recommendation: "🛡️ Recomendação TrustAI:"
            }
        },

        zh: {
            name: "Chinese",
            nativeName: "中文",
            flag: "🇨🇳",
            locale: "zh-CN",
            translations: {
                languageTitle: "语言",
                languageDescription: "选择 TrustAI 使用的语言。",
                currentLanguage: "当前语言",
                searchLanguages: "搜索语言...",
                languageNoticeTitle: "🌍 TrustAI 语言",
                languageNotice:
                    "您的语言选择会保存在此设备上，并用于支持的 TrustAI 页面。",
                analyzeMessage: "🔍 分析消息",
                clear: "清除",
                randomSample: "🎲 随机示例",
                analyzeText: "分析文本",
                pasteMessage:
                    "请在下面粘贴个人消息、商务邮件、通知或可疑消息。",
                noMessage: "⚠️ 未提供消息",
                pasteBeforeScanning:
                    "请先粘贴消息，然后进行扫描。",
                lowRisk: "🟢 低风险",
                caution: "🟡 需要注意",
                highRisk: "🟠 高风险 / 可疑",
                critical: "🚨 检测到严重威胁",
                riskScore: "风险评分",
                detectedCategories: "检测类别",
                detectionFindings: "🔎 检测结果",
                recommendation: "🛡️ TrustAI 建议："
            }
        }

    };


    /* =================================================
       GET CURRENT LANGUAGE
       ================================================= */

    function getLanguageCode() {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (saved && languages[saved]) {
            return saved;
        }

        return "en";
    }


    /* =================================================
       SET LANGUAGE
       ================================================= */

    function setLanguage(code) {

        if (!languages[code]) {
            console.warn(
                "TrustAI: unsupported language:",
                code
            );

            return false;
        }

        localStorage.setItem(
            STORAGE_KEY,
            code
        );

        document.documentElement.lang =
            languages[code].locale;

        applyTranslations();

        /*
         * Tell every TrustAI component that
         * the language has changed.
         */

        window.dispatchEvent(
            new CustomEvent(
                "trustai-language-changed",
                {
                    detail: {
                        language: code
                    }
                }
            )
        );

        return true;
    }


    /* =================================================
       APPLY TRANSLATIONS
       ================================================= */

    function applyTranslations() {

        const code =
            getLanguageCode();

        const language =
            languages[code];

        if (!language) return;

        const translations =
            language.translations;


        /* TEXT */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );

                if (
                    translations[key] !== undefined
                ) {

                    element.textContent =
                        translations[key];

                }

            });


        /* PLACEHOLDERS */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (
                    translations[key] !== undefined
                ) {

                    element.placeholder =
                        translations[key];

                }

            });


        document.documentElement.lang =
            language.locale;
    }


    /* =================================================
       TRANSLATE FUNCTION
       ================================================= */

    function t(key) {

        const code =
            getLanguageCode();

        const language =
            languages[code];

        if (
            language &&
            language.translations[key]
        ) {

            return language.translations[key];

        }

        /*
         * English fallback
         */

        if (
            languages.en.translations[key]
        ) {

            return languages.en.translations[key];

        }

        return key;
    }


    /* =================================================
       PUBLIC TRUSTAI LANGUAGE API
       ================================================= */

    window.TrustAILanguage = {

        languages: languages,

        getLanguageCode: getLanguageCode,

        setLanguage: setLanguage,

        applyTranslations: applyTranslations,

        t: t

    };


    /* =================================================
       AUTOMATIC INITIALIZATION
       ================================================= */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyTranslations();

        }
    );


})();
