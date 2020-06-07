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
  Route.get("/", "ApplicationController.all");
  Route.post("/", "ApplicationController.create");
  Route.get("/:id", "ApplicationController.show");
  Route.post("/update/:id", "ApplicationController.update");
  Route.post("/delete/:id", "ApplicationController.delete");
}).prefix("applications");

Route.group(()=>{
     Route.post('login','CandidateController.login')
     Route.post('register','CandidateController.register')
     Route.post("/update/:id", "CandidateController.update");
     Route.post("/delete/:id", "CandidateController.delete");
     Route.get('/:id','CandidateController.show')
     Route.get('/','CandidateController.getAllCandidates')
}).prefix('candidates')

Route.group(()=>{
     Route.post('login','CompanyController.login')
     Route.post('register','CompanyController.register')
     Route.post("/update/:id", "CompanyController.update");
     Route.post("/delete/:id", "CompanyController.delete");
     Route.get('/:id','CompanyController.show')
     Route.get('/','CompanyController.get_all_companies')
}).prefix('companies')
 
Route.group(()=>{
    Route.post('create','InternshipController.createInternship')
    Route.get("/:id",'InternshipController.show')
    Route.get('AllInternships','InternshipController.get_all_internships')
}).prefix('internships')
