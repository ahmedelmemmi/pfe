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
      company_photo: newCompany.company_photo
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
      company_password: user.company_password
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
 export const getCompany = id => {
   return axios
     .get(`company/${id}`)
     .then((response) => {
       return response;
     })
     .catch((err) => {
       return err;
     });
 };
