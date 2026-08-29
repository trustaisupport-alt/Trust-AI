/* ============================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   Version 2.0
   ------------------------------------------------------------
   Supports:
   English, French, German, Spanish, Italian,
   Portuguese and Dutch.

   File:
   global-language.js

   Add to every TrustAI page:
   <script src="global-language.js"></script>
   ============================================================ */

(function () {

    "use strict";


    /* ========================================================
       CONFIGURATION
       ======================================================== */

    const STORAGE_KEY = "trustai_language";

    const DEFAULT_LANGUAGE = "en";


    const LANGUAGES = {

        en: {
            name: "English",
            flag: "🇺🇸"
        },

        fr: {
            name: "France",
            flag: "🇫🇷"
        },

        de: {
            name: "Germany",
            flag: "🇩🇪"
        },

        es: {
            name: "Spain",
            flag: "🇪🇸"
        },

        it: {
            name: "Italy",
            flag: "🇮🇹"
        },

        pt: {
            name: "Portugal",
            flag: "🇵🇹"
        },

        nl: {
            name: "Netherlands",
            flag: "🇳🇱"
        }

    };


    /* ========================================================
       TRANSLATIONS
       ======================================================== */

    const translations = {

        en: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Online Scam Protection",

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

            "Profile":
                "Profile",

            "Log Out":
                "Log Out",

            "Stay one step ahead of":
                "Stay one step ahead of",

            "scams.":
                "scams.",

            "Check Something":
                "Check Something",

            "Security":
                "Security",

            "Upgrade your protection.":
                "Upgrade your protection.",

            "Upgrade Plan":
                "Upgrade Plan",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Advanced Protection",

            "More Security Tools":
                "More Security Tools",

            "Priority Protection":
                "Priority Protection",

            "Message Checker":
                "Message Checker",

            "Conversation Checker":
                "Conversation Checker",

            "Website Checker":
                "Website Checker",

            "Your real-time online scam and threat protection assistant.":
                "Your real-time online scam and threat protection assistant.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Check a suspicious message for scam, phishing, impersonation and payment warning signs.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analyze a conversation for suspicious patterns that may develop over time.",

            "Check a website address for common suspicious website warning signs.":
                "Check a website address for common suspicious website warning signs.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Review active permissions, device status, and security configurations to keep your phone protected.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats."

        },


        fr: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Protection contre les arnaques en ligne",

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
                "Forfaits",

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

            "Profile":
                "Profil",

            "Log Out":
                "Se déconnecter",

            "Stay one step ahead of":
                "Gardez une longueur d'avance sur les",

            "scams.":
                "arnaques.",

            "Check Something":
                "Vérifier quelque chose",

            "Security":
                "Sécurité",

            "Upgrade your protection.":
                "Améliorez votre protection.",

            "Upgrade Plan":
                "Améliorer le forfait",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Protection avancée",

            "More Security Tools":
                "Plus d'outils de sécurité",

            "Priority Protection":
                "Protection prioritaire",

            "Your real-time online scam and threat protection assistant.":
                "Votre assistant de protection en temps réel contre les arnaques et menaces en ligne.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Vérifiez les messages suspects pour détecter les signes d'arnaque, d'hameçonnage, d'usurpation d'identité et de fraude au paiement.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analysez une conversation pour détecter les comportements suspects qui peuvent apparaître avec le temps.",

            "Check a website address for common suspicious website warning signs.":
                "Vérifiez une adresse web pour détecter les signes courants d'un site suspect.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Découvrez les fonctions de protection TrustAI conçues pour mieux protéger vos comptes, appareils et activités en ligne.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Examinez les autorisations actives, l'état de l'appareil et les paramètres de sécurité pour protéger votre téléphone.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Débloquez des fonctions de protection TrustAI avancées et obtenez davantage d'outils pour mieux vous protéger contre les arnaques, activités suspectes et menaces numériques."

        },


        de: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Schutz vor Online-Betrug",

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
                "Tarife",

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

            "Profile":
                "Profil",

            "Log Out":
                "Abmelden",

            "Stay one step ahead of":
                "Betrügern immer einen Schritt voraus",

            "scams.":
                "Betrug.",

            "Check Something":
                "Etwas überprüfen",

            "Security":
                "Sicherheit",

            "Upgrade your protection.":
                "Verbessern Sie Ihren Schutz.",

            "Upgrade Plan":
                "Tarif upgraden",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Erweiterter Schutz",

            "More Security Tools":
                "Mehr Sicherheitstools",

            "Priority Protection":
                "Prioritätsschutz",

            "Your real-time online scam and threat protection assistant.":
                "Ihr Echtzeit-Assistent zum Schutz vor Online-Betrug und digitalen Bedrohungen.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Prüfen Sie verdächtige Nachrichten auf Betrug, Phishing, Identitätsmissbrauch und Zahlungswarnzeichen.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analysieren Sie Gespräche auf verdächtige Muster, die sich im Laufe der Zeit entwickeln können.",

            "Check a website address for common suspicious website warning signs.":
                "Prüfen Sie eine Website-Adresse auf typische Warnzeichen verdächtiger Websites.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Entdecken Sie TrustAI-Schutzfunktionen, die Ihre Konten, Geräte und Online-Aktivitäten sicherer machen.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Überprüfen Sie aktive Berechtigungen, Gerätestatus und Sicherheitseinstellungen, um Ihr Telefon zu schützen.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Schalten Sie erweiterte TrustAI-Schutzfunktionen frei und erhalten Sie mehr Werkzeuge gegen Online-Betrug, verdächtige Aktivitäten und digitale Bedrohungen."

        },


        es: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Protección contra estafas en línea",

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
                "Planes",

            "Security Center":
                "Centro de seguridad",

            "Scam Alerts":
                "Alertas de estafas",

            "Report a Scam":
                "Reportar una estafa",

            "Contact TrustAI":
                "Contactar con TrustAI",

            "Settings & Privacy":
                "Configuración y privacidad",

            "Profile":
                "Perfil",

            "Log Out":
                "Cerrar sesión",

            "Stay one step ahead of":
                "Mantente un paso por delante de las",

            "scams.":
                "estafas.",

            "Check Something":
                "Comprobar algo",

            "Security":
                "Seguridad",

            "Upgrade your protection.":
                "Mejora tu protección.",

            "Upgrade Plan":
                "Mejorar plan",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Protección avanzada",

            "More Security Tools":
                "Más herramientas de seguridad",

            "Priority Protection":
                "Protección prioritaria",

            "Your real-time online scam and threat protection assistant.":
                "Tu asistente de protección en tiempo real contra estafas y amenazas en línea.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Comprueba un mensaje sospechoso para detectar estafas, phishing, suplantación de identidad y señales de fraude en pagos.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analiza una conversación para detectar patrones sospechosos que pueden aparecer con el tiempo.",

            "Check a website address for common suspicious website warning signs.":
                "Comprueba una dirección web para detectar señales comunes de sitios sospechosos.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Explora las funciones de protección de TrustAI diseñadas para mantener tus cuentas, dispositivos y actividad en línea más seguros.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Revisa los permisos activos, el estado del dispositivo y las configuraciones de seguridad para proteger tu teléfono.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Desbloquea funciones avanzadas de protección de TrustAI y obtén más herramientas contra estafas, actividades sospechosas y amenazas digitales."

        },


        it: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Protezione dalle truffe online",

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
                "Piani",

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

            "Profile":
                "Profilo",

            "Log Out":
                "Esci",

            "Stay one step ahead of":
                "Resta un passo avanti alle",

            "scams.":
                "truffe.",

            "Check Something":
                "Controlla qualcosa",

            "Security":
                "Sicurezza",

            "Upgrade your protection.":
                "Migliora la tua protezione.",

            "Upgrade Plan":
                "Migliora piano",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Protezione avanzata",

            "More Security Tools":
                "Più strumenti di sicurezza",

            "Priority Protection":
                "Protezione prioritaria",

            "Your real-time online scam and threat protection assistant.":
                "Il tuo assistente di protezione in tempo reale contro truffe e minacce online.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Controlla un messaggio sospetto per individuare truffe, phishing, impersonazioni e segnali di frode nei pagamenti.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analizza una conversazione per individuare schemi sospetti che possono svilupparsi nel tempo.",

            "Check a website address for common suspicious website warning signs.":
                "Controlla un indirizzo web per individuare i comuni segnali di un sito sospetto.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Scopri le funzioni di protezione TrustAI progettate per mantenere più sicuri account, dispositivi e attività online.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Controlla le autorizzazioni attive, lo stato del dispositivo e le configurazioni di sicurezza per proteggere il telefono.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Sblocca le funzioni avanzate di protezione TrustAI e ottieni più strumenti contro truffe online, attività sospette e minacce digitali."

        },


        pt: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Proteção contra golpes online",

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
                "Planos",

            "Security Center":
                "Central de segurança",

            "Scam Alerts":
                "Alertas de golpes",

            "Report a Scam":
                "Denunciar golpe",

            "Contact TrustAI":
                "Contactar TrustAI",

            "Settings & Privacy":
                "Configurações e privacidade",

            "Profile":
                "Perfil",

            "Log Out":
                "Sair",

            "Stay one step ahead of":
                "Fique um passo à frente dos",

            "scams.":
                "golpes.",

            "Check Something":
   "Verificar algo",

            "Security":
                "Segurança",

            "Upgrade your protection.":
                "Melhore sua proteção.",

            "Upgrade Plan":
                "Melhorar plano",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Proteção avançada",

            "More Security Tools":
                "Mais ferramentas de segurança",

            "Priority Protection":
                "Proteção prioritária",

            "Your real-time online scam and threat protection assistant.":
                "Seu assistente de proteção em tempo real contra golpes e ameaças online.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Verifique uma mensagem suspeita em busca de golpes, phishing, falsificação de identidade e sinais de fraude de pagamento.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analise uma conversa em busca de padrões suspeitos que podem surgir com o tempo.",

            "Check a website address for common suspicious website warning signs.":
                "Verifique um endereço de site em busca de sinais comuns de sites suspeitos.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Explore os recursos de proteção TrustAI criados para manter suas contas, dispositivos e atividades online mais seguros.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Revise as permissões ativas, o status do dispositivo e as configurações de segurança para manter seu telefone protegido.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Desbloqueie recursos avançados de proteção TrustAI e tenha mais ferramentas contra golpes online, atividades suspeitas e ameaças digitais."

        },


        nl: {

            "TrustAI": "TrustAI",

            "Online Scam Protection":
                "Bescherming tegen online oplichting",

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
                "Abonnementen",

            "Security Center":
                "Beveiligingscentrum",

            "Scam Alerts":
                "Oplichtingswaarschuwingen",

            "Report a Scam":
                "Oplichting melden",

            "Contact TrustAI":
                "Contact met TrustAI",

            "Settings & Privacy":
                "Instellingen en privacy",

            "Profile":
                "Profiel",

            "Log Out":
                "Uitloggen",

            "Stay one step ahead of":
                "Blijf oplichters een stap voor",

            "scams.":
                "oplichting.",

            "Check Something":
                "Iets controleren",

            "Security":
                "Beveiliging",

            "Upgrade your protection.":
                "Verbeter je bescherming.",

            "Upgrade Plan":
                "Abonnement upgraden",

            "TRUSTAI PRO":
                "TRUSTAI PRO",

            "Advanced Protection":
                "Geavanceerde bescherming",

            "More Security Tools":
                "Meer beveiligingstools",

            "Priority Protection":
                "Prioriteitsbescherming",
           "Your real-time online scam and threat protection assistant.":
                "Je realtime assistent voor bescherming tegen online oplichting en digitale bedreigingen.",

            "Check a suspicious message for scam, phishing, impersonation and payment warning signs.":
                "Controleer een verdacht bericht op signalen van oplichting, phishing, identiteitsfraude en betalingsfraude.",

            "Analyze a conversation for suspicious patterns that may develop over time.":
                "Analyseer een gesprek op verdachte patronen die zich in de loop van de tijd kunnen ontwikkelen.",

            "Check a website address for common suspicious website warning signs.":
                "Controleer een websiteadres op veelvoorkomende signalen van een verdachte website.",

            "Explore TrustAI protection features designed to help keep your accounts, devices and online activity safer.":
                "Ontdek TrustAI-beveiligingsfuncties die zijn ontworpen om je accounts, apparaten en online activiteiten veiliger te houden.",

            "Review active permissions, device status, and security configurations to keep your phone protected.":
                "Controleer actieve machtigingen, de apparaatstatus en beveiligingsinstellingen om je telefoon te beschermen.",

            "Unlock enhanced TrustAI protection features and get more tools to help you stay safer against online scams, suspicious activity and digital threats.":
                "Ontgrendel geavanceerde TrustAI-beschermingsfuncties en krijg meer hulpmiddelen tegen online oplichting, verdachte activiteiten en digitale bedreigingen."

        }

    };


    /* ========================================================
       GET SAVED LANGUAGE
       ======================================================== */

    function getLanguage() {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (
            saved &&
            LANGUAGES[saved]
        ) {

            return saved;

        }


        return DEFAULT_LANGUAGE;

    }


    /* ========================================================
       TRANSLATE TEXT
       ======================================================== */

    function translateText(text, language) {

        if (
            !text ||
            !translations[language]
        ) {

            return text;

        }


        const dictionary =
            translations[language];


        const cleanText =
            text.trim();


        if (
            dictionary[cleanText]
        ) {

            return dictionary[cleanText];

        }


        return text;

    }


    /* ========================================================
       TRANSLATE PAGE
       ======================================================== */

    function translatePage(language) {

        if (
            !LANGUAGES[language]
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        document.documentElement.lang =
            language;


        /* ---------------------------------------------
           NORMAL TEXT
           --------------------------------------------- */

        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null
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
            function(textNode) {

                const parent =
                    textNode.parentElement;


                if (!parent) {
                    return;
                }


                const tag =
                    parent.tagName;


                if (
                    tag === "SCRIPT" ||
                    tag === "STYLE" ||
                    tag === "NOSCRIPT"
                ) {

                    return;

                }


                const original =
                    textNode.textContent.trim();


                if (!original) {
                    return;
                }


                const translated =
                    translateText(
                        original,
                        language
                    );


                if (
                    translated !== original
                ) {

                    textNode.textContent =
                        textNode.textContent.replace(
                            original,
                            translated
                        );

                }

            }
        );
/* ---------------------------------------------
           PLACEHOLDERS
           --------------------------------------------- */

        document
            .querySelectorAll(
                "[placeholder]"
            )
            .forEach(
                function(element) {

                    const original =
                        element.getAttribute(
                            "placeholder"
                        );


                    const translated =
                        translateText(
                            original,
                            language
                        );


                    if (
                        translated !== original
                    ) {

                        element.setAttribute(
                            "placeholder",
                            translated
                        );

                    }

                }
            );


        /* ---------------------------------------------
           TITLE
           --------------------------------------------- */

        if (document.title) {

            const originalTitle =
                document.title;


            const translatedTitle =
                translateText(
                    originalTitle,
                    language
                );


            if (
                translatedTitle !==
                originalTitle
            ) {

                document.title =
                    translatedTitle;

            }

        }


        /* ---------------------------------------------
           ARIA LABELS
           --------------------------------------------- */

        document
            .querySelectorAll(
                "[aria-label]"
            )
            .forEach(
                function(element) {

                    const original =
                        element.getAttribute(
                            "aria-label"
                        );


                    const translated =
                        translateText(
                            original,
                            language
                        );


                    if (
                        translated !== original
                    ) {

                        element.setAttribute(
                            "aria-label",
                            translated
                        );

                    }

                }
            );


        updateLanguageSelector(
            language
        );

    }


    /* ========================================================
       LANGUAGE SELECTOR
       ======================================================== */

    function createLanguageSelector() {

        if (
            document.getElementById(
                "trustaiLanguageSelector"
            )
        ) {

            return;

        }


        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.id =
            "trustaiLanguageSelector";


        wrapper.innerHTML = `

            <button
                id="trustaiLanguageButton"
                type="button"
                aria-label="Change language"
            >
                🌐
                <span id="trustaiLanguageCurrent">
                    English
                </span>
                <span>⌄</span>
            </button>

            <div
                id="trustaiLanguageMenu"
                aria-hidden="true"
            >

                ${Object.keys(LANGUAGES)
                    .map(function(code) {

                        return `

                            <button
                                type="button"
                                class="trustai-language-option"
                                data-language="${code}"
                            >

                                <span>
                                    ${LANGUAGES[code].flag}
                                </span>

                                <span>
                                    ${LANGUAGES[code].name}
                                </span>

                            </button>

                        `;

                    })
                    .join("")}

            </div>

        `;


        document.body.appendChild(
            wrapper
        );


        injectLanguageStyles();


        const button =
            document.getElementById(
                "trustaiLanguageButton"
            );


        const menu =
            document.getElementById(
                "trustaiLanguageMenu"
            );


        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                menu.classList.toggle(
                    "open"
                );

            }
        );
       document
            .querySelectorAll(
                ".trustai-language-option"
            )
            .forEach(
                function(option) {

                    option.addEventListener(
                        "click",
                        function() {

                            const language =
                                option.dataset.language;


                            setLanguage(
                                language
                            );


                            menu.classList.remove(
                                "open"
                            );

                        }
                    );

                }
            );


        document.addEventListener(
            "click",
            function() {

                menu.classList.remove(
                    "open"
                );

            }
        );

    }


    /* ========================================================
       LANGUAGE SELECTOR STYLES
       ======================================================== */

    function injectLanguageStyles() {

        if (
            document.getElementById(
                "trustaiLanguageStyles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "trustaiLanguageStyles";


        style.textContent = `

            #trustaiLanguageSelector {

                position: fixed;

                right: 16px;

                bottom: 16px;

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


            #trustaiLanguageButton {

                display: flex;

                align-items: center;

                gap: 7px;

                min-height: 44px;

                padding:
                    10px 13px;

                border:
                    1px solid
                    rgba(255,255,255,0.12);

                border-radius: 12px;

                background:
                    rgba(15,23,42,0.96);

                color:
                    #f8fafc;

                font-size: 13px;

                font-weight: 700;

                cursor: pointer;

                box-shadow:
                    0 12px 30px
                    rgba(0,0,0,0.35);

                backdrop-filter:
                    blur(14px);

                -webkit-backdrop-filter:
                    blur(14px);

            }


            #trustaiLanguageButton:hover {

                border-color:
                    rgba(99,102,241,0.6);

            }


            #trustaiLanguageMenu {

                position: absolute;

                right: 0;

                bottom: 52px;

                width: 185px;

                padding: 7px;

                border:
                    1px solid
                    rgba(255,255,255,0.10);

                border-radius: 14px;

                background:
                    rgba(15,23,42,0.98);

                box-shadow:
                    0 18px 40px
                    rgba(0,0,0,0.45);

                backdrop-filter:
                    blur(16px);

                -webkit-backdrop-filter:
                    blur(16px);

                opacity: 0;

                visibility: hidden;

                transform:
                    translateY(8px);

                transition:
                    opacity .2s ease,
                    transform .2s ease,
                    visibility .2s ease;

            }


            #trustaiLanguageMenu.open {

                opacity: 1;

                visibility: visible;

                transform:
                    translateY(0);

            }


            .trustai-language-option {

                width: 100%;

                display: flex;

                align-items: center;

                gap: 10px;

                padding:
                    10px 11px;

                border: 0;

                border-radius: 9px;

                background:
                    transparent;

                color:
                    #e2e8f0;

                text-align: left;

                font-size: 13px;

                cursor: pointer;

            }


            .trustai-language-option:hover {

                background:
                    rgba(99,102,241,0.15);

                color:
                    #ffffff;

            }


            @media (max-width: 600px) {

                #trustaiLanguageSelector {

                    right: 12px;

                    bottom: 12px;

                }


                #trustaiLanguageButton {

                    min-height: 42px;

                    padding:
                        9px 11px;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }
   /* ========================================================
       UPDATE SELECTOR
       ======================================================== */

    function updateLanguageSelector(
        language
    ) {

        const current =
            document.getElementById(
                "trustaiLanguageCurrent"
            );


        if (!current) {
            return;
        }


        if (
            LANGUAGES[language]
        ) {

            current.textContent =
                LANGUAGES[language].name;

        }

    }


    /* ========================================================
       SET LANGUAGE
       ======================================================== */

    function setLanguage(language) {

        if (
            !LANGUAGES[language]
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        localStorage.setItem(
            STORAGE_KEY,
            language
        );


        translatePage(
            language
        );


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

    }


    /* ========================================================
       PUBLIC API
       ======================================================== */

    window.TrustAILanguage = {

        getLanguage:
            getLanguage,

        setLanguage:
            setLanguage,

        translatePage:
            translatePage,

        translateText:
            translateText,

        languages:
            LANGUAGES

    };


    /* ========================================================
       START
       ======================================================== */

    function initialize() {

        createLanguageSelector();


        const language =
            getLanguage();


        translatePage(
            language
        );

    }


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
       
