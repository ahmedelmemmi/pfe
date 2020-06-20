"use strict";
const Company = use("App/Models/Company");
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

    const token = await auth
      .authenticator("company")
      .attempt(company_email, company_password);
    return response.json({ token: token, email: false });
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
  async get_all_companies({ params, response }) {
    const res = await Database.table("companies").select("*");
    return response.json(res);
  }
}

module.exports = CompanyController;
