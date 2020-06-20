import axios from "axios";

export const createApplication_f = (internship_id, config) => {
  return axios
    .post(`applications/${internship_id}`, { name: "ala " }, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const createSavedApplication_f = (internship_id, config) => {
  return axios
    .post(`applications/${internship_id}`, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
