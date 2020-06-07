"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InternshipSkillSchema extends Schema {
  up() {
    this.create("internship_skills", (table) => {
      table.integer("internship_id").unsigned().index("internship_id");
      table.integer("skill_id").unsigned().index("skill_id");
      table
        .foreign("internship_id")
        .references("internships.id")
        .onDelete("cascade");
      table.foreign("skill_id").references("skills.id").onDelete("cascade");
    });
  }

  down() {
    this.drop("internship_skills");
  }
}

module.exports = InternshipSkillSchema;
