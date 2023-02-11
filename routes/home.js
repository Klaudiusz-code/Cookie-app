const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/',(req, res) => {
        res.render('home/index',{
            cookie: {
                base: 'light',
                addons: ['sprinkles','honey','chocolate'],
            }
        })
    })

module.exports ={
    homeRouter,
}