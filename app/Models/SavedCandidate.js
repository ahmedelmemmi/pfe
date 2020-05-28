"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class SavedCandidate extends Model {
  candidates() {
    return this.hasMany("App/Models/Candidate");
  }
  company() {
    return this.belongsTo("App/Models/Company");
  }
}

module.exports = SavedCandidate;
