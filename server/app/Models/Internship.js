"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Internship extends Model {
  applications() {
    return this.hasMany("App/Models/Application");
  }
  favoriteInternship() {
    return this.hasMany("App/Models/FavoriteInternship");
  }
  company() {
    return this.belongsTo("App/Models/Company");
  }
  skills() {
    return this.belongsToMany("App/Models/Skill");
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  static get dates() {
    return super.dates.concat(["internship_begin_date", "internship_end_date"]);
  }

  static castDates(field, value) {
    if (field === "internship_begin_date") {
      return value.format("DD-MM-YYYY");
    }
    if (field === "internship_end_date") {
      return value.format("DD-MM-YYYY");
    }
  }
}

module.exports = Internship;
