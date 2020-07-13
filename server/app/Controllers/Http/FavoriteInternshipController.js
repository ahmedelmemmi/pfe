"use strict";
const FavoriteInternship = use("App/Models/FavoriteInternship");
const Application = use("App/Models/Application");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");
class FavoriteInternshipController {
  async create({ response, auth, params }) {
    const cand = await auth.getUser();

    const posted = await FavoriteInternship.create({
      Internship_id: params.intern_id,
    });
    await cand.favoriteInternships().save(posted);

    return response.status(200).json({
      message: "success",
    });
  }
  async check({ response, auth, params }) {
    const cand = await auth.getUser();
    const ida = cand.id;
    const ide = params.intern_id;
    const fav = await FavoriteInternship.query()
      .where("candidate_id", "=", ida)
      .where("internship_id", "=", ide)
      .fetch();

    return response.status(200).json({
      test: fav,
    });
  }
  async ofCandidate({ response, auth }) {
    const aa = await auth.getUser();
    const ide = aa.id;
    const fav = await FavoriteInternship.query()
      .where("candidate_id", "=", ide)
      .with("internship.company")
      .fetch();
    response.status(200).json({
      message: "asbaa",
      data: fav,
    });

    // const apps = await auth.candidate.applications().all();
  }
  async delete({ response, session, params }) {
    const fav = await FavoriteInternship.find(params.fav_id);

    await fav.delete();
    return response.send({ message: " has been deleted" });
  }
  async check({ response, auth, params }) {
    const cand = await auth.getUser();
    const ida = cand.id;
    const ide = params.intern_id;
    const fav = await FavoriteInternship.query()
      .where("candidate_id", "=", ida)
      .where("internship_id", "=", ide)
      .fetch();

    return response.status(200).json({
      test: fav,
    });
  }
}

module.exports = FavoriteInternshipController;
