import axios from "axios";
const getVisibleCandidates = (
  applications,
  candidate_app_status,
  candidate_name
) => {
  return applications.filter((application) => {
    const application_statusMatch =
      candidate_app_status === "" ||
      application.app_status === candidate_app_status;
    const name_match =
      candidate_name === "" ||
      application.candidate.candidate_name === candidate_name;

    return application_statusMatch && name_match;
  });
};

export const candidates_f = (config) => {
  return (dispatch, getState) => {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/candidate/ofCompany", config)

      .then((response) => {
        console.log(response);
        const internships = response.data.data;
        const candidates_filtered = [];
        for (let internship of internships) {
          const cands = getVisibleCandidates(
            internship.applications,
            getState().candidates_filter.candidate_app_status,
            getState().candidates_filter.candidate_name
          );
          for (let cand of cands) {
            candidates_filtered.push(cand);
          }
        }

        console.log(candidates_filtered);

        dispatch({ type: "GET_CANDIDATES", candidates_filtered });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
