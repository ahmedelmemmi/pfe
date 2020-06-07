"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavoriteInternshipsSchema extends Schema {
  up() {
    this.create("favorite_internships", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("favorite_internships");
  }
}

module.exports = FavoriteInternshipsSchema;
