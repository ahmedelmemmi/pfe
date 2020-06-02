"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class FavoriteCandidate extends Model {
  candidates() {
    return this.belongsTo("App/Models/Candidate");
  }
  company() {
    return this.belongsTo("App/Models/Company");
  }
}

module.exports = FavoriteCandidate;
