"use strict";
const Candidate = use("App/Models/Candidate");
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
    const token = await auth.authenticator('candidate').attempt(candidate_email, candidate_password);
    return response.json({ token: token, email: true });
  }
   async show({params,response}){
       const user= await Candidate.find(params.id)
       const res= {
           candidate_email: user.candidate_email,
           candidate_name: user.candidate_name,
           candidate_gender: user.candidate_gender,

            candidate_nb_experience: user.candidate_nb_experience,
            candidate_service: user.candidate_service,
            
            candidate_adress: user.candidate_adress,
            candidate_city: user.candidate_city,
            candidate_phone: user.candidate_phone,
            candidate_photo: user.candidate_photo
       }
       return response.json(res);
   }
  async get_all_candidates() {
    return await Database.table("candidates").select("*");
  }
}

module.exports = CandidateController;
