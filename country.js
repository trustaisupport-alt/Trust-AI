/* ============================================================
   TRUSTAI GLOBAL COUNTRY & CURRENCY SYSTEM
   Version 3.0

   Responsibilities:
   • Country selection
   • Currency detection
   • Currency symbols
   • Locale information
   • Automatic USD → local currency conversion
   • Price formatting
   • Checkout synchronization

   TrustAI base pricing is maintained in USD.

   IMPORTANT:
   Payment amounts must ALWAYS be validated by the
   server/payment provider before a subscription is activated.
   ============================================================ */

(function () {

    "use strict";


    /* ============================================================
       STORAGE
       ============================================================ */

    const STORAGE_KEY = "trustai_country";

    const DEFAULT_COUNTRY = "US";

    const BASE_CURRENCY = "USD";


    /* ============================================================
       TRUSTAI BASE PRICES
       ============================================================ */

    /*
       These are the base prices.

       All customer-facing currencies are calculated from USD.

       Pro:
       Monthly = $4
       Yearly  = $26

       Premium:
       Monthly = $8
       Yearly  = $72
    */

    const BASE_PRICES = {

        pro: {
            monthly: 4,
            yearly: 26
        },

        premium: {
            monthly: 8,
            yearly: 72
        }

    };


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
       FALLBACK EXCHANGE RATES
       ============================================================ */

    /*
       Temporary fallback rates.

       These are NOT treated as guaranteed live rates.

       Later, checkout can obtain the authoritative rate
       from the backend/payment system.
    */

    const FALLBACK_RATES = {

        USD: 1,

        NGN: 1321.51,

        GBP: 0.74,

        EUR: 0.85,

        CAD: 1.37,

        AUD: 1.52,

        CHF: 0.79,

        SEK: 9.30,

        NOK: 9.70,

        DKK: 6.35,

        PLN: 3.60,

        INR: 88,

        BRL: 5.40,

        MXN: 18.50,

        ZAR: 17,

        GHS: 12.50,

        KES: 129,

        JPY: 147,

        KRW: 1470,

        SGD: 1.29,

        NZD: 1.74

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

        code =
            String(code || "")
                .toUpperCase();


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


        prepareCheckoutCurrency();


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
       GET EXCHANGE RATE
       ============================================================ */

    function getExchangeRate(
        currency
    ) {

        currency =
            String(
                currency ||
                BASE_CURRENCY
            ).toUpperCase();


        return (
            FALLBACK_RATES[currency] ||
            1
        );

    }


    /* ============================================================
       CONVERT USD TO LOCAL CURRENCY
       ============================================================ */

    function convertFromUSD(
        amount,
        currency
    ) {

        const rate =
            getExchangeRate(
                currency
            );


        return (
            Number(amount) *
            Number(rate)
        );

    }


    /* ============================================================
       ROUND CURRENCY
       ============================================================ */

    function roundCurrency(
        amount,
        currency
    ) {

        const zeroDecimal = [

            "JPY",
            "KRW"

        ];


        if (
            zeroDecimal.includes(
                currency
            )
        ) {

            return Math.round(amount);

        }


        return Math.round(
            amount * 100
        ) / 100;

    }


    /* ============================================================
       FORMAT PRICE
       ============================================================ */

    function formatPrice(
        amount,
        currency
    ) {

        const country =
            getCountry();


        const targetCurrency =
            currency ||
            country.currency;


        try {

            return new Intl.NumberFormat(

                country.locale,

                {

                    style: "currency",

                    currency:
                        targetCurrency,

                    maximumFractionDigits:

                        targetCurrency === "JPY" ||
                        targetCurrency === "KRW"

                            ? 0

                            : 2

                }

            ).format(amount);

        }

        catch (error) {

            return (
                country.symbol +
                Number(amount)
                    .toLocaleString()
            );

        }

    }


    /* ============================================================
       GET PLAN PRICE
       ============================================================ */

    function getPlanPrice(
        plan,
        billing,
        currency
    ) {

        plan =
            String(plan || "")
                .toLowerCase();


        billing =
            String(billing || "monthly")
                .toLowerCase();


        if (
            !BASE_PRICES[plan]
        ) {

            return null;

        }


        if (
            billing !== "monthly" &&
            billing !== "yearly"
        ) {

            return null;

        }


        const baseAmount =
            BASE_PRICES[plan][billing];


        const targetCurrency =
            currency ||
            getCurrency();


        const converted =
            convertFromUSD(
                baseAmount,
                targetCurrency
            );


        const finalAmount =
            roundCurrency(
                converted,
                targetCurrency
            );


        return {

            plan: plan,

            billing: billing,

            baseCurrency:
                BASE_CURRENCY,

            baseAmount:
                baseAmount,

            currency:
                targetCurrency,

            amount:
                finalAmount,

            formatted:
                formatPrice(
                    finalAmount,
                    targetCurrency
                )

        };

    }


    /* ============================================================
       GET CURRENT PLAN PRICE
       ============================================================ */

    function getCurrentPlanPrice(
        plan,
        billing
    ) {

        return getPlanPrice(
            plan,
            billing,
            getCurrency()
        );

    }


    /* ============================================================
       SAVE CHECKOUT INFORMATION
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
       SAVE PLAN SELECTION
       ============================================================ */

    function savePlanSelection(
        plan,
        billing
    ) {

        const country =
            getCountry();


        const price =
            getPlanPrice(
                plan,
                billing,
                country.currency
            );


        if (!price) {

            return false;

        }


        try {

            localStorage.setItem(
                "trustai_selected_plan",
                plan
            );


            localStorage.setItem(
                "trustai_billing_period",
                billing
            );


            localStorage.setItem(
                "trustai_selected_currency",
                price.currency
            );


            localStorage.setItem(
                "trustai_checkout_currency",
                price.currency
            );


            localStorage.setItem(
                "trustai_checkout_country",
                country.code
            );


            localStorage.setItem(
                "trustai_checkout_price",
                String(price.amount)
            );


            localStorage.setItem(
                "trustai_checkout_display_price",
                price.formatted
            );


            return true;

        } catch (error) {

            console.warn(
                "TrustAI: Unable to save plan selection.",
                error
            );

            return false;

        }

    }


    /* ============================================================
       GET SAVED PLAN
       ============================================================ */

    function getSavedPlan() {

        return (
            localStorage.getItem(
                "trustai_selected_plan"
            ) ||
            "pro"
        );

    }


    /* ============================================================
       GET SAVED BILLING
       ============================================================ */

    function getSavedBilling() {

        return (
            localStorage.getItem(
                "trustai_billing_period"
            ) ||
            "monthly"
        );

    }

/* ============================================================
       GET SAVED CHECKOUT DATA
       ============================================================ */

    function getCheckoutData() {

        const plan =
            getSavedPlan();


        const billing =
            getSavedBilling();


        const country =
            getCountry();


        const price =
            getPlanPrice(
                plan,
                billing,
                country.currency
            );


        return {

            plan: plan,

            billing: billing,

            country: country,

            price: price

        };

    }


    /* ============================================================
       INITIALIZE
       ============================================================ */

    function initialize() {

        const country =
            getCountry();


        document.documentElement.lang =
            country.locale;


        prepareCheckoutCurrency();

    }


    /* ============================================================
       PUBLIC TRUSTAI COUNTRY API
       ============================================================ */

    window.TrustAICountry = {

        countries:

            countries,

        baseCurrency:

            BASE_CURRENCY,

        basePrices:

            BASE_PRICES,

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

        getExchangeRate:

            getExchangeRate,

        convertFromUSD:

            convertFromUSD,

        formatPrice:

            formatPrice,

        getPlanPrice:

            getPlanPrice,

        getCurrentPlanPrice:

            getCurrentPlanPrice,

        savePlanSelection:

            savePlanSelection,

        getSavedPlan:

            getSavedPlan,

        getSavedBilling:

            getSavedBilling,

        getCheckoutData:

            getCheckoutData,

        prepareCheckoutCurrency:

            prepareCheckoutCurrency

    };


    /* ============================================================
       START
       ============================================================ */

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
    
