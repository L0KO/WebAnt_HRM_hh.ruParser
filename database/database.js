const Sequelize = require('sequelize');

const {initModels} = require("../models/init_models");
const initData = require('../initData.js');

let models;

function getModels() {
    if (!models) {
        models = initModels(new Sequelize(initData.databaseUrl));
    }

    return models;
}

module.exports = getModels;