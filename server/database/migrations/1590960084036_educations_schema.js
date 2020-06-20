"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EducationsSchema extends Schema {
  up() {
    this.create("educations", (table) => {
      table.increments();
      table.string("university");
      table.string("area_study");
      table.string("degree");
      table
        .integer("candidate_id")
        .unsigned()
        .references("id")
        .inTable("candidates");
      table.timestamps();
    });
  }

  down() {
    this.drop("educations");
  }
}

module.exports = EducationsSchema;
