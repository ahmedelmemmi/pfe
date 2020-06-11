"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");


class Company extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the candidate password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (companyInstance) => {
      if (companyInstance.dirty.company_password) {
        companyInstance.company_password = await Hash.make(
          companyInstance.company_password
        );
      }
    });
  }
   favoriteCandidates() {
     return this.hasMany("App/Models/FavoriteCandidate");
   }
   internships() {
     return this.hasMany("App/Models/Internship");
   }
}

module.exports = Company;
