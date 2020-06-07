"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavoriteCandidatesSchema extends Schema {
  up() {
    this.create("favorite_candidates", (table) => {
      table.increments();
      table.boolean("invitation_status");
      table.string("invitation");
      table.timestamps();
    });
  }

  down() {
    this.drop("favorite_candidates");
  }
}

module.exports = FavoriteCandidatesSchema;
