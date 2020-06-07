import axios from "axios";

export const CandidateRegister_f = (newCandidate) => {
  return axios
    .post("/candidates/register", {
      candidate_email: newCandidate.candidate_email,
      candidate_password: newCandidate.candidate_password,
      candidate_name: newCandidate.candidate_name,

      candidate_service: newCandidate.candidate_service,
      candidate_gender: newCandidate.candidate_gender,
      candidate_nb_experience: newCandidate.candidate_nb_experience,
      candidate_adress: newCandidate.candidate_adress,
      candidate_city: newCandidate.candidate_city,
      candidate_phone: newCandidate.candidate_phone,
      candidate_photo: newCandidate.candidate_photo,
    })
    .then((response) => {
      console.log("Registered");
      console.log(response);
    })
    .catch((err) => console.log(err));
};

export const CandidateLogin_f = (user) => {
  return axios
    .post("/candidates/login", {
      candidate_email: user.candidate_email,
      candidate_password: user.candidate_password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token.token);
      let test = 0;
      console.log(res.data.email);
      if (res.data.email) {
        test = 1;
      }
      localStorage.setItem("usertype", test);

      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
