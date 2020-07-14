"use strict";
const Company = use("App/Models/Company");
const Internship = use("App/Models/Internship");

class CompanyController {
  async register({ request, response }) {
    const {
      company_email,
      company_password,
      company_name,
      company_taxcode,
      company_phone,
      company_adress,
      company_field,
      company_city,
      company_photo,
    } = request.only([
      "company_email",
      "company_password",
      "company_name",
      "company_taxcode",
      "company_phone",
      "company_adress",
      "company_field",
      "company_city",
      "company_photo",
    ]);
    await Company.create({
      company_email,
      company_password,
      company_name,
      company_taxcode,
      company_phone,
      company_adress,
      company_field,
      company_city,
      company_photo,
    });
    return response.send({ message: "User has been created" });
  }
  async login({ request, response, auth }) {
    const { company_email, company_password } = request.only([
      "company_email",
      "company_password",
    ]);
    try {
      const token = await auth
        .authenticator("company")
        .attempt(company_email, company_password);
      return response.json({ token: token, email: false });
    } catch (error) {
      return response.json({ message: error });
    }
  }
  async show({ params, response }) {
    const user = await Company.find(params.id);
    const res = {
      company_email: user.company_email,
      company_name: user.company_name,
      company_taxcode: user.company_taxcode,
      company_phone: user.company_phone,
      company_adress: user.company_adress,
      company_field: user.company_field,
      company_city: user.company_city,
      company_photo: user.company_photo,
    };
    return response.json(res);
  }
  async myIntern({ response, auth }) {
    const aa = await auth.authenticator("company").getUser();
    const ide = aa.id;
    // const posted = await Internship.create({
    //   internship_title: "in progress",
    //   internship_field: "vffvrvf",
    //   internship_description: "rrrrr",
    //   internship_type: "fff",
    // });
    const intern = await Internship.query()
      .where("company_id", "=", ide)
      .fetch();

    console.log(aa);
    // const apps = await Application.query()
    //   .where("candidate_id", "=", ide)
    //   .with("internship")
    //   .fetch();
    response.status(200).json({
      message: "asbaa",
      data: intern,
    });

    // const apps = await auth.candidate.applications().all();
  }
  async get_all_companies({ params, response }) {
    const res = await Database.table("companies").select("*");
    return response.json(res);
  }
  async create({ request, response, auth }) {
    const aa = await Company.find(2);

    const {
      internship_title,
      internship_field,
      internship_description,
      internship_type,
      internship_duration,
      internship_level,
      internship_begin_date,
      internship_end_date,
    } = request.only([
      "internship_title",
      "internship_field",
      "internship_description",
      "internship_type",
      "internship_duration",
      "internship_level",
      "internship_begin_date",
      "internship_end_date",
    ]);
    const posted = await Internship.create({
      internship_title,
      internship_field,
      internship_description,
      internship_type,
      internship_duration,
      internship_level,
      internship_begin_date,
      internship_end_date,
    });

    await aa.internships().save(posted);

    return response.send({ message: "Opportunity has been created" });
  }
}

module.exports = CompanyController;
