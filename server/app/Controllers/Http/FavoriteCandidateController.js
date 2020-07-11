"use strict";
const FavoriteCandidate = use("App/Models/FavoriteCandidate");
const Application = use("App/Models/Application");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");
class FavoriteCandidateController {
  async create({ response, auth, params }) {
    const company = await auth.authenticator("company").getUser();

    const posted = await FavoriteCandidate.create({
      candidate_id: params.cand_id,
    });
    await company.favoriteCandidates().save(posted);

    return response.status(200).json({
      message: "success",
    });
  }
  async ofCompany({ response, auth }) {
    const company = await auth.authenticator("company").getUser();
    const ide = aa.id;
    const fav = await FavoriteCandidate.query()
      .where("company_id", "=", ide)
      .fetch();
    response.status(200).json({
      message: "asbaa",
      data: fav,
    });

    // const apps = await auth.candidate.applications().all();
  }
}

module.exports = FavoriteCandidateController;
