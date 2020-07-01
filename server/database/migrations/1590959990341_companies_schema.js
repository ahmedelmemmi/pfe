"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompaniesSchema extends Schema {
  up() {
    this.create("companies", (table) => {
      table.increments();
      table.string("company_email").notNullable().unique();
      table.string("company_password").notNullable()
      table.string("company_name");
      table.string("company_taxcode");
      table.string("company_phone");
      table.string("company_adress");
      table.string("company_field");
      table.string("company_city");
      table.string("company_photo");
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompaniesSchema;
