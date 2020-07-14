"use strict";
const Internship = use("App/Models/Internship");
const Company = use("App/Models/Company");

class InternshipController {
  // async show({params,response}){
  //     const internship= await Internship.find(params.id)
  //     const res= {
  //         photo: internship.photo,
  //         Name:internship.Name,
  //         Company:internship.Company,
  //         Field:internship.Field,
  //         City:internship.City,
  //         Description:internship.Description,
  //         Skills:internship.Skills,
  //         Date: internship.Date
  //     }
  //     return response.json(res);
  // }
  async all({ response }) {
    const internships = await Internship.query().with("company").fetch();
    response.status(200).json({
      message: "all_internships",
      data: internships,
    });
  }
}

module.exports = InternshipController;
