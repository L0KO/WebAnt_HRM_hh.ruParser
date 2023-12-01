const express = require('express');

const {error, json} = require('./responseHelper');
const getModels = require('../database/database');

const router = express.Router();
const models = getModels();

router.get('/', async (req, res) => {
    resumes = await models.Resume.findAll({
        attributes: ["id", "state", "personal_name", "contacts", "title"],
        raw: true,
        nest: true
    });

    if (resumes == null) {
        error(res, 500, "Indernal Server", "Data Not found", "Data not found");
        return;
    }

    json(res, JSON.parse(JSON.stringify(resumes)))
});

router.get('/:id', async (req, res) => {
    findedResume = await models.Resume.findOne({
        attributes: {exclude: ["createdAt", "updatedAt"]},
        where: {id: req.params.id},
        raw: true,
        nest: true
    });

    if (findedResume == null) {
        error(res, 404, "Not found", "", "");
        return;
    }

    json(res, JSON.parse(JSON.stringify(findedResume)));
});

router.post('/delete/:id', async (req, res) => {
    findedResume = await models.Resume.findOne({
        where: {id: req.params.id}
    });

    if (findedResume == null) {
        error(res, 404, "Not found", "", "");
        return;
    }

    res = findedResume.destroy();

    console.log(res);
    console.log("Data is deleted")
});

module.exports = router;