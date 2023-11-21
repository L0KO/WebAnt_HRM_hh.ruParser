const express = require('express');
const { Liquid } = require('liquidjs');
const bodyParser = require('body-parser');
const resumeAddRoute = require('./sourse/add_resume');
const resumeListRoute = require('./sourse/list_resume');

const engine = new Liquid();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.engine('liquid', engine.express()); 
app.set('views', './views');
app.set('view engine', 'liquid');
app.use(express.static('assets'));

// app.use(function (req, res, next) {
//     res.header("Content-Type",'application/json');
//     next();
// });

app.get('/', (req, res) => {
    res.redirect("/resume");
});

app.use('/resume/add', resumeAddRoute);
app.use('/resume/list', resumeListRoute);


app.listen(port, () => console.log('started'));