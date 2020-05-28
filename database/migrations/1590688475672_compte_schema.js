"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompteSchema extends Schema {
  up() {
    this.create("comptes", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("comptes");
  }
}

module.exports = CompteSchema;
