"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SkillsSchema extends Schema {
  up() {
    this.create("skills", (table) => {
      table.increments();
      table.string("skill_name");
      table.string("skill_level");
      table.timestamps();
    });
  }

  down() {
    this.drop("skills");
  }
}

module.exports = SkillsSchema;
