const express = require('express');
const cookieParser = require('cookie-parser')
const {engine} = require('express-handlebars')
const {homeRouter} = require("./routes/home");
const {configuratorRouter} = require("./routes/configurator");
const {handlebarsExpress} = require("./utils/handlebars-helpers");
const {orderRouter} = require("./routes/order");

const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsExpress,
}));
app.set('view engine', '.hbs');
app.set('views', './views');


app.use('/',homeRouter)
app.use('/configurator', configuratorRouter)
app.use('/order',orderRouter)

const port = process.env.PORT || 3000;

app.listen(port)