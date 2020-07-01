import axios from "axios";
const getVisibleCandidates = (
  candidates,
  candidate_service,
  candidate_full_name,
  candidate_nb_experience
) => {
  return candidates.filter((candidate) => {
    const candidate_serviceMatch =
      candidate_service === "" || candidate.service === candidate_service;
    const full_name_match =
      candidate_full_name === "" || candidate.full_name === candidate_full_name;
    const experience_match =
      candidate_nb_experience === "" ||
      candidate.candidate_nb_experience === candidate_nb_experience;

    return candidate_serviceMatch && full_name_match && experience_match;
  });
};

export const all_candidates_f = () => {
  return (dispatch, getState) => {
    axios
      .get("/company/candidatesPage/candidate")

      .then((response) => {
        console.log(response);
        const candidates = response.data.data;

        const candidates_filtered = getVisibleCandidates(
          candidates,
          getState().all_candidates_filter.candidate_service,
          getState().all_candidates_filter.candidate_full_name,
          getState().all_candidates_filter.candidate_nb_experience
        );
        console.log(candidates_filtered);
        console.log(getState().all_candidates_filter.candidate_service);
        dispatch({ type: "GET_ALL_CANDIDATES", candidates_filtered });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
