"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExperiencesSchema extends Schema {
  up() {
    this.create("experiences", (table) => {
      table.increments();
      table.string("ex_company");
      table.string("ex_location");
      table.string("ex_title");
      table.date("ex_begin_date");
      table.date("ex_end_date");
      table.timestamps();
    });
  }

  down() {
    this.drop("experiences");
  }
}

module.exports = ExperiencesSchema;
