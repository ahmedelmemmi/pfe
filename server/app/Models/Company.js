"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
   favoriteCandidates() {
     return this.hasMany("App/Models/FavoriteCandidate");
   }
   internships() {
     return this.hasMany("App/Models/Internship");
   }
}

module.exports = Company;
