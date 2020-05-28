"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompanySchema extends Schema {
  up() {
    this.create("companies", (table) => {
      table.increments();
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

module.exports = CompanySchema;
