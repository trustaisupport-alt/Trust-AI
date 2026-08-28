/* =====================================================
TRUSTAI LANGUAGE SYSTEM
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
   SET LANGUAGE
===================================================== */

function setLanguage(languageCode) {

    if (!LANGUAGES[languageCode]) {
        return false;
    }

    localStorage.setItem(
        "trustai_language",
        languageCode
    );

    document.documentElement.setAttribute(
        "lang",
        LANGUAGES[languageCode].locale
    );

    document.documentElement.setAttribute(
        "data-language",
        languageCode
    );

    applyTranslations();

    return true;
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
   TRANSLATIONS
===================================================== */

const TRANSLATIONS = {

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

        stayAhead: "Stay one step ahead of scams.",
        checkMessage: "Check Message",
        checkConversation: "Check Conversation",
        checkWebsite: "Check Website",

        language: "Language",
        country: "Country",

        free: "Free",
        pro: "Pro",
        premier: "Premier",

        upgradeToPro: "Upgrade to Pro",
        upgradeToPremier: "Upgrade to Premier",

        monthly: "Monthly",
        yearly: "Yearly",

        mostPopular: "MOST POPULAR",
        maximumProtection: "MAXIMUM PROTECTION",

        currentPlan: "Current plan"
    },

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

        stayAhead: "Gardez une longueur d'avance sur les arnaques.",
        checkMessage: "Vérifier le message",
        checkConversation: "Vérifier la conversation",
        checkWebsite: "Vérifier le site",

        language: "Langue",
        country: "Pays",

        free: "Gratuit",
        pro: "Pro",
        premier: "Premier",

        upgradeToPro: "Passer à Pro",
        upgradeToPremier: "Passer à Premier",

        monthly: "Mensuel",
        yearly: "Annuel",

        mostPopular: "LE PLUS POPULAIRE",
        maximumProtection: "PROTECTION MAXIMALE",

        currentPlan: "Plan actuel"
    },

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

        checkSomething: "Comprobar algo",
        security: "Seguridad",

        stayAhead: "Mantente un paso por delante de las estafas.",
        checkMessage: "Comprobar mensaje",
        checkConversation: "Comprobar conversación",
        checkWebsite: "Comprobar sitio web",

        language: "Idioma",
        country: "País",

        free: "Gratis",
        pro: "Pro",
        premier: "Premier",

        upgradeToPro: "Actualizar a Pro",
        upgradeToPremier: "Actualizar a Premier",

        monthly: "Mensual",
        yearly: "Anual",

        mostPopular: "MÁS POPULAR",
        maximumProtection: "MÁXIMA PROTECCIÓN",

        currentPlan: "Plan actual"
    },

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

        checkSomething: "Verificar algo",
        security: "Segurança",

        stayAhead: "Fique um passo à frente dos golpes.",
        checkMessage: "Verificar mensagem",
        checkConversation: "Verificar conversa",
        checkWebsite: "Verificar site",

        language: "Idioma",
        country: "País",

        free: "Grátis",
        pro: "Pro",
        premier: "Premier",

        upgradeToPro: "Atualizar para Pro",
        upgradeToPremier: "Atualizar para Premier",

        monthly: "Mensal",
        yearly: "Anual",

        mostPopular: "MAIS POPULAR",
        maximumProtection: "PROTEÇÃO MÁXIMA",

        currentPlan: "Plano atual"
    }

};


/* =====================================================
   TRANSLATE
===================================================== */

function translate(key) {

    const language =
        getSavedLanguage();

    if (
        TRANSLATIONS[language] &&
        TRANSLATIONS[language][key]
    ) {
        return TRANSLATIONS[language][key];
    }

    if (
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
   INITIALIZE
===================================================== */

function initialize() {

    const languageCode =
        getSavedLanguage();

    document.documentElement.setAttribute(
        "lang",
        LANGUAGES[languageCode].locale
    );

    document.documentElement.setAttribute(
        "data-language",
        languageCode
    );

    applyTranslations();

}


/* =====================================================
   EXPOSE TRUSTAI LANGUAGE SYSTEM
===================================================== */

window.TrustAILanguage = {

    languages: LANGUAGES,

    translations: TRANSLATIONS,

    getLanguage: getLanguage,

    getLanguageCode:
        getLanguageCode,

    setLanguage: setLanguage,

    translate: translate,

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

})();
