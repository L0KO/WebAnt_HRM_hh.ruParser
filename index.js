const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const resumeAddRoute = require('./sourse/add_resume');
const resumeListRoute = require('./sourse/list_resume');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    res.header("Content-Type","text/html");
    next();
});

app.get('/', (req, res) => {
    res.redirect("/resume");
});

app.use('/resume/add', resumeAddRoute);
app.use('/resume/list', resumeListRoute);


app.listen(port, () => console.log('started'));