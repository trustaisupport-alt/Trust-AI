/* =========================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   🌍 Global Language Selector
   Version 2.0

   FEATURES
   ---------------------------------------------------------
   • Floating Global button
   • English — EN 🇺🇸
   • French — FR 🇫🇷
   • German — DE 🇩🇪
   • Spanish — ES 🇪🇸
   • Italian — IT 🇮🇹
   • Portuguese — PT 🇵🇹
   • Dutch — NL 🇳🇱
   • Saves language across TrustAI pages
   • Translates page text
   • Translates buttons and placeholders
   • Automatically detects common pasted languages
   • Public TrustAI language API
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       TRUSTAI LANGUAGES
       ===================================================== */

    const LANGUAGES = {

        en: {
            code: "EN",
            name: "English",
            native: "English",
            flag: "🇺🇸"
        },

        fr: {
            code: "FR",
            name: "French",
            native: "Français",
            flag: "🇫🇷"
        },

        de: {
            code: "DE",
            name: "German",
            native: "Deutsch",
            flag: "🇩🇪"
        },

        es: {
            code: "ES",
            name: "Spanish",
            native: "Español",
            flag: "🇪🇸"
        },

        it: {
            code: "IT",
            name: "Italian",
            native: "Italiano",
            flag: "🇮🇹"
        },

        pt: {
            code: "PT",
            name: "Portuguese",
            native: "Português",
            flag: "🇵🇹"
        },

        nl: {
            code: "NL",
            name: "Dutch",
            native: "Nederlands",
            flag: "🇳🇱"
        }

    };


    /* =====================================================
       TRANSLATION DICTIONARY
       ===================================================== */

    const TRANSLATIONS = {

        en: {

            "Home":
                "Home",

            "Message Checker":
                "Message Checker",

            "Conversation Checker":
                "Conversation Checker",

            "Website Checker":
                "Website Checker",

            "Device Security":
                "Device Security",

            "TrustAI Protection":
                "TrustAI Protection",

            "Upgrade Plans":
                "Upgrade Plans",

            "Security Center":
                "Security Center",

            "Scam Alerts":
                "Scam Alerts",

            "Report a Scam":
                "Report a Scam",

            "Contact TrustAI":
                "Contact TrustAI",

            "Settings & Privacy":
                "Settings & Privacy",

            "Log Out":
                "Log Out",

            "Online Scam Protection":
                "Online Scam Protection",

            "Stay one step ahead of":
                "Stay one step ahead of",

            "scams.":
                "scams.",

            "Check Something":
                "Check Something",

            "Security":
                "Security",

            "Your real-time online scam and threat protection assistant.":
                "Your real-time online scam and threat protection assistant.",

            "Upgrade to Pro":
                "Upgrade to Pro",

            "Choose your language":
                "Choose your language",

            "Global":
                "Global",

            "Language":
                "Language",

            "Detecting language":
                "Detecting language",

            "Detected language":
                "Detected language",

            "Unknown language":
                "Unknown language",

            "Analyze":
                "Analyze",

            "Check":
                "Check",

            "Submit":
                "Submit",

            "Continue":
                "Continue",

            "Cancel":
                "Cancel",

            "Save":
                "Save",

            "Settings":
                "Settings",

            "Profile":
                "Profile",

            "Welcome to TrustAI":
                "Welcome to TrustAI"

        },


        fr: {

            "Home":
                "Accueil",

            "Message Checker":
                "Vérificateur de messages",

            "Conversation Checker":
                "Vérificateur de conversations",

            "Website Checker":
                "Vérificateur de sites web",

            "Device Security":
                "Sécurité de l'appareil",

            "TrustAI Protection":
                "Protection TrustAI",

            "Upgrade Plans":
                "Plans Premium",

            "Security Center":
                "Centre de sécurité",

            "Scam Alerts":
                "Alertes aux arnaques",

            "Report a Scam":
                "Signaler une arnaque",

            "Contact TrustAI":
                "Contacter TrustAI",

            "Settings & Privacy":
                "Paramètres et confidentialité",

            "Log Out":
                "Se déconnecter",

            "Online Scam Protection":
                "Protection contre les arnaques en ligne",

            "Stay one step ahead of":
                "Gardez une longueur d'avance sur",

            "scams.":
                "les arnaques.",

            "Check Something":
                "Vérifier quelque chose",

            "Security":
                "Sécurité",

            "Your real-time online scam and threat protection assistant.":
                "Votre assistant de protection en temps réel contre les arnaques et les menaces en ligne.",

            "Upgrade to Pro":
                "Passer à Pro",

            "Choose your language":
                "Choisissez votre langue",

            "Global":
                "Global",

            "Language":
                "Langue",

            "Detecting language":
                "Détection de la langue",

            "Detected language":
                "Langue détectée",

            "Unknown language":
                "Langue inconnue",

            "Analyze":
                "Analyser",

            "Check":
                "Vérifier",

            "Submit":
                "Envoyer",

            "Continue":
                "Continuer",

            "Cancel":
                "Annuler",

            "Save":
                "Enregistrer",

            "Settings":
                "Paramètres",

            "Profile":
                "Profil",

            "Welcome to TrustAI":
                "Bienvenue sur TrustAI"

        },


        de: {

            "Home":
                "Startseite",

            "Message Checker":
                "Nachrichtenprüfung",

            "Conversation Checker":
                "Gesprächsprüfung",

            "Website Checker":
                "Website-Prüfung",

            "Device Security":
                "Gerätesicherheit",

            "TrustAI Protection":
                "TrustAI-Schutz",

            "Upgrade Plans":
                "Upgrade-Pläne",

            "Security Center":
                "Sicherheitscenter",

            "Scam Alerts":
                "Betrugswarnungen",

            "Report a Scam":
                "Betrug melden",

            "Contact TrustAI":
                "TrustAI kontaktieren",

            "Settings & Privacy":
                "Einstellungen & Datenschutz",

            "Log Out":
                "Abmelden",

            "Online Scam Protection":
                "Schutz vor Online-Betrug",

            "Stay one step ahead of":
                "Seien Sie Betrügern immer einen Schritt voraus",

            "scams.":
                "Betrug.",

            "Check Something":
                "Etwas überprüfen",

            "Security":
                "Sicherheit",

            "Your real-time online scam and threat protection assistant.":
                "Ihr Echtzeit-Assistent zum Schutz vor Online-Betrug und Bedrohungen.",

            "Upgrade to Pro":
                "Auf Pro upgraden",

            "Choose your language":
                "Wählen Sie Ihre Sprache",

            "Global":
                "Global",

            "Language":
                "Sprache",

            "Detecting language":
                "Sprache wird erkannt",

            "Detected language":
                "Erkannte Sprache",

            "Unknown language":
                "Unbekannte Sprache",

            "Analyze":
                "Analysieren",

            "Check":
                "Prüfen",

            "Submit":
                "Senden",

            "Continue":
                "Weiter",

            "Cancel":
                "Abbrechen",

            "Save":
                "Speichern",

            "Settings":
                "Einstellungen",

            "Profile":
                "Profil",

            "Welcome to TrustAI":
                "Willkommen bei TrustAI"

        },


        es: {

            "Home":
                "Inicio",

            "Message Checker":
                "Verificador de mensajes",

            "Conversation Checker":
                "Verificador de conversaciones",

            "Website Checker":
                "Verificador de sitios web",

            "Device Security":
                "Seguridad del dispositivo",

            "TrustAI Protection":
                "Protección TrustAI",

            "Upgrade Plans":
                "Planes de mejora",

            "Security Center":
                "Centro de seguridad",

            "Scam Alerts":
                "Alertas de estafas",

            "Report a Scam":
                "Denunciar una estafa",

            "Contact TrustAI":
                "Contactar con TrustAI",

            "Settings & Privacy":
                "Configuración y privacidad",

            "Log Out":
                "Cerrar sesión",

            "Online Scam Protection":
                "Protección contra estafas en línea",

            "Stay one step ahead of":
                "Mantente un paso por delante de las",

            "scams.":
                "estafas.",

            "Check Something":
                "Comprobar algo",

            "Security":
                "Seguridad",

            "Your real-time online scam and threat protection assistant.":
                "Tu asistente de protección en tiempo real contra estafas y amenazas en línea.",

            "Upgrade to Pro":
                "Actualizar a Pro",

            "Choose your language":
                "Elige tu idioma",

            "Global":
                "Global",

            "Language":
                "Idioma",

            "Detecting language":
                "Detectando idioma",

            "Detected language":
                "Idioma detectado",

            "Unknown language":
                "Idioma desconocido",

            "Analyze":
                "Analizar",

            "Check":
                "Comprobar",

            "Submit":
                "Enviar",

            "Continue":
                "Continuar",

            "Cancel":
                "Cancelar",

            "Save":
                "Guardar",

            "Settings":
                "Configuración",

            "Profile":
                "Perfil",

            "Welcome to TrustAI":
                "Bienvenido a TrustAI"

        },


        it: {

            "Home":
                "Home",

            "Message Checker":
                "Controllo messaggi",

            "Conversation Checker":
                "Controllo conversazioni",

            "Website Checker":
                "Controllo siti web",

            "Device Security":
                "Sicurezza del dispositivo",

            "TrustAI Protection":
                "Protezione TrustAI",

            "Upgrade Plans":
                "Piani di upgrade",

            "Security Center":
                "Centro sicurezza",

            "Scam Alerts":
                "Avvisi truffe",

            "Report a Scam":
                "Segnala una truffa",

            "Contact TrustAI":
                "Contatta TrustAI",

            "Settings & Privacy":
                "Impostazioni e privacy",

            "Log Out":
                "Esci",

            "Online Scam Protection":
                "Protezione dalle truffe online",

            "Stay one step ahead of":
                "Resta un passo avanti alle",

            "scams.":
                "truffe.",

            "Check Something":
                "Controlla qualcosa",

            "Security":
                "Sicurezza",

            "Your real-time online scam and threat protection assistant.":
                "Il tuo assistente di protezione in tempo reale contro truffe e minacce online.",

            "Upgrade to Pro":
                "Passa a Pro",

            "Choose your language":
                "Scegli la tua lingua",

            "Global":
                "Globale",

            "Language":
                "Lingua",

            "Detecting language":
                "Rilevamento della lingua",

            "Detected language":
                "Lingua rilevata",

            "Unknown language":
                "Lingua sconosciuta",

            "Analyze":
                "Analizza",

            "Check":
                "Controlla",

            "Submit":
                "Invia",

            "Continue":
                "Continua",

            "Cancel":
                "Annulla",

            "Save":
                "Salva",

            "Settings":
                "Impostazioni",

            "Profile":
                "Profilo",

            "Welcome to TrustAI":
                "Benvenuto su TrustAI"

        },


        pt: {

            "Home":
                "Início",

            "Message Checker":
                "Verificador de mensagens",

            "Conversation Checker":
                "Verificador de conversas",

            "Website Checker":
                "Verificador de sites",

            "Device Security":
                "Segurança do dispositivo",

            "TrustAI Protection":
                "Proteção TrustAI",

            "Upgrade Plans":
                "Planos de upgrade",

            "Security Center":
                "Central de segurança",

            "Scam Alerts":
                "Alertas de golpes",

            "Report a Scam":
                "Denunciar golpe",

            "Contact TrustAI":
                "Contactar a TrustAI",

            "Settings & Privacy":
                "Configurações e privacidade",

            "Log Out":
                "Sair",

            "Online Scam Protection":
                "Proteção contra golpes online",

            "Stay one step ahead of":
                "Fique um passo à frente dos",

            "scams.":
                "golpes.",

            "Check Something":
                "Verificar algo",

            "Security":
                "Segurança",

            "Your real-time online scam and threat protection assistant.":
                "Seu assistente de proteção em tempo real contra golpes e ameaças online.",

            "Upgrade to Pro":
                "Fazer upgrade para Pro",

            "Choose your language":
                "Escolha seu idioma",

            "Global":
                "Global",

            "Language":
                "Idioma",

            "Detecting language":
                "Detectando idioma",

            "Detected language":
                "Idioma detectado",

            "Unknown language":
                "Idioma desconhecido",

            "Analyze":
                "Analisar",

            "Check":
                "Verificar",

            "Submit":
                "Enviar",

            "Continue":
                "Continuar",

            "Cancel":
                "Cancelar",

            "Save":
                "Salvar",

            "Settings":
                "Configurações",

            "Profile":
                "Perfil",

            "Welcome to TrustAI":
                "Bem-vindo à TrustAI"

        },


        nl: {

            "Home":
                "Home",

            "Message Checker":
                "Berichtencontrole",

            "Conversation Checker":
                "Gesprekscontrole",

            "Website Checker":
                "Websitecontrole",

            "Device Security":
                "Apparaatbeveiliging",

            "TrustAI Protection":
                "TrustAI-bescherming",

            "Upgrade Plans":
                "Upgrade-abonnementen",

            "Security Center":
                "Beveiligingscentrum",

            "Scam Alerts":
                "Oplichtingswaarschuwingen",

            "Report a Scam":
                "Oplichting melden",

            "Contact TrustAI":
                "Contact opnemen met TrustAI",

            "Settings & Privacy":
                "Instellingen en privacy",

            "Log Out":
                "Uitloggen",

            "Online Scam Protection":
                "Bescherming tegen online oplichting",

            "Stay one step ahead of":
                "Blijf oplichters een stap voor",

            "scams.":
                "oplichting.",

            "Check Something":
                "Iets controleren",

            "Security":
                "Beveiliging",

            "Your real-time online scam and threat protection assistant.":
                "Uw realtime assistent voor bescherming tegen online oplichting en bedreigingen.",

            "Upgrade to Pro":
                "Upgraden naar Pro",

            "Choose your language":
                "Kies uw taal",

            "Global":
                "Globaal",

            "Language":
                "Taal",

            "Detecting language":
                "Taal wordt gedetecteerd",

            "Detected language":
                "Gedetecteerde taal",

            "Unknown language":
                "Onbekende taal",

            "Analyze":
                "Analyseren",

            "Check":
                "Controleren",

            "Submit":
                "Verzenden",

            "Continue":
                "Doorgaan",

            "Cancel":
                "Annuleren",

            "Save":
                "Opslaan",

            "Settings":
                "Instellingen",

            "Profile":
                "Profiel",

            "Welcome to TrustAI":
                "Welkom bij TrustAI"

        }

    };


    /* =====================================================
       GET CURRENT LANGUAGE
       ===================================================== */

    function getLanguage() {

        const saved =
            localStorage.getItem(
                "trustai_language"
            );

        if (saved && LANGUAGES[saved]) {
            return saved;
        }

        return "en";
    }


    /* =====================================================
       SET LANGUAGE
       ===================================================== */

    function setLanguage(language) {

        if (!LANGUAGES[language]) {
            language = "en";
        }

        localStorage.setItem(
            "trustai_language",
            language
        );

        /*
         * Tell the page that the language changed.
         */

        window.dispatchEvent(
            new CustomEvent(
                "trustaiLanguageChanged",
                {
                    detail: {
                        language: language
                    }
                }
            )
        );

        /*
         * Reload so every page component
         * starts in the selected language.
         */

        window.location.reload();

    }
