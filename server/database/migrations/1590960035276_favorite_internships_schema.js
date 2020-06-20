"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavoriteInternshipsSchema extends Schema {
  up() {
    this.create("favorite_internships", (table) => {
      table.increments();
      table
        .integer("candidate_id")
        .unsigned()
        .references("id")
        .inTable("candidates");
      table
        .integer("internship_id")
        .unsigned()
        .references("id")
        .inTable("internships");
      table.timestamps();
    });
  }

  down() {
    this.drop("favorite_internships");
  }
}

module.exports = FavoriteInternshipsSchema;
