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
  Route.post("experience", "CandidateController.addExperience");
  Route.post("education", "CandidateController.addEducation");
  Route.post("skill", "CandidateController.addSkill");

  Route.post("login", "CandidateController.login");
  Route.post("register", "CandidateController.register");
  Route.get("candidate/:id", "CandidateController.show");
  Route.get("/ofCompany", "CandidateController.ofCompany");
  Route.get("/company/company/:id", "CompanyController.show");

  Route.post(
    "application/application/delete/:id",
    "ApplicationController.delete"
  );
}).prefix("candidate");
Route.group(() => {
  Route.post("login", "CompanyController.login");
  Route.post("register", "CompanyController.register");
  Route.get("/company/:id", "CompanyController.show");
  Route.get("/candidate/candidate/:id", "CompanyController.show");

  Route.get("getCompanies", "CompanyController.get_all_companies");
  Route.get("/candidatesPage/candidate", "CandidateController.all");

  Route.post(
    "application/application/updateComments/:id",
    "ApplicationController.updateComments"
  );
  Route.post(
    "application/application/updateStatus/accept/:id",
    "ApplicationController.accept"
  );
  Route.post(
    "application/application/updateStatus/decline/:id",
    "ApplicationController.decline"
  );
}).prefix("company");
Route.group(() => {
  Route.post("register", "InternshipController.createInternship");
  Route.get("/", "InternshipController.all");
}).prefix("internship");

Route.group(() => {
  Route.get("/", "ApplicationController.all");
  Route.get("/ofCandidate", "ApplicationController.ofCandidate");
  Route.get("/:id", "ApplicationController.show");
  Route.post("/update/:id", "ApplicationController.update");
  Route.post("/delete/:id", "ApplicationController.delete");
}).prefix("application");
Route.post("candidate/application/:intern_id", "ApplicationController.create");
Route.post(
  "candidate/favoriteApplication/:intern_id",
  "FavoriteInternshipController.create"
);
Route.get("candidate/application/:intern_id", "ApplicationController.check");
Route.get("favorite/ofCandidate", "FavoriteInternshipController.ofCandidate");
Route.get("favorite/ofCompany", "FavoriteCandidateController.ofCompany");
Route.get("myIntern", "CompanyController.myIntern");

Route.post(
  "company/favoriteCandidate/:cand_id",
  "FavoriteCandidateController.create"
);
Route.get("company/checkFav/:cand_id", "FavoriteCandidateController.check");
Route.post(
  "company/deleteFavorite/:fav_id",
  "FavoriteCandidateController.delete"
);
Route.post("deleteFavorite2/:fav_id", "FavoriteInternshipController.delete");
Route.post("company/invite/:fav_id", "FavoriteCandidateController.invite");
Route.get(
  "candidate/checkFav2/:intern_id",
  "FavoriteInternshipController.check"
);
Route.post("company/internships", "CompanyController.create");
