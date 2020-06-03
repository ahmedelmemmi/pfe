"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Candidate extends Model {
   application() {
     return this.hasMany("App/Models/Application");
   }
   favoriteCandidate() {
     return this.hasMany("App/Models/FavoriteCandidate");
   }
   favoriteInternships() {
     return this.hasMany("App/Models/FavoriteInternship");
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
