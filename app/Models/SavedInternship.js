"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class SavedInternship extends Model {
  internships() {
    return this.hasMany("App/Models/Internship");
  }
  candidate() {
    return this.belongsTo("App/Models/Candidate");
  }
}

module.exports = SavedInternship;
