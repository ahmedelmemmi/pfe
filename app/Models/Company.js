"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
  savedCandidates() {
    return this.hasMany("App/Models/SavedCandidate");
  }
  internships() {
    return this.hasMany("App/Models/Internship");
  }
  invitations() {
    return this.hasMany("App/Models/Invitation");
  }
}

module.exports = Company;
