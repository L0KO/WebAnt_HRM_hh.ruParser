module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Resume', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        state: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        personal_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        contacts: {
          type: DataTypes.JSONB,
          allowNull: false
        },
        birth_date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['Женщина', 'Мужчина', 'Ламинат'],
            allowNull: false
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialization: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
        salary: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        education_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        education: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
        language: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
        experience: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
        skill_set: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
}
