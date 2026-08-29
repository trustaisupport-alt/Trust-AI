/* =========================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   🌍 Floating Global Button + Country Flags
   ========================================================= */

(function () {

    "use strict";

    const LANGUAGES = {

        en: {
            country: "English",
            flag: "🇺🇸",
            name: "EN"
        },

        fr: {
            country: "France",
            flag: "🇫🇷",
            name: "Français"
        },

        nl: {
            country: "Netherlands",
            flag: "🇳🇱",
            name: "Nederlands"
        },

        de: {
            country: "Germany",
            flag: "🇩🇪",
            name: "Deutsch"
        },

        pt: {
            country: "Portugal",
            flag: "🇵🇹",
            name: "Português"
        },

        es: {
            country: "Spain",
            flag: "🇪🇸",
            name: "Español"
        },

        it: {
            country: "Italy",
            flag: "🇮🇹",
            name: "Italiano"
        }

    };


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const TRANSLATIONS = {

        en: {
            "Home": "Home",
            "Message Checker": "Message Checker",
            "Conversation Checker": "Conversation Checker",
            "Website Checker": "Website Checker",
            "Device Security": "Device Security",
            "TrustAI Protection": "TrustAI Protection",
            "Upgrade Plans": "Upgrade Plans",
            "Security Center": "Security Center",
            "Scam Alerts": "Scam Alerts",
            "Report a Scam": "Report a Scam",
            "Contact TrustAI": "Contact TrustAI",
            "Settings & Privacy": "Settings & Privacy",
            "Log Out": "Log Out",
            "Online Scam Protection": "Online Scam Protection",
            "Stay one step ahead of": "Stay one step ahead of",
            "scams.": "scams.",
            "Check Something": "Check Something",
            "Security": "Security",
            "Your real-time online scam and threat protection assistant.": "Your real-time online scam and threat protection assistant.",
            "Upgrade to Pro": "Upgrade to Pro"
        },

        fr: {
            "Home": "Accueil",
            "Message Checker": "Vérificateur de messages",
            "Conversation Checker": "Vérificateur de conversations",
            "Website Checker": "Vérificateur de sites web",
            "Device Security": "Sécurité de l'appareil",
            "TrustAI Protection": "Protection TrustAI",
            "Upgrade Plans": "Plans Premium",
            "Security Center": "Centre de sécurité",
            "Scam Alerts": "Alertes aux arnaques",
            "Report a Scam": "Signaler une arnaque",
            "Contact TrustAI": "Contacter TrustAI",
            "Settings & Privacy": "Paramètres et confidentialité",
            "Log Out": "Se déconnecter",
            "Online Scam Protection": "Protection contre les arnaques en ligne",
            "Stay one step ahead of": "Gardez une longueur d'avance sur",
            "scams.": "les arnaques.",
            "Check Something": "Vérifier quelque chose",
            "Security": "Sécurité",
            "Your real-time online scam and threat protection assistant.": "Votre assistant de protection en temps réel contre les arnaques et les menaces en ligne.",
            "Upgrade to Pro": "Passer à Pro"
        },

        nl: {
            "Home": "Home",
            "Message Checker": "Berichtencontrole",
            "Conversation Checker": "Gesprekscontrole",
            "Website Checker": "Websitecontrole",
            "Device Security": "Apparaatbeveiliging",
            "TrustAI Protection": "TrustAI-bescherming",
            "Upgrade Plans": "Upgrade-abonnementen",
            "Security Center": "Beveiligingscentrum",
            "Scam Alerts": "Oplichtingswaarschuwingen",
            "Report a Scam": "Oplichting melden",
            "Contact TrustAI": "Contact opnemen met TrustAI",
            "Settings & Privacy": "Instellingen en privacy",
            "Log Out": "Uitloggen",
            "Online Scam Protection": "Bescherming tegen online oplichting",
            "Stay one step ahead of": "Blijf oplichters een stap voor",
            "scams.": "oplichting.",
            "Check Something": "Iets controleren",
            "Security": "Beveiliging",
            "Your real-time online scam and threat protection assistant.": "Uw realtime assistent voor bescherming tegen online oplichting en bedreigingen.",
            "Upgrade to Pro": "Upgraden naar Pro"
        },

        de: {
            "Home": "Startseite",
            "Message Checker": "Nachrichtenprüfung",
            "Conversation Checker": "Gesprächsprüfung",
            "Website Checker": "Website-Prüfung",
            "Device Security": "Gerätesicherheit",
            "TrustAI Protection": "TrustAI-Schutz",
            "Upgrade Plans": "Upgrade-Pläne",
            "Security Center": "Sicherheitscenter",
            "Scam Alerts": "Betrugswarnungen",
            "Report a Scam": "Betrug melden",
            "Contact TrustAI": "TrustAI kontaktieren",
            "Settings & Privacy": "Einstellungen & Datenschutz",
            "Log Out": "Abmelden",
            "Online Scam Protection": "Schutz vor Online-Betrug",
            "Stay one step ahead of": "Seien Sie Betrügern immer einen Schritt voraus",
            "scams.": "Betrug.",
            "Check Something": "Etwas überprüfen",
            "Security": "Sicherheit",
            "Your real-time online scam and threat protection assistant.": "Ihr Echtzeit-Assistent zum Schutz vor Online-Betrug und Bedrohungen.",
            "Upgrade to Pro": "Auf Pro upgraden"
        },

        pt: {
            "Home": "Início",
            "Message Checker": "Verificador de mensagens",
            "Conversation Checker": "Verificador de conversas",
            "Website Checker": "Verificador de sites",
            "Device Security": "Segurança do dispositivo",
            "TrustAI Protection": "Proteção TrustAI",
            "Upgrade Plans": "Planos de upgrade",
            "Security Center": "Central de segurança",
            "Scam Alerts": "Alertas de golpes",
            "Report a Scam": "Denunciar golpe",
            "Contact TrustAI": "Contactar a TrustAI",
            "Settings & Privacy": "Configurações e privacidade",
            "Log Out": "Sair",
            "Online Scam Protection": "Proteção contra golpes online",
            "Stay one step ahead of": "Fique um passo à frente dos",
            "scams.": "golpes.",
            "Check Something": "Verificar algo",
            "Security": "Segurança",
            "Your real-time online scam and threat protection assistant.": "Seu assistente de proteção em tempo real contra golpes e ameaças online.",
            "Upgrade to Pro": "Fazer upgrade para Pro"
        },

        es: {
            "Home": "Inicio",
            "Message Checker": "Verificador de mensajes",
            "Conversation Checker": "Verificador de conversaciones",
            "Website Checker": "Verificador de sitios web",
            "Device Security": "Seguridad del dispositivo",
            "TrustAI Protection": "Protección TrustAI",
            "Upgrade Plans": "Planes de mejora",
            "Security Center": "Centro de seguridad",
            "Scam Alerts": "Alertas de estafas",
            "Report a Scam": "Denunciar una estafa",
            "Contact TrustAI": "Contactar con TrustAI",
            "Settings & Privacy": "Configuración y privacidad",
            "Log Out": "Cerrar sesión",
            "Online Scam Protection": "Protección contra estafas en línea",
            "Stay one step ahead of": "Mantente un paso por delante de las",
            "scams.": "estafas.",
            "Check Something": "Comprobar algo",
            "Security": "Seguridad",
            "Your real-time online scam and threat protection assistant.": "Tu asistente de protección en tiempo real contra estafas y amenazas en línea.",
            "Upgrade to Pro": "Actualizar a Pro"
        },

        it: {
            "Home": "Home",
            "Message Checker": "Controllo messaggi",
            "Conversation Checker": "Controllo conversazioni",
            "Website Checker": "Controllo siti web",
            "Device Security": "Sicurezza del dispositivo",
            "TrustAI Protection": "Protezione TrustAI",
            "Upgrade Plans": "Piani di upgrade",
            "Security Center": "Centro sicurezza",
            "Scam Alerts": "Avvisi truffe",
            "Report a Scam": "Segnala una truffa",
            "Contact TrustAI": "Contatta TrustAI",
            "Settings & Privacy": "Impostazioni e privacy",
            "Log Out": "Esci",
            "Online Scam Protection": "Protezione dalle truffe online",
            "Stay one step ahead of": "Resta un passo avanti alle",
            "scams.": "truffe.",
            "Check Something": "Controlla qualcosa",
            "Security": "Sicurezza",
            "Your real-time online scam and threat protection assistant.": "Il tuo assistente di protezione in tempo reale contro truffe e minacce online.",
            "Upgrade to Pro": "Passa a Pro"
        }

    };


    /* =====================================================
       GET CURRENT LANGUAGE
       ===================================================== */

    function getLanguage() {

        return localStorage.getItem(
            "trustai_language"
        ) || "en";

    }


    /* =====================================================
       SAVE LANGUAGE
       ===================================================== */

    function setLanguage(language) {

        if (!LANGUAGES[language]) {
            language = "en";
        }

        localStorage.setItem(
            "trustai_language",
            language
        );

        location.reload();

    }


    /* =====================================================
       TRANSLATE PAGE
       ===================================================== */

    function translatePage() {

        const language = getLanguage();

        const dictionary =
            TRANSLATIONS[language] ||
            TRANSLATIONS.en;


        document.documentElement.lang =
            language;


        /*
         * Translate normal text.
         */

        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT
            );


        const nodes = [];

        let node;

        while (
            node = walker.nextNode()
        ) {

            nodes.push(node);

        }


        nodes.forEach(function (textNode) {

            const text =
                textNode.nodeValue.trim();


            if (
                !text ||
                textNode.parentElement.closest(
                    "#trustaiGlobalLanguage"
                )
            ) {

                return;

            }


            if (
                dictionary[text]
            ) {

                textNode.nodeValue =
                    textNode.nodeValue.replace(
                        text,
                        dictionary[text]
                    );

            }

        });


        /*
         * Translate placeholders.
         */

        document
            .querySelectorAll(
                "[placeholder]"
            )
            .forEach(function (element) {

                const text =
                    element.getAttribute(
                        "placeholder"
                    );

                if (
                    dictionary[text]
                ) {

                    element.setAttribute(
                        "placeholder",
                        dictionary[text]
                    );

                }

            });

    }


    /* =====================================================
       CREATE GLOBAL BUTTON
       ===================================================== */

    function createGlobalButton() {

        if (
            document.getElementById(
                "trustaiGlobalLanguage"
            )
        ) {

            return;

        }


        const container =
            document.createElement("div");

        container.id =
            "trustaiGlobalLanguage";


        container.innerHTML = `

            <button
                id="trustaiGlobalButton"
                class="trustai-global-button"
                type="button"
                aria-label="Choose language"
                aria-expanded="false"
            >

                <span class="global-symbol">
                    🌐
                </span>

                <span class="global-text">
                    Global
                </span>

            </button>


            <div
                id="trustaiLanguagePanel"
                class="trustai-language-panel"
            >

                <div class="language-panel-header">

                    <div class="language-title">
                        🌍 Global
                    </div>

                    <div class="language-subtitle">
                        Choose your country
                    </div>

                </div>


                <div
                    id="trustaiLanguageList"
                    class="trustai-language-list"
                ></div>

            </div>

        `;


        document.body.appendChild(
            container
        );


        addLanguageStyles();

        buildLanguageList();

        setupGlobalButton();

    }


    /* =====================================================
       BUILD COUNTRY LIST
       ===================================================== */

    function buildLanguageList() {

        const list =
            document.getElementById(
                "trustaiLanguageList"
            );


        const currentLanguage =
            getLanguage();


        list.innerHTML = "";


        Object.keys(
            LANGUAGES
        ).forEach(function (code) {

            const language =
                LANGUAGES[code];


            const item =
                document.createElement("button");


            item.type = "button";

            item.className =
                "trustai-language-item";


            if (
                code === currentLanguage
            ) {

                item.classList.add(
                    "selected"
                );

            }


            item.innerHTML = `

                <span class="country-flag">
                    ${language.flag}
                </span>

                <span class="country-info">

                    <strong>
                        ${language.country}
                    </strong>

                    <small>
                        ${language.name}
                    </small>

                </span>

                <span class="country-check">
                    ${code === currentLanguage ? "✓" : ""}
                </span>

            `;


            item.addEventListener(
                "click",
                function () {

                    setLanguage(code);

                }
            );


            list.appendChild(item);

        });

    }


    /* =====================================================
       BUTTON BEHAVIOUR
       ===================================================== */

    function setupGlobalButton() {

        const button =
            document.getElementById(
                "trustaiGlobalButton"
            );


        const panel =
            document.getElementById(
                "trustaiLanguagePanel"
            );


        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const isOpen =
                    panel.classList.contains(
                        "show"
                    );


                if (isOpen) {

                    panel.classList.remove(
                        "show"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    panel.classList.add(
                        "show"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );


        panel.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );


        document.addEventListener(
            "click",
            function () {

                panel.classList.remove(
                    "show"
                );

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }


    /* =====================================================
       STYLES
       ===================================================== */

    function addLanguageStyles() {

        if (
            document.getElementById(
                "trustai-global-language-style"
            )
        ) {

            return;

        }


        const style =
            document.createElement("style");


        style.id =
            "trustai-global-language-style";


        style.textContent = `

            /* GLOBAL CONTAINER */

            #trustaiGlobalLanguage {

                position: fixed;

                right: 18px;

                bottom: 18px;

                z-index: 99999;

                font-family:
                    Inter,
                    system-ui,
                    -apple-system,
                    BlinkMacSystemFont,
                    "Segoe UI",
                    Arial,
                    sans-serif;

            }


            /* GLOBAL BUTTON */

            .trustai-global-button {

                display: flex;

                align-items: center;

                gap: 8px;

                min-height: 48px;

                padding: 0 16px;

                border-radius: 16px;

                border: 1px solid
                    rgba(255,255,255,0.14);

                background:
                    rgba(15,23,42,0.94);

                color: #f8fafc;

                box-shadow:
                    0 12px 35px
                    rgba(0,0,0,0.45);

                backdrop-filter:
                    blur(16px);

                -webkit-backdrop-filter:
                    blur(16px);

                cursor: pointer;

                font-size: 14px;

                font-weight: 750;

                transition:
                    transform .2s ease,
                    border-color .2s ease,
                    box-shadow .2s ease;

            }


            .trustai-global-button:hover {

                transform:
                    translateY(-3px);

                border-color:
                    rgba(99,102,241,.65);

                box-shadow:
                    0 16px 40px
                    rgba(0,0,0,.55);

            }


            .trustai-global-button:active {

                transform:
                    scale(.96);

            }


            .global-symbol {

                font-size: 21px;

            }


            .global-text {

                letter-spacing: .2px;

            }


            /* LANGUAGE PANEL */

            .trustai-language-panel {

                position: absolute;

                right: 0;

                bottom: 60px;

                width: 285px;

                padding: 14px;

                border-radius: 20px;

                border:
                    1px solid
                    rgba(255,255,255,0.14);

                background:
                    rgba(15,23,42,0.94);

                color: #f8fafc;

                box-shadow:
                    0 12px 35px
                    rgba(0,0,0,0.45);

                backdrop-filter:
                    blur(16px);

                -webkit-backdrop-filter:
                    blur(16px);

                cursor: pointer;

                font-size: 14px;

                font-weight: 750;

                transition:
                    transform .2s ease,
                    border-color .2s ease,
                    box-shadow .2s ease;

            }


            .trustai-global-button:hover {

                transform:
                    translateY(-3px);

                border-color:
                    rgba(99,102,241,.65);

                box-shadow:
                    0 16px 40px
                    rgba(0,0,0,.55);

            }


            .trustai-global-button:active {

                transform:
                    scale(.96);

            }


            .global-symbol {

                font-size: 21px;

            }


            .global-text {

                letter-spacing: .2px;

            }


            /* LANGUAGE PANEL */

            .trustai-language-panel {

                position: absolute;

                right: 0;

                bottom: 60px;

                width: 285px;

                padding: 14px;

                border-radius: 20px;

                border:
                    1px solid
                    rgba(255,255,255,.12);

                background:
                    rgba(15,23,42,.98);

                box-shadow:
                    0 20px 60px
                    rgba(0,0,0,.55);

                backdrop-filter:
                    blur(20px);

                -webkit-backdrop-filter:
                    blur(20px);

                opacity: 0;

                visibility: hidden;

                pointer-events: none;

                transform:
                    translateY(10px)
                    scale(.96);

                transform-origin:
                    bottom right;

                transition:
                    opacity .2s ease,
                    visibility .2s ease,
                    transform .2s ease;

            }


            .trustai-language-panel.show {

                opacity: 1;

                visibility: visible;

                pointer-events: auto;

                transform:
                    translateY(0)
                    scale(1);

            }


            /* HEADER */

            .language-panel-header {

                padding:
                    6px 8px 13px;

                border-bottom:
                    1px solid
                    rgba(255,255,255,.08);

                margin-bottom: 8px;

            }


            .language-title {

                color: #f8fafc;

                font-size: 17px;

                font-weight: 850;

            }


            .language-subtitle {

                margin-top: 2px;

                color: #94a3b8;

                font-size: 12px;

            }


            /* LIST */

            .trustai-language-list {

                display: flex;

                flex-direction: column;

                gap: 5px;

                max-height: 390px;

                overflow-y: auto;

            }
            /* COUNTRY */

            .trustai-language-item {

                width: 100%;

                display: flex;

                align-items: center;

                gap: 11px;

                padding: 10px;

                border-radius: 13px;

                border:
                    1px solid
                    transparent;

                background:
                    transparent;

                color: #f8fafc;

                text-align: left;

                cursor: pointer;

                transition:
                    background .18s ease,
                    border-color .18s ease,
                    transform .18s ease;

            }


            .trustai-language-item:hover {

                background:
                    rgba(255,255,255,.06);

                border-color:
                    rgba(99,102,241,.25);

                transform:
                    translateX(-2px);

            }


            .trustai-language-item.selected {

                background:
                    rgba(99,102,241,.13);

                border-color:
                    rgba(99,102,241,.35);

            }


            /* FLAG */

            .country-flag {

                width: 38px;

                height: 38px;

                display: flex;

                align-items: center;

                justify-content: center;

                border-radius: 11px;

                background:
                    rgba(255,255,255,.06);

                font-size: 24px;

                flex-shrink: 0;

            }


            /* COUNTRY TEXT */

            .country-info {

                display: flex;

                flex-direction: column;

                min-width: 0;

                flex: 1;

            }


            .country-info strong {

                color: #f8fafc;

                font-size: 13px;

                font-weight: 750;

            }


            .country-info small {

                margin-top: 1px;

                color: #94a3b8;

                font-size: 11px;

            }


            /* CHECK */

            .country-check {

                width: 22px;

                color: #818cf8;

                font-size: 17px;

                font-weight: 900;

                text-align: center;

            }
            /* MOBILE */

            @media (max-width: 500px) {

                #trustaiGlobalLanguage {

                    right: 12px;

                    bottom: 12px;

                }


                .trustai-global-button {

                    min-height: 46px;

                    padding:
                        0 13px;

                }


                .trustai-language-panel {

                    width:
                        min(
                            285px,
                            calc(100vw - 24px)
                        );

                    right: 0;

                    bottom: 58px;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    /* =====================================================
       START
       ===================================================== */

    function start() {

        translatePage();

        createGlobalButton();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    } else {

        start();

    }


    /* =====================================================
       PUBLIC API
       ===================================================== */

    window.TrustAILanguage = {

        setLanguage: setLanguage,

        getLanguage: getLanguage,

        languages: LANGUAGES

    };

})();
