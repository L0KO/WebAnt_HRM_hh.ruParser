const express = require('express');
const router = express.Router();
const { spawnSync } = require('child_process');
const fs = require('fs');
const {error, json} = require('./responseHelper')
const { v4: uuidv4 } = require('uuid');

const getModels = require('../database/database');
const initData = require('../initData.js');

const models = getModels();

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
    const parseResult = spawnSync(initData.pythonPath, ['parser/main.py', link]);

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
    // fs.readFile('data/resume.json', async (err, data) => {
    //     r = JSON.parse(data)
    //     r.id = uuidv4();
    //     r.state = {state: "hhh"}
    //     models.Resume.create(r);
    // })
    r = JSON.parse(resume);
    r.id = uuidv4();
    models.Resume.create(r);
}

models.Resume.sync();
module.exports = router;
