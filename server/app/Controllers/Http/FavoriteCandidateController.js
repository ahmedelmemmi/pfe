"use strict";
const FavoriteCandidate = use("App/Models/FavoriteCandidate");
const Application = use("App/Models/Application");
const Candidate = use("App/Models/Candidate");
const Internship = use("App/Models/Internship");
const Company = use("App/Models/Company");
class FavoriteCandidateController {
  async create({ response, auth, params }) {
    const company = await auth.authenticator("company").getUser();

    const posted = await FavoriteCandidate.create({
      candidate_id: params.cand_id,
      invitation_status: false,
    });
    await company.favoriteCandidates().save(posted);

    return response.status(200).json({
      message: "success",
    });
  }
  async ofCompany({ response, auth }) {
    const aa = await auth.authenticator("company").getUser();
    const ide = aa.id;
    const fav = await FavoriteCandidate.query()
      .where("company_id", "=", ide)
      .with("candidate")

      .fetch();
    response.status(200).json({
      message: "asbaa",
      data: fav,
    });

    // const apps = await auth.candidate.applications().all();
  }
  async check({ response, auth, params }) {
    const cand = await auth.authenticator("company").getUser();
    const ida = cand.id;
    const ide = params.cand_id;
    const fav = await FavoriteCandidate.query()
      .where("candidate_id", "=", ide)
      .where("company_id", "=", ida)
      .fetch();

    return response.status(200).json({
      test: fav,
    });
  }
  async delete({ response, session, params }) {
    const fav = await FavoriteCandidate.find(params.fav_id);

    await fav.delete();
    return response.send({ message: " has been deleted" });
  }

  async invite({ response, request, session, params }) {
    const fav = await FavoriteCandidate.find(params.fav_id);

    fav.invitation_status = true;

    await fav.save();

    return response.send({ message: " has been updated" });
  }
}

module.exports = FavoriteCandidateController;
