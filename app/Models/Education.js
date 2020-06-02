"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Education extends Model {
  candidate() {
    return this.belongsTo("App/Models/Candidate");
  }
}

module.exports = Education;
