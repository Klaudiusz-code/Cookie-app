const express = require('express');
const {getAddonsFromReq} = require("../utils/get-addons-from-req");
const {handlebarsExpress} = require("../utils/handlebars-helpers");
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");

const orderRouter = express.Router();

orderRouter
    .get('/summary',(req, res) =>{

        const {cookieBase} = req.cookies;
        const addons = getAddonsFromReq(req)

        const sum = (cookieBase ? handlebarsExpress.findPrice(Object.entries(COOKIE_BASES),cookieBase) : 0)
            + addons.reduce((prev,curr)=>(
                prev + handlebarsExpress.findPrice(Object.entries(COOKIE_ADDONS),curr)
            ),0)

        res.render('order/summary',{
            cookie: {
                base: cookieBase,
                addons: addons,
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),

            sum,
        })
    })
    .get('/thanks',(req,res) =>{
        const {cookieBase} = req.cookies;
        const addons = getAddonsFromReq(req)

        const sum = (cookieBase ? handlebarsExpress.findPrice(Object.entries(COOKIE_BASES),cookieBase) : 0)
            + addons.reduce((prev,curr)=>(
                prev + handlebarsExpress.findPrice(Object.entries(COOKIE_ADDONS),curr)
            ),0)
        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks',{
            sum,
        })
    })

module.exports ={
    orderRouter,
}
