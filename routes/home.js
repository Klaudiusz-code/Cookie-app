const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");
const {handlebarsExpress} = require("../handlebars-express");

const homeRouter = express.Router();

homeRouter
    .get('/',(req, res) => {

        // const sum = handlebarsExpress['find-price'](Object.entries(COOKIE_BASES), Object.entries(COOKIE_ADDONS));

        res.render('home/index',{
            cookie: {
                base: 'light',
                addons: ['sprinkles','honey','chocolate'],
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),

            // sum,
        })
    })

module.exports ={
    homeRouter,
}