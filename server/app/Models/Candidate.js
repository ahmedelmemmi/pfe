"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class Candidate extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the candidate password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (candidateInstance) => {
      if (candidateInstance.dirty.candidate_password) {
        candidateInstance.candidate_password = await Hash.make(
          candidateInstance.candidate_password
        );
      }
    });
  }

  applications() {
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
