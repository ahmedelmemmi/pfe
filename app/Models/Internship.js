"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Internship extends Model {
   application() {
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
}

module.exports = Internship;