=====================================================
       TRANSLATE SINGLE TEXT
       ===================================================== */

    function translateText(text) {

        if (!text) {
            return text;
        }

        const language =
            getLanguage();

        const dictionary =
            TRANSLATIONS[language] ||
            TRANSLATIONS.en;

        const cleanText =
            text.trim();

        if (
            dictionary[
                cleanText
            ]
        ) {

            return text.replace(
                cleanText,
                dictionary[cleanText]
            );

        }

        return text;

    }


    /* =====================================================
       TRANSLATE PAGE
       ===================================================== */

    function translatePage() {

        const language =
            getLanguage();

        const dictionary =
            TRANSLATIONS[language] ||
            TRANSLATIONS.en;


        document.documentElement.lang =
            language;


        /*
         * Translate visible text nodes.
         */

        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT
            );


        const nodes = [];

        let node;

        while (
            node =
            walker.nextNode()
        ) {

            nodes.push(node);

        }


        nodes.forEach(
            function (textNode) {

                const parent =
                    textNode.parentElement;


                if (!parent) {
                    return;
                }


                /*
                 * Don't translate the
                 * language selector itself.
                 */

                if (
                    parent.closest(
                        "#trustaiGlobalLanguage"
                    )
                ) {

                    return;

                }


                /*
                 * Don't modify script,
                 * style or code.
                 */

                const tag =
                    parent.tagName;

                if (
                    tag === "SCRIPT" ||
                    tag === "STYLE" ||
                    tag === "CODE" ||
                    tag === "PRE"
                ) {

                    return;

                }


                const original =
                    textNode.nodeValue;

                const trimmed =
                    original.trim();


                if (!trimmed) {
                    return;
                }


                if (
                    dictionary[
                        trimmed
                    ]
                ) {

                    textNode.nodeValue =
                        original.replace(
                            trimmed,
                            dictionary[
                                trimmed
                            ]
                        );

                }

            }
        );


        /*
         * Translate placeholders.
         */

        document
            .querySelectorAll(
                "[placeholder]"
            )
            .forEach(
                function (element) {

                    const original =
                        element.getAttribute(
                            "placeholder"
                        );

                    if (
                        dictionary[
                            original
                        ]
                    ) {

                        element.setAttribute(
                            "placeholder",
                            dictionary[
                                original
                            ]
                        );

                    }

                }
            );


        /*
         * Translate title attributes.
         */

        document
            .querySelectorAll(
                "[title]"
            )
            .forEach(
                function (element) {

                    const original =
                        element.getAttribute(
                            "title"
                        );

                    if (
                        dictionary[
                            original
                        ]
                    ) {

                        element.setAttribute(
                            "title",
                            dictionary[
                                original
                            ]
                        );

                    }

                }
            );


        /*
         * Translate aria-label.
         */

        document
            .querySelectorAll(
                "[aria-label]"
            )
            .forEach(
                function (element) {

                    const original =
                        element.getAttribute(
                            "aria-label"
                        );

                    if (
                        dictionary[
                            original
                        ]
                    ) {

                        element.setAttribute(
                            "aria-label",
                            dictionary[
                                original
                            ]
                        );

                    }

                }
            );

    }

