const express = require('express');
const router = express.Router();
const initModels = require("../models/init_models")
const { Sequelize, DataTypes, UUID } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/resumes');
const models = initModels.initModels(sequelize);
const {error, json} = require('./responseHelper')

router.get('/', async (req, res) => {
    resumes = await models.Resume.findAll({
        attributes: {exclude: ["createdAt", "updatedAt"]},
        raw: true,
        nest: true
    });
    if (resumes == null) {
        error(res, 500, "Indernal Server", "Data not found", "Data not found")
        return;
    }
    json(res, JSON.parse(JSON.stringify(resumes)))
});

module.exports = router;