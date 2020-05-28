'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpportunitySchema extends Schema {
  up () {
    this.create('opportunities', (table) => {
      table.increments()
      table.string('photo', 80).notNullable()
      table.string('Name', 80).notNullable()
      table.string('Company', 80).notNullable()
      table.string('Field', 80).notNullable()
      table.string('City', 254).notNullable()
      table.string('Description', 254).notNullable()
      table.string('Skills', 254).notNullable()
      table.string('Date', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('opportunities')
  }
}

module.exports = OpportunitySchema
