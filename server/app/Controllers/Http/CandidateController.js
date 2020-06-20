"use strict";

const Company = use("App/Models/Company");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");

class CandidateController {
  async register({ request, response }) {
    const {
      candidate_email,
      candidate_password,
      candidate_name,
      candidate_service,
      candidate_gender,
      candidate_nb_experience,
      candidate_adress,
      candidate_city,
      candidate_phone,
      candidate_photo,
    } = request.only([
      "candidate_email",
      "candidate_password",
      "candidate_name",
      "candidate_service",
      "candidate_gender",
      "candidate_nb_experience",
      "candidate_adress",
      "candidate_city",
      "candidate_phone",
      "candidate_photo",
    ]);
    await Candidate.create({
      candidate_email,
      candidate_password,
      candidate_name,
      candidate_service,
      candidate_gender,
      candidate_nb_experience,
      candidate_adress,
      candidate_city,
      candidate_phone,
      candidate_photo,
    });
    return response.send({ message: "User has been created" });
  }
  async login({ request, response, auth }) {
    const { candidate_email, candidate_password } = request.only([
      "candidate_email",
      "candidate_password",
    ]);
    const token = await auth
      .authenticator("candidate")
      .attempt(candidate_email, candidate_password);
    return response.json({ token: token, email: true });
  }
  async show({ params, response }) {
    const user = await Candidate.find(params.id);
    const res = {
      candidate_email: user.candidate_email,
      candidate_name: user.candidate_name,
      candidate_gender: user.candidate_gender,

      candidate_nb_experience: user.candidate_nb_experience,
      candidate_service: user.candidate_service,

      candidate_adress: user.candidate_adress,
      candidate_city: user.candidate_city,
      candidate_phone: user.candidate_phone,
      candidate_photo: user.candidate_photo,
    };
    return response.json(res);
  }
  async get_all_candidates() {
    return await Database.table("candidates").select("*");
  }
  // async ofCompany({ response, auth }) {
  //   const aa = await auth.authenticator("company").getUser();
  //   const ide = aa.id;

  //   const intern = await Internship.query()
  //     .where("company_id", "=", ide)
  //     .with("applications.candidate")
  //     .fetch();

  //   console.log(aa);

  //   response.status(200).json({
  //     message: "asbaa",
  //     data: intern,
  //   });

  // }
}

module.exports = CandidateController;
// const posted = await Internship.create({
//   internship_title: "in progress",
//   internship_field: "vffvrvf",
//   internship_description: "rrrrr",
//   internship_type: "fff",
// });
