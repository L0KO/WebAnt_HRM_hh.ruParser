const express = require('express');
const router = express.Router();
const { spawnSync } = require('child_process');
const fs = require('fs');
const {error, json} = require('./responseHelper')
const { v4: uuidv4 } = require('uuid');

const getModels = require('../database/database');
const initData = require('../initData.js');

const models = getModels();

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

    fs.unlink('resume.json', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File deleted");
        }
    });
});

router.post('/', async (req, res) => {
    addToBD(req.body);
    console.log("Data is inserted");
});

function addToBD(resume) {
    resume.id = uuidv4();
    models.Resume.create(resume);
}

models.Resume.sync();
module.exports = router;
