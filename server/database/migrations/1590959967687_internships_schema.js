"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InternshipsSchema extends Schema {
  up() {
    this.create("internships", (table) => {
      table.increments();
      table.string("internship_title");
      table.string("internship_field");
      table.string("internship_description");
      table.string("internship_type");
      table.string("internship_duration");
      table.string("internship_level");
      table.date("internship_begin_date");
      table.date("internship_end_date");
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies");
      table.timestamps();
    });
  }

  down() {
    this.drop("internships");
  }
}

module.exports = InternshipsSchema;
