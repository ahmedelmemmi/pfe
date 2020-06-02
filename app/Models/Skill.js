"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Skill extends Model {
  candidates() {
    return this.belongsToMany("App/Models/Candidate");
  }
  internships() {
    return this.belongsToMany("App/Models/Internship");
  }
}

module.exports = Skill;
