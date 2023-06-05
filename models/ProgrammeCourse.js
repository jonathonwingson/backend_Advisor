
const { Sequelize } = require("sequelize");
const db = require("../db");

// Bridge table for programme and courses belonging to it
const ProgrammeCourse = db.define("programmecourse", {
    programmeID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    courseID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
  });

  module.exports = ProgrammeCourse;
