const express = require('express');
const {getAddonsFromReq} = require("../utils/get-addons-from-req");
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookie-data");

const configuratorRouter = express.Router();

configuratorRouter
    .get('/select-base/:baseName',(req, res) => {
        const {baseName} = req.params;

        if (!COOKIE_BASES[baseName]){
            return res.render('error',{
                description: `Nie ma takiego dodatku jak ${baseName}`
            })
        }

        res
            .cookie('cookieBase',baseName)
            .render('configurator/base',{
                baseName,
            })
    })
    .get('/add-addon/:addonName',(req,res) =>{

        const {addonName} = req.params;

        if (!COOKIE_ADDONS[addonName]){
            return res.render('error',{
                description: `Nie ma takiego dodatku jak ${addonName}`
            })
        }

        const addons = getAddonsFromReq(req)

        if (addons.includes(addonName)){
            return res.render('error',{
                description: `${addonName} taki dodatek został dodany`
            })
        }

        addons.push(addonName)
        res
            .cookie('cookieAddons',JSON.stringify(addons))
            .render('configurator/add',{
                addonName,
            })
    })
    .get('/delete-addon/:addonName',(req,res) =>{

        const {addonName} = req.params;

        const oldAddons = getAddonsFromReq(req);

        if (!oldAddons.includes(addonName)){
            return res.render('error',{
                description: `Nie możesz usunąć ${addonName} bo nie istnieje`
            })
        }

        const addons = oldAddons.filter(addon => addon !== addonName);

        res
            .cookie('cookieAddons',JSON.stringify(addons))
            .render('configurator/deleted',{
                addonName,
            })
    })

module.exports = {
    configuratorRouter,
}