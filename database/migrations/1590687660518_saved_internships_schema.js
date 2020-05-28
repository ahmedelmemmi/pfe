"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SavedInternshipsSchema extends Schema {
  up() {
    this.create("saved_internships", (table) => {
      table.increments();

      table.timestamps();
    });
  }

  down() {
    this.drop("saved_internships");
  }
}

module.exports = SavedInternshipsSchema;
