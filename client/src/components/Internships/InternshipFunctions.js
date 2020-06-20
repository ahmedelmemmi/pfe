import axios from "axios";

export const InternshipRegister_f = (newInternship) => {
  return axios
    .post("/company/internships", {
        internship_title: newInternship.internship_title,
        internship_field: newInternship.internship_field,
        internship_description: newInternship.internship_description,
        internship_type: newInternship.internship_type,
        internship_duration: newInternship.internship_duration,
        internship_level: newInternship.internship_level,
        internship_begin_date: newInternship.internship_begin_date,
        internship_end_date: newInternship.internship_end_date
    })
    .then((response) => {
      console.log("Added Internship");
      console.log(response);
    })
    .catch((err) => console.log(err));
};
