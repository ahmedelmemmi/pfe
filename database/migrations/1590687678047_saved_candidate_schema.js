'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SavedCandidateSchema extends Schema {
  up () {
    this.create('saved_candidates', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('saved_candidates')
  }
}

module.exports = SavedCandidateSchema
