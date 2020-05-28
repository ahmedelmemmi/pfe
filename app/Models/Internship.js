"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Internship extends Model {
  application() {
    return this.hasOne("App/Models/Application");
  }
  savedInternship() {
    return this.belongsTo("App/Models/savedInternship");
  }
  company() {
    return this.belongsTo("App/Models/Company");
  }
  skills() {
    return this.belongsToMany("App/Models/Skill");
  }
}

module.exports = Internship;
