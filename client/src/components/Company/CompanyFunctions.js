import axios from "axios";

export const CompanyRegister_f = (newCompany) => {
  return axios
    .post("/company/register", {
      company_email: newCompany.company_email,
      company_password: newCompany.company_password,
      company_name: newCompany.company_name,
      company_taxcode: newCompany.company_taxcode,
      company_phone: newCompany.company_phone,
      company_adress: newCompany.company_adress,
      company_field: newCompany.company_field,
      company_city: newCompany.company_city,
      company_photo: newCompany.company_photo,
    })
    .then((response) => {
      console.log("Registered");
      console.log(response);
    })
    .catch((err) => console.log(err));
};

export const CompanyLogin_f = (user) => {
  return axios
    .post("/company/login", {
      company_email: user.company_email,
      company_password: user.company_password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token.token);
      let test = 0;
      // console.log(res.data.email);
      // if (!res.data.email) {
      //   test = 0;
      // }
      localStorage.setItem("usertype", test);

      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCompany = (id) => {
  return axios
    .get(`company/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const saveComments_f = (comments, id) => {
  return axios
    .post(`application/updateComments/${id}`, { comments: comments })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const acceptApplication = (id) => {
  return axios
    .post(`application/updateStatus/accept/${id}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const declineApplication = (id) => {
  return axios
    .post(`application/updateStatus/decline/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const SeeCandidate = (id) => {
  return axios
    .get(`company/candidate/candidate/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const createSavedCandidate_f = (candidate_id, config) => {
  return axios
    .post(`favoriteCandidate/${candidate_id}`, { name: "ala " }, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const GetFavorite = (config) => {
  return axios
    .get("/favorite/ofCompany", config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const checkCandidate_f = (id, config) => {
  return axios
    .get(`checkFav/${id}`, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteFavorite_f = (id, config) => {
  return axios
    .post(`deleteFavorite/${id}`, { name: "ala " }, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const inviteFavorite_f = (id, config) => {
  return axios
    .post(`invite/${id}`, { name: "ala " }, config)

    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
