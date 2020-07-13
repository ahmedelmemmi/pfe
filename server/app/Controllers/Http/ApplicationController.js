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

  async check({ response, auth, params }) {
    const cand = await auth.getUser();
    const ida = cand.id;
    const ide = params.intern_id;
    const app = await Application.query()
      .where("internship_id", "=", ide)
      .where("candidate_id", "=", ida)

      .fetch();

    return response.status(200).json({
      test: app,
    });
  }

  async create({ response, auth, params }) {
    const cand = await auth.getUser();
    const inter = await Internship.find(params.intern_id);

    const posted = await Application.create({
      app_status: "In progress",
      app_comments: "",
      company_message: "",
      candidate_message:
        "Your application has been sent. Please wait for the company response",
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
    return response.send({ message: " has been deleted" });
  }

  async update({ response, request, session, params }) {
    const app = await Application.find(params.id);

    app.app_status = request.all().app_status;
    app.app_comments = request.all().app_comments;

    await app.save();

    return response.send({ message: " has been updated" });
  }
  async updateComments({ response, request, session, params }) {
    const app = await Application.find(params.id);

    app.app_comments = request.all().comments;

    await app.save();

    return response.send({ message: " has been updated" });
  }
  async accept({ response, request, session, params }) {
    const app = await Application.find(params.id);

    const status = app.app_status;
    if (status === "In progress") {
      app.app_status = "Accepted";
      app.company_message =
        "You have accepted the application. Now you have to email the candidate the interview date";
      app.candidate_message =
        "Your application has been accepted. A precise interview date will be communicated to you soon";

      await app.save();
    } else if (status === "Accepted") {
      app.app_status = "Confirmed";
      app.candidate_message =
        "CONGRATS! You are officialy an traineer for this internship";
      app.company_message = "You have officialy accepted the application";

      await app.save();
    } else if (status === "Confirmed") {
      app.company_message = "You have already accepted the application!!!";

      await app.save();
    } else if (status === "Declined") {
      app.company_message = "";

      await app.save();
    } else {
      console.log("ereeeeur");
    }

    return response.send({ message: " has been updated" });
  }
  async decline({ response, request, session, params }) {
    const app = await Application.find(params.id);

    const status = app.app_status;

    app.app_status = "Declined";
    app.company_message = "You have declined the application";
    app.candidate_message = "Your application has been declined. Hard luck.";

    await app.save();

    return response.send({ message: " has been updated" });
  }
}

module.exports = ApplicationController;
