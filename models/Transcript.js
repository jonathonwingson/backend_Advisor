const { Sequelize } = require("sequelize");
const db = require("../db");

const Transcript = db.define("transcript", {
    studentId: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    gpa: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    progress: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    credits: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    degree: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    major: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    admitTerm: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    degreeAttemptHours: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    degreePassedHours: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    degreeEarnedHours: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    degreeGpaHours: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    },
    degreeQualityPoints: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
    }
}, {timestamps: true});

module.exports = Transcript;
 