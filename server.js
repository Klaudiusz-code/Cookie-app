const express = require('express');
const cookieParser = require('cookie-parser')
const {engine} = require('express-handlebars')
const {homeRouter} = require("./routes/home");
const {configuratorRouter} = require("./routes/configurator");

const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/',homeRouter)
app.use('/configurator', configuratorRouter)

app.listen(3000)