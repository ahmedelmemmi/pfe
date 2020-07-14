import axios from "axios";

export const CandidateRegister_f = (newCandidate) => {
  return axios
    .post("/candidate/register", {
      candidate_email: newCandidate.candidate_email,
      candidate_password: newCandidate.candidate_password,
      candidate_name: newCandidate.candidate_name,

      candidate_service: newCandidate.candidate_service,
      candidate_gender: newCandidate.candidate_gender,
      candidate_nb_experience: newCandidate.candidate_nb_experience,
      candidate_adress: newCandidate.candidate_adress,
      candidate_city: newCandidate.candidate_city,
      candidate_phone: newCandidate.candidate_phone,
    })
    .then((response) => {
      console.log("Registered");
      console.log(response);
    })
    .catch((err) => console.log(err));
};

export const CandidateLogin_f = (user) => {
  return axios
    .post("/candidate/login", {
      candidate_email: user.candidate_email,
      candidate_password: user.candidate_password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token.token);
      let test = 1;
      // console.log(res.data.email);
      // if (res.data.email) {
      //   test = 1;
      // }
      localStorage.setItem("usertype", test);

      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCandidate = (id) => {
  return axios
    .get(`candidate/${id}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const GetApplications = (config) => {
  return axios
    .get("/application/ofCandidate", config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const GetApplication = (id) => {
  return axios
    .get("/application/" + id)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const SeeCompany = (id) => {
  return axios
    .get(`/candidate/company/company/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const GetFavorite = (config) => {
  return axios
    .get("/favorite/ofCandidate", config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const experience_f = (exp) => {
  return axios
    .post("/candidate/experience", {
      ex_company: exp.ex_company,
      ex_location: exp.ex_location,
      ex_title: exp.ex_title,
      ex_begin_date: exp.ex_begin_date,
      ex_end_date: exp.ex_end_date,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const education_f = (newEduaction) => {
  return axios
    .post("/candidate/education", {
      university: newEduaction.university,
      area_study: newEduaction.area_study,
      degree: newEduaction.degree,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const skill_f = (newSkill) => {
  return axios
    .post("/candidate/skill", {
      skill_name: newSkill.skill,
      skill_level: newSkill.level,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
