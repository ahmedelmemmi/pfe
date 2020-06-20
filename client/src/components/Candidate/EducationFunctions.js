import axios from "axios";
export const EducationRegister_f = (newEducation) => {
    return axios
      .post("/candidate/register", { // sala7 l chemin ma3raftèch est ce que n7ot profil wala kifèh orbot bil back ba3d 7ot chemin s7i7
        university: newEducation.university,
        study_area: newEducation.study_area,
        degree: newEducation.degree
      })
      .then((response) => {
        console.log("Registered");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };