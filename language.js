/* =====================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   Version 2.0
   ===================================================== */

(function () {

    const STORAGE_KEY = "trustai_language";

    const languages = {

        /* =================================================
           ENGLISH
        ================================================= */

        en: {
            name: "English",
            nativeName: "English",
            flag: "🇬🇧",
            locale: "en",
            translations: {
                settingsTitle: "Settings",
                settingsDescription: "Manage your TrustAI preferences, security and account settings.",
                languageTitle: "Language",
                languageDescription: "Choose the language you want TrustAI to use.",
                currentLanguage: "Current language",
                searchLanguages: "Search languages...",
                languageNoticeTitle: "🌍 TrustAI languages",
                languageNotice: "Your language selection is saved on this device and will be used across supported TrustAI pages.",

                analyzeMessage: "🔍 Analyze Message",
                clear: "Clear",
                randomSample: "🎲 Random Sample",
                analyzeText: "Analyze Text",
                pasteMessage: "Paste any personal text, business email, notification, or suspicious message below.",
                noMessage: "⚠️ No message provided",
                pasteBeforeScanning: "Paste a message into the checker before scanning.",
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

        /* =================================================
           FRENCH
        ================================================= */

        fr: {
            name: "French",
            nativeName: "Français",
            flag: "🇫🇷",
            locale: "fr",
            translations: {
                settingsTitle: "Paramètres",
                settingsDescription: "Gérez vos préférences, votre sécurité et votre compte TrustAI.",
                languageTitle: "Langue",
                languageDescription: "Choisissez la langue que TrustAI doit utiliser.",
                currentLanguage: "Langue actuelle",
                searchLanguages: "Rechercher une langue...",
                languageNoticeTitle: "🌍 Langues TrustAI",
                languageNotice: "Votre choix de langue est enregistré sur cet appareil.",
                analyzeMessage: "🔍 Analyser le message",
                clear: "Effacer",
                randomSample: "🎲 Exemple aléatoire",
                analyzeText: "Analyser le texte",
                pasteMessage: "Collez ci-dessous un texte personnel, un e-mail ou un message suspect.",
                noMessage: "⚠️ Aucun message fourni",
                pasteBeforeScanning: "Collez un message avant de lancer l'analyse.",
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

        /* =================================================
           SPANISH
        ================================================= */

        es: {
            name: "Spanish",
            nativeName: "Español",
            flag: "🇪🇸",
            locale: "es",
            translations: {
                settingsTitle: "Configuración",
                settingsDescription: "Administra tus preferencias, seguridad y cuenta de TrustAI.",
                languageTitle: "Idioma",
                languageDescription: "Elige el idioma que quieres que utilice TrustAI.",
                currentLanguage: "Idioma actual",
                searchLanguages: "Buscar idiomas...",
                languageNoticeTitle: "🌍 Idiomas de TrustAI",
                languageNotice: "Tu selección de idioma se guarda en este dispositivo.",
                analyzeMessage: "🔍 Analizar mensaje",
                clear: "Borrar",
                randomSample: "🎲 Ejemplo aleatorio",
                analyzeText: "Analizar texto",
                pasteMessage: "Pega aquí un texto personal, correo electrónico o mensaje sospechoso.",
                noMessage: "⚠️ No se proporcionó ningún mensaje",
                pasteBeforeScanning: "Pega un mensaje antes de analizarlo.",
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

        /* =================================================
           PORTUGUESE
        ================================================= */

        pt: {
            name: "Portuguese",
            nativeName: "Português",
            flag: "🇵🇹",
            locale: "pt",
            translations: {
                settingsTitle: "Configurações",
                settingsDescription: "Gerencie suas preferências, segurança e conta TrustAI.",
                languageTitle: "Idioma",
                languageDescription: "Escolha o idioma que deseja que o TrustAI use.",
                currentLanguage: "Idioma atual",
                searchLanguages: "Pesquisar idiomas...",
                languageNoticeTitle: "🌍 Idiomas do TrustAI",
                languageNotice: "Sua seleção de idioma é salva neste dispositivo.",
                analyzeMessage: "🔍 Analisar mensagem",
                clear: "Limpar",
                randomSample: "🎲 Exemplo aleatório",
                analyzeText: "Analisar texto",
                pasteMessage: "Cole abaixo um texto pessoal, e-mail ou mensagem suspeita.",
                noMessage: "⚠️ Nenhuma mensagem fornecida",
                pasteBeforeScanning: "Cole uma mensagem antes de analisar.",
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

        /* =================================================
           CHINESE
        ================================================= */

        zh: {
            name: "Chinese",
            nativeName: "中文",
            flag: "🇨🇳",
            locale: "zh-CN",
            translations: {
                settingsTitle: "设置",
                settingsDescription: "管理您的 TrustAI 偏好、安全和账户设置。",
                languageTitle: "语言",
                languageDescription: "选择 TrustAI 使用的语言。",
                currentLanguage: "当前语言",
                searchLanguages: "搜索语言...",
                languageNoticeTitle: "🌍 TrustAI 语言",
                languageNotice: "您的语言选择会保存在此设备上。",
                analyzeMessage: "🔍 分析消息",
                clear: "清除",
                randomSample: "🎲 随机示例",
                analyzeText: "分析文本",
                pasteMessage: "请在下面粘贴个人消息、商务邮件、通知或可疑消息。",
                noMessage: "⚠️ 未提供消息",
                pasteBeforeScanning: "请先粘贴消息，然后进行扫描。",
                lowRisk: "🟢 低风险",
                caution: "🟡 需要注意",
                highRisk: "🟠 高风险 / 可疑",
                critical: "🚨 检测到严重威胁",
                riskScore: "风险评分",
                detectedCategories: "检测类别",
                detectionFindings: "🔎 检测结果",
                recommendation: "🛡️ TrustAI 建议："
            }
        },

        /* =================================================
           ARABIC
        ================================================= */

        ar: {
            name: "Arabic",
            nativeName: "العربية",
            flag: "🇸🇦",
            locale: "ar",
            translations: {
                settingsTitle: "الإعدادات",
                settingsDescription: "إدارة تفضيلات TrustAI والأمان والحساب.",
                languageTitle: "اللغة",
                languageDescription: "اختر اللغة التي تريد أن يستخدمها TrustAI.",
                currentLanguage: "اللغة الحالية",
                searchLanguages: "البحث عن اللغات...",
                analyzeMessage: "🔍 تحليل الرسالة",
                clear: "مسح",
                randomSample: "🎲 عينة عشوائية",
                analyzeText: "تحليل النص",
                pasteMessage: "ألصق أي نص شخصي أو بريد إلكتروني أو إشعار أو رسالة مشبوهة أدناه.",
                noMessage: "⚠️ لم يتم تقديم رسالة",
                pasteBeforeScanning: "ألصق رسالة قبل بدء الفحص.",
                lowRisk: "🟢 مخاطر منخفضة",
                caution: "🟡 يلزم الحذر",
                highRisk: "🟠 مخاطر عالية / مشبوهة",
                critical: "🚨 تم اكتشاف تهديد خطير",
                riskScore: "درجة المخاطر",
                detectedCategories: "الفئات المكتشفة",
                detectionFindings: "🔎 نتائج الكشف",
                recommendation: "🛡️ توصية TrustAI:"
            }
        },

        /* =================================================
           GERMAN
        ================================================= */

        de: {
            name: "German",
            nativeName: "Deutsch",
            flag: "🇩🇪",
            locale: "de",
            translations: {
                settingsTitle: "Einstellungen",
                settingsDescription: "Verwalten Sie Ihre TrustAI-Einstellungen, Sicherheit und Ihr Konto.",
                languageTitle: "Sprache",
                languageDescription: "Wählen Sie die Sprache für TrustAI.",
                currentLanguage: "Aktuelle Sprache",
                searchLanguages: "Sprachen suchen...",
                analyzeMessage: "🔍 Nachricht analysieren",
                clear: "Löschen",
                randomSample: "🎲 Zufälliges Beispiel",
                analyzeText: "Text analysieren",
                pasteMessage: "Fügen Sie unten einen persönlichen Text, eine E-Mail oder eine verdächtige Nachricht ein.",
                noMessage: "⚠️ Keine Nachricht angegeben",
                pasteBeforeScanning: "Fügen Sie vor dem Scannen eine Nachricht ein.",
                lowRisk: "🟢 NIEDRIGES RISIKO",
                caution: "🟡 VORSICHT ERFORDERLICH",
                highRisk: "🟠 HOHES RISIKO / VERDÄCHTIG",
                critical: "🚨 KRITISCHE BEDROHUNG ERKANNT",
                riskScore: "Risiko-Score",
                detectedCategories: "Erkannte Kategorien",
                detectionFindings: "🔎 Erkennungsergebnisse",
                recommendation: "🛡️ TrustAI-Empfehlung:"
            }
        },

        /* =================================================
           ITALIAN
        ================================================= */

        it: {
            name: "Italian",
            nativeName: "Italiano",
            flag: "🇮🇹",
            locale: "it",
            translations: {
                settingsTitle: "Impostazioni",
                settingsDescription: "Gestisci le preferenze, la sicurezza e l'account TrustAI.",
                languageTitle: "Lingua",
                languageDescription: "Scegli la lingua che TrustAI deve utilizzare.",
                currentLanguage: "Lingua attuale",
                searchLanguages: "Cerca lingue...",
                analyzeMessage: "🔍 Analizza messaggio",
                clear: "Cancella",
                randomSample: "🎲 Esempio casuale",
                analyzeText: "Analizza testo",
                pasteMessage: "Incolla qui un testo personale, un'e-mail o un messaggio sospetto.",
                noMessage: "⚠️ Nessun messaggio fornito",
                pasteBeforeScanning: "Incolla un messaggio prima della scansione.",
                lowRisk: "🟢 RISCHIO BASSO",
                caution: "🟡 ATTENZIONE RICHIESTA",
                highRisk: "🟠 RISCHIO ELEVATO / SOSPETTO",
                critical: "🚨 MINACCIA CRITICA RILEVATA",
                riskScore: "Punteggio di rischio",
                detectedCategories: "Categorie rilevate",
                detectionFindings: "🔎 Risultati del rilevamento",
                recommendation: "🛡️ Raccomandazione TrustAI:"
            }
        },

        /* =================================================
           RUSSIAN
        ================================================= */

        ru: {
            name: "Russian",
            nativeName: "Русский",
            flag: "🇷🇺",
            locale: "ru",
            translations: {
                settingsTitle: "Настройки",
                settingsDescription: "Управляйте настройками, безопасностью и аккаунтом TrustAI.",
                languageTitle: "Язык",
                languageDescription: "Выберите язык, который будет использовать TrustAI.",
                currentLanguage: "Текущий язык",
                searchLanguages: "Поиск языков...",
                analyzeMessage: "🔍 Анализировать сообщение",
                clear: "Очистить",
                randomSample: "🎲 Случайный пример",
                analyzeText: "Анализ текста",
                pasteMessage: "Вставьте ниже личный текст, электронное письмо или подозрительное сообщение.",
                noMessage: "⚠️ Сообщение не предоставлено",
                pasteBeforeScanning: "Вставьте сообщение перед сканированием.",
                lowRisk: "🟢 НИЗКИЙ РИСК",
                caution: "🟡 ТРЕБУЕТСЯ ОСТОРОЖНОСТЬ",
                highRisk: "🟠 ВЫСОКИЙ РИСК / ПОДОЗРИТЕЛЬНО",
                critical: "🚨 ОБНАРУЖЕНА КРИТИЧЕСКАЯ УГРОЗА",
                riskScore: "Оценка риска",
                detectedCategories: "Обнаруженные категории",
                detectionFindings: "🔎 Результаты обнаружения",
                recommendation: "🛡️ Рекомендация TrustAI:"
            }
        },

        /* =================================================
           JAPANESE
        ================================================= */

        ja: {
            name: "Japanese",
            nativeName: "日本語",
            flag: "🇯🇵",
            locale: "ja",
            translations: {
                settingsTitle: "設定",
                settingsDescription: "TrustAIの設定、セキュリティ、アカウントを管理します。",
                languageTitle: "言語",
                languageDescription: "TrustAIで使用する言語を選択してください。",
                currentLanguage: "現在の言語",
                searchLanguages: "言語を検索...",
                analyzeMessage: "🔍 メッセージを分析",
                clear: "クリア",
                randomSample: "🎲 ランダムサンプル",
                analyzeText: "テキストを分析",
                pasteMessage: "個人メッセージ、メール、通知、または不審なメッセージを下に貼り付けてください。",
                noMessage: "⚠️ メッセージがありません",
                pasteBeforeScanning: "スキャンする前にメッセージを貼り付けてください。",
                lowRisk: "🟢 低リスク",
                caution: "🟡 注意が必要",
                highRisk: "🟠 高リスク / 不審",
                critical: "🚨 重大な脅威を検出",
                riskScore: "リスクスコア",
                detectedCategories: "検出カテゴリ",
                detectionFindings: "🔎 検出結果",
                recommendation: "🛡️ TrustAIの推奨:"
            }
        },

        /* =================================================
           KOREAN
        ================================================= */

        ko: {
            name: "Korean",
            nativeName: "한국어",
            flag: "🇰🇷",
            locale: "ko",
            translations: {
                settingsTitle: "설정",
                settingsDescription: "TrustAI 환경설정, 보안 및 계정을 관리합니다.",
                languageTitle: "언어",
                languageDescription: "TrustAI에서 사용할 언어를 선택하세요.",
                currentLanguage: "현재 언어",
                searchLanguages: "언어 검색...",
                analyzeMessage: "🔍 메시지 분석",
                clear: "지우기",
                randomSample: "🎲 무작위 샘플",
                analyzeText: "텍스트 분석",
                pasteMessage: "개인 메시지, 이메일, 알림 또는 의심스러운 메시지를 아래에 붙여넣으세요.",
                noMessage: "⚠️ 메시지가 없습니다",
                pasteBeforeScanning: "스캔하기 전에 메시지를 붙여넣으세요.",
                lowRisk: "🟢 낮은 위험",
                caution: "🟡 주의 필요",
                highRisk: "🟠 높은 위험 / 의심스러움",
                critical: "🚨 심각한 위협 감지",
                riskScore: "위험 점수",
                detectedCategories: "감지된 카테고리",
                detectionFindings: "🔎 감지 결과",
                recommendation: "🛡️ TrustAI 권장사항:"
            }
        },

        /* =================================================
           DUTCH
        ================================================= */

        nl: {
            name: "Dutch",
            nativeName: "Nederlands",
            flag: "🇳🇱",
            locale: "nl",
            translations: {
                settingsTitle: "Instellingen",
                settingsDescription: "Beheer je TrustAI-voorkeuren, beveiliging en account.",
                languageTitle: "Taal",
                languageDescription: "Kies de taal die TrustAI moet gebruiken.",
                currentLanguage: "Huidige taal",
                searchLanguages: "Talen zoeken...",
                analyzeMessage: "🔍 Bericht analyseren",
                clear: "Wissen",
                randomSample: "🎲 Willekeurig voorbeeld",
                analyzeText: "Tekst analyseren",
                pasteMessage: "Plak hieronder een persoonlijke tekst, e-mail of verdacht bericht.",
                noMessage: "⚠️ Geen bericht opgegeven",
                pasteBeforeScanning: "Plak een bericht voordat je gaat scannen.",
                lowRisk: "🟢 LAAG RISICO",
                caution: "🟡 VOORZICHTIGHEID VEREIST",
                highRisk: "🟠 HOOG RISICO / VERDACHT",
                critical: "🚨 KRITIEKE BEDREIGING GEDETECTEERD",
                riskScore: "Risicoscore",
                detectedCategories: "Gedetecteerde categorieën",
                detectionFindings: "🔎 Detectieresultaten",
                recommendation: "🛡️ TrustAI-advies:"
            }
        },

        /* =================================================
           TURKISH
        ================================================= */

        tr: {
            name: "Turkish",
            nativeName: "Türkçe",
            flag: "🇹🇷",
            locale: "tr",
            translations: {
                settingsTitle: "Ayarlar",
                settingsDescription: "TrustAI tercihlerinizi, güvenliğinizi ve hesabınızı yönetin.",
                languageTitle: "Dil",
                languageDescription: "TrustAI'nin kullanmasını istediğiniz dili seçin.",
                currentLanguage: "Mevcut dil",
                searchLanguages: "Dil ara...",
                analyzeMessage: "🔍 Mesajı Analiz Et",
                clear: "Temizle",
                randomSample: "🎲 Rastgele Örnek",
                analyzeText: "Metni Analiz Et",
                pasteMessage: "Kişisel metni, e-postayı veya şüpheli mesajı aşağıya yapıştırın.",
                noMessage: "⚠️ Mesaj verilmedi",
                pasteBeforeScanning:  "Taramadan önce bir mesaj yapıştırın.",
                lowRisk: "🟢 DÜŞÜK RİSK",
                caution: "🟡 DİKKAT GEREKLİ",
                highRisk: "🟠 YÜKSEK RİSK / ŞÜPHELİ",
                critical: "🚨 KRİTİK TEHDİT TESPİT EDİLDİ",
                riskScore: "Risk Skoru",
                detectedCategories: "Tespit Edilen Kategoriler",
                detectionFindings: "🔎 Tespit Sonuçları",
                recommendation: "🛡️ TrustAI Önerisi:"
            }
        },

        /* =================================================
           HINDI
        ================================================= */

        hi: {
            name: "Hindi",
            nativeName: "हिन्दी",
            flag: "🇮🇳",
            locale: "hi",
            translations: {
                settingsTitle: "सेटिंग्स",
                settingsDescription: "अपनी TrustAI प्राथमिकताएँ, सुरक्षा और अकाउंट प्रबंधित करें।",
                languageTitle: "भाषा",
                languageDescription: "TrustAI के लिए अपनी पसंदीदा भाषा चुनें।",
                currentLanguage: "वर्तमान भाषा",
                searchLanguages: "भाषाएँ खोजें...",
                analyzeMessage: "🔍 संदेश का विश्लेषण करें",
                clear: "साफ़ करें",
                randomSample: "🎲 यादृच्छिक नमूना",
                analyzeText: "टेक्स्ट का विश्लेषण करें",
                pasteMessage: "नीचे कोई व्यक्तिगत टेक्स्ट, ईमेल, नोटिफिकेशन या संदिग्ध संदेश पेस्ट करें।",
                noMessage: "⚠️ कोई संदेश नहीं दिया गया",
                pasteBeforeScanning: "स्कैन करने से पहले संदेश पेस्ट करें।",
                lowRisk: "🟢 कम जोखिम",
                caution: "🟡 सावधानी आवश्यक",
                highRisk: "🟠 उच्च जोखिम / संदिग्ध",
                critical: "🚨 गंभीर खतरा पाया गया",
                riskScore: "जोखिम स्कोर",
                detectedCategories: "पता चली श्रेणियाँ",
                detectionFindings: "🔎 पहचान परिणाम",
                recommendation: "🛡️ TrustAI सुझाव:"
            }
        },

        /* =================================================
           HAUSA
        ================================================= */

        ha: {
            name: "Hausa",
            nativeName: "Hausa",
            flag: "🇳🇬",
            locale: "ha",
            translations: {
                settingsTitle: "Saituna",
                settingsDescription: "Sarrafa abubuwan da ka fi so, tsaro da asusun TrustAI.",
                languageTitle: "Harshe",
                languageDescription: "Zaɓi harshen da kake son TrustAI ya yi amfani da shi.",
                currentLanguage: "Harshen yanzu",
                searchLanguages: "Nemo harsuna...",
                analyzeMessage: "🔍 Bincika Saƙo",
                clear: "Share",
                randomSample: "🎲 Misali na Bazata",
                analyzeText: "Bincika Rubutu",
                pasteMessage: "Manna rubutu, imel, sanarwa ko saƙon da ake zargi a ƙasa.",
                noMessage: "⚠️ Ba a bayar da saƙo ba",
                pasteBeforeScanning: "Manna saƙo kafin fara bincike.",
                lowRisk: "🟢 ƘARAMIN HAƊARI",
                caution: "🟡 ANA BUƘATAR HATTARA",
                highRisk: "🟠 BABBAR BARAZANA / ABIN ZARGI",
                critical: "🚨 AN GANO BABBAR BARAZANA",
                riskScore: "Makin Haɗari",
                detectedCategories: "Rukunin da aka Gano",
                detectionFindings: "🔎 Sakamakon Bincike",
                recommendation: "🛡️ Shawarar TrustAI:"
            }
        },

        /* =================================================
           YORUBA
        ================================================= */

        yo: {
            name: "Yoruba",
            nativeName: "Yorùbá",
            flag: "🇳🇬",
            locale: "yo",
            translations: {
                settingsTitle: "Àwọn Ètò",
                settingsDescription: "Ṣakoso àwọn yíyan rẹ, ààbò àti àkáǹtì TrustAI.",
                languageTitle: "Èdè",
                languageDescription: "Yan èdè tí o fẹ́ kí TrustAI máa lò.",
                currentLanguage: "Èdè tó wà báyìí",
                searchLanguages: "Wa àwọn èdè...",
                analyzeMessage: "🔍 Ṣàyẹ̀wò Ìfiranṣẹ́",
                clear: "Pa rẹ́",
                randomSample: "🎲 Àpẹẹrẹ Àìròtẹ́lẹ̀",
                analyzeText: "Ṣàyẹ̀wò Ọ̀rọ̀",
                pasteMessage: "Fi ọ̀rọ̀ ara ẹni, imeeli, ìkìlọ̀ tàbí ìfiranṣẹ́ tó ń ṣòro sílẹ̀ ní ìsàlẹ̀.",
                noMessage: "⚠️ A kò pèsè ìfiranṣẹ́",
                pasteBeforeScanning: "Fi ìfiranṣẹ́ sílẹ̀ kí o tó bẹ̀rẹ̀ ìṣàyẹ̀wò.",
                lowRisk: "🟢 EWU KÉKÈ",
                caution: "🟡 ÌṢỌ́RA ṢE PÀTÀKÌ",
                highRisk: "🟠 EWU GÍGA / ALÁǸFÀÀNÍ",
                critical: "🚨 A TI RI ÌHALẸ̀ PÀTÀKÌ",
                riskScore: "Àmì Ewu",
                detectedCategories: "Àwọn Ẹ̀ka Tí A Ṣàwárí",
                detectionFindings: "🔎 Àbájáde Ìṣàyẹ̀wò",
                recommendation: "🛡️ Ìmọ̀ràn TrustAI:"
            }
        },

        /* =================================================
           IGBO
        ================================================= */

        ig: {
            name: "Igbo",
            nativeName: "Igbo",
            flag: "🇳🇬",
            locale: "ig",
            translations: {
                settingsTitle: "Ntọala",
                settingsDescription: "Jikwaa mmasị gị, nchekwa na akaụntụ TrustAI.",
                languageTitle: "Asụsụ",
                languageDescription: "Họrọ asụsụ ịchọrọ ka TrustAI jiri.",
                currentLanguage: "Asụsụ dị ugbu a",
                searchLanguages: "Chọọ asụsụ...",
                analyzeMessage: "🔍 Nyochaa Ozi",
                clear: "Hichapụ",
                randomSample: "🎲 Ihe Nlereanya Random",
                analyzeText: "Nyochaa Ederede",
                pasteMessage: "Tapawa ederede, email, ngosi ma ọ bụ ozi a na-enyo enyo n'okpuru.",
                noMessage: "⚠️ Enweghị ozi e nyere",
                pasteBeforeScanning: "Tapawa ozi tupu ịmalite nyocha.",
                lowRisk: "🟢 NSOGBU DỊ NTA",
                caution: "🟡 ACHỌRỌ NLEZIANYA",
                highRisk: "🟠 NSOGBU DỊ ELU / A NA-ENYO ENYO",
                critical: "🚨 ACHỌPỤTARA NSOGBU DỊ OKÉ",
                riskScore: "Akara Nsogbu",
                detectedCategories: "Ụdị A Chọpụtara",
                detectionFindings: "🔎 Nsonaazụ Nnyocha",
                recommendation: "🛡️ Ndụmọdụ TrustAI:"
            }
        }

    };


    /* =====================================================
       GET CURRENT LANGUAGE
    ===================================================== */

    function getLanguageCode() {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (saved && languages[saved]) {
            return saved;
        }

        return "en";
    }


    /* =====================================================
       SET LANGUAGE
    ===================================================== */

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

        applyTranslations();

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


    /* =====================================================
       APPLY TRANSLATIONS
    ===================================================== */

    function applyTranslations() {

        const code =
            getLanguageCode();

        const language =
            languages[code];

        if (!language) return;

        const translations =
            language.translations;


        document.documentElement.lang =
            language.locale;


        /* RIGHT-TO-LEFT LANGUAGES */

        if (code === "ar") {

            document.documentElement.dir =
                "rtl";

        } else {

            document.documentElement.dir =
                "ltr";

        }


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


        /* TITLE */

        if (translations.settingsTitle) {

            if (
                document.title
                    .toLowerCase()
                    .includes("settings")
            ) {

                document.title =
                    translations.settingsTitle +
                    " — TrustAI";

            }

        }

    }


    /* =====================================================
       TRANSLATE FUNCTION
    ===================================================== */

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

        if (
            languages.en.translations[key]
        ) {

            return languages.en.translations[key];

        }

        return key;
    }


    /* =====================================================
       PUBLIC TRUSTAI LANGUAGE API
    ===================================================== */

    window.TrustAILanguage = {

        languages: languages,

        getLanguageCode:
            getLanguageCode,

        setLanguage:
            setLanguage,

        applyTranslations:
            applyTranslations,

        t:
            t
       };


    /* =====================================================
       AUTOMATIC INITIALIZATION
    ===================================================== */

    function initializeLanguage() {

        applyTranslations();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguage
        );

    } else {

        initializeLanguage();

    }

})();
