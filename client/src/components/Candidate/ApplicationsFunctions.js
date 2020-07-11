import axios from "axios";

export const createApplication_f = (internship_id, config) => {
  return axios
    .post(`application/${internship_id}`, { name: "ala " }, config)

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
    .post(`favoriteApplication/${internship_id}`, { name: "ala " }, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const deleteApplication = (id) => {
  return axios
    .post(`application/delete/${id}`)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const checkApplication_f = (id, config) => {
  return axios
    .get(`application/${id}`, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
