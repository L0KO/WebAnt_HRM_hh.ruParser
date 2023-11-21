const DataTypes = require("sequelize").DataTypes;
const _Resume = require("./Resume");

function initModels(sequelize) {
    const Resume = _Resume(sequelize, DataTypes);

    return {
        Resume
    }
}

module.exports = { initModels };