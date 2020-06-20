"use strict";
const Application = use("App/Models/Application");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");

class ApplicationController {
  async all({ response }) {
    const apps = await Application.all();
    response.status(200).json({
      message: "asbaa",
      data: apps,
    });
  }
  async ofCandidate({ response, auth }) {
    const aa = await auth.getUser();
    const ide = aa.id;
    const apps = await Application.query()
      .where("candidate_id", "=", ide)
      .with("internship.company")
      .fetch();
    response.status(200).json({
      message: "asbaa",
      data: apps,
    });

    // const apps = await auth.candidate.applications().all();
  }

  //   async index({ auth }) {
  //     const apps = await auth.user.applications().fetch();
  //     console.log(apps);
  //     jobs.toJSON();

  //     response.status(200).json({
  //       message: "aabsaa",
  //       data: apps,
  //     });
  //   }

  async create({ response, auth, params }) {
    const cand = await auth.getUser();
    const inter = await Internship.find(params.intern_id);

    const posted = await Application.create({
      app_status: "in progress",
      app_comments: "",
    });
    console.log(cand);
    await cand.applications().save(posted);
    await inter.applications().save(posted);

    return response.status(200).json({
      message: "success",
    });
  }

  async show({ params, response }) {
    const app = await Application.find(params.id);
    console.log(app);
    const candidate = await app.candidate().fetch();
    console.log(candidate);

    const internship = await app.internship().fetch();
    const company = await internship.company().fetch();
    return response.status(200).json({
      message: "success",
      app: app,
      candidate: candidate,
      internship: internship,
      company: company,
    });
  }

  async delete({ response, session, params }) {
    const app = await Application.find(params.id);

    await app.delete();
    return response.send({ message: "omok has been deleted" });
  }

  async update({ response, request, session, params }) {
    const app = await Application.find(params.id);

    app.app_status = request.all().app_status;
    app.app_comments = request.all().app_comments;

    await app.save();

    return response.send({ message: "omok has been updated" });
  }
}

module.exports = ApplicationController;