/* =====================================================
       CREATE GLOBAL LANGUAGE BUTTON
       ===================================================== */

    function createGlobalLanguage() {

        if (
            document.getElementById(
                "trustaiGlobalLanguage"
            )
        ) {

            return;

        }


        const container =
            document.createElement(
                "div"
            );


        container.id =
            "trustaiGlobalLanguage";


        container.innerHTML = `

            <button
                id="trustaiGlobalButton"
                class="trustai-global-button"
                type="button"
                aria-label="Choose your language"
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
                aria-hidden="true"
            >

                <div
                    class="language-panel-header"
                >

                    <div
                        class="language-title"
                    >
                        🌍 Global
                    </div>

                    <div
                        class="language-subtitle"
                    >
                        Choose your language
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

        setupLanguageButton();

    }


    /* =====================================================
       BUILD LANGUAGE LIST
       ===================================================== */

    function buildLanguageList() {

        const list =
            document.getElementById(
                "trustaiLanguageList"
            );


        if (!list) {
            return;
        }


        const currentLanguage =
            getLanguage();


        list.innerHTML = "";


        Object.keys(
            LANGUAGES
        ).forEach(
            function (code) {

                const language =
                    LANGUAGES[code];


                const item =
                    document.createElement(
                        "button"
                    );


                item.type =
                    "button";


                item.className =
                    "trustai-language-item";


                if (
                    code ===
                    currentLanguage
                ) {

                    item.classList.add(
                        "selected"
                    );

                }


                item.innerHTML = `

                    <span
                        class="country-flag"
                    >
                        ${language.flag}
                    </span>

                    <span
                        class="country-info"
                    >

                        <strong>
                            ${language.native}
                        </strong>

                        <small>
                            ${language.name} — ${language.code}
                        </small>

                    </span>

                    <span
                        class="country-check"
                    >
                        ${
                            code ===
                            currentLanguage
                                ? "✓"
                                : ""
                        }
                    </span>

                `;


                item.addEventListener(
                    "click",
                    function () {

                        setLanguage(
                            code
                        );

                    }
                );


                list.appendChild(
                    item
                );

            }
        );

      }

/* =====================================================
       LANGUAGE BUTTON BEHAVIOUR
       ===================================================== */

    function setupLanguageButton() {

        const button =
            document.getElementById(
                "trustaiGlobalButton"
            );


        const panel =
            document.getElementById(
                "trustaiLanguagePanel"
            );


        if (
            !button ||
            !panel
        ) {

            return;

        }


        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const isOpen =
                    panel.classList.contains(
                        "show"
                    );


                if (isOpen) {

                    closeLanguagePanel();

                } else {

                    openLanguagePanel();

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

                closeLanguagePanel();

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeLanguagePanel();

                }

            }
        );

    }


    /* =====================================================
       OPEN PANEL
       ===================================================== */

    function openLanguagePanel() {

        const button =
            document.getElementById(
                "trustaiGlobalButton"
            );

        const panel =
            document.getElementById(
                "trustaiLanguagePanel"
            );


        if (!button || !panel) {
            return;
        }


        panel.classList.add(
            "show"
        );


        button.setAttribute(
            "aria-expanded",
            "true"
        );


        panel.setAttribute(
            "aria-hidden",
            "false"
        );

    }

   /* =====================================================
       CLOSE PANEL
       ===================================================== */

    function closeLanguagePanel() {

        const button =
            document.getElementById(
                "trustaiGlobalButton"
            );

        const panel =
            document.getElementById(
                "trustaiLanguagePanel"
            );


        if (!button || !panel) {
            return;
        }


        panel.classList.remove(
            "show"
        );


        button.setAttribute(
            "aria-expanded",
            "false"
        );


        panel.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =====================================================
       LANGUAGE DETECTION
       =====================================================

       This is a lightweight browser-side detector.

       It does NOT claim perfect language recognition.

       It looks for common words and patterns and returns
       the most likely language.

       Later, TrustAI can connect this to a stronger
       language-detection/AI service.
       ===================================================== */

    function detectLanguage(text) {

        if (
            !text ||
            typeof text !== "string"
        ) {

            return {
                code: "unknown",
                name: "Unknown language",
                confidence: 0
            };

        }


        const value =
            text
                .toLowerCase()
                .replace(
                    /[^\p{L}\p{N}\s]/gu,
                    " "
                );


        const scores = {

            en: 0,
            fr: 0,
            de: 0,
            es: 0,
            it: 0,
            pt: 0,
            nl: 0

        };


        const WORDS = {

            en: [
                "the",
                "and",
                "you",
                "your",
                "this",
                "that",
                "please",
                "account",
                "money",
                "bank",
                "payment",
                "click",
                "verify",
                "password",
                "security"
            ],

            fr: [
                "le",
                "la",
                "les",
                "et",
                "vous",
                "votre",
                "avec",
                "pour",
                "dans",
                "bonjour",
                "compte",
                "argent",
                "banque",
                "paiement",
                "cliquez",
                "vérifier"
            ],

            de: [
                "der",
                "die",
                "das",
                "und",
                "sie",
                "ihr",
                "mit",
                "für",
                "nicht",
                "hallo",
                "konto",
                "geld",
                "bank",
                "zahlung",
                "passwort",
                "sicherheit"
            ],

            es: [
                "el",
                "la",
                "los",
                "las",
                "y",
                "usted",
                "tu",
                "su",
                "para",
                "con",
                "hola",
                "cuenta",
                "dinero",
                "banco",
                "pago",
                "contraseña"
            ],

            it: [
                "il",
                "lo",
                "la",
                "gli",
                "le",
                "e",
                "tu",
                "suo",
                "per",
                "con",
                "ciao",
                "conto",
                "soldi",
                "banca",
                "pagamento",
                "password"
            ],

            pt: [
                "o",
                "a",
                "os",
                "as",
                "e",
                "você",
                "voce",
                "seu",
                "sua",
                "para",
                "com",
                "olá",
                "ola",
                "conta",
                "dinheiro",
                "banco",
                "pagamento",
                "senha"
            ],

            nl: [
                "de",
                "het",
                "een",
                "en",
                "je",
                "jouw",
                "uw",
                "voor",
                "met",
                "niet",
                "hallo",
                "rekening",
                "geld",
                "bank",
                "betaling",
                "wachtwoord"
            ]

        };
               
const words =
            value.split(
                /\s+/
            );


        words.forEach(
            function (word) {

                if (!word) {
                    return;
                }


                Object.keys(
                    WORDS
                ).forEach(
                    function (language) {

                        if (
                            WORDS[
                                language
                            ].includes(
                                word
                            )
                        ) {

                            scores[
                                language
                            ]++;

                        }

                    }
                );

            }
        );


        /*
         * Extra language clues.
         */

        if (
            /[àâçéèêëîïôûùüÿœ]/i.test(
                text
            )
        ) {

            scores.fr += 2;

        }


        if (
            /[äöüß]/i.test(
                text
            )
        ) {

            scores.de += 3;

        }


        if (
            /[ñ¿¡]/i.test(
                text
            )
        ) {

            scores.es += 3;

        }


        if (
            /[ãõ]/i.test(
                text
            )
        ) {

            scores.pt += 2;

        }


        if (
            /[àèéìíîòóù]/i.test(
                text
            )
        ) {

            scores.it += 1;

        }


        let detected =
            "en";


        let highest =
            0;


        Object.keys(
            scores
        ).forEach(
            function (language) {

                if (
                    scores[
                        language
                    ] > highest
                ) {

                    highest =
                        scores[
                            language
                        ];

                    detected =
                        language;

                }

            }
        );


        if (
            highest === 0
        ) {

            return {
                code: "unknown",
                name: "Unknown language",
                confidence: 0
            };

        }


        const confidence =
            Math.min(
                100,
                Math.round(
                    (
                        highest /
                        Math.max(
                            1,
                            words.length
                        )
                    ) * 100
                )
            );


        return {

            code:
                detected,

            name:
                LANGUAGES[
                    detected
                ].native,

            confidence:
                confidence

        };

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
            document.createElement(
                "style"
            );


        style.id =
            "trustai-global-language-style";


        style.textContent = `

            /* =========================================
               GLOBAL CONTAINER
               ========================================= */

            #trustaiGlobalLanguage {

                position: fixed;

                right: 18px;

                bottom: 18px;

                z-index: 999999;

                font-family:
                    Inter,
                    system-ui,
                    -apple-system,
                    BlinkMacSystemFont,
                    "Segoe UI",
                    Arial,
                    sans-serif;

            }


            /* =========================================
               GLOBAL BUTTON
               ========================================= */

            .trustai-global-button {

                display: flex;

                align-items: center;

                justify-content: center;

                gap: 8px;

                min-height: 48px;

                padding:
                    0 16px;

                border:
                    1px solid
                    rgba(255,255,255,.14);

                border-radius:
                    16px;

                background:
                    rgba(15,23,42,.96);

                color:
                    #f8fafc;

                box-shadow:
                    0 12px 35px
                    rgba(0,0,0,.45);

                backdrop-filter:
                    blur(16px);

                -webkit-backdrop-filter:
                    blur(16px);

                cursor:
                    pointer;

                font-size:
                    14px;

                font-weight:
                    750;

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

                font-size:
                    21px;

            }


            .global-text {

                letter-spacing:
                    .2px;

            }


            /* =========================================
               LANGUAGE PANEL
               ========================================= */

            .trustai-language-panel {

                position:
                    absolute;

                right:
                    0;

                bottom:
                    60px;

                width:
                    300px;

                max-width:
                    calc(100vw - 24px);

                padding:
                    14px;

                border:
                    1px solid
                    rgba(255,255,255,.12);

                border-radius:
                    20px;

                background:
                    rgba(15,23,42,.98);

                color:
                    #f8fafc;

                box-shadow:
                    0 20px 60px
                    rgba(0,0,0,.55);

                backdrop-filter:
                    blur(20px);

                -webkit-backdrop-filter:
                    blur(20px);

                opacity:
                    0;

                visibility:
                    hidden;

                pointer-events:
                    none;

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

                opacity:
                    1;

                visibility:
                    visible;

                pointer-events:
                    auto;

                transform:
                    translateY(0)
                    scale(1);

            }
            
          /* =========================================
               PANEL HEADER
               ========================================= */

            .language-panel-header {

                padding:
                    6px 8px 13px;

                border-bottom:
                    1px solid
                    rgba(255,255,255,.08);

                margin-bottom:
                    8px;

            }


            .language-title {

                color:
                    #f8fafc;

                font-size:
                    17px;

                font-weight:
                    850;

            }


            .language-subtitle {

                margin-top:
                    3px;

                color:
                    #94a3b8;

                font-size:
                    12px;

            }


            /* =========================================
               LANGUAGE LIST
               ========================================= */

            .trustai-language-list {

                display:
                    flex;

                flex-direction:
                    column;

                gap:
                    5px;

                max-height:
                    420px;

                overflow-y:
                    auto;

            }


            /* =========================================
               LANGUAGE ITEM
               ========================================= */

            .trustai-language-item {

                width:
                    100%;

                display:
                    flex;

                align-items:
                    center;

                gap:
                    11px;

                padding:
                    10px;

                border:
                    1px solid
                    transparent;

                border-radius:
                    13px;

                background:
                    transparent;

                color:
                    #f8fafc;

                text-align:
                    left;

                cursor:
                    pointer;

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


            /* =========================================
               FLAG
               ========================================= */

            .country-flag {

                width:
                    40px;

                height:
                    40px;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                border-radius:
                    11px;

                background:
                    rgba(255,255,255,.06);

                font-size:
                    25px;

                flex-shrink:
                    0;

            }
            /* =========================================
               LANGUAGE INFORMATION
               ========================================= */

            .country-info {

                display:
                    flex;

                flex-direction:
                    column;

                min-width:
                    0;

                flex:
                    1;

            }


            .country-info strong {

                color:
                    #f8fafc;

                font-size:
                    14px;

                font-weight:
                    750;

            }


            .country-info small {

                margin-top:
                    1px;

                color:
                    #94a3b8;

                font-size:
                    11px;

            }


            /* =========================================
               CHECK
               ========================================= */

            .country-check {

                width:
                    22px;

                color:
                    #818cf8;

                font-size:
                    17px;

                font-weight:
                    900;

                text-align:
                    center;

            }


            /* =========================================
               MOBILE
               ========================================= */

            @media (max-width:500px) {

                #trustaiGlobalLanguage {

                    right:
                        12px;

                    bottom:
                        12px;

                }


                .trustai-global-button {

                    min-height:
                        46px;

                    padding:
                        0 13px;

                    border-radius:
                        15px;

                }


                .trustai-language-panel {

                    width:
                        min(
                            300px,
                            calc(100vw - 24px)
                        );

                    right:
                        0;

                    bottom:
                        58px;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    /* =====================================================
       START TRUSTAI LANGUAGE SYSTEM
       ===================================================== */

    function start() {

        /*
         * Create styles first.
         */

        addLanguageStyles();


        /*
         * Translate existing page.
         */

        translatePage();


        /*
         * Add Global button.
         */

        createGlobalLanguage();

    }


    /* =====================================================
       DOM READY
       ===================================================== */

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
       PUBLIC TRUSTAI LANGUAGE API
       ===================================================== */

    window.TrustAILanguage = {

        setLanguage:
            setLanguage,

        getLanguage:
            getLanguage,

        translate:
            translateText,

        translatePage:
            translatePage,

        detectLanguage:
            detectLanguage,

        languages:
            LANGUAGES,

        translations:
            TRANSLATIONS

    };


})();
    
