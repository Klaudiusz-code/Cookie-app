const express = require('express');
const {engine} = require('express-handlebars')

const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/',(req, res)=>{
    res.render('home/index')
})

app.listen(3000)