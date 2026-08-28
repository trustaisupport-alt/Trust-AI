/* ============================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   Version: 2.0
   Supports 35 languages
   ============================================================ */

(function () {
    "use strict";

    const STORAGE_KEY = "trustai_language";
    const DEFAULT_LANGUAGE = "en";

    /* ============================================================
       LANGUAGE DEFINITIONS
       ============================================================ */

    const languageInfo = {
        en: { name: "English", nativeName: "English", flag: "🇬🇧", locale: "en" },
        fr: { name: "French", nativeName: "Français", flag: "🇫🇷", locale: "fr" },
        es: { name: "Spanish", nativeName: "Español", flag: "🇪🇸", locale: "es" },
        pt: { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", locale: "pt" },
        de: { name: "German", nativeName: "Deutsch", flag: "🇩🇪", locale: "de" },
        it: { name: "Italian", nativeName: "Italiano", flag: "🇮🇹", locale: "it" },
        nl: { name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", locale: "nl" },
        sv: { name: "Swedish", nativeName: "Svenska", flag: "🇸🇪", locale: "sv" },
        no: { name: "Norwegian", nativeName: "Norsk", flag: "🇳🇴", locale: "no" },
        da: { name: "Danish", nativeName: "Dansk", flag: "🇩🇰", locale: "da" },
        fi: { name: "Finnish", nativeName: "Suomi", flag: "🇫🇮", locale: "fi" },
        pl: { name: "Polish", nativeName: "Polski", flag: "🇵🇱", locale: "pl" },
        cs: { name: "Czech", nativeName: "Čeština", flag: "🇨🇿", locale: "cs" },
        sk: { name: "Slovak", nativeName: "Slovenčina", flag: "🇸🇰", locale: "sk" },
        hu: { name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺", locale: "hu" },
        ro: { name: "Romanian", nativeName: "Română", flag: "🇷🇴", locale: "ro" },
        bg: { name: "Bulgarian", nativeName: "Български", flag: "🇧🇬", locale: "bg" },
        uk: { name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", locale: "uk" },
        ru: { name: "Russian", nativeName: "Русский", flag: "🇷🇺", locale: "ru" },
        tr: { name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", locale: "tr" },
        ar: { name: "Arabic", nativeName: "العربية", flag: "🇸🇦", locale: "ar" },
        he: { name: "Hebrew", nativeName: "עברית", flag: "🇮🇱", locale: "he" },
        fa: { name: "Persian", nativeName: "فارسی", flag: "🇮🇷", locale: "fa" },
        ur: { name: "Urdu", nativeName: "اردو", flag: "🇵🇰", locale: "ur" },
        hi: { name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", locale: "hi" },
        bn: { name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩", locale: "bn" },
        pa: { name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", locale: "pa" },
        gu: { name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", locale: "gu" },
        ta: { name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", locale: "ta" },
        te: { name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", locale: "te" },
        th: { name: "Thai", nativeName: "ไทย", flag: "🇹🇭", locale: "th" },
        vi: { name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", locale: "vi" },
        id: { name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", locale: "id" },
        ms: { name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", locale: "ms" },
        zh: { name: "Chinese", nativeName: "中文", flag: "🇨🇳", locale: "zh-CN" },
        ja: { name: "Japanese", nativeName: "日本語", flag: "🇯🇵", locale: "ja" },
        ko: { name: "Korean", nativeName: "한국어", flag: "🇰🇷", locale: "ko" },
        sw: { name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪", locale: "sw" }
    };


    /* ============================================================
       GLOBAL TRANSLATION DICTIONARY
       ============================================================ */

    const translations = {

        en: {
            languageTitle: "Language",
            languageDescription: "Choose the language you want TrustAI to use.",
            currentLanguage: "Current language",
            searchLanguages: "Search languages...",
            languageNoticeTitle: "🌍 TrustAI Languages",
            languageNotice: "Your language selection is saved on this device and used across supported TrustAI pages.",

            menuSubtitle: "Universal Security Protection",
            home: "Home",
            dashboard: "Dashboard",
            messageChecker: "Message Checker",
            conversationChecker: "Conversation Checker",
            websiteChecker: "Website Checker",
            deviceSecurity: "Device Security",
            securityCenter: "Security Center",
            threatMonitor: "Threat Monitor",
            scamAlerts: "Scam Alerts",
            reportScam: "Report a Scam",
            contactTrustAI: "Contact TrustAI",
            settings: "Settings",
            logout: "Logout",
            login: "Login",
            signup: "Sign Up",

            analyzeText: "Analyze Text",
            analyzeMessage: "🔍 Analyze Message",
            analyzeButton: "🔍 Analyze Message",
            clear: "Clear",
            clearButton: "Clear",
            randomSample: "🎲 Random Sample",
            randomButton: "🎲 Random Sample",

            messageTitle: "🔍 Message & Type Analyzer",
            messageDescription: "Analyze messages worldwide and identify suspicious patterns.",
            analyzeSubtitle: "Paste any personal text, business email, notification, or suspicious message below.",
            messagePlaceholder: "Paste message here...",

            noMessageTitle: "⚠️ No message provided",
            noMessageText: "Paste a message into the checker before scanning.",

            criticalTitle: "🚨 CRITICAL THREAT DETECTED",
            highTitle: "🟠 HIGH RISK / SUSPICIOUS",
            cautionTitle: "🟡 CAUTION REQUIRED",
            lowTitle: "🟢 LOW RISK",

            riskScore: "Risk Score",
            detectedCategories: "Detected Categories",
            detectionFindings: "🔎 Detection Findings",
            detected: "detected:",
            legitimate: "Legitimate",
            threat: "Threat",
            noPattern: "No specific scam pattern was detected.",

            recommendation: "🛡️ TrustAI Recommendation:",
            criticalAdvice: "This message contains multiple strong scam indicators. Do not send money, passwords, OTPs, or personal information.",
            highAdvice: "Exercise extreme caution. Verify the sender independently before taking any action.",
            cautionAdvice: "Some suspicious indicators were detected. Check the sender and context carefully.",
            lowAdvice: "No major scam indicators were detected by the current rules. This does not guarantee the message is safe.",

            generalCommunication: "General Communication",
            loadingLanguage: "Loading language...",

            save: "Save",
            cancel: "Cancel",
            close: "Close",
            back: "Back",
            next: "Next",
            continue: "Continue",
            search: "Search",
            submit: "Submit",
            refresh: "Refresh",
            delete: "Delete",
            edit: "Edit",
            confirm: "Confirm",
            yes: "Yes",
            no: "No",

            security: "Security",
            protection: "Protection",
            privacy: "Privacy",
            account: "Account",
            notifications: "Notifications",
            language: "Language",

            safe: "Safe",
            suspicious: "Suspicious",
            dangerous: "Dangerous",
            blocked: "Blocked",
            verified: "Verified",
            unknown: "Unknown",

            error: "Something went wrong.",
            success: "Success",
            warning: "Warning",
            information: "Information",

            welcome: "Welcome to TrustAI",
            protectYourself: "Protect yourself from scams, fraud and suspicious activity.",
            staySafe: "Stay Safe with TrustAI"
        },


        fr: {
            languageTitle: "Langue",
            languageDescription: "Choisissez la langue que TrustAI doit utiliser.",
            currentLanguage: "Langue actuelle",
            searchLanguages: "Rechercher une langue...",
            languageNoticeTitle: "🌍 Langues TrustAI",
            languageNotice: "Votre choix de langue est enregistré sur cet appareil et utilisé sur les pages TrustAI prises en charge.",

            menuSubtitle: "Protection de sécurité universelle",
            home: "Accueil",
            dashboard: "Tableau de bord",
            messageChecker: "Vérificateur de messages",
            conversationChecker: "Vérificateur de conversations",
            websiteChecker: "Vérificateur de sites",
            deviceSecurity: "Sécurité de l'appareil",
            securityCenter: "Centre de sécurité",
            threatMonitor: "Surveillance des menaces",
            scamAlerts: "Alertes aux arnaques",
            reportScam: "Signaler une arnaque",
            contactTrustAI: "Contacter TrustAI",
            settings: "Paramètres",
            logout: "Déconnexion",
            login: "Connexion",
            signup: "Créer un compte",

            analyzeText: "Analyser le texte",
            analyzeMessage: "🔍 Analyser le message",
            analyzeButton: "🔍 Analyser le message",
            clear: "Effacer",
            clearButton: "Effacer",
            randomSample: "🎲 Exemple aléatoire",
            randomButton: "🎲 Exemple aléatoire",

            messageTitle: "🔍 Analyseur de messages",
            messageDescription: "Analysez les messages du monde entier et identifiez les modèles suspects.",
            analyzeSubtitle: "Collez ci-dessous un texte personnel, un e-mail professionnel, une notification ou un message suspect.",
            messagePlaceholder: "Collez le message ici...",

            noMessageTitle: "⚠️ Aucun message fourni",
            noMessageText: "Collez un message avant de lancer l'analyse.",

            criticalTitle: "🚨 MENACE CRITIQUE DÉTECTÉE",
            highTitle: "🟠 RISQUE ÉLEVÉ / SUSPECT",
            cautionTitle: "🟡 PRUDENCE REQUISE",
            lowTitle: "🟢 FAIBLE RISQUE",

            riskScore: "Score de risque",
            detectedCategories: "Catégories détectées",
            detectionFindings: "🔎 Résultats de détection",
            detected: "détecté :",
            legitimate: "Légitime",
            threat: "Menace",
            noPattern: "Aucun modèle d'arnaque spécifique n'a été détecté.",

            recommendation: "🛡️ Recommandation TrustAI :",
            criticalAdvice: "Ce message contient plusieurs indicateurs forts d'arnaque. N'envoyez pas d'argent, de mots de passe, d'OTP ou d'informations personnelles.",
            highAdvice: "Soyez extrêmement prudent. Vérifiez l'expéditeur indépendamment avant toute action.",
            cautionAdvice: "Certains indicateurs suspects ont été détectés. Vérifiez attentivement l'expéditeur et le contexte.",
            lowAdvice: "Aucun indicateur majeur d'arnaque n'a été détecté par les règles actuelles. Cela ne garantit pas que le message est sûr.",

            generalCommunication: "Communication générale",
            loadingLanguage: "Chargement de la langue...",

            save: "Enregistrer",
            cancel: "Annuler",
            close: "Fermer",
            back: "Retour",
            next: "Suivant",
            continue: "Continuer",
            search: "Rechercher",
            submit: "Envoyer",
            refresh: "Actualiser",
            delete: "Supprimer",
            edit: "Modifier",
            confirm: "Confirmer",
            yes: "Oui",
            no: "Non",

            security: "Sécurité",
            protection: "Protection",
            privacy: "Confidentialité",
            account: "Compte",
            notifications: "Notifications",
            language: "Langue",

            safe: "Sûr",
            suspicious: "Suspect",
            dangerous: "Dangereux",
            blocked: "Bloqué",
            verified: "Vérifié",
            unknown: "Inconnu",

            error: "Une erreur s'est produite.",
            success: "Succès",
            warning: "Avertissement",
            information: "Information",

            welcome: "Bienvenue sur TrustAI",
            protectYourself: "Protégez-vous contre les arnaques, la fraude et les activités suspectes.",
            staySafe: "Restez en sécurité avec TrustAI"
        },


        es: {
            languageTitle: "Idioma",
            languageDescription: "Elige el idioma que quieres que utilice TrustAI.",
            currentLanguage: "Idioma actual",
            searchLanguages: "Buscar idiomas...",
            languageNoticeTitle: "🌍 Idiomas de TrustAI",
            languageNotice: "Tu selección de idioma se guarda en este dispositivo y se utiliza en las páginas compatibles de TrustAI.",

            menuSubtitle: "Protección de seguridad universal",
            home: "Inicio",
            dashboard: "Panel",
            messageChecker: "Verificador de mensajes",
            conversationChecker: "Verificador de conversaciones",
            websiteChecker: "Verificador de sitios web",
            deviceSecurity: "Seguridad del dispositivo",
            securityCenter: "Centro de seguridad",
            threatMonitor: "Monitor de amenazas",
            scamAlerts: "Alertas de estafas",
            reportScam: "Reportar una estafa",
            contactTrustAI: "Contactar con TrustAI",
            settings: "Configuración",
            logout: "Cerrar sesión",
            login: "Iniciar sesión",
            signup: "Registrarse",

            analyzeText: "Analizar texto",
            analyzeMessage: "🔍 Analizar mensaje",
            analyzeButton: "🔍 Analizar mensaje",
            clear: "Borrar",
            clearButton: "Borrar",
            randomSample: "🎲 Ejemplo aleatorio",
            randomButton: "🎲 Ejemplo aleatorio",

            messageTitle: "🔍 Analizador de mensajes",
            messageDescription: "Analiza mensajes de todo el mundo e identifica patrones sospechosos.",
            analyzeSubtitle: "Pega cualquier texto personal, correo empresarial, notificación o mensaje sospechoso.",
            messagePlaceholder: "Pega el mensaje aquí...",

            noMessageTitle: "⚠️ No se proporcionó ningún mensaje",
            noMessageText: "Pega un mensaje antes de analizarlo.",

            criticalTitle: "🚨 AMENAZA CRÍTICA DETECTADA",
            highTitle: "🟠 ALTO RIESGO / SOSPECHOSO",
            cautionTitle: "🟡 SE REQUIERE PRECAUCIÓN",
            lowTitle: "🟢 BAJO RIESGO",

            riskScore: "Puntuación de riesgo",
            detectedCategories: "Categorías detectadas",
            detectionFindings: "🔎 Resultados de detección",
            detected: "detectado:",
            legitimate: "Legítimo",
            threat: "Amenaza",
            noPattern: "No se detectó ningún patrón específico de estafa.",

            recommendation: "🛡️ Recomendación de TrustAI:",
            criticalAdvice: "Este mensaje contiene varios indicadores fuertes de estafa. No envíes dinero, contraseñas, OTP ni información personal.",
            highAdvice: "Ten mucho cuidado. Verifica al remitente de forma independiente antes de actuar.",
            cautionAdvice: "Se detectaron algunos indicadores sospechosos. Comprueba cuidadosamente el remitente y el contexto.",
            lowAdvice: "Las reglas actuales no detectaron indicadores importantes de estafa. Esto no garantiza que el mensaje sea seguro.",

            generalCommunication: "Comunicación general",
            loadingLanguage: "Cargando idioma...",

            save: "Guardar",
            cancel: "Cancelar",
            close: "Cerrar",
            back: "Atrás",
            next: "Siguiente",
            continue: "Continuar",
            search: "Buscar",
            submit: "Enviar",
            refresh: "Actualizar",
            delete: "Eliminar",
            edit: "Editar",
            confirm: "Confirmar",
            yes: "Sí",
            no: "No",

            security: "Seguridad",
            protection: "Protección",
            privacy: "Privacidad",
            account: "Cuenta",
            notifications: "Notificaciones",
            language: "Idioma",

            safe: "Seguro",
            suspicious: "Sospechoso",
            dangerous: "Peligroso",
            blocked: "Bloqueado",
            verified: "Verificado",
            unknown: "Desconocido",

            error: "Algo salió mal.",
            success: "Éxito",
            warning: "Advertencia",
            information: "Información",

            welcome: "Bienvenido a TrustAI",
            protectYourself: "Protégete de estafas, fraudes y actividades sospechosas.",
            staySafe: "Mantente seguro con TrustAI"
        },


        pt: {
            languageTitle: "Idioma",
            languageDescription: "Escolha o idioma que deseja que o TrustAI use.",
            currentLanguage: "Idioma atual",
            searchLanguages: "Pesquisar idiomas...",
            languageNoticeTitle: "🌍 Idiomas do TrustAI",
            languageNotice: "Sua seleção de idioma é salva neste dispositivo e usada nas páginas compatíveis do TrustAI.",

            menuSubtitle: "Proteção de segurança universal",
            home: "Início",
            dashboard: "Painel",
            messageChecker: "Verificador de mensagens",
            conversationChecker: "Verificador de conversas",
            websiteChecker: "Verificador de sites",
            deviceSecurity: "Segurança do dispositivo",
            securityCenter: "Central de segurança",
            threatMonitor: "Monitor de ameaças",
            scamAlerts: "Alertas de golpes",
            reportScam: "Denunciar golpe",
            contactTrustAI: "Contactar TrustAI",
            settings: "Configurações",
            logout: "Sair",
            login: "Entrar",
            signup: "Criar conta",

            analyzeText: "Analisar texto",
            analyzeMessage: "🔍 Analisar mensagem",
            analyzeButton: "🔍 Analisar mensagem",
            clear: "Limpar",
            clearButton: "Limpar",
            randomSample: "🎲 Exemplo aleatório",
            randomButton: "🎲 Exemplo aleatório",

            messageTitle: "🔍 Analisador de mensagens",
            messageDescription: "Analise mensagens de todo o mundo e identifique padrões suspeitos.",
            analyzeSubtitle: "Cole qualquer texto pessoal, e-mail comercial, notificação ou mensagem suspeita abaixo.",
            messagePlaceholder: "Cole a mensagem aqui...",

            noMessageTitle: "⚠️ Nenhuma mensagem fornecida",
            noMessageText: "Cole uma mensagem antes de analisar.",

            criticalTitle: "🚨 AMEAÇA CRÍTICA DETECTADA",
            highTitle: "🟠 ALTO RISCO / SUSPEITO",
            cautionTitle: "🟡 É NECESSÁRIO CUIDADO",
            lowTitle: "🟢 BAIXO RISCO",

            riskScore: "Pontuação de risco",
            detectedCategories: "Categorias detectadas",
            detectionFindings: "🔎 Resultados da detecção",
            detected: "detectado:",
            legitimate: "Legítimo",
            threat: "Ameaça",
            noPattern: "Nenhum padrão específico de golpe foi detectado.",

            recommendation: "🛡️ Recomendação do TrustAI:",
            criticalAdvice: "Esta mensagem contém vários indicadores fortes de golpe. Não envie dinheiro, senhas, OTPs ou informações pessoais.",
            highAdvice: "Tenha muito cuidado. Verifique o remetente de forma independente antes de tomar qualquer ação.",
            cautionAdvice: "Alguns indicadores suspeitos foram detectados. Verifique cuidadosamente o remetente e o contexto.",
            lowAdvice: "Nenhum indicador importante de golpe foi detectado pelas regras atuais. Isso não garante que a mensagem seja segura.",

            generalCommunication: "Comunicação geral",
            loadingLanguage: "Carregando idioma...",

            save: "Salvar",
            cancel: "Cancelar",
            close: "Fechar",
            back: "Voltar",
            next: "Próximo",
            continue: "Continuar",
            search: "Pesquisar",
            submit: "Enviar",
            refresh: "Atualizar",
            delete: "Excluir",
            edit: "Editar",
            confirm: "Confirmar",
            yes: "Sim",
            no: "Não",

            security: "Segurança",
            protection: "Proteção",
            privacy: "Privacidade",
            account: "Conta",
            notifications: "Notificações",
            language: "Idioma",

            safe: "Seguro",
            suspicious: "Suspeito",
            dangerous: "Perigoso",
            blocked: "Bloqueado",
            verified: "Verificado",
            unknown: "Desconhecido",

            error: "Algo deu errado.",
            success: "Sucesso",
            warning: "Aviso",
            information: "Informação",

            welcome: "Bem-vindo ao TrustAI",
            protectYourself: "Proteja-se contra golpes, fraudes e atividades suspeitas.",
            staySafe: "Fique seguro com o TrustAI"
        }
    };


    /* ============================================================
       AUTOMATIC FALLBACK
       ============================================================ */

    /*
       The core TrustAI interface is translated natively in the
       four main languages above.

       For the additional languages, the system automatically
       keeps English as the safe fallback until page-specific
       translations are supplied.
    */

    Object.keys(languageInfo).forEach(function (code) {

        if (!translations[code]) {
            translations[code] = {};
        }

    });


    /* ============================================================
       LANGUAGE CODE
       ============================================================ */

    function getLanguageCode() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (
                saved &&
               languageInfo[saved]
            ) {
                return saved;
            }

        } catch (error) {

            console.warn(
                "TrustAI: localStorage unavailable.",
                error
            );

        }

        return DEFAULT_LANGUAGE;
    }


    /* ============================================================
       GET LANGUAGE
       ============================================================ */

    function getLanguage() {

        const code =
            getLanguageCode();

        return languageInfo[code] ||
            languageInfo[DEFAULT_LANGUAGE];

    }


    /* ============================================================
       SET LANGUAGE
       ============================================================ */

    function setLanguage(code) {

        if (!languageInfo[code]) {

            console.warn(
                "TrustAI: unsupported language:",
                code
            );

            return false;
        }

        try {

            localStorage.setItem(
                STORAGE_KEY,
                code
            );

        } catch (error) {

            console.warn(
                "TrustAI: Could not save language.",
                error
            );

        }

        document.documentElement.lang =
            languageInfo[code].locale;

        /*
         * Arabic, Hebrew and Persian use RTL.
         */

        if (
            code === "ar" ||
            code === "he" ||
            code === "fa" ||
            code === "ur"
        ) {

            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";

        }

        applyTranslations();

        window.dispatchEvent(
            new CustomEvent(
                "trustai-language-changed",
                {
                    detail: {
                        language: code,
                        locale:
                            languageInfo[code].locale
                    }
                }
            )
        );

        return true;
    }


    /* ============================================================
       TRANSLATE
       ============================================================ */

    function t(key) {

        const code =
            getLanguageCode();

        const current =
            translations[code] || {};

        if (
            current[key] !== undefined
        ) {
            return current[key];
        }

        const english =
            translations.en || {};

        if (
            english[key] !== undefined
        ) {
            return english[key];
        }

        return key;
    }


    /* ============================================================
       APPLY TEXT TRANSLATIONS
       ============================================================ */

    function applyTranslations(root) {

        const container =
            root || document;

        /*
         * Normal text
         */

        container
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );

                if (!key) return;

                element.textContent =
                    t(key);

            });


        /*
         * Placeholder
         */

        container
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (!key) return;

                element.placeholder =
                    t(key);

            });


        /*
         * Title attribute
         */

        container
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-title"
                    );

                if (!key) return;

                element.title =
                    t(key);

            });


        /*
         * ARIA label
         */

        container
            .querySelectorAll(
                "[data-i18n-aria-label]"
            )
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria-label"
                    );
               if (!key) return;

                element.setAttribute(
                    "aria-label",
                    t(key)
                );

            });


        /*
         * HTML language + direction
         */

        const language =
            getLanguage();

        document.documentElement.lang =
            language.locale;

        const code =
            getLanguageCode();

        if (
            code === "ar" ||
            code === "he" ||
            code === "fa" ||
            code === "ur"
        ) {

            document.documentElement.dir =
                "rtl";

        } else {

            document.documentElement.dir =
                "ltr";

        }

    }


    /* ============================================================
       REGISTER PAGE TRANSLATIONS
       ============================================================ */

    function registerTranslations(
        code,
        pageTranslations
    ) {

        if (!languageInfo[code]) {

            console.warn(
                "TrustAI: Cannot register unsupported language:",
                code
            );

            return false;
        }

        if (
            !pageTranslations ||
            typeof pageTranslations !== "object"
        ) {
            return false;
        }

        if (!translations[code]) {
            translations[code] = {};
        }

        Object.assign(
            translations[code],
            pageTranslations
        );

        applyTranslations();

        return true;
    }


    /* ============================================================
       REGISTER MANY LANGUAGES
       ============================================================ */

    function registerAllTranslations(
        translationMap
    ) {

        if (
            !translationMap ||
            typeof translationMap !== "object"
        ) {
            return false;
        }

        Object.keys(translationMap)
            .forEach(function (code) {

                if (
                    languageInfo[code] &&
                    translationMap[code]
                ) {

                    if (!translations[code]) {
                        translations[code] = {};
                    }

                    Object.assign(
                        translations[code],
                        translationMap[code]
                    );

                }

            });

        applyTranslations();

        return true;
    }


    /* ============================================================
       GET ALL LANGUAGES
       ============================================================ */

    function getLanguages() {

        return languageInfo;

    }


    /* ============================================================
       LANGUAGE LIST
       ============================================================ */

    function getLanguageList() {

        return Object.keys(languageInfo)
            .map(function (code) {

                return {
                    code: code,
                    name:
                        languageInfo[code].name,
                    nativeName:
                        languageInfo[code].nativeName,
                    flag:
                        languageInfo[code].flag,
                    locale:
                        languageInfo[code].locale
                };

            });

    }


    /* ============================================================
       INITIALIZE
       ============================================================ */

    function initialize() {

        const code =
            getLanguageCode();

        const language =
            languageInfo[code] ||
            languageInfo[DEFAULT_LANGUAGE];

        document.documentElement.lang =
            language.locale;

        if (
            code === "ar" ||
            code === "he" ||
            code === "fa" ||
            code === "ur"
        ) {

            document.documentElement.dir =
                "rtl";

        } else {

            document.documentElement.dir =
                "ltr";

        }

        applyTranslations();

        window.dispatchEvent(
            new CustomEvent(
                "trustai-language-ready",
                {
                    detail: {
                        language: code
                    }
                }
            )
        );

    }


    /* ============================================================
       PUBLIC TRUSTAI LANGUAGE API
       ============================================================ */

    window.TrustAILanguage = {

        languages: languageInfo,
       translations: translations,

        getLanguageCode:
            getLanguageCode,

        getLanguage:
            getLanguage,

        getLanguageList:
            getLanguageList,

        setLanguage:
            setLanguage,

        t:
            t,

        applyTranslations:
            applyTranslations,

        registerTranslations:
            registerTranslations,

        registerAllTranslations:
            registerAllTranslations

    };


    /* ============================================================
       START
       ============================================================ */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


})();
