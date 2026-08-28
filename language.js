/* ============================================================
   TRUSTAI LANGUAGE SYSTEM
   Version: 3.0
   Supports exactly 7 languages
   ============================================================ */

(function () {

    "use strict";


    /* ============================================================
       CONFIGURATION
       ============================================================ */

    const STORAGE_KEY = "trustai_language";
    const DEFAULT_LANGUAGE = "en";


    /* ============================================================
       SUPPORTED LANGUAGES — EXACTLY 7
       ============================================================ */

    const languageInfo = {

        en: {
            name: "English",
            nativeName: "English",
            flag: "🇺🇸",
            locale: "en-US"
        },

        fr: {
            name: "French",
            nativeName: "Français",
            flag: "🇫🇷",
            locale: "fr-FR"
        },

        es: {
            name: "Spanish",
            nativeName: "Español",
            flag: "🇪🇸",
            locale: "es-ES"
        },

        de: {
            name: "German",
            nativeName: "Deutsch",
            flag: "🇩🇪",
            locale: "de-DE"
        },

        sv: {
            name: "Swedish",
            nativeName: "Svenska",
            flag: "🇸🇪",
            locale: "sv-SE"
        },

        fi: {
            name: "Finnish",
            nativeName: "Suomi",
            flag: "🇫🇮",
            locale: "fi-FI"
        },

        pt: {
            name: "Portuguese",
            nativeName: "Português",
            flag: "🇵🇹",
            locale: "pt-PT"
        }

    };


    /* ============================================================
       TRANSLATIONS
       ============================================================ */

    const translations = {


        /* ========================================================
           ENGLISH
           ======================================================== */

        en: {

            languageTitle: "Language",
            languageDescription:
                "Choose the language you want TrustAI to use.",

            currentLanguage:
                "Current language",

            searchLanguages:
                "Search languages...",

            languageNoticeTitle:
                "🌍 TrustAI Languages",

            languageNotice:
                "Your language selection is saved on this device and used across supported TrustAI pages.",


            menuSubtitle:
                "Universal Security Protection",

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


            messageTitle:
                "🔍 Message & Type Analyzer",

            messageDescription:
                "Analyze messages worldwide and identify suspicious patterns.",

            analyzeSubtitle:
                "Paste any personal text, business email, notification, or suspicious message below.",

            messagePlaceholder:
                "Paste message here...",


            noMessageTitle:
                "⚠️ No message provided",

            noMessageText:
                "Paste a message into the checker before scanning.",


            criticalTitle:
                "🚨 CRITICAL THREAT DETECTED",

            highTitle:
                "🟠 HIGH RISK / SUSPICIOUS",

            cautionTitle:
                "🟡 CAUTION REQUIRED",

            lowTitle:
                "🟢 LOW RISK",


            riskScore: "Risk Score",

            detectedCategories:
                "Detected Categories",

            detectionFindings:
                "🔎 Detection Findings",

            detected:
                "detected:",

            legitimate:
                "Legitimate",

            threat:
                "Threat",

            noPattern:
                "No specific scam pattern was detected.",


            recommendation:
                "🛡️ TrustAI Recommendation:",

            criticalAdvice:
                "This message contains multiple strong scam indicators. Do not send money, passwords, OTPs, or personal information.",

            highAdvice:
                "Exercise extreme caution. Verify the sender independently before taking any action.",

            cautionAdvice:
                "Some suspicious indicators were detected. Check the sender and context carefully.",

            lowAdvice:
                "No major scam indicators were detected by the current rules. This does not guarantee the message is safe.",


            generalCommunication:
                "General Communication",

            loadingLanguage:
                "Loading language...",


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


            error:
                "Something went wrong.",

            success:
                "Success",

            warning:
                "Warning",

            information:
                "Information",


            welcome:
                "Welcome to TrustAI",

            protectYourself:
                "Protect yourself from scams, fraud and suspicious activity.",

            staySafe:
                "Stay Safe with TrustAI",


            /* CHECKOUT */

            secureCheckout:
                "Secure checkout",

            checkoutDescription:
                "Complete your TrustAI Protection subscription.",

            customerInformation:
                "Customer information",

            emailAddress:
                "Email address",

            paymentMethod:
                "Payment method",

            debitCreditCard:
                "Debit / Credit Card",

            internationalPayment:
                "International Payment",

            continuePayment:
                "Continue to Secure Payment",

            paymentProvider:
                "Payment will be processed by a supported payment provider.",

            internationalDescription:
                "Available payment options may depend on your country.",

            protectionPlan:
                "PROTECTION",

            monthlyBilling:
                "MONTHLY BILLING",

            yearlyBilling:
                "YEARLY BILLING • SAVE WITH AN ANNUAL PLAN",

            securityNote:
                "🔒 TrustAI does not store your card details.",

            paymentVerification:
                "Your TrustAI plan will only be activated after successful payment verification.",

            noPlanSelected:
                "No valid TrustAI subscription was selected. Please return to Plans and choose a plan.",

            returnToPlans:
                "Please return to the TrustAI Plans page.",

            checkoutPrepared:
                "Checkout prepared.",

            paymentNotConnected:
                "Secure payment provider is not connected yet. No payment has been taken and your plan has not been activated.",


            /* PLANS */

            upgradePlan:
                "Upgrade your plan.",

            chooseProtection:
                "Choose the protection level that fits your needs.",

            monthly:
                "Monthly",

            yearly:
                "Yearly",

            saveTwoMonths:
                "SAVE 2 MONTHS",

            whatYouGet:
                "What you get",

            selected:
                "SELECTED",

            upgradeTo:
                "Upgrade to",

            everythingInFree:
                "Everything in Free",

            advancedScamDetection:
                "Advanced scam detection",

            advancedPhishingAnalysis:
                "Advanced phishing analysis",

            telegramWarnings:
                "Telegram-specific link warnings",

            accountMonitoring:
                "Account security monitoring tools",

            gamingProtection:
                "Gaming protection tools",

            advancedScamAlerts:
                "Advanced scam alerts",

            activityDashboard:
                "Protection activity dashboard",

            priorityGuidance:
                "Priority security guidance",

            freeProtection:
                "Your Free TrustAI protection remains available. Upgrading only adds the additional features shown above."

        },


        /* ========================================================
           FRENCH
           ======================================================== */

        fr: {

            languageTitle: "Langue",
            languageDescription:
                "Choisissez la langue que TrustAI doit utiliser.",

            currentLanguage: "Langue actuelle",
            searchLanguages: "Rechercher une langue...",

            languageNoticeTitle:
                "🌍 Langues TrustAI",

            languageNotice:
                "Votre choix de langue est enregistré sur cet appareil et utilisé sur les pages TrustAI prises en charge.",


            menuSubtitle:
                "Protection de sécurité universelle",

            home: "Accueil",
            dashboard: "Tableau de bord",
            messageChecker: "Vérificateur de messages",
            conversationChecker: "Vérificateur de conversations",
            websiteChecker: "Vérificateur de sites web",
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


            messageTitle:
                "🔍 Analyseur de messages",

            messageDescription:
                "Analysez les messages du monde entier et identifiez les modèles suspects.",

            analyzeSubtitle:
                "Collez ci-dessous un texte personnel, un e-mail professionnel, une notification ou un message suspect.",

            messagePlaceholder:
                "Collez le message ici...",


            noMessageTitle:
                "⚠️ Aucun message fourni",

            noMessageText:
                "Collez un message avant de lancer l'analyse.",


            criticalTitle:
                "🚨 MENACE CRITIQUE DÉTECTÉE",

            highTitle:
                "🟠 RISQUE ÉLEVÉ / SUSPECT",

            cautionTitle:
                "🟡 PRUDENCE REQUISE",

            lowTitle:
                "🟢 FAIBLE RISQUE",


            riskScore:
                "Score de risque",

            detectedCategories:
                "Catégories détectées",

            detectionFindings:
                "🔎 Résultats de détection",

            detected:
                "détecté :",

            legitimate:
                "Légitime",

            threat:
                "Menace",

            noPattern:
                "Aucun modèle d'arnaque spécifique n'a été détecté.",


            recommendation:
                "🛡️ Recommandation TrustAI :",

            criticalAdvice:
                "Ce message contient plusieurs indicateurs forts d'arnaque. N'envoyez pas d'argent, de mots de passe, d'OTP ou d'informations personnelles.",

            highAdvice:
                "Soyez extrêmement prudent. Vérifiez l'expéditeur indépendamment avant toute action.",

            cautionAdvice:
                "Certains indicateurs suspects ont été détectés. Vérifiez attentivement l'expéditeur et le contexte.",

            lowAdvice:
                "Aucun indicateur majeur d'arnaque n'a été détecté par les règles actuelles. Cela ne garantit pas que le message est sûr.",


            generalCommunication:
                "Communication générale",

            loadingLanguage:
                "Chargement de la langue...",


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


            error:
                "Une erreur s'est produite.",

            success:
                "Succès",

            warning:
                "Avertissement",

            information:
                "Information",


            welcome:
                "Bienvenue sur TrustAI",

            protectYourself:
                "Protégez-vous contre les arnaques, la fraude et les activités suspectes.",

            staySafe:
                "Restez en sécurité avec TrustAI",


            secureCheckout:
                "Paiement sécurisé",

            checkoutDescription:
                "Finalisez votre abonnement TrustAI Protection.",

            customerInformation:
                "Informations client",

            emailAddress:
                "Adresse e-mail",

            paymentMethod:
                "Mode de paiement",

            debitCreditCard:
                "Carte de débit / crédit",

            internationalPayment:
                "Paiement international",

            continuePayment:
                "Continuer vers le paiement sécurisé",

            paymentProvider:
                "Le paiement sera traité par un fournisseur de paiement pris en charge.",

            internationalDescription:
                "Les options de paiement disponibles peuvent dépendre de votre pays.",

            protectionPlan:
                "PROTECTION",

            monthlyBilling:
                "FACTURATION MENSUELLE",

            yearlyBilling:
                "FACTURATION ANNUELLE • ÉCONOMISEZ AVEC LE PLAN ANNUEL",

            securityNote:
                "🔒 TrustAI ne stocke pas les données de votre carte.",

            paymentVerification:
                "Votre abonnement TrustAI sera activé uniquement après vérification réussie du paiement.",

            noPlanSelected:
                "Aucun abonnement TrustAI valide n'a été sélectionné. Retournez aux forfaits et choisissez un abonnement.",

            returnToPlans:
                "Veuillez retourner à la page des forfaits TrustAI.",

            checkoutPrepared:
                "Paiement préparé.",

            paymentNotConnected:
                "Le fournisseur de paiement sécurisé n'est pas encore connecté. Aucun paiement n'a été effectué et votre abonnement n'a pas été activé.",


            upgradePlan:
                "Améliorez votre forfait.",

            chooseProtection:
                "Choisissez le niveau de protection qui vous convient.",

            monthly:
                "Mensuel",

            yearly:
                "Annuel",

            saveTwoMonths:
                "ÉCONOMISEZ 2 MOIS",

            whatYouGet:
                "Ce que vous obtenez",

            selected:
                "SÉLECTIONNÉ",

            upgradeTo:
                "Passer à",

            everythingInFree:
                "Tout ce qui est inclus dans Free",

            advancedScamDetection:
                "Détection avancée des arnaques",

            advancedPhishingAnalysis:
                "Analyse avancée du phishing",

            telegramWarnings:
                "Avertissements spécifiques aux liens Telegram",

            accountMonitoring:
                "Outils de surveillance de la sécurité du compte",

            gamingProtection:
                "Outils de protection des comptes de jeu",

            advancedScamAlerts:
                "Alertes avancées contre les arnaques",

            activityDashboard:
                "Tableau de bord de protection",

            priorityGuidance:
                "Conseils de sécurité prioritaires",

            freeProtection:
                "Votre protection TrustAI gratuite reste disponible. L'abonnement ajoute uniquement les fonctionnalités supplémentaires affichées ci-dessus."

        },


        /* ========================================================
           SPANISH
           ======================================================== */

        es: {

            languageTitle: "Idioma",
            languageDescription:
                "Elige el idioma que quieres que utilice TrustAI.",

            currentLanguage: "Idioma actual",
            searchLanguages: "Buscar idiomas...",

            languageNoticeTitle:
                "🌍 Idiomas de TrustAI",

            languageNotice:
                "Tu selección de idioma se guarda en este dispositivo y se utiliza en las páginas compatibles de TrustAI.",


            menuSubtitle:
                "Protección de seguridad universal",

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


            messageTitle:
                "🔍 Analizador de mensajes",

            messageDescription:
                "Analiza mensajes de todo el mundo e identifica patrones sospechosos.",

            analyzeSubtitle:
                "Pega cualquier texto personal, correo empresarial, notificación o mensaje sospechoso.",

            messagePlaceholder:
                "Pega el mensaje aquí...",


            noMessageTitle:
                "⚠️ No se proporcionó ningún mensaje",

            noMessageText:
                "Pega un mensaje antes de analizarlo.",


            criticalTitle:
                "🚨 AMENAZA CRÍTICA DETECTADA",

            highTitle:
                "🟠 ALTO RIESGO / SOSPECHOSO",

            cautionTitle:
                "🟡 SE REQUIERE PRECAUCIÓN",

            lowTitle:
                "🟢 BAJO RIESGO",


            riskScore:
                "Puntuación de riesgo",

            detectedCategories:
                "Categorías detectadas",

            detectionFindings:
                "🔎 Resultados de detección",

            detected:
                "detectado:",

            legitimate:
                "Legítimo",

            threat:
                "Amenaza",

            noPattern:
                "No se detectó ningún patrón específico de estafa.",


            recommendation:
                "🛡️ Recomendación de TrustAI:",

            criticalAdvice:
                "Este mensaje contiene varios indicadores fuertes de estafa. No envíes dinero, contraseñas, OTP ni información personal.",

            highAdvice:
                "Ten mucho cuidado. Verifica al remitente de forma independiente antes de actuar.",

            cautionAdvice:
                "Se detectaron algunos indicadores sospechosos. Comprueba cuidadosamente el remitente y el contexto.",

            lowAdvice:
                "Las reglas actuales no detectaron indicadores importantes de estafa. Esto no garantiza que el mensaje sea seguro.",


            generalCommunication:
                "Comunicación general",

            loadingLanguage:
                "Cargando idioma...",


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


            error:
                "Algo salió mal.",

            success:
                "Éxito",

            warning:
                "Advertencia",

            information:
                "Información",


            welcome:
                "Bienvenido a TrustAI",

            protectYourself:
                "Protégete de estafas, fraudes y actividades sospechosas.",

            staySafe:
                "Mantente seguro con TrustAI",


            secureCheckout:
                "Pago seguro",

            checkoutDescription:
                "Completa tu suscripción a TrustAI Protection.",

            customerInformation:
                "Información del cliente",

            emailAddress:
                "Dirección de correo electrónico",

            paymentMethod:
                "Método de pago",

            debitCreditCard:
                "Tarjeta de débito / crédito",

            internationalPayment:
                "Pago internacional",

            continuePayment:
                "Continuar al pago seguro",

            paymentProvider:
                "El pago será procesado por un proveedor de pagos compatible.",

            internationalDescription:
                "Las opciones de pago disponibles pueden depender de tu país.",

            protectionPlan:
                "PROTECCIÓN",

            monthlyBilling:
                "FACTURACIÓN MENSUAL",

            yearlyBilling:
                "FACTURACIÓN ANUAL • AHORRA CON EL PLAN ANUAL",

            securityNote:
                "🔒 TrustAI no almacena los datos de tu tarjeta.",

            paymentVerification:
                "Tu plan TrustAI solo se activará después de verificar correctamente el pago.",

            noPlanSelected:
                "No se seleccionó una suscripción válida de TrustAI. Regresa a Planes y elige un plan.",

            returnToPlans:
                "Regresa a la página de Planes de TrustAI.",

            checkoutPrepared:
                "Pago preparado.",

            paymentNotConnected:
                "El proveedor de pagos seguros aún no está conectado. No se ha realizado ningún pago y tu plan no ha sido activado.",


            upgradePlan:
                "Mejora tu plan.",

            chooseProtection:
                "Elige el nivel de protección que mejor se adapte a tus necesidades.",

            monthly:
                "Mensual",

            yearly:
                "Anual",

            saveTwoMonths:
                "AHORRA 2 MESES",

            whatYouGet:
                "Lo que obtienes",

            selected:
                "SELECCIONADO",

            upgradeTo:
                "Actualizar a",

            everythingInFree:
                "Todo lo incluido en Free",

            advancedScamDetection:
                "Detección avanzada de estafas",

            advancedPhishingAnalysis:
                "Análisis avanzado de phishing",

            telegramWarnings:
                "Advertencias específicas para enlaces de Telegram",

            accountMonitoring:
                "Herramientas de supervisión de seguridad de la cuenta",

            gamingProtection:
                "Herramientas de protección para juegos",

            advancedScamAlerts:
                "Alertas avanzadas de estafas",

            activityDashboard:
                "Panel de actividad de protección",

            priorityGuidance:
                "Orientación de seguridad prioritaria",

            freeProtection:
                "Tu protección gratuita de TrustAI sigue disponible. La actualización solo añade las funciones adicionales mostradas arriba."

        },


        /* ========================================================
           GERMAN
           ======================================================== */

        de: {

            languageTitle: "Sprache",
            languageDescription:
                "Wählen Sie die Sprache aus, die TrustAI verwenden soll.",

            currentLanguage: "Aktuelle Sprache",
            searchLanguages: "Sprachen suchen...",

            languageNoticeTitle:
                "🌍 TrustAI-Sprachen",

            languageNotice:
                "Ihre Sprachauswahl wird auf diesem Gerät gespeichert und auf unterstützten TrustAI-Seiten verwendet.",


            menuSubtitle:
                "Universeller Sicherheitsschutz",

            home: "Startseite",
            dashboard: "Dashboard",
            messageChecker: "Nachrichtenprüfung",
            conversationChecker: "Konversationsprüfung",
            websiteChecker: "Website-Prüfung",
            deviceSecurity: "Gerätesicherheit",
            securityCenter: "Sicherheitscenter",
            threatMonitor: "Bedrohungsmonitor",
            scamAlerts: "Betrugswarnungen",
            reportScam: "Betrug melden",
            contactTrustAI: "TrustAI kontaktieren",
            settings: "Einstellungen",
            logout: "Abmelden",
            login: "Anmelden",
            signup: "Registrieren",


            analyzeText: "Text analysieren",
            analyzeMessage: "🔍 Nachricht analysieren",
            analyzeButton: "🔍 Nachricht analysieren",

            clear: "Löschen",
            clearButton: "Löschen",

            randomSample: "🎲 Zufälliges Beispiel",
            randomButton: "🎲 Zufälliges Beispiel",


            messageTitle:
                "🔍 Nachrichten- & Typenanalyse",

            messageDescription:
                "Analysieren Sie Nachrichten weltweit und erkennen Sie verdächtige Muster.",

            analyzeSubtitle:
                "Fügen Sie unten persönlichen Text, eine geschäftliche E-Mail, Benachrichtigung oder verdächtige Nachricht ein.",

            messagePlaceholder:
                "Nachricht hier einfügen...",


            noMessageTitle:
                "⚠️ Keine Nachricht vorhanden",

            noMessageText:
                "Fügen Sie vor der Analyse eine Nachricht ein.",


            criticalTitle:
                "🚨 KRITISCHE BEDROHUNG ERKANNT",

            highTitle:
                "🟠 HOHES RISIKO / VERDÄCHTIG",

            cautionTitle:
                "🟡 VORSICHT ERFORDERLICH",

            lowTitle:
                "🟢 GERINGES RISIKO",


            riskScore:
                "Risiko-Score",

            detectedCategories:
                "Erkannte Kategorien",

            detectionFindings:
                "🔎 Erkennungsergebnisse",

            detected:
                "erkannt:",

            legitimate:
                "Legitim",

            threat:
                "Bedrohung",

            noPattern:
                "Kein spezifisches Betrugsmuster wurde erkannt.",


            recommendation:
                "🛡️ TrustAI-Empfehlung:",

            criticalAdvice:
                "Diese Nachricht enthält mehrere starke Betrugsindikatoren. Senden Sie kein Geld, keine Passwörter, OTPs oder persönlichen Daten.",

            highAdvice:
                "Seien Sie äußerst vorsichtig. Überprüfen Sie den Absender unabhängig, bevor Sie handeln.",

            cautionAdvice:
                "Einige verdächtige Indikatoren wurden erkannt. Prüfen Sie Absender und Kontext sorgfältig.",

            lowAdvice:
                "Die aktuellen Regeln haben keine wichtigen Betrugsindikatoren erkannt. Dies garantiert nicht, dass die Nachricht sicher ist.",


            generalCommunication:
                "Allgemeine Kommunikation",

            loadingLanguage:
                "Sprache wird geladen...",


            save: "Speichern",
            cancel: "Abbrechen",
            close: "Schließen",
            back: "Zurück",
            next: "Weiter",
            continue: "Fortfahren",
            search: "Suchen",
            submit: "Senden",
            refresh: "Aktualisieren",
            delete: "Löschen",
            edit: "Bearbeiten",
            confirm: "Bestätigen",
            yes: "Ja",
            no: "Nein",


            security: "Sicherheit",
            protection: "Schutz",
            privacy: "Datenschutz",
            account: "Konto",
            notifications: "Benachrichtigungen",
            language: "Sprache",


            safe: "Sicher",
            suspicious: "Verdächtig",
            dangerous: "Gefährlich",
            blocked: "Blockiert",
            verified: "Verifiziert",
            unknown: "Unbekannt",


            error:
                "Etwas ist schiefgelaufen.",

            success:
                "Erfolg",

            warning:
                "Warnung",

            information:
                "Information",


            welcome:
                "Willkommen bei TrustAI",

            protectYourself:
                "Schützen Sie sich vor Betrug, Phishing und verdächtigen Aktivitäten.",

            staySafe:
                "Bleiben Sie mit TrustAI sicher",


            secureCheckout:
                "Sicherer Checkout",

            checkoutDescription:
                "Schließen Sie Ihr TrustAI-Schutzabonnement ab.",

            customerInformation:
                "Kundeninformationen",

            emailAddress:
                "E-Mail-Adresse",

            paymentMethod:
                "Zahlungsmethode",

            debitCreditCard:
                "Debit-/Kreditkarte",

            internationalPayment:
                "Internationale Zahlung",

            continuePayment:
                "Mit sicherer Zahlung fortfahren",

            paymentProvider:
                "Die Zahlung wird von einem unterstützten Zahlungsanbieter verarbeitet.",

            internationalDescription:
                "Die verfügbaren Zahlungsoptionen können von Ihrem Land abhängen.",

            protectionPlan:
                "SCHUTZ",

            monthlyBilling:
                "MONATLICHE ABRECHNUNG",

            yearlyBilling:
                "JÄHRLICHE ABRECHNUNG • MIT DEM JAHRESPLAN SPAREN",

            securityNote:
                "🔒 TrustAI speichert Ihre Kartendaten nicht.",

            paymentVerification:
                "Ihr TrustAI-Plan wird erst nach erfolgreicher Zahlungsprüfung aktiviert.",

            noPlanSelected:
                "Es wurde kein gültiges TrustAI-Abonnement ausgewählt. Kehren Sie zu den Plänen zurück und wählen Sie einen Plan.",

            returnToPlans:
                "Bitte kehren Sie zur TrustAI-Pläne-Seite zurück.",

            checkoutPrepared:
                "Checkout vorbereitet.",

            paymentNotConnected:
                "Der sichere Zahlungsanbieter ist noch nicht verbunden. Es wurde keine Zahlung vorgenommen und Ihr Plan wurde nicht aktiviert.",


            upgradePlan:
                "Ihren Plan upgraden.",

            chooseProtection:
                "Wählen Sie die Schutzstufe, die zu Ihren Bedürfnissen passt.",

            monthly:
                "Monatlich",

            yearly:
                "Jährlich",

            saveTwoMonths:
                "2 MONATE SPAREN",

            whatYouGet:
                "Ihre Vorteile",

            selected:
                "AUSGEWÄHLT",

            upgradeTo:
                "Upgraden auf",

            everythingInFree:
                "Alles aus Free",

            advancedScamDetection:
                "Erweiterte Betrugserkennung",

            advancedPhishingAnalysis:
                "Erweiterte Phishing-Analyse",

            telegramWarnings:
                "Spezielle Warnungen für Telegram-Links",

            accountMonitoring:
                "Tools zur Überwachung der Kontosicherheit",

            gamingProtection:
                "Tools zum Schutz von Gaming-Konten",

            advancedScamAlerts:
                "Erweiterte Betrugswarnungen",

            activityDashboard:
                "Schutz-Aktivitätsdashboard",

            priorityGuidance:
                "Priorisierte Sicherheitshinweise",

            freeProtection:
                "Ihr kostenloser TrustAI-Schutz bleibt verfügbar. Das Upgrade fügt nur die oben genannten zusätzlichen Funktionen hinzu."

        },


        /* ========================================================
           SWEDISH
           ======================================================== */

        sv: {

            languageTitle: "Språk",
            languageDescription:
                "Välj det språk du vill att TrustAI ska använda.",

            currentLanguage: "Aktuellt språk",
            searchLanguages: "Sök språk...",

            languageNoticeTitle:
                "🌍 TrustAI-språk",

            languageNotice:
                "Ditt språkval sparas på den här enheten och används på TrustAI-sidor som stöds.",


            menuSubtitle:
                "Universellt säkerhetsskydd",

            home: "Hem",
            dashboard: "Instrumentpanel",
            messageChecker: "Meddelandekontroll",
            conversationChecker: "Konversationskontroll",
            websiteChecker: "Webbplatskontroll",
            deviceSecurity: "Enhetssäkerhet",
            securityCenter: "Säkerhetscenter",
            threatMonitor: "Hotövervakning",
            scamAlerts: "Bedrägerivarningar",
            reportScam: "Rapportera bedrägeri",
            contactTrustAI: "Kontakta TrustAI",
            settings: "Inställningar",
            logout: "Logga ut",
            login: "Logga in",
            signup: "Skapa konto",


            analyzeText: "Analysera text",
            analyzeMessage: "🔍 Analysera meddelande",
            analyzeButton: "🔍 Analysera meddelande",

            clear: "Rensa",
            clearButton: "Rensa",

            randomSample: "🎲 Slumpmässigt exempel",
            randomButton: "🎲 Slumpmässigt exempel",


            messageTitle:
                "🔍 Meddelande- och typanalys",

            messageDescription:
                "Analysera meddelanden över hela världen och identifiera misstänkta mönster.",

            analyzeSubtitle:
                "Klistra in personlig text, företagsmejl, avisering eller misstänkt meddelande nedan.",

            messagePlaceholder:
                "Klistra in meddelandet här...",


            noMessageTitle:
                "⚠️ Inget meddelande angivet",

            noMessageText:
                "Klistra in ett meddelande innan du analyserar det.",


            criticalTitle:
                "🚨 KRITISKT HOT UPPTÄCKT",

            highTitle:
                "🟠 HÖG RISK / MISSTÄNKT",

            cautionTitle:
                "🟡 FÖRSIKTIGHET KRÄVS",

            lowTitle:
                "🟢 LÅG RISK",


            riskScore:
                "Riskpoäng",

            detectedCategories:
                "Upptäckta kategorier",

            detectionFindings:
                "🔎 Detekteringsresultat",

            detected:
                "upptäckt:",

            legitimate:
                "Legitim",

            threat:
                "Hot",

            noPattern:
                "Inget specifikt bedrägerimönster upptäcktes.",


            recommendation:
                "🛡️ TrustAI-rekommendation:",

            criticalAdvice:
                "Det här meddelandet innehåller flera starka tecken på bedrägeri. Skicka inte pengar, lösenord, OTP-koder eller personlig information.",

            highAdvice:
                "Var extremt försiktig. Kontrollera avsändaren oberoende innan du agerar.",

            cautionAdvice:
                "Vissa misstänkta indikatorer upptäcktes. Kontrollera avsändaren och sammanhanget noggrant.",

            lowAdvice:
                "De aktuella reglerna upptäckte inga större bedrägeritecken. Det garanterar inte att meddelandet är säkert.",


            generalCommunication:
                "Allmän kommunikation",

            loadingLanguage:
                "Laddar språk...",


            save: "Spara",
            cancel: "Avbryt",
            close: "Stäng",
            back: "Tillbaka",
            next: "Nästa",
            continue: "Fortsätt",
            search: "Sök",
            submit: "Skicka",
            refresh: "Uppdatera",
            delete: "Ta bort",
            edit: "Redigera",
            confirm: "Bekräfta",
            yes: "Ja",
            no: "Nej",


            security: "Säkerhet",
            protection: "Skydd",
            privacy: "Integritet",
            account: "Konto",
            notifications: "Aviseringar",
            language: "Språk",


            safe: "Säker",
            suspicious: "Misstänkt",
            dangerous: "Farlig",
            blocked: "Blockerad",
            verified: "Verifierad",
            unknown: "Okänd",


            error:
                "Något gick fel.",

            success:
                "Klart",

      warning:
                "Varning",

            information:
                "Information",


            welcome:
                "Välkommen till TrustAI",

            protectYourself:
                "Skydda dig mot bedrägerier, phishing och misstänkt aktivitet.",

            staySafe:
                "Håll dig säker med TrustAI",


            secureCheckout:
                "Säker betalning",

            checkoutDescription:
                "Slutför din TrustAI Protection-prenumeration.",

            customerInformation:
                "Kundinformation",

            emailAddress:
                "E-postadress",

            paymentMethod:
                "Betalningsmetod",

            debitCreditCard:
                "Betal-/kreditkort",

            internationalPayment:
                "Internationell betalning",

            continuePayment:
                "Fortsätt till säker betalning",

            paymentProvider:
                "Betalningen behandlas av en stödd betalningsleverantör.",

            internationalDescription:
                "Tillgängliga betalningsalternativ kan bero på ditt land.",

            protectionPlan:
                "SKYDD",

            monthlyBilling:
                "MÅNADSBETALNING",

            yearlyBilling:
                "ÅRSBETALNING • SPARA MED ÅRSPLANEN",

            securityNote:
                "🔒 TrustAI lagrar inte dina kortuppgifter.",

            paymentVerification:
                "Din TrustAI-plan aktiveras först efter att betalningen har verifierats.",

            noPlanSelected:
                "Ingen giltig TrustAI-prenumeration valdes. Gå tillbaka till Planer och välj en plan.",

            returnToPlans:
                "Gå tillbaka till TrustAI Plans.",

            checkoutPrepared:
                "Betalningen är förberedd.",

            paymentNotConnected:
                "Den säkra betalningsleverantören är ännu inte ansluten. Ingen betalning har genomförts och din plan har inte aktiverats.",


            upgradePlan:
                "Uppgradera din plan.",

            chooseProtection:
                "Välj den skyddsnivå som passar dina behov.",

            monthly:
                "Månadsvis",

            yearly:
                "Årsvis",

            saveTwoMonths:
                "SPARA 2 MÅNADER",

            whatYouGet:
                "Det här får du",

            selected:
                "VALD",

            upgradeTo:
                "Uppgradera till",

            everythingInFree:
                "Allt i Free",

            advancedScamDetection:
                "Avancerad bedrägeridetektering",

            advancedPhishingAnalysis:
                "Avancerad phishing-analys",

            telegramWarnings:
                "Varningar för Telegram-länkar",

            accountMonitoring:
                "Verktyg för kontosäkerhetsövervakning",

            gamingProtection:
                "Verktyg för spelskydd",

            advancedScamAlerts:
                "Avancerade bedrägerivarningar",

            activityDashboard:
                "Instrumentpanel för skyddsaktivitet",

            priorityGuidance:
                "Prioriterad säkerhetsvägledning",

            freeProtection:
                "Ditt kostnadsfria TrustAI-skydd finns fortfarande kvar. Uppgraderingen lägger endast till funktionerna som visas ovan."

        },


        /* ========================================================
           FINNISH
           ======================================================== */

        fi: {

            languageTitle: "Kieli",
            languageDescription:
                "Valitse kieli, jota haluat TrustAI:n käyttävän.",

            currentLanguage: "Nykyinen kieli",
            searchLanguages: "Hae kieliä...",

            languageNoticeTitle:
                "🌍 TrustAI-kielet",

            languageNotice:
                "Kielivalintasi tallennetaan tälle laitteelle ja sitä käytetään tuetuilla TrustAI-sivuilla.",


            menuSubtitle:
                "Yleinen tietoturvasuoja",

            home: "Etusivu",
            dashboard: "Kojelauta",
            messageChecker: "Viestintarkistus",
            conversationChecker: "Keskustelun tarkistus",
            websiteChecker: "Verkkosivuston tarkistus",
            deviceSecurity: "Laiteturvallisuus",
            securityCenter: "Turvallisuuskeskus",
            threatMonitor: "Uhkamonitori",
            scamAlerts: "Huijausvaroitukset",
            reportScam: "Ilmoita huijauksesta",
            contactTrustAI: "Ota yhteyttä TrustAI:hin",
            settings: "Asetukset",
            logout: "Kirjaudu ulos",
            login: "Kirjaudu sisään",
            signup: "Luo tili",


            analyzeText: "Analysoi teksti",
            analyzeMessage: "🔍 Analysoi viesti",
            analyzeButton: "🔍 Analysoi viesti",

            clear: "Tyhjennä",
            clearButton: "Tyhjennä",

            randomSample: "🎲 Satunnainen esimerkki",
            randomButton: "🎲 Satunnainen esimerkki",


            messageTitle:
                "🔍 Viesti- ja tyyppianalyysi",

            messageDescription:
                "Analysoi viestejä maailmanlaajuisesti ja tunnista epäilyttäviä malleja.",

            analyzeSubtitle:
                "Liitä alle henkilökohtainen teksti, yrityssähköposti, ilmoitus tai epäilyttävä viesti.",

            messagePlaceholder:
                "Liitä viesti tähän...",


            noMessageTitle:
                "⚠️ Viestiä ei annettu",

            noMessageText:
                "Liitä viesti tarkistimeen ennen analysointia.",


            criticalTitle:
                "🚨 KRIITTINEN UHKA HAVAITTU",

            highTitle:
                "🟠 KORKEA RISKI / EPÄILYTTÄVÄ",

            cautionTitle:
                "🟡 VAROVAISUUTTA TARVITAAN",

            lowTitle:
                "🟢 MATALA RISKI",


            riskScore:
                "Riskipisteet",

            detectedCategories:
                "Havaitut kategoriat",

            detectionFindings:
                "🔎 Tunnistustulokset",

            detected:
                "havaittu:",

            legitimate:
                "Aito",

            threat:
                "Uhka",

            noPattern:
                "Erityistä huijausmallia ei havaittu.",


            recommendation:
                "🛡️ TrustAI:n suositus:",

            criticalAdvice:
                "Tämä viesti sisältää useita vahvoja huijauksen merkkejä. Älä lähetä rahaa, salasanoja, OTP-koodeja tai henkilötietoja.",

            highAdvice:
                "Ole erittäin varovainen. Vahvista lähettäjä itsenäisesti ennen toimimista.",

            cautionAdvice:
                "Joitakin epäilyttäviä merkkejä havaittiin. Tarkista lähettäjä ja asiayhteys huolellisesti.",

            lowAdvice:
                "Nykyiset säännöt eivät havainneet merkittäviä huijauksen merkkejä. Tämä ei takaa viestin turvallisuutta.",


            generalCommunication:
                "Yleinen viestintä",

            loadingLanguage:
                "Ladataan kieltä...",


            save: "Tallenna",
            cancel: "Peruuta",
            close: "Sulje",
            back: "Takaisin",
            next: "Seuraava",
            continue: "Jatka",
            search: "Hae",
            submit: "Lähetä",
            refresh: "Päivitä",
            delete: "Poista",
            edit: "Muokkaa",
            confirm: "Vahvista",
            yes: "Kyllä",
            no: "Ei",


            security: "Turvallisuus",
            protection: "Suojaus",
            privacy: "Yksityisyys",
            account: "Tili",
            notifications: "Ilmoitukset",
            language: "Kieli",


            safe: "Turvallinen",
            suspicious: "Epäilyttävä",
            dangerous: "Vaarallinen",
            blocked: "Estetty",
            verified: "Vahvistettu",
            unknown: "Tuntematon",


            error:
                "Jokin meni pieleen.",

            success:
                "Onnistui",

            warning:
                "Varoitus",

            information:
                "Tietoa",


            welcome:
                "Tervetuloa TrustAI:hin",

            protectYourself:
                "Suojaa itsesi huijauksilta, petoksilta ja epäilyttävältä toiminnalta.",

            staySafe:
                "Pysy turvassa TrustAI:n avulla",


            secureCheckout:
                "Turvallinen maksaminen",

            checkoutDescription:
                "Viimeistele TrustAI Protection -tilauksesi.",

            customerInformation:
                "Asiakastiedot",

            emailAddress:
                "Sähköpostiosoite",

            paymentMethod:
                "Maksutapa",

            debitCreditCard:
                "Debit-/luottokortti",

            internationalPayment:
                "Kansainvälinen maksu",

            continuePayment:
                "Jatka turvalliseen maksuun",

            paymentProvider:
                "Maksu käsitellään tuetun maksupalveluntarjoajan kautta.",

            internationalDescription:
                "Saatavilla olevat maksuvaihtoehdot voivat riippua maastasi.",

            protectionPlan:
                "SUOJAUS",

            monthlyBilling:
                "KUUKAUSILASKUTUS",

            yearlyBilling:
                "VUOSILASKUTUS • SÄÄSTÄ VUOSISUUNNITELMALLA",

            securityNote:
                "🔒 TrustAI ei tallenna korttitietojasi.",

            paymentVerification:
                "TrustAI-tilauksesi aktivoidaan vasta onnistuneen maksun vahvistamisen jälkeen.",

            noPlanSelected:
                "Kelvollista TrustAI-tilausta ei valittu. Palaa suunnitelmiin ja valitse suunnitelma.",

            returnToPlans:
                "Palaa TrustAI:n suunnitelmasivulle.",

            checkoutPrepared:
                "Maksu on valmisteltu.",

            paymentNotConnected:
                "Turvallista maksupalveluntarjoajaa ei ole vielä yhdistetty. Maksua ei ole suoritettu eikä suunnitelmaasi ole aktivoitu.",


            upgradePlan:
                "Päivitä suunnitelmasi.",

            chooseProtection:
                "Valitse tarpeisiisi sopiva suojaustaso.",

            monthly:
                "Kuukausittain",

            yearly:
                "Vuosittain",

            saveTwoMonths:
                "SÄÄSTÄ 2 KUUKAUTTA",

            whatYouGet:
                "Mitä saat",

            selected:
                "VALITTU",

            upgradeTo:
                "Päivitä",

            everythingInFree:
                "Kaikki Free-version ominaisuudet",

            advancedScamDetection:
                "Edistynyt huijausten tunnistus",

            advancedPhishingAnalysis:
                "Edistynyt tietojenkalasteluanalyysi",

            telegramWarnings:
                "Telegram-linkkien varoitukset",

            accountMonitoring:
                "Tilin turvallisuuden valvontatyökalut",

            gamingProtection:
                "Peliturvallisuuden työkalut",

            advancedScamAlerts:
                "Edistyneet huijausvaroitukset",

            activityDashboard:
                "Suojaustoiminnan kojelauta",

            priorityGuidance:
                "Ensisijainen turvallisuusohjaus",

            freeProtection:
                "Ilmainen TrustAI-suojasi on edelleen käytettävissä. Päivitys lisää vain yllä näkyvät ominaisuudet."

        },


        /* ========================================================
           PORTUGUESE
           ======================================================== */

        pt: {

            languageTitle: "Idioma",
            languageDescription:
                "Escolha o idioma que deseja que o TrustAI use.",

            currentLanguage: "Idioma atual",
            searchLanguages: "Pesquisar idiomas...",

            languageNoticeTitle:
                "🌍 Idiomas do TrustAI",

            languageNotice:
                "Sua seleção de idioma é salva neste dispositivo e usada nas páginas compatíveis do TrustAI.",


            menuSubtitle:
                "Proteção de segurança universal",

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
            contactTrustAI: "Contactar o TrustAI",
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


            messageTitle:
                "🔍 Analisador de mensagens",

            messageDescription:
                "Analise mensagens de todo o mundo e identifique padrões suspeitos.",

            analyzeSubtitle:
                "Cole abaixo qualquer texto pessoal, e-mail comercial, notificação ou mensagem suspeita.",

            messagePlaceholder:
                "Cole a mensagem aqui...",


            noMessageTitle:
                "⚠️ Nenhuma mensagem fornecida",

            noMessageText:
                "Cole uma mensagem antes de analisar.",


            criticalTitle:
                "🚨 AMEAÇA CRÍTICA DETECTADA",

            highTitle:
                "🟠 ALTO RISCO / SUSPEITO",

            cautionTitle:
                "🟡 É NECESSÁRIO CUIDADO",

            lowTitle:
                "🟢 BAIXO RISCO",


            riskScore:
                "Pontuação de risco",

            detectedCategories:
                "Categorias detectadas",

            detectionFindings:
                "🔎 Resultados da detecção",

            detected:
                "detectado:",

            legitimate:
                "Legítimo",

            threat:
                "Ameaça",

            noPattern:
                "Nenhum padrão específico de golpe foi detectado.",


            recommendation:
                "🛡️ Recomendação do TrustAI:",

            criticalAdvice:
                "Esta mensagem contém vários indicadores fortes de golpe. Não envie dinheiro, senhas, OTPs ou informações pessoais.",

            highAdvice:
                "Tenha muito cuidado. Verifique o remetente de forma independente antes de tomar qualquer ação.",

            cautionAdvice:
                "Alguns indicadores suspeitos foram detectados. Verifique cuidadosamente o remetente e o contexto.",

            lowAdvice:
                "Nenhum indicador importante de golpe foi detectado pelas regras atuais. Isso não garante que a mensagem seja segura.",


            generalCommunication:
                "Comunicação geral",

            loadingLanguage:
                "Carregando idioma...",


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


            error:
                "Algo deu errado.",

            success:
                "Sucesso",

            warning:
                "Aviso",

            information:
                "Informação",


            welcome:
                "Bem-vindo ao TrustAI",

            protectYourself:
                "Proteja-se contra golpes, fraudes e atividades suspeitas.",

            staySafe:
                "Fique seguro com o TrustAI",


            secureCheckout:
                "Pagamento seguro",

            checkoutDescription:
                "Conclua sua assinatura do TrustAI Protection.",

            customerInformation:
                "Informações do cliente",

            emailAddress:
                "Endereço de e-mail",

            paymentMethod:
                "Método de pagamento",

            debitCreditCard:
                "Cartão de débito / crédito",

            internationalPayment:
                "Pagamento internacional",

            continuePayment:
                "Continuar para pagamento seguro",

            paymentProvider:
                "O pagamento será processado por um provedor de pagamento compatível.",

            internationalDescription:
                "As opções de pagamento disponíveis podem depender do seu país.",

            protectionPlan:
                "PROTEÇÃO",

            monthlyBilling:
                "COBRANÇA MENSAL",

            yearlyBilling:
                "COBRANÇA ANUAL • ECONOMIZE COM O PLANO ANUAL",

            securityNote:
                "🔒 O TrustAI não armazena os dados do seu cartão.",

            paymentVerification:
                "Seu plano TrustAI só será ativado após a verificação bem-sucedida do pagamento.",

            noPlanSelected:
                "Nenhuma assinatura TrustAI válida foi selecionada. Volte aos Planos e escolha um plano.",

            returnToPlans:
                "Volte para a página de Planos do TrustAI.",

            checkoutPrepared:
                "Pagamento preparado.",

            paymentNotConnected:
                "O provedor de pagamento seguro ainda não está conectado. Nenhum pagamento foi realizado e seu plano não foi ativado.",


            upgradePlan:
                "Atualize seu plano.",

            chooseProtection:
                "Escolha o nível de proteção que atende às suas necessidades.",

            monthly:
                "Mensal",

            yearly:
                "Anual",

            saveTwoMonths:
                "ECONOMIZE 2 MESES",

            whatYouGet:
                "O que você recebe",

            selected:
                "SELECIONADO",

            upgradeTo:
                "Atualizar para",

            everythingInFree:
                "Tudo do plano Free",

            advancedScamDetection:
                "Detecção avançada de golpes",

            advancedPhishingAnalysis:
                "Análise avançada de phishing",

            telegramWarnings:
                "Avisos específicos para links do Telegram",

            accountMonitoring:
                "Ferramentas de monitoramento da segurança da conta",

            gamingProtection:
                "Ferramentas de proteção para jogos",

            advancedScamAlerts:
                "Alertas avançados de golpes",

            activityDashboard:
                "Painel de atividade de proteção",

            priorityGuidance:
                "Orientação de segurança prioritária",

            freeProtection:
                "Sua proteção gratuita do TrustAI continua disponível. A atualização adiciona apenas os recursos mostrados acima."

        }

    };


    /* ============================================================
       IMPORTANT:
       SWEDISH, FINNISH AND PORTUGUESE ARE INCLUDED.
       EXACTLY 7 LANGUAGES ARE SUPPORTED.
       ============================================================ */


    /* ============================================================
       GET CURRENT LANGUAGE
       ============================================================ */

    function getLanguage() {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (
            saved &&
            Object.prototype.hasOwnProperty.call(
                languageInfo,
                saved
            )
        ) {
            return saved;
        }

        return DEFAULT_LANGUAGE;

    }


    /* ============================================================
       SET LANGUAGE
       ============================================================ */

    function setLanguage(language) {

        if (
            !Object.prototype.hasOwnProperty.call(
                languageInfo,
                language
            )
        ) {

            language =
                DEFAULT_LANGUAGE;

        }


        localStorage.setItem(
            STORAGE_KEY,
            language
        );


        document.documentElement.lang =
            languageInfo[language].locale;


        document.documentElement.dir =
            "ltr";


        applyTranslations();


        document.dispatchEvent(
            new CustomEvent(
                "trustai-language-changed",
                {
                    detail: {
                        language: language
                    }
                }
            )
        );

    }


    /* ============================================================
       TRANSLATE
       ============================================================ */

    function t(key) {

        const language =
            getLanguage();

        const current =
            translations[language] || translations.en;

        return (
            current[key] ??
            translations.en[key] ??
            key
        );

    }


    /* ============================================================
       APPLY TRANSLATIONS
       ============================================================ */

    function applyTranslations() {

        const language =
            getLanguage();


        document.documentElement.lang =
            languageInfo[language].locale;


        document.documentElement.dir =
            "ltr";


        /* --------------------------------------------
           TEXT
           -------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );

                element.textContent =
                    t(key);

            });


        /* --------------------------------------------
           PLACEHOLDER
           -------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                element.placeholder =
                    t(key);

            });


        /* --------------------------------------------
           TITLE
           -------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-title]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-title"
                    );

                element.title =
                    t(key);

            });


        /* --------------------------------------------
           ARIA LABEL
           -------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-aria-label]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria-label"
                    );

                element.setAttribute(
                    "aria-label",
                    t(key)
                );

            });


        /* --------------------------------------------
           LANGUAGE SELECTOR
           -------------------------------------------- */

        document
            .querySelectorAll("[data-language-current]")
            .forEach(function (element) {

                element.textContent =
                    languageInfo[language].flag +
                    " " +
                    languageInfo[language].nativeName;

            });


        /* --------------------------------------------
           LANGUAGE OPTIONS
           -------------------------------------------- */

        document
            .querySelectorAll("[data-language-option]")
            .forEach(function (element) {

                const option =
                    element.getAttribute(
                        "data-language-option"
                    );

                const info =
                    languageInfo[option];

                if (!info) {
                    return;
                }

                element.textContent =
                    info.flag +
                    " " +
                    info.nativeName;

                element.classList.toggle(
                    "active",
                    option === language
                );

                element.setAttribute(
                    "aria-selected",
                    option === language
                        ? "true"
                        : "false"
                );

            });

    }


    /* ============================================================
       CREATE LANGUAGE SELECTOR
       Optional helper for pages that contain:
       <div id="trustaiLanguageSelector"></div>
       ============================================================ */

    function createLanguageSelector(containerId) {

        const container =
            document.getElementById(
                containerId
            );

        if (!container) {
            return;
        }


        container.innerHTML = "";


        const select =
            document.createElement("select");


        select.className =
            "trustai-language-select";


        select.setAttribute(
            "aria-label",
            t("languageTitle")
        );


        Object.keys(languageInfo)
            .forEach(function (code) {

                const info =
                    languageInfo[code];


                const option =
                    document.createElement("option");


                option.value =
                    code;


                option.textContent =
                    info.flag +
                    " " +
                    info.nativeName;


                if (
                    code === getLanguage()
                ) {

                    option.selected =
                        true;

                }


                select.appendChild(
                    option
                );

            });


        select.addEventListener(
            "change",
            function () {

                setLanguage(
                    this.value
                );

            }
        );


        container.appendChild(
            select
        );

    }


    /* ============================================================
       INITIALIZE
       ============================================================ */

    function initialize() {

        const language =
            getLanguage();


        document.documentElement.lang =
            languageInfo[language].locale;


        document.documentElement.dir =
            "ltr";


        applyTranslations();

    }


    /* ============================================================
       PUBLIC TRUSTAI LANGUAGE API
       ============================================================ */

    window.TrustAILanguage = {

        languageInfo:
            languageInfo,

        translations:
            translations,

        getLanguage:
            getLanguage,

        setLanguage:
            setLanguage,

        translate:
            t,

        t:
            t,

        applyTranslations:
            applyTranslations,

        createSelector:
            createLanguageSelector

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
