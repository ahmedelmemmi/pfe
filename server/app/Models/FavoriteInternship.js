"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class FavoriteInternship extends Model {
  internship() {
    return this.belongsTo("App/Models/Internship");
  }
  candidate() {
    return this.belongsTo("App/Models/Candidate");
  }
}

module.exports = FavoriteInternship;
