const express = require('express');
const router = express.Router();
const { spawnSync } = require('child_process');
const fs = require('fs');
const initModels = require("../models/init_models")
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/resumes');
const models = initModels.initModels(sequelize);
const {error, json} = require('./responseHelper')

// const urls = [
//     "https://rostov.hh.ru/resume/3a715c5aff0bb48bc70039ed1f7a7544493266",
//     "https://rostov.hh.ru/applicant/resumes/view?resume=f9c3d452ff0bb486ac0039ed1f354e79486774",
//     "https://rostov.hh.ru/applicant/resumes/view?resume=1a983fbfff0861bb450039ed1f7a59704b504e"
// ]

router.get('/', async (req, res) => {
    fs.readFile('data/resume.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.render('resume');
            return;
        }

        res.render('resume', {
            resume: JSON.parse(data)
        });
    })
})

router.post('/parse', async (req, res) => {
    const link = req.body.resume_link;
    const parseResult = spawnSync('C:\\Users\\tolst\\PycharmProjects\\hh\\venv\\Scripts\\python.exe', ['parser/main.py', link]);

    if (parseResult.status == 0) {
        fs.readFile('data/resume.json', (err, data) => {
            if (err) {
                error(res, 500, "Indernal Server", "", err);
                return;
            }

            json(res, JSON.parse(data));
        });
    } else {
        error(res, 400, "Bad Request", "Invalid link", parseResult.stderr);
    }

    // fs.unlink('resume.json', (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("File deleted");
    //     }
    // });
});

router.post('/', async (req, res) => {
    addToBD(req.body.resume);
    console.log("Data is inserted");
});

function addToBD(resume) {
    models.Resume.create(JSON.parse(resume));
}

models.Resume.sync();
module.exports = router;
