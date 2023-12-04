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
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        specialization: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: true
        },
        salary: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        education_level: {
            type: DataTypes.STRING,
            allowNull: true
        },
        education: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: true
        },
        language: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: true
        },
        experience: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: true
        },
        skill_set: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
}
