"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CandidateSkillSchema extends Schema {
  up() {
    this.create("candidate_skills", (table) => {
      table.integer("candidate_id").unsigned().index("candidate_id");
      table.integer("skill_id").unsigned().index("skill_id");
      table
        .foreign("candidate_id")
        .references("candidates.id")
        .onDelete("cascade");
      table.foreign("skill_id").references("skills.id").onDelete("cascade");
    });
  }

  down() {
    this.drop("candidate_skills");
  }
}

module.exports = CandidateSkillSchema;
