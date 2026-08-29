/* =========================================================
   TRUST AI — GLOBAL LANGUAGE SYSTEM
   7 LANGUAGES
   ========================================================= */

(function () {

    "use strict";

    /* =====================================================
       SUPPORTED LANGUAGES
       ===================================================== */

    const languages = {
        en: "English",
        fr: "Français",
        nl: "Nederlands",
        de: "Deutsch",
        pt: "Português",
        es: "Español",
        it: "Italiano"
    };


    /* =====================================================
       DEFAULT LANGUAGE
       ===================================================== */

    const DEFAULT_LANGUAGE = "en";

    const STORAGE_KEY =
        "trustai_language";


    /* =====================================================
       GET SAVED LANGUAGE
       ===================================================== */

    function getSavedLanguage() {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (
            saved &&
            Object.prototype.hasOwnProperty.call(
                languages,
                saved
            )
        ) {

            return saved;

        }

        return DEFAULT_LANGUAGE;

    }


    /* =====================================================
       GET TRANSLATION FROM NESTED KEY
       Example:
       navigation.home
       ===================================================== */

    function getTranslation(
        object,
        key
    ) {

        return key
            .split(".")
            .reduce(
                function (
                    current,
                    part
                ) {

                    if (
                        current &&
                        Object.prototype.hasOwnProperty.call(
                            current,
                            part
                        )
                    ) {

                        return current[part];

                    }

                    return null;

                },
                object
            );

    }


    /* =====================================================
       APPLY TRANSLATIONS
       ===================================================== */

    function applyTranslations(
        translations
    ) {


        /* TEXT */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );

                const value =
                    getTranslation(
                        translations,
                        key
                    );


                if (
                    typeof value ===
                    "string"
                ) {

                    element.textContent =
                        value;

                }

            }
        );


        /* PLACEHOLDERS */

        const placeholders =
            document.querySelectorAll(
                "[data-i18n-placeholder]"
            );


        placeholders.forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                const value =
                    getTranslation(
                        translations,
                        key
                    );


                if (
                    typeof value ===
                    "string"
                ) {

                    element.placeholder =
                        value;

                }

            }
        );


        /* ARIA LABELS */

        const ariaElements =
            document.querySelectorAll(
                "[data-i18n-aria]"
            );


        ariaElements.forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria"
                    );

                const value =
                    getTranslation(
                        translations,
                        key
                    );


                if (
                    typeof value ===
                    "string"
                ) {

                    element.setAttribute(
                        "aria-label",
                        value
                    );

                }

            }
        );

    }


    /* =====================================================
       LOAD LANGUAGE
       ===================================================== */

    async function loadLanguage(
        language
    ) {

        try {

            const response =
                await fetch(
                    `translations/${language}.json`
                );


            if (
                !response.ok
            ) {

                throw new Error(
                    `Translation file not found: ${language}.json`
                );

            }


            const translations =
                await response.json();


            window.trustAITranslations =
                translations;


            window.trustAILanguage =
                language;


            applyTranslations(
                translations
            );


            localStorage.setItem(
                STORAGE_KEY,
                language
            );


            updateLanguageSelector(
                language
            );


            document.documentElement.lang =
                language;


        } catch (error) {

            console.error(
                "TrustAI language error:",
                error
            );

        }

    }


    /* =====================================================
       CREATE LANGUAGE SELECTOR
       ===================================================== */

    function createLanguageSelector() {


        if (
            document.getElementById(
                "trustAILanguageSelector"
            )
        ) {

            return;

        }


        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.id =
            "trustAILanguageWrapper";


        /* WRAPPER STYLE */

        wrapper.style.position =
            "fixed";

        wrapper.style.bottom =
            "18px";

        wrapper.style.right =
            "18px";

        wrapper.style.zIndex =
            "2000";


        const selector =
            document.createElement(
                "select"
            );


        selector.id =
            "trustAILanguageSelector";


        selector.setAttribute(
            "aria-label",
            "Language"
        );


        selector.title =
            "Choose language";


        /* SELECTOR STYLE */

        selector.style.padding =
            "10px 14px";

        selector.style.border =
            "1px solid rgba(255,255,255,0.15)";

        selector.style.borderRadius =
            "12px";

        selector.style.background =
            "#0f172a";

        selector.style.color =
            "#ffffff";

        selector.style.fontSize =
            "14px";

        selector.style.fontWeight =
            "600";

        selector.style.cursor =
            "pointer";

        selector.style.outline =
            "none";

        selector.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.35)";


        /* LANGUAGE OPTIONS */

        Object.entries(
            languages
        ).forEach(
            function (
                [code, name]
            ) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    code;


                option.textContent =
                    name;


                selector.appendChild(
                    option
                );

            }
        );


        /* CHANGE LANGUAGE */

        selector.addEventListener(
            "change",
            function () {

                loadLanguage(
                    selector.value
                );

            }
        );


        wrapper.appendChild(
            selector
        );


        document.body.appendChild(
            wrapper
        );

    }


    /* =====================================================
       UPDATE SELECTOR
       ===================================================== */

    function updateLanguageSelector(
        language
    ) {

        const selector =
            document.getElementById(
                "trustAILanguageSelector"
            );


        if (selector) {

            selector.value =
                language;

        }

    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    async function initializeLanguageSystem() {


        createLanguageSelector();


        const language =
            getSavedLanguage();


        await loadLanguage(
            language
        );

    }


    /* =====================================================
       PUBLIC TRUST AI LANGUAGE API
       ===================================================== */

    window.TrustAILanguage = {

        languages: languages,


        getCurrentLanguage:
            function () {

                return (
                    window.trustAILanguage ||
                    getSavedLanguage()
                );

            },


        setLanguage:
            function (
                language
            ) {

                if (
                    Object.prototype.hasOwnProperty.call(
                        languages,
                        language
                    )
                ) {

                    return loadLanguage(
                        language
                    );

                }


                console.warn(
                    "Unsupported TrustAI language:",
                    language
                );

            }

        };



    /* =====================================================
       START SYSTEM
       ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguageSystem
        );

    } else {

        initializeLanguageSystem();

    }

})();
