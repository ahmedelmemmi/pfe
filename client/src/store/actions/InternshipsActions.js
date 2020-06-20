import axios from "axios";
const getInternsCandidate = (candidate) => {
  const candidat = candidate.length;
  return candidat === 0 && true;
};
const getVisibleInterns = (
  internships,
  internship_title,
  internship_field,
  internship_duration
) => {
  return internships.filter((internship) => {
    const internship_titleMatch =
      internship_title === "" ||
      internship.internship_title === internship_title;
    const internship_fieldMatch =
      internship_field === "" ||
      internship.internship_field === internship_field;
    const internship_durationMatch =
      internship_duration === "" ||
      internship.internship_duration === internship_duration;

    return (
      internship_titleMatch && internship_fieldMatch && internship_durationMatch
    );
  });
};

export const internships_f = () => {
  return (dispatch, getState) => {
    axios
      .get("/internship/")

      .then((response) => {
        console.log(response);
        console.log(getState());
        const internships = response.data.data;
        const b = getInternsCandidate(response.data.data);
        const interns_filtered = getVisibleInterns(
          internships,
          getState().intern_filter.internship_title,
          getState().intern_filter.internship_field,
          getState().intern_filter.internship_duration
        );
        console.log(interns_filtered);

        dispatch({ type: "GET_INTERNSHIPS", interns_filtered });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
