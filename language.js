/* =====================================================
   TRUSTAI GLOBAL LANGUAGE SYSTEM
   35+ LANGUAGES
   ===================================================== */

(function () {

    const STORAGE_KEY = "trustai_language";

    const languages = {

        /* =================================================
           1. ENGLISH
           ================================================= */

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
           2. FRENCH
           ================================================= */

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
           3. SPANISH
           ================================================= */

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
                languageNotice: "Tu selección de idioma se guarda en este dispositivo.",
                analyzeMessage: "🔍 Analizar mensaje",
                clear: "Borrar",
                randomSample: "🎲 Ejemplo aleatorio",
                analyzeText: "Analizar el texto",
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
           4. PORTUGUESE
           ================================================= */

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
           5. CHINESE
           ================================================= */

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
                languageNotice: "您的语言选择会保存在此设备上，并用于支持的 TrustAI 页面。",
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
           6. GERMAN
           ================================================= */

        de: {
            name: "German",
            nativeName: "Deutsch",
            flag: "🇩🇪",
            locale: "de",
            translations: {
                languageTitle: "Sprache",
                languageDescription: "Wählen Sie die Sprache für TrustAI.",
                currentLanguage: "Aktuelle Sprache",
                searchLanguages: "Sprachen suchen...",
                languageNoticeTitle: "🌍 TrustAI Sprachen",
                languageNotice: "Ihre Sprachauswahl wird auf diesem Gerät gespeichert.",
                analyzeMessage: "🔍 Nachricht analysieren",
                clear: "Löschen",
                randomSample: "🎲 Zufälliges Beispiel",
                analyzeText: "Text analysieren",
                pasteMessage: "Fügen Sie unten eine Nachricht oder verdächtigen Text ein.",
                noMessage: "⚠️ Keine Nachricht angegeben",
                pasteBeforeScanning: "Fügen Sie vor dem Scannen eine Nachricht ein.",
                lowRisk: "🟢 NIEDRIGES RISIKO",
                caution: "🟡 VORSICHT ERFORDERLICH",
                highRisk: "🟠 HOHES RISIKO / VERDÄCHTIG",
                critical: "🚨 KRITISCHE BEDROHUNG ERKANNT",
                riskScore: "Risiko-Score",
                detectedCategories: "Erkannte Kategorien",
                detectionFindings: "🔎 Erkennungsergebnisse",
                recommendation: "🛡️ TrustAI Empfehlung:"
            }
        },

        /* =================================================
           7. ITALIAN
           ================================================= */

        it: {
            name: "Italian",
            nativeName: "Italiano",
            flag: "🇮🇹",
            locale: "it",
            translations: {
                languageTitle: "Lingua",
                languageDescription: "Scegli la lingua che TrustAI deve utilizzare.",
                currentLanguage: "Lingua attuale",
                searchLanguages: "Cerca lingue...",
                languageNoticeTitle: "🌍 Lingue TrustAI",
                languageNotice: "La tua scelta della lingua viene salvata su questo dispositivo.",
                analyzeMessage: "🔍 Analizza messaggio",
                clear: "Cancella",
                randomSample: "🎲 Esempio casuale",
                analyzeText: "Analizza testo",
                pasteMessage: "Incolla qui un messaggio o testo sospetto.",
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
           8. JAPANESE
           ================================================= */

        ja: {
            name: "Japanese",
            nativeName: "日本語",
            flag: "🇯🇵",
            locale: "ja",
            translations: {
                languageTitle: "言語",
                languageDescription: "TrustAIで使用する言語を選択してください。",
                currentLanguage: "現在の言語",
                searchLanguages: "言語を検索...",
                languageNoticeTitle: "🌍 TrustAIの言語",
                languageNotice: "言語設定はこのデバイスに保存されます。",
                analyzeMessage: "🔍 メッセージを分析",
                clear: "クリア",
                randomSample: "🎲 ランダムサンプル",
                analyzeText: "テキストを分析",
                pasteMessage: "個人メッセージ、メール、通知、または疑わしいメッセージを貼り付けてください。",
                noMessage: "⚠️ メッセージがありません",
                pasteBeforeScanning: "スキャンする前にメッセージを貼り付けてください。",
                lowRisk: "🟢 低リスク",
                caution: "🟡 注意が必要",
                highRisk: "🟠 高リスク / 疑わしい",
                critical: "🚨 重大な脅威を検出",
                riskScore: "リスクスコア",
                detectedCategories: "検出されたカテゴリ",
                detectionFindings: "🔎 検出結果",
                recommendation: "🛡️ TrustAIの推奨:"
            }
        },

        /* =================================================
           9. KOREAN
           ================================================= */

        ko: {
            name: "Korean",
            nativeName: "한국어",
            flag: "🇰🇷",
            locale: "ko",
            translations: {
                languageTitle: "언어",
                languageDescription: "TrustAI에서 사용할 언어를 선택하세요.",
                currentLanguage: "현재 언어",
                searchLanguages: "언어 검색...",
                languageNoticeTitle: "🌍 TrustAI 언어",
                languageNotice: "언어 선택은 이 기기에 저장됩니다.",
                analyzeMessage: "🔍 메시지 분석",
                clear: "지우기",
                randomSample: "🎲 무작위 샘플",
                analyzeText: "텍스트 분석",
                pasteMessage: "개인 메시지, 이메일 또는 의심스러운 메시지를 아래에 붙여넣으세요.",
                noMessage: "⚠️ 메시지가 없습니다",
                pasteBeforeScanning: "스캔하기 전에 메시지를 붙여넣으세요.",
                lowRisk: "🟢 낮은 위험",
                caution: "🟡 주의 필요",
                highRisk: "🟠 높은 위험 / 의심스러움",
                critical: "🚨 심각한 위협 감지",
                riskScore: "위험 점수",
                detectedCategories: "감지된 카테고리",
                detectionFindings: "🔎 감지 결과",
                recommendation: "🛡️ TrustAI 권장 사항:"
            }
        },

        /* =================================================
           10. ARABIC
           ================================================= */

        ar: {
            name: "Arabic",
            nativeName: "العربية",
            flag: "🇸🇦",
            locale: "ar",
            translations: {
                languageTitle: "اللغة",
                languageDescription: "اختر اللغة التي تريد أن يستخدمها TrustAI.",
                currentLanguage: "اللغة الحالية",
                searchLanguages: "البحث عن اللغات...",
                languageNoticeTitle: "🌍 لغات TrustAI",
                languageNotice: "يتم حفظ اختيار اللغة على هذا الجهاز.",
                analyzeMessage: "🔍 تحليل الرسالة",
                clear: "مسح",
                randomSample: "🎲 عينة عشوائية",
                analyzeText: "تحليل النص",
                pasteMessage: "الصق رسالة أو نصًا مشبوهًا أدناه.",
                noMessage: "⚠️ لم يتم تقديم رسالة",
                pasteBeforeScanning: "الصق رسالة قبل الفحص.",
                lowRisk: "🟢 خطر منخفض",
                caution: "🟡 يلزم الحذر",
                highRisk: "🟠 خطر مرتفع / مشبوه",
                critical: "🚨 تم اكتشاف تهديد خطير",
                riskScore: "درجة المخاطر",
                detectedCategories: "الفئات المكتشفة",
                detectionFindings: "🔎 نتائج الكشف",
                recommendation: "🛡️ توصية TrustAI:"
            }
        },

        /* =================================================
           11. HINDI
           ================================================= */

        hi: {
            name: "Hindi",
            nativeName: "हिन्दी",
            flag: "🇮🇳",
            locale: "hi",
            translations: {
                languageTitle: "भाषा",
                languageDescription: "TrustAI में उपयोग की जाने वाली भाषा चुनें।",
                currentLanguage: "वर्तमान भाषा",
                searchLanguages: "भाषाएँ खोजें...",
                languageNoticeTitle: "🌍 TrustAI भाषाएँ",
                languageNotice: "आपकी भाषा की पसंद इस डिवाइस पर सहेजी जाती है।",
                analyzeMessage: "🔍 संदेश का विश्लेषण करें",
                clear: "साफ़ करें",
                randomSample: "🎲 यादृच्छिक उदाहरण",
                analyzeText: "टेक्स्ट का विश्लेषण करें",
                pasteMessage: "नीचे कोई संदेश या संदिग्ध टेक्स्ट पेस्ट करें।",
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
           12. RUSSIAN
           ================================================= */

        ru: {
            name: "Russian",
            nativeName: "Русский",
            flag: "🇷🇺",
            locale: "ru",
            translations: {
                languageTitle: "Язык",
                languageDescription: "Выберите язык для TrustAI.",
                currentLanguage: "Текущий язык",
                searchLanguages: "Поиск языков...",
                languageNoticeTitle: "🌍 Языки TrustAI",
                languageNotice: "Ваш выбор языка сохраняется на этом устройстве.",
                analyzeMessage: "🔍 Анализировать сообщение",
                clear: "Очистить",
                randomSample: "🎲 Случайный пример",
                analyzeText: "Анализировать текст",
                pasteMessage: "Вставьте сообщение или подозрительный текст ниже.",
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
           13. TURKISH
           ================================================= */

        tr: {
            name: "Turkish",
            nativeName: "Türkçe",
            flag: "🇹🇷",
            locale: "tr",
            translations: {
                languageTitle: "Dil",
                languageDescription: "TrustAI'nin kullanacağı dili seçin.",
                currentLanguage: "Mevcut dil",
                searchLanguages: "Dil ara...",
                languageNoticeTitle: "🌍 TrustAI dilleri",
                languageNotice: "Dil seçiminiz bu cihaza kaydedilir.",
                analyzeMessage: "🔍 Mesajı Analiz Et",
                clear: "Temizle",
                randomSample: "🎲 Rastgele Örnek",
                analyzeText: "Metni Analiz Et",
                pasteMessage: "Aşağıya şüpheli bir mesaj veya metin yapıştırın.",
                noMessage: "⚠️ Mesaj sağlanmadı",
                pasteBeforeScanning: "Taramadan önce bir mesaj yapıştırın.",
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
           14. DUTCH
           ================================================= */

        nl: {
            name: "Dutch",
            nativeName: "Nederlands",
            flag: "🇳🇱",
            locale: "nl",
            translations: {
               languageTitle: "Taal",
                languageDescription: "Kies de taal die TrustAI moet gebruiken.",
                currentLanguage: "Huidige taal",
                searchLanguages: "Talen zoeken...",
                languageNoticeTitle: "🌍 TrustAI-talen",
                languageNotice: "Uw taalkeuze wordt op dit apparaat opgeslagen.",
                analyzeMessage: "🔍 Bericht analyseren",
                clear: "Wissen",
                randomSample: "🎲 Willekeurig voorbeeld",
                analyzeText: "Tekst analyseren",
                pasteMessage: "Plak hieronder een bericht of verdachte tekst.",
                noMessage: "⚠️ Geen bericht opgegeven",
                pasteBeforeScanning: "Plak een bericht voordat u scant.",
                lowRisk: "🟢 LAAG RISICO",
                caution: "🟡 VOORZICHTIGHEID VEREIST",
                highRisk: "🟠 HOOG RISICO / VERDACHT",
                critical: "🚨 KRITIEKE BEDREIGING GEDETECTEERD",
                riskScore: "Risicoscore",
                detectedCategories: "Gedetecteerde categorieën",
                detectionFindings: "🔎 Detectieresultaten",
                recommendation: "🛡️ TrustAI-aanbeveling:"
            }
        },

        /* =================================================
           15. INDONESIAN
           ================================================= */

        id: {
            name: "Indonesian",
            nativeName: "Bahasa Indonesia",
            flag: "🇮🇩",
            locale: "id",
            translations: {
                languageTitle: "Bahasa",
                languageDescription: "Pilih bahasa yang digunakan TrustAI.",
                currentLanguage: "Bahasa saat ini",
                searchLanguages: "Cari bahasa...",
                languageNoticeTitle: "🌍 Bahasa TrustAI",
                languageNotice: "Pilihan bahasa Anda disimpan di perangkat ini.",
                analyzeMessage: "🔍 Analisis Pesan",
                clear: "Hapus",
                randomSample: "🎲 Sampel Acak",
                analyzeText: "Analisis Teks",
                pasteMessage: "Tempel pesan atau teks mencurigakan di bawah.",
                noMessage: "⚠️ Tidak ada pesan",
                pasteBeforeScanning: "Tempel pesan sebelum memindai.",
                lowRisk: "🟢 RISIKO RENDAH",
                caution: "🟡 PERLU WASPADA",
                highRisk: "🟠 RISIKO TINGGI / MENCURIGAKAN",
                critical: "🚨 ANCAMAN KRITIS TERDETEKSI",
                riskScore: "Skor Risiko",
                detectedCategories: "Kategori Terdeteksi",
                detectionFindings: "🔎 Hasil Deteksi",
                recommendation: "🛡️ Rekomendasi TrustAI:"
            }
        },

        /* =================================================
           16. VIETNAMESE
           ================================================= */

        vi: {
            name: "Vietnamese",
            nativeName: "Tiếng Việt",
            flag: "🇻🇳",
            locale: "vi",
            translations: {
                languageTitle: "Ngôn ngữ",
                languageDescription: "Chọn ngôn ngữ TrustAI sẽ sử dụng.",
                currentLanguage: "Ngôn ngữ hiện tại",
                searchLanguages: "Tìm ngôn ngữ...",
                languageNoticeTitle: "🌍 Ngôn ngữ TrustAI",
                languageNotice: "Lựa chọn ngôn ngữ của bạn được lưu trên thiết bị này.",
                analyzeMessage: "🔍 Phân tích tin nhắn",
                clear: "Xóa",
                randomSample: "🎲 Mẫu ngẫu nhiên",
                analyzeText: "Phân tích văn bản",
                pasteMessage: "Dán tin nhắn hoặc văn bản đáng ngờ bên dưới.",
                noMessage: "⚠️ Chưa có tin nhắn",
                pasteBeforeScanning: "Hãy dán tin nhắn trước khi quét.",
                lowRisk: "🟢 RỦI RO THẤP",
                caution: "🟡 CẦN THẬN TRỌNG",
                highRisk: "🟠 RỦI RO CAO / ĐÁNG NGỜ",
                critical: "🚨 PHÁT HIỆN MỐI ĐE DỌA NGHIÊM TRỌNG",
                riskScore: "Điểm rủi ro",
                detectedCategories: "Danh mục được phát hiện",
                detectionFindings: "🔎 Kết quả phát hiện",
                recommendation: "🛡️ Khuyến nghị của TrustAI:"
            }
        },

        /* =================================================
           17. THAI
           ================================================= */

        th: {
            name: "Thai",
            nativeName: "ไทย",
            flag: "🇹🇭",
            locale: "th",
            translations: {
                languageTitle: "ภาษา",
                languageDescription: "เลือกภาษาที่ TrustAI จะใช้",
                currentLanguage: "ภาษาปัจจุบัน",
                searchLanguages: "ค้นหาภาษา...",
                languageNoticeTitle: "🌍 ภาษา TrustAI",
                languageNotice: "การเลือกภาษาของคุณจะถูกบันทึกไว้ในอุปกรณ์นี้",
                analyzeMessage: "🔍 วิเคราะห์ข้อความ",
                clear: "ล้าง",
                randomSample: "🎲 ตัวอย่างสุ่ม",
                analyzeText: "วิเคราะห์ข้อความ",
                pasteMessage: "วางข้อความหรือข้อความที่น่าสงสัยด้านล่าง",
                noMessage: "⚠️ ไม่มีข้อความ",
                pasteBeforeScanning: "วางข้อความก่อนทำการสแกน",
                lowRisk: "🟢 ความเสี่ยงต่ำ",
                caution: "🟡 ต้องระวัง",
                highRisk: "🟠 ความเสี่ยงสูง / น่าสงสัย",
                critical: "🚨 ตรวจพบภัยคุกคามร้ายแรง",
                riskScore: "คะแนนความเสี่ยง",
                detectedCategories: "หมวดหมู่ที่ตรวจพบ",
                detectionFindings: "🔎 ผลการตรวจจับ",
                recommendation: "🛡️ คำแนะนำจาก TrustAI:"
            }
        },

        /* =================================================
           18. POLISH
           ================================================= */

        pl: {
            name: "Polish",
            nativeName: "Polski",
            flag: "🇵🇱",
            locale: "pl",
            translations: {
                languageTitle: "Język",
                languageDescription: "Wybierz język używany przez TrustAI.",
                currentLanguage: "Aktualny język",
                searchLanguages: "Szukaj języków...",
                languageNoticeTitle: "🌍 Języki TrustAI",
                languageNotice: "Wybór języka zostanie zapisany na tym urządzeniu.",
                analyzeMessage: "🔍 Analizuj wiadomość",
                clear: "Wyczyść",
                randomSample: "🎲 Losowy przykład",
                analyzeText: "Analizuj tekst",
                pasteMessage: "Wklej poniżej wiadomość lub podejrzany tekst.",
                noMessage: "⚠️ Nie podano wiadomości",
                pasteBeforeScanning: "Wklej wiadomość przed skanowaniem.",
                lowRisk: "🟢 NISKIE RYZYKO",
                caution: "🟡 WYMAGANA OSTROŻNOŚĆ",
                highRisk: "🟠 WYSOKIE RYZYKO / PODEJRZANE",
                critical: "🚨 WYKRYTO KRYTYCZNE ZAGROŻENIE",
                riskScore: "Wynik ryzyka",
                detectedCategories: "Wykryte kategorie",
                detectionFindings: "🔎 Wyniki wykrywania",
                recommendation: "🛡️ Zalecenie TrustAI:"
            }
        },

        /* =================================================
           19. UKRAINIAN
           ================================================= */

        uk: {
            name: "Ukrainian",
            nativeName: "Українська",
            flag: "🇺🇦",
            locale: "uk",
            translations: {
                languageTitle: "Мова",
                languageDescription: "Виберіть мову для TrustAI.",
                currentLanguage: "Поточна мова",
                searchLanguages: "Пошук мов...",
                languageNoticeTitle: "🌍 Мови TrustAI",
                languageNotice: "Ваш вибір мови зберігається на цьому пристрої.",
                analyzeMessage: "🔍 Аналіз повідомлення",
                clear: "Очистити",
                randomSample: "🎲 Випадковий приклад",
                analyzeText: "Аналіз тексту",
                pasteMessage: "Вставте повідомлення або підозрілий текст нижче.",
                noMessage: "⚠️ Повідомлення не надано",
                pasteBeforeScanning: "Вставте повідомлення перед скануванням.",
                lowRisk: "🟢 НИЗЬКИЙ РИЗИК",
                caution: "🟡 ПОТРІБНА ОБЕРЕЖНІСТЬ",
                highRisk: "🟠 ВИСОКИЙ РИЗИК / ПІДОЗРІЛЕ",
                critical: "🚨 ВИЯВЛЕНО КРИТИЧНУ ЗАГРОЗУ",
                riskScore: "Оцінка ризику",
                detectedCategories: "Виявлені категорії",
                detectionFindings: "🔎 Результати виявлення",
                recommendation: "🛡️ Рекомендація TrustAI:"
            }
        },

        /* =================================================
           20. GREEK
           ================================================= */

        el: {
            name: "Greek",
            nativeName: "Ελληνικά",
            flag: "🇬🇷",
            locale: "el",
            translations: {
                languageTitle: "Γλώσσα",
                languageDescription: "Επιλέξτε τη γλώσσα που θα χρησιμοποιεί το TrustAI.",
                currentLanguage: "Τρέχουσα γλώσσα",
                searchLanguages: "Αναζήτηση γλωσσών...",
                languageNoticeTitle: "🌍 Γλώσσες TrustAI",
                languageNotice: "Η επιλογή γλώσσας αποθηκεύεται σε αυτή τη συσκευή.",
                analyzeMessage: "🔍 Ανάλυση μηνύματος",
                clear: "Εκκαθάριση",
                randomSample: "🎲 Τυχαίο δείγμα",
                analyzeText: "Ανάλυση κειμένου",
                pasteMessage: "Επικολλήστε ένα μήνυμα ή ύποπτο κείμενο παρακάτω.",
                noMessage: "⚠️ Δεν δόθηκε μήνυμα",
                pasteBeforeScanning: "Επικολλήστε ένα μήνυμα πριν από τη σάρωση.",
                lowRisk: "🟢 ΧΑΜΗΛΟΣ ΚΙΝΔΥΝΟΣ",
                caution: "🟡 ΑΠΑΙΤΕΙΤΑΙ ΠΡΟΣΟΧΗ",
                highRisk: "🟠 ΥΨΗΛΟΣ ΚΙΝΔΥΝΟΣ / ΥΠΟΠΤΟ",
                critical: "🚨 ΕΝΤΟΠΙΣΤΗΚΕ ΚΡΙΣΙΜΗ ΑΠΕΙΛΗ",
                riskScore: "Βαθμολογία κινδύνου",
                detectedCategories: "Κατηγορίες που εντοπίστηκαν",
                detectionFindings: "🔎 Αποτελέσματα ανίχνευσης",
                recommendation: "🛡️ Σύσταση TrustAI:"
            }
        },

        /* =================================================
           21. SWEDISH
           ================================================= */

        sv: {
            name: "Swedish",
            nativeName: "Svenska",
            flag: "🇸🇪",
            locale: "sv",
            translations: {
                languageTitle: "Språk",
                languageDescription: "Välj språket som TrustAI ska använda.",
                currentLanguage: "Aktuellt språk",
                searchLanguages: "Sök språk...",
                languageNoticeTitle: "🌍 TrustAI-språk",
                languageNotice: "Ditt språkval sparas på den här enheten.",
                analyzeMessage: "🔍 Analysera meddelande",
                clear: "Rensa",
                randomSample: "🎲 Slumpmässigt exempel",
                analyzeText: "Analysera text",
                pasteMessage: "Klistra in ett meddelande eller misstänkt text nedan.",
                noMessage: "⚠️ Inget meddelande angavs",
                pasteBeforeScanning: "Klistra in ett meddelande innan du skannar.",
                lowRisk: "🟢 LÅG RISK",
                caution: "🟡 FÖRSIKTIGHET KRÄVS",
                highRisk: "🟠 HÖG RISK / MISSTÄNKT",
                critical: "🚨 KRITISKT HOT UPPTÄCKT",
                riskScore: "Riskpoäng",
                detectedCategories: "Upptäckta kategorier",
                detectionFindings: "🔎 Detekteringsresultat",
                recommendation: "🛡️ TrustAI-rekommendation:"
            }
        },

        /* =================================================
           22. NORWEGIAN
           ================================================= */

        no: {
            name: "Norwegian",
            nativeName: "Norsk",
            flag: "🇳🇴",
            locale: "no",
            translations: {
                languageTitle: "Språk",
                languageDescription: "Velg språket TrustAI skal bruke.",
                currentLanguage: "Gjeldende språk",
                searchLanguages: "Søk etter språk...",
                languageNoticeTitle: "🌍 TrustAI-språk",
                languageNotice: "Språkvalget ditt lagres på denne enheten.",
                analyzeMessage: "🔍 Analyser melding",
                clear: "Tøm",
                randomSample: "🎲 Tilfeldig eksempel",
                analyzeText: "Analyser tekst",
                pasteMessage: "Lim inn en melding eller mistenkelig tekst nedenfor.",
                noMessage: "⚠️ Ingen melding oppgitt",
                pasteBeforeScanning: "Lim inn en melding før skanning.",
                lowRisk: "🟢 LAV RISIKO",
                caution: "🟡 FORSIKTIGHET KREVES",
                highRisk: "🟠 HØY RISIKO / MISTENKELIG",
                critical: "🚨 KRITISK TRUSSEL OPPDAGET",
                riskScore: "Risikoscore",
                detectedCategories: "Oppdagede kategorier",
                detectionFindings: "🔎 Funn",
                recommendation: "🛡️ TrustAI-anbefaling:"
            }
        },

        /* =================================================
           23. DANISH
           ================================================= */
       da: {
            name: "Danish",
            nativeName: "Dansk",
            flag: "🇩🇰",
            locale: "da",
            translations: {
                languageTitle: "Sprog",
                languageDescription: "Vælg det sprog TrustAI skal bruge.",
                currentLanguage: "Aktuelt sprog",
                searchLanguages: "Søg efter sprog...",
                languageNoticeTitle: "🌍 TrustAI-sprog",
                languageNotice: "Dit sprogvalg gemmes på denne enhed.",
                analyzeMessage: "🔍 Analyser besked",
                clear: "Ryd",
                randomSample: "🎲 Tilfældigt eksempel",
                analyzeText: "Analyser tekst",
                pasteMessage: "Indsæt en besked eller mistænkelig tekst nedenfor.",
                noMessage: "⚠️ Ingen besked angivet",
                pasteBeforeScanning: "Indsæt en besked før scanning.",
                lowRisk: "🟢 LAV RISIKO",
                caution: "🟡 FORSIGTIGHED PÅKRÆVET",
                highRisk: "🟠 HØJ RISIKO / MISTÆNKELIG",
                critical: "🚨 KRITISK TRUSSEL OPDAGET",
                riskScore: "Risikoscore",
                detectedCategories: "Registrerede kategorier",
                detectionFindings: "🔎 Resultater",
                recommendation: "🛡️ TrustAI-anbefaling:"
            }
        },

        /* =================================================
           24. FINNISH
           ================================================= */

        fi: {
            name: "Finnish",
            nativeName: "Suomi",
            flag: "🇫🇮",
            locale: "fi",
            translations: {
                languageTitle: "Kieli",
                languageDescription: "Valitse TrustAI:n käyttämä kieli.",
                currentLanguage: "Nykyinen kieli",
                searchLanguages: "Hae kieliä...",
                languageNoticeTitle: "🌍 TrustAI-kielet",
                languageNotice: "Kielivalintasi tallennetaan tälle laitteelle.",
                analyzeMessage: "🔍 Analysoi viesti",
                clear: "Tyhjennä",
                randomSample: "🎲 Satunnainen esimerkki",
                analyzeText: "Analysoi teksti",
                pasteMessage: "Liitä viesti tai epäilyttävä teksti alle.",
                noMessage: "⚠️ Viestiä ei annettu",
                pasteBeforeScanning: "Liitä viesti ennen skannausta.",
                lowRisk: "🟢 MATALA RISKI",
                caution: "🟡 VAROVAISUUTTA TARVITAAN",
                highRisk: "🟠 KORKEA RISKI / EPÄILYTTÄVÄ",
                critical: "🚨 KRIITTINEN UHKA HAVAITTU",
                riskScore: "Riskipisteet",
                detectedCategories: "Havaitut luokat",
                detectionFindings: "🔎 Havaitsemistulokset",
                recommendation: "🛡️ TrustAI-suositus:"
            }
        },

        /* =================================================
           25. HEBREW
           ================================================= */

        he: {
            name: "Hebrew",
            nativeName: "עברית",
            flag: "🇮🇱",
            locale: "he",
            translations: {
                languageTitle: "שפה",
                languageDescription: "בחר את השפה שבה TrustAI ישתמש.",
                currentLanguage: "שפה נוכחית",
                searchLanguages: "חיפוש שפות...",
                languageNoticeTitle: "🌍 שפות TrustAI",
                languageNotice: "בחירת השפה שלך נשמרת במכשיר זה.",
                analyzeMessage: "🔍 ניתוח הודעה",
                clear: "נקה",
                randomSample: "🎲 דוגמה אקראית",
                analyzeText: "ניתוח טקסט",
                pasteMessage: "הדבק הודעה או טקסט חשוד למטה.",
                noMessage: "⚠️ לא סופקה הודעה",
                pasteBeforeScanning: "הדבק הודעה לפני הסריקה.",
                lowRisk: "🟢 סיכון נמוך",
                caution: "🟡 נדרשת זהירות",
                highRisk: "🟠 סיכון גבוה / חשוד",
                critical: "🚨 זוהה איום קריטי",
                riskScore: "ציון סיכון",
                detectedCategories: "קטגוריות שזוהו",
                detectionFindings: "🔎 תוצאות זיהוי",
                recommendation: "🛡️ המלצת TrustAI:"
            }
        },

        /* =================================================
           26. MALAY
           ================================================= */

        ms: {
            name: "Malay",
            nativeName: "Bahasa Melayu",
            flag: "🇲🇾",
            locale: "ms",
            translations: {
                languageTitle: "Bahasa",
                languageDescription: "Pilih bahasa yang akan digunakan oleh TrustAI.",
                currentLanguage: "Bahasa semasa",
                searchLanguages: "Cari bahasa...",
                languageNoticeTitle: "🌍 Bahasa TrustAI",
                languageNotice: "Pilihan bahasa anda disimpan pada peranti ini.",
                analyzeMessage: "🔍 Analisis Mesej",
                clear: "Kosongkan",
                randomSample: "🎲 Sampel Rawak",
                analyzeText: "Analisis Teks",
                pasteMessage: "Tampal mesej atau teks mencurigakan di bawah.",
                noMessage: "⚠️ Tiada mesej diberikan",
                pasteBeforeScanning: "Tampal mesej sebelum mengimbas.",
                lowRisk: "🟢 RISIKO RENDAH",
                caution: "🟡 BERHATI-HATI",
                highRisk: "🟠 RISIKO TINGGI / MENCURIGAKAN",
                critical: "🚨 ANCAMAN KRITIKAL DIKESAN",
                riskScore: "Skor Risiko",
                detectedCategories: "Kategori Dikesan",
                detectionFindings: "🔎 Hasil Pengesanan",
                recommendation: "🛡️ Cadangan TrustAI:"
            }
        },

        /* =================================================
           27. FILIPINO
           ================================================= */

        tl: {
            name: "Filipino",
            nativeName: "Filipino",
            flag: "🇵🇭",
            locale: "fil",
            translations: {
                languageTitle: "Wika",
                languageDescription: "Piliin ang wikang gagamitin ng TrustAI.",
                currentLanguage: "Kasalukuyang wika",
                searchLanguages: "Maghanap ng wika...",
                languageNoticeTitle: "🌍 Mga Wika ng TrustAI",
                languageNotice: "Nai-save ang iyong piniling wika sa device na ito.",
                analyzeMessage: "🔍 Suriin ang Mensahe",
                clear: "I-clear",
                randomSample: "🎲 Random na Sample",
                analyzeText: "Suriin ang Teksto",
                pasteMessage: "I-paste sa ibaba ang mensahe o kahina-hinalang teksto.",
                noMessage: "⚠️ Walang mensaheng ibinigay",
                pasteBeforeScanning: "Mag-paste ng mensahe bago mag-scan.",
                lowRisk: "🟢 MABABANG PANGANIB",
                caution: "🟡 KAILANGAN NG PAG-IINGAT",
                highRisk: "🟠 MATAAS NA PANGANIB / KAHINA-HINALA",
                critical: "🚨 NATUKLASAN ANG KRITIKAL NA BANTA",
                riskScore: "Risk Score",
                detectedCategories: "Mga Natukoy na Kategorya",
                detectionFindings: "🔎 Mga Resulta",
                recommendation: "🛡️ Rekomendasyon ng TrustAI:"
            }
        },

        /* =================================================
           28. SWAHILI
           ================================================= */

        sw: {
            name: "Swahili",
            nativeName: "Kiswahili",
            flag: "🇰🇪",
            locale: "sw",
            translations: {
                languageTitle: "Lugha",
                languageDescription: "Chagua lugha ambayo TrustAI itatumia.",
                currentLanguage: "Lugha ya sasa",
                searchLanguages: "Tafuta lugha...",
                languageNoticeTitle: "🌍 Lugha za TrustAI",
                languageNotice: "Chaguo lako la lugha limehifadhiwa kwenye kifaa hiki.",
                analyzeMessage: "🔍 Changanua Ujumbe",
                clear: "Futa",
                randomSample: "🎲 Mfano wa Nasibu",
                analyzeText: "Changanua Maandishi",
                pasteMessage: "Bandika ujumbe au maandishi ya kutiliwa shaka hapa chini.",
                noMessage: "⚠️ Hakuna ujumbe uliotolewa",
                pasteBeforeScanning: "Bandika ujumbe kabla ya kuchanganua.",
                lowRisk: "🟢 HATARI NDOGO",
                caution: "🟡 TAHADHARI INAHITAJIKA",
                highRisk: "🟠 HATARI KUBWA / INATIA SHAKA",
                critical: "🚨 TISHIO KUBWA LIMEGUNDULIKA",
                riskScore: "Alama ya Hatari",
                detectedCategories: "Aina Zilizogunduliwa",
                detectionFindings: "🔎 Matokeo ya Utambuzi",
                recommendation: "🛡️ Pendekezo la TrustAI:"
            }
        },

        /* =================================================
           29. HAUSA
           ================================================= */

        ha: {
            name: "Hausa",
            nativeName: "Hausa",
            flag: "🇳🇬",
            locale: "ha",
            translations: {
                languageTitle: "Harshe",
                languageDescription: "Zaɓi harshen da TrustAI zai yi amfani da shi.",
                currentLanguage: "Harshen yanzu",
                searchLanguages: "Nemo harshe...",
                languageNoticeTitle: "🌍 Harsunan TrustAI",
                languageNotice: "An adana zaɓin harshenka a wannan na'urar.",
                analyzeMessage: "🔍 Bincika Saƙo",
                clear: "Share",
                randomSample: "🎲 Misali na Bazuwar",
                analyzeText: "Bincika Rubutu",
                pasteMessage: "Manna saƙo ko rubutu mai shakku a ƙasa.",
                noMessage: "⚠️ Ba a samar da saƙo ba",
                pasteBeforeScanning: "Manna saƙo kafin bincike.",
                lowRisk: "🟢 ƘARAMIN HAƊARI",
                caution: "🟡 ANA BUƘATAR HATTARA",
                highRisk: "🟠 BABBAR BARAZANA / MAI SHAKU",
                critical: "🚨 AN GANO BABBAR BARAZANA",
                riskScore: "Makin Haɗari",
                detectedCategories: "Rukunin da Aka Gano",
                detectionFindings: "🔎 Sakamakon Bincike",
                recommendation: "🛡️ Shawarar TrustAI:"
            }
        },

        /* =================================================
           30. YORUBA
           ================================================= */

        yo: {
            name: "Yoruba",
            nativeName: "Yorùbá",
            flag: "🇳🇬",
            locale: "yo",
            translations: {
                languageTitle: "Èdè",
                languageDescription: "Yan èdè tí TrustAI máa lò.",
                currentLanguage: "Èdè tó wà lọ́wọ́",
                searchLanguages: "Wá èdè...",
                languageNoticeTitle: "🌍 Àwọn èdè TrustAI",
                languageNotice: "A ti fipamọ́ yíyan èdè rẹ sínú ẹ̀rọ yìí.",
                analyzeMessage: "🔍 Ṣàyẹ̀wò Ìfiránṣẹ́",
                clear: "Pa",
                randomSample: "🎲 Àpẹẹrẹ Àìdá",
                analyzeText: "Ṣàyẹ̀wò Ọ̀rọ̀",
                pasteMessage: "Fi ìfiránṣẹ́ tàbí ọ̀rọ̀ tí ó ń dá ọ lójú sí ibi yìí.",
                noMessage: "⚠️ A kò pèsè ìfiránṣẹ́",
                pasteBeforeScanning: "Fi ìfiránṣẹ́ sí ibi kí o tó bẹ̀rẹ̀ ìṣàyẹ̀wò.",
                lowRisk: "🟢 EWU KÉKÈ",
                caution: "🟡 ÀKÍYÈSÍ ṢE PÀTÀKÌ",
                highRisk: "🟠 EWU GÍGA / ALÁÌGBẸ́KẸ̀LẸ́",
                critical: "🚨 A TI RÍ ÌHALẸ̀ KÍKÀ",
                riskScore: "Àmì Ewu",
                detectedCategories: "Àwọn Ẹ̀ka Tí A Rí",
                detectionFindings: "🔎 Àbájáde Ìṣàyẹ̀wò",
                recommendation: "🛡️ Àbá TrustAI:"
            }
        },

        /* =================================================
           31. IGBO
           ================================================= */

        ig: {
            name: "Igbo",
            nativeName: "Igbo",
            flag: "🇳🇬",
            locale: "ig",
            translations: {
                languageTitle: "Asụsụ",
                languageDescription: "Họrọ asụsụ TrustAI ga-eji.",
                currentLanguage: "Asụsụ ugbu a",
                searchLanguages: "Chọọ asụsụ...",
                languageNoticeTitle: "🌍 Asụsụ TrustAI",
                languageNotice: "A ga-echekwa nhọrọ asụsụ gị na ngwaọrụ a.",
                analyzeMessage: "🔍 Nyochaa Ozi",
                clear: "Hichapụ",
                randomSample: "🎲 Ihe Nlereanya Na-enweghị Usoro",
                analyzeText: "Nyochaa Ederede",
                pasteMessage: "Tapawa ozi ma ọ bụ ederede na-enyo enyo n'okpuru.",
                noMessage: "⚠️ Enweghị ozi enyere",
                pasteBeforeScanning: "Tapawa ozi tupu nyocha.",
                lowRisk: "🟢 NSOGBU DỊ NTỊ",
                caution: "🟡 ACHỌRỌ NLEZIANYA",
                highRisk: "🟠 NSOGBU DỊ UKWU / ENYO",
                critical: "🚨 ACHỌPỤTARA NSOGBU DỊ OKÉ",
                riskScore: "Akara Nsogbu",
                detectedCategories: "Ụdị Achọpụtara",
                detectionFindings: "🔎 Nsonaazụ Nchọpụta",
                recommendation: "🛡️ Ndụmọdụ TrustAI:"
            }
        },

        /* =================================================
           32. ROMANIAN
           ================================================= */

        ro: {
            name: "Romanian",
            nativeName: "Română",
            flag: "🇷🇴",
            locale: "ro",
            translations: {
                languageTitle: "Limbă",
                languageDescription: "Alege limba folosită de TrustAI.",
                currentLanguage: "Limba curentă",
                searchLanguages: "Caută limbi...",
                languageNoticeTitle: "🌍 Limbile TrustAI",
                languageNotice: "Alegerea limbii este salvată pe acest dispozitiv.",
                analyzeMessage: "🔍 Analizează mesajul",
                clear: "Șterge",
                randomSample: "🎲 Exemplu aleatoriu",
                analyzeText: "Analizează textul",
                pasteMessage: "Lipește mai jos un mesaj sau un text suspect.",
                noMessage: "⚠️ Nu a fost furnizat niciun mesaj",
                pasteBeforeScanning: "Lipește un mesaj înainte de scanare.",
                lowRisk: "🟢 RISC SCĂZUT",
                caution: "🟡 ESTE NECESARĂ PRUDENȚĂ",
                highRisk: "🟠 RISC RIDICAT / SUSPECT",
                critical: "🚨 AMENINȚARE CRITICĂ DETECTATĂ",
                riskScore: "Scor de risc",
                detectedCategories: "Categorii detectate",
                detectionFindings: "🔎 Rezultatele detectării",
                recommendation: "🛡️ Recomandarea TrustAI:"
            }
        },

        /* =================================================
           33. CZECH
           ================================================= */

        cs: {
            name: "Czech",
            nativeName: "Čeština",
            flag: "🇨🇿",
            locale: "cs",
            translations: {
                languageTitle: "Jazyk",
                languageDescription: "Vyberte jazyk, který bude TrustAI používat.",
                currentLanguage: "Aktuální jazyk",
                searchLanguages: "Hledat jazyky...",
                languageNoticeTitle: "🌍 Jazyky TrustAI",
                languageNotice: "Volba jazyka se uloží do tohoto zařízení.",
                analyzeMessage: "🔍 Analyzovat zprávu",
                clear: "Vymazat",
                randomSample: "🎲 Náhodný vzorek",
                analyzeText: "Analyzovat text",
                pasteMessage: "Vložte níže zprávu nebo podezřelý text.",
                noMessage: "⚠️ Nebyla zadána žádná zpráva",
                pasteBeforeScanning: "Před skenováním vložte zprávu.",
                lowRisk: "🟢 NÍZKÉ RIZIKO",
                caution: "🟡 VYŽADOVÁNA OPATRNOST",
                highRisk: "🟠 VYSOKÉ RIZIKO / PODEZŘELÉ",
                critical: "🚨 ZJIŠTĚNA KRITICKÁ HROZBA",
                riskScore: "Skóre rizika",
                detectedCategories: "Zjištěné kategorie",
                detectionFindings: "🔎 Výsledky detekce",
                recommendation: "🛡️ Doporučení TrustAI:"
            }
        },

        /* =================================================
           34. HUNGARIAN
           ================================================= */

        hu: {
            name: "Hungarian",
            nativeName: "Magyar",
            flag: "🇭🇺",
            locale: "hu",
            translations: {
                languageTitle: "Nyelv",
                languageDescription: "Válassza ki a TrustAI által használt nyelvet.",
                currentLanguage: "Jelenlegi nyelv",
                searchLanguages: "Nyelvek keresése...",
                languageNoticeTitle: "🌍 TrustAI nyelvek",
                languageNotice: "A nyelvi beállítás ezen az eszközön kerül mentésre.",
                analyzeMessage: "🔍 Üzenet elemzése",
                clear: "Törlés",
                randomSample: "🎲 Véletlenszerű minta",
                analyzeText: "Szöveg elemzése",
                pasteMessage: "Illesszen be egy üzenetet vagy gyanús szöveget.",
                noMessage: "⚠️ Nincs megadott üzenet",
                pasteBeforeScanning: "A vizsgálat előtt illesszen be egy üzenetet.",
                lowRisk: "🟢 ALACSONY KOCKÁZAT",
                caution: "🟡 ÓVATOSSÁG SZÜKSÉGES",
                highRisk: "🟠 MAGAS KOCKÁZAT / GYANÚS",
                critical: "🚨 KRITIKUS FENYEGETÉS ÉSZLELVE",
                riskScore: "Kockázati pontszám",
                detectedCategories: "Észlelt kategóriák",
                detectionFindings: "🔎 Észlelési eredmények",
                recommendation: "🛡️ TrustAI ajánlás:"
            }
        },

        /* =================================================
           35. BULGARIAN
           ================================================= */

        bg: {
            name: "Bulgarian",
            nativeName: "Български",
            flag: "🇧🇬",
            locale: "bg",
            translations: {
                languageTitle: "Език",
                languageDescription: "Изберете езика, който TrustAI ще използва.",
                currentLanguage: "Текущ език",
                searchLanguages: "Търсене на езици...",
                languageNoticeTitle: "🌍 Езици на TrustAI",
                languageNotice: "Вашият избор на език се запазва на това устройство.",
                analyzeMessage: "🔍 Анализирай съобщението",
                clear: "Изчисти",
                randomSample: "🎲 Случаен пример",
                analyzeText: "Анализирай текста",
                pasteMessage: "Поставете съобщение или подозрителен текст по-долу.",
                noMessage: "⚠️ Няма предоставено съобщение",
                pasteBeforeScanning: "Поставете съобщение преди сканиране.",
                lowRisk: "🟢 НИСЪК РИСК",
                caution: "🟡 НЕОБХОДИМА Е ПРЕДПАЗЛИВОСТ",
                highRisk: "🟠 ВИСОК РИСК / ПОДОЗРИТЕЛНО",
                critical: "🚨 ОТКРИТА Е КРИТИЧНА ЗАПЛАХА",
                riskScore: "Оценка на риска",
                detectedCategories: "Открити категории",
                detectionFindings: "🔎 Резултати от откриването",
                recommendation: "🛡️ Препоръка на TrustAI:"
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

        document.documentElement.lang =
            languages[code].locale;

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

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyTranslations();

        }
    );


})();
