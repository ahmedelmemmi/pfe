"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ApplicationsSchema extends Schema {
  up() {
    this.create("applications", (table) => {
      table.increments();
      table.string("app_status");
      table.string("app_comments");
      table
        .integer("candidate_id")
        .unsigned()
        .references("id")
        .inTable("candidates");

      table.timestamps();
    });
  }

  down() {
    this.drop("applications");
  }
}

module.exports = ApplicationsSchema;
