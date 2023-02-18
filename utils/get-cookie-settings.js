const {getAddonsFromReq} = require("./get-addons-from-req");
const {handlebarsExpress} = require("./handlebars-helpers");
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookie-data");

 function getCookieSettings(req){
    const {cookieBase} = req.cookies;
    const addons = getAddonsFromReq(req)

    const allBases = Object.entries(COOKIE_BASES);
    const allAddons = Object.entries(COOKIE_ADDONS);

    const sum = (cookieBase ? handlebarsExpress.findPrice(allBases,cookieBase) : 0)
        + addons.reduce((prev,curr)=>(
            prev + handlebarsExpress.findPrice(allAddons,curr)
        ),0)

    return {
        addons,
        cookieBase,
        sum,
        allBases,
        allAddons,
    };
}

module.exports = {
     getCookieSettings,
};