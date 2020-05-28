"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Candidate extends Model {
  application() {
    return this.hasOne("App/Models/Application");
  }
  savedCandidate() {
    return this.belongsTo("App/Models/SavedCandidate");
  }
  savedInternships() {
    return this.hasMany("App/Models/SavedInternship");
  }
  invitations() {
    return this.hasMany("App/Models/Invitation");
  }
  educations() {
    return this.hasMany("App/Models/Education");
  }
  experiences() {
    return this.hasMany("App/Models/Experience");
  }
  skills() {
    return this.belongsToMany("App/Models/Skill");
  }
}

module.exports = Candidate;
