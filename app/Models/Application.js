"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Application extends Model {
   candidate() {
     return this.belongsTo("App/Models/Candidate");
   }
   internship() {
     return this.belongsTo("App/Models/Internship");
   }
}

module.exports = Application;
