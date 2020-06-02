"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CandidatesSchema extends Schema {
  up() {
    this.create("candidates", (table) => {
      table.increments();

      table.string("candidate_name");
      table.string("candidate_service");
      table.string("candidate_nb_experience");
      table.string("candidate_adress");
      table.string("candidate_city");
      table.string("candidate_phone");
      table.string("candidate_photo");

      table.timestamps();
    });
  }

  down() {
    this.drop("candidates");
  }
}

module.exports = CandidatesSchema;
