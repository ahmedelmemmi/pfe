"use strict";
const Application = use("App/Models/Application");
const Candidate = use("App/Models/Candidate");
class ApplicationController {
  async all({ response }) {
    const apps = await Application.all();
    response.status(200).json({
      message: "asbaa",
      data: apps,
    });
  }

  async create({ request, response, session, auth }) {
    const app = request.all();
    const cand = await Candidate.find(1);
    console.log(cand);
    const posted = await Application.create({
      app_status: app.app_status,
      app_comments: app.app_comments,
    });
    return response.send({ message: "omok has been created" });
  }

  async show({ params, response }) {
    const app = await Application.find(params.id);
    const res = {
      app_status: app.app_status,
      app_comments: app.app_comments,
    };
    return response.json(res);
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
