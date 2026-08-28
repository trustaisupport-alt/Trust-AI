/* ============================================================
   TRUSTAI GLOBAL COUNTRY & CURRENCY SYSTEM
   Version: 2.0

   GLOBAL ACCESS
   Priority markets:
   🇺🇸 USA
   🇬🇧 United Kingdom
   🇨🇦 Canada
   🇩🇪 Germany
   🇦🇺 Australia
   🇪🇸 Spain
   🇵🇹 Portugal

   TrustAI remains accessible worldwide.
   ============================================================ */

(function () {

    "use strict";


    /* ============================================================
       STORAGE
    ============================================================ */

    const STORAGE_KEY =
        "trustai_country";


    const DEFAULT_COUNTRY =
        "US";


    /* ============================================================
       COUNTRY DEFINITIONS
    ============================================================ */

    const countries = {

        US: {
            code: "US",
            name: "United States",
            flag: "🇺🇸",
            currency: "USD",
            symbol: "$",
            locale: "en-US",
            priority: true
        },

        GB: {
            code: "GB",
            name: "United Kingdom",
            flag: "🇬🇧",
            currency: "GBP",
            symbol: "£",
            locale: "en-GB",
            priority: true
        },

        CA: {
            code: "CA",
            name: "Canada",
            flag: "🇨🇦",
            currency: "CAD",
            symbol: "C$",
            locale: "en-CA",
            priority: true
        },

        DE: {
            code: "DE",
            name: "Germany",
            flag: "🇩🇪",
            currency: "EUR",
            symbol: "€",
            locale: "de-DE",
            priority: true
        },

        AU: {
            code: "AU",
            name: "Australia",
            flag: "🇦🇺",
            currency: "AUD",
            symbol: "A$",
            locale: "en-AU",
            priority: true
        },

        ES: {
            code: "ES",
            name: "Spain",
            flag: "🇪🇸",
            currency: "EUR",
            symbol: "€",
            locale: "es-ES",
            priority: true
        },

        PT: {
            code: "PT",
            name: "Portugal",
            flag: "🇵🇹",
            currency: "EUR",
            symbol: "€",
            locale: "pt-PT",
            priority: true
        },


        /* ========================================================
           OTHER COUNTRIES
           ======================================================== */

        NG: {
            code: "NG",
            name: "Nigeria",
            flag: "🇳🇬",
            currency: "NGN",
            symbol: "₦",
            locale: "en-NG",
            priority: false
        },

        FR: {
            code: "FR",
            name: "France",
            flag: "🇫🇷",
            currency: "EUR",
            symbol: "€",
            locale: "fr-FR",
            priority: false
        },

        IT: {
            code: "IT",
            name: "Italy",
            flag: "🇮🇹",
            currency: "EUR",
            symbol: "€",
            locale: "it-IT",
            priority: false
        },

        NL: {
            code: "NL",
            name: "Netherlands",
            flag: "🇳🇱",
            currency: "EUR",
            symbol: "€",
            locale: "nl-NL",
            priority: false
        },

        BE: {
            code: "BE",
            name: "Belgium",
            flag: "🇧🇪",
            currency: "EUR",
            symbol: "€",
            locale: "nl-BE",
            priority: false
        },

        IE: {
            code: "IE",
            name: "Ireland",
            flag: "🇮🇪",
            currency: "EUR",
            symbol: "€",
            locale: "en-IE",
            priority: false
        },

        CH: {
            code: "CH",
            name: "Switzerland",
            flag: "🇨🇭",
            currency: "CHF",
            symbol: "CHF",
            locale: "de-CH",
            priority: false
        },

        SE: {
            code: "SE",
            name: "Sweden",
            flag: "🇸🇪",
            currency: "SEK",
            symbol: "kr",
            locale: "sv-SE",
            priority: false
        },

        NO: {
            code: "NO",
            name: "Norway",
            flag: "🇳🇴",
            currency: "NOK",
            symbol: "kr",
            locale: "nb-NO",
            priority: false
        },

        DK: {
            code: "DK",
            name: "Denmark",
            flag: "🇩🇰",
            currency: "DKK",
            symbol: "kr",
            locale: "da-DK",
            priority: false
        },

        FI: {
            code: "FI",
            name: "Finland",
            flag: "🇫🇮",
            currency: "EUR",
            symbol: "€",
            locale: "fi-FI",
            priority: false
        },

        PL: {
            code: "PL",
            name: "Poland",
            flag: "🇵🇱",
            currency: "PLN",
            symbol: "zł",
            locale: "pl-PL",
            priority: false
        },

        IN: {
            code: "IN",
            name: "India",
            flag: "🇮🇳",
            currency: "INR",
            symbol: "₹",
            locale: "en-IN",
            priority: false
        },

        BR: {
            code: "BR",
            name: "Brazil",
            flag: "🇧🇷",
            currency: "BRL",
            symbol: "R$",
            locale: "pt-BR",
            priority: false
        },

        MX: {
            code: "MX",
            name: "Mexico",
            flag: "🇲🇽",
            currency: "MXN",
            symbol: "$",
            locale: "es-MX",
            priority: false
        },

        ZA: {
            code: "ZA",
            name: "South Africa",
            flag: "🇿🇦",
            currency: "ZAR",
            symbol: "R",
            locale: "en-ZA",
            priority: false
        },

        GH: {
            code: "GH",
            name: "Ghana",
            flag: "🇬🇭",
            currency: "GHS",
            symbol: "GH₵",
            locale: "en-GH",
            priority: false
        },

        KE: {
            code: "KE",
            name: "Kenya",
            flag: "🇰🇪",
            currency: "KES",
            symbol: "KSh",
            locale: "en-KE",
            priority: false
        },

        JP: {
            code: "JP",
            name: "Japan",
            flag: "🇯🇵",
            currency: "JPY",
            symbol: "¥",
            locale: "ja-JP",
            priority: false
        },

        KR: {
            code: "KR",
            name: "South Korea",
            flag: "🇰🇷",
            currency: "KRW",
            symbol: "₩",
            locale: "ko-KR",
            priority: false
        },

        SG: {
            code: "SG",
            name: "Singapore",
            flag: "🇸🇬",
            currency: "SGD",
            symbol: "S$",
            locale: "en-SG",
            priority: false
        },

        NZ: {
            code: "NZ",
            name: "New Zealand",
            flag: "🇳🇿",
            currency: "NZD",
            symbol: "NZ$",
            locale: "en-NZ",
            priority: false
        }

    };


    /* ============================================================
       GET COUNTRY CODE
       ============================================================ */

    function getCountryCode() {

        try {

            const saved =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (
                saved &&
                countries[saved]
            ) {

                return saved;

            }

        } catch (error) {

            console.warn(
                "TrustAI: Unable to read country.",
                error
            );

        }

        return DEFAULT_COUNTRY;

    }


    /* ============================================================
       GET COUNTRY
       ============================================================ */

    function getCountry() {

        const code =
            getCountryCode();

        return (
            countries[code] ||
            countries[DEFAULT_COUNTRY]
        );

    }


    /* ============================================================
       SET COUNTRY
       ============================================================ */

    function setCountry(code) {

        if (
            !countries[code]
        ) {

            console.warn(
                "TrustAI: Unsupported country:",
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
                "TrustAI: Unable to save country.",
                error
            );

        }


        document.documentElement.lang =
            countries[code].locale;


        /*
           Notify the TrustAI application.
        */

        window.dispatchEvent(
            new CustomEvent(
                "trustai-country-changed",
                {
                    detail: {
                        country:
                            countries[code]
                    }
                }
            )
        );


        return true;

    }


    /* ============================================================
       GET ALL COUNTRIES
       ============================================================ */

    function getCountries() {

        return countries;

    }


    /* ============================================================
       GET COUNTRY LIST
       ============================================================ */

    function getCountryList() {

        return Object.keys(countries)
            .map(function (code) {

                return countries[code];

            });

    }


    /* ============================================================
       GET PRIORITY COUNTRIES
       ============================================================ */

    function getPriorityCountries() {

        return Object.keys(countries)
            .filter(function (code) {

                return countries[code].priority === true;

            })
            .map(function (code) {

                return countries[code];

            });

    }


    /* ============================================================
       GET CURRENCY
       ============================================================ */

    function getCurrency() {

        return getCountry().currency;

    }


    /* ============================================================
       GET CURRENCY SYMBOL
       ============================================================ */

    function getCurrencySymbol() {

        return getCountry().symbol;

    }


    /* ============================================================
       FORMAT PRICE
       ============================================================ */

    function formatPrice(amount) {

        const country =
            getCountry();


        try {

            return new Intl.NumberFormat(
                country.locale,
                {
                    style: "currency",
                    currency: country.currency,
                    maximumFractionDigits: 2
                }
            ).format(amount);

        } catch (error) {

            return (
                country.symbol +
                Number(amount).toLocaleString()
            );

        }

    }


    /* ============================================================
       SAVE CHECKOUT CURRENCY
       ============================================================ */

    function prepareCheckoutCurrency() {

        const country =
            getCountry();


        try {

            localStorage.setItem(
                "trustai_selected_currency",
                country.currency
            );


            localStorage.setItem(
                "trustai_checkout_currency",
                country.currency
            );


            localStorage.setItem(
                "trustai_checkout_country",
                country.code
            );

        } catch (error) {

            console.warn(
                "TrustAI: Unable to save checkout currency.",
                error
            );

        }


        return country;

    }


    /* ============================================================
       INITIALIZE
       ============================================================ */

    function initialize() {

        const country =
            getCountry();


        document.documentElement.lang =
            country.locale;


        /*
           Save the currently selected
           currency for checkout.
        */

        prepareCheckoutCurrency();

    }


    /* ============================================================
       PUBLIC TRUSTAI COUNTRY API
       ============================================================ */

    window.TrustAICountry = {

        countries: countries,

        getCountryCode:
            getCountryCode,

        getCountry:
            getCountry,

        getCountries:
            getCountries,

        getCountryList:
            getCountryList,

        getPriorityCountries:
            getPriorityCountries,

        setCountry:
            setCountry,

        getCurrency:
            getCurrency,

        getCurrencySymbol:
            getCurrencySymbol,

        formatPrice:
            formatPrice,

        prepareCheckoutCurrency:
            prepareCheckoutCurrency

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
