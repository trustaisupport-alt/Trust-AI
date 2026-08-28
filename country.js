/* =====================================================
   TRUSTAI COUNTRY & CURRENCY SYSTEM
   ===================================================== */

(function () {
    "use strict";

    const COUNTRIES = {
        NG: {
            name: "Nigeria",
            currency: "NGN",
            symbol: "₦",
            locale: "en-NG"
        },

        US: {
            name: "United States",
            currency: "USD",
            symbol: "$",
            locale: "en-US"
        },

        GB: {
            name: "United Kingdom",
            currency: "GBP",
            symbol: "£",
            locale: "en-GB"
        },

        CA: {
            name: "Canada",
            currency: "CAD",
            symbol: "C$",
            locale: "en-CA"
        },

        AU: {
            name: "Australia",
            currency: "AUD",
            symbol: "A$",
            locale: "en-AU"
        },

        IN: {
            name: "India",
            currency: "INR",
            symbol: "₹",
            locale: "en-IN"
        },

        GH: {
            name: "Ghana",
            currency: "GHS",
            symbol: "GH₵",
            locale: "en-GH"
        },

        ZA: {
            name: "South Africa",
            currency: "ZAR",
            symbol: "R",
            locale: "en-ZA"
        },

        KE: {
            name: "Kenya",
            currency: "KES",
            symbol: "KSh",
            locale: "en-KE"
        },

        DE: {
            name: "Germany",
            currency: "EUR",
            symbol: "€",
            locale: "de-DE"
        },

        FR: {
            name: "France",
            currency: "EUR",
            symbol: "€",
            locale: "fr-FR"
        },

        ES: {
            name: "Spain",
            currency: "EUR",
            symbol: "€",
            locale: "es-ES"
        },

        IT: {
            name: "Italy",
            currency: "EUR",
            symbol: "€",
            locale: "it-IT"
        },

        NL: {
            name: "Netherlands",
            currency: "EUR",
            symbol: "€",
            locale: "nl-NL"
        },

        PT: {
            name: "Portugal",
            currency: "EUR",
            symbol: "€",
            locale: "pt-PT"
        },

        BR: {
            name: "Brazil",
            currency: "BRL",
            symbol: "R$",
            locale: "pt-BR"
        },

        MX: {
            name: "Mexico",
            currency: "MXN",
            symbol: "MX$",
            locale: "es-MX"
        },

        AE: {
            name: "United Arab Emirates",
            currency: "AED",
            symbol: "د.إ",
            locale: "ar-AE"
        },

        SA: {
            name: "Saudi Arabia",
            currency: "SAR",
            symbol: "﷼",
            locale: "ar-SA"
        },

        JP: {
            name: "Japan",
            currency: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },

        CN: {
            name: "China",
            currency: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },

        KR: {
            name: "South Korea",
            currency: "KRW",
            symbol: "₩",
            locale: "ko-KR"
        },

        SG: {
            name: "Singapore",
            currency: "SGD",
            symbol: "S$",
            locale: "en-SG"
        },

        MY: {
            name: "Malaysia",
            currency: "MYR",
            symbol: "RM",
            locale: "ms-MY"
        },

        ID: {
            name: "Indonesia",
            currency: "IDR",
            symbol: "Rp",
            locale: "id-ID"
        },

        PH: {
            name: "Philippines",
            currency: "PHP",
            symbol: "₱",
            locale: "en-PH"
        },

        NZ: {
            name: "New Zealand",
            currency: "NZD",
            symbol: "NZ$",
            locale: "en-NZ"
        },

        CH: {
            name: "Switzerland",
            currency: "CHF",
            symbol: "CHF",
            locale: "de-CH"
        },

        SE: {
            name: "Sweden",
            currency: "SEK",
            symbol: "kr",
            locale: "sv-SE"
        },

        NO: {
            name: "Norway",
            currency: "NOK",
            symbol: "kr",
            locale: "nb-NO"
        },

        DK: {
            name: "Denmark",
            currency: "DKK",
            symbol: "kr",
            locale: "da-DK"
        },

        PL: {
            name: "Poland",
            currency: "PLN",
            symbol: "zł",
            locale: "pl-PL"
        },

        TR: {
            name: "Türkiye",
            currency: "TRY",
            symbol: "₺",
            locale: "tr-TR"
        }
    };


    /* =====================================================
       DEFAULT COUNTRY
       ===================================================== */

    const DEFAULT_COUNTRY = "NG";


    /* =====================================================
       GET SAVED COUNTRY
       ===================================================== */

    function getSavedCountry() {

        const saved =
            localStorage.getItem(
                "trustai_country"
            );

        if (
            saved &&
            COUNTRIES[saved]
        ) {
            return saved;
        }

        return DEFAULT_COUNTRY;
    }


    /* =====================================================
       SET COUNTRY
       ===================================================== */

    function setCountry(countryCode) {

        if (!COUNTRIES[countryCode]) {
            return false;
        }

        localStorage.setItem(
            "trustai_country",
            countryCode
        );

        localStorage.setItem(
            "trustai_currency",
            COUNTRIES[countryCode].currency
        );

        localStorage.setItem(
            "trustai_currency_symbol",
            COUNTRIES[countryCode].symbol
        );

        localStorage.setItem(
            "trustai_locale",
            COUNTRIES[countryCode].locale
        );

        document.documentElement.setAttribute(
            "data-country",
            countryCode
        );

        document.documentElement.setAttribute(
            "data-currency",
            COUNTRIES[countryCode].currency
        );

        return true;
    }


    /* =====================================================
       GET COUNTRY
       ===================================================== */

    function getCountry() {

        return COUNTRIES[
            getSavedCountry()
        ];
    }


    /* =====================================================
       GET COUNTRY CODE
       ===================================================== */

    function getCountryCode() {

        return getSavedCountry();
    }


    /* =====================================================
       GET CURRENCY
       ===================================================== */

    function getCurrency() {

        return getCountry().currency;
    }


    /* =====================================================
       GET CURRENCY SYMBOL
       ===================================================== */

    function getCurrencySymbol() {

        return getCountry().symbol;
    }


    /* =====================================================
       GET LOCALE
       ===================================================== */

    function getLocale() {

        return getCountry().locale;
    }


    /* =====================================================
       FORMAT MONEY
       ===================================================== */

    function formatMoney(amount) {

        const country =
            getCountry();

        try {

            return new Intl.NumberFormat(
                country.locale,
                {
                    style: "currency",
                    currency: country.currency,
                    maximumFractionDigits:
                        country.currency === "JPY" ||
                        country.currency === "KRW"
                            ? 0
                            : 2
                }
            ).format(amount);

        } catch (error) {

            return (
                country.symbol +
                Number(amount).toLocaleString()
            );

        }
    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initialize() {

        const countryCode =
            getSavedCountry();

        setCountry(countryCode);
    }


    /* =====================================================
       EXPOSE TRUSTAI COUNTRY SYSTEM
       ===================================================== */

    window.TrustAICountry = {

        countries: COUNTRIES,

        getCountry: getCountry,

        getCountryCode: getCountryCode,

        setCountry: setCountry,

        getCurrency: getCurrency,

        getCurrencySymbol:
            getCurrencySymbol,

        getLocale: getLocale,

        formatMoney: formatMoney

    };


    /* =====================================================
       START
       ===================================================== */

    initialize();

})();
