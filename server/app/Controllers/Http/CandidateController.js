"use strict";

const Company = use("App/Models/Company");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");
const Experience = use("App/Models/Experience");
const Education = use("App/Models/Education");
const Skill = use("App/Models/Skill");

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
    const ide = params.id;
    const user = await Candidate.find(params.id);
    const experience = await Experience.query()
      .where("candidate_id", "=", ide)
      .fetch();
    const education = await Education.query()
      .where("candidate_id", "=", ide)
      .fetch();
    const skill = await user.skills().fetch();
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
      experience: experience,
      education: education,
      skill: skill,
    };
    response.status(200).json({
      message: "all_internships",
      data: res,
    });
  }
  async all({ response }) {
    const candidates = await Candidate.all();
    response.status(200).json({
      message: "all_internships",
      data: candidates,
    });
  }
  async ofCompany({ response, auth }) {
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
      .with("applications.candidate")
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
  async addExperience({ request, response }) {
    const {
      ex_company,
      ex_location,
      ex_title,
      ex_begin_date,
      ex_end_date,
    } = request.only([
      "ex_company",
      "ex_location",
      "ex_title",
      "ex_begin_date",
      "ex_end_date",
    ]);
    const posted = await Experience.create({
      ex_company,
      ex_location,
      ex_title,
      ex_begin_date,
      ex_end_date,
    });
    const cand = await auth.getUser();
    await cand.experiences().save(posted);

    return response.send({ message: "User has been created" });
  }
  async addEducation({ request, response }) {
    const { university, area_study, degree } = request.only([
      "university",
      "area_study",
      "degree",
    ]);
    const posted = await Education.create({
      university,
      area_study,
      degree,
    });
    const cand = await auth.getUser();
    await cand.educations().save(posted);
    return response.send({ message: "User has been created" });
  }
  async addSkill({ request, response }) {
    const { skill_name, skill_level } = request.only([
      "skill_name",
      "skill_level",
    ]);
    const posted = await Skill.create({ skill_name, skill_level });
    const cand = await auth.getUser();
    await cand.skills().save(posted);
    return response.send({ message: "User has been created" });
  }
}

module.exports = CandidateController;
