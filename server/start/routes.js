"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.post("/login", "CandidateController.login");
  Route.post("/register", "CandidateController.register");
  Route.get("/candidate/:id", "CandidateController.show");
  Route.get("/getCandidates", "CandidateController.get_all_candidates");
  Route.get("/ofCompany", "CandidateController.ofCompany");
}).prefix("candidate");
Route.group(() => {
  Route.post("/login", "CompanyController.login");
  Route.post("/register", "CompanyController.register");
  Route.get("/company/:id", "CompanyController.show");
  Route.get("/getCompanies", "CompanyController.get_all_companies");
}).prefix("company");
Route.group(() => {
  Route.post("/register", "InternshipController.createInternship");
  Route.get("/", "InternshipController.all");
}).prefix("internship");

Route.group(() => {
  Route.get("/", "ApplicationController.all");
  Route.get("/ofCandidate", "ApplicationController.ofCandidate");
  Route.get("/:id", "ApplicationController.show");
  Route.post("/update/:id", "ApplicationController.update");
  Route.post("/delete/:id", "ApplicationController.delete");
}).prefix("applications");
Route.post("candidate/applications/:intern_id", "ApplicationController.create");
