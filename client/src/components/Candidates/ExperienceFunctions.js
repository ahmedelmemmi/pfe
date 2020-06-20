import axios from "axios";
export const ExperienceRegister_f = (newExperience) => {
    return axios
      .post("/candidate/register", { // sala7 l chemin ma3raftèch est ce que n7ot profil wala kifèh orbot bil back ba3d 7ot chemin s7i7
        ex_company: newExperience.ex_company,
        ex_city: newExperience.ex_city,
        ex_title: newExperience.ex_title,
        ex_begin_date: newExperience.ex_begin_date,
        ex_end_date: newExperience.ex_end_date,
      })
      .then((response) => {
        console.log("Registered");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };