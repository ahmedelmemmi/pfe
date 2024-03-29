"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ApplicationsSchema extends Schema {
  up() {
    this.create("applications", (table) => {
      table.increments();
      table.string("app_status");
      table.string("app_comments");
      table.string("candidate_message");
      table.string("company_message");
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
    this.drop("applications");
  }
}

module.exports = ApplicationsSchema;
