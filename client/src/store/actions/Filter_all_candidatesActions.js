export const filter_all_candidates = (
  candidate_service,
  candidate_full_name,
  candidate_nb_experience
) => (dispatch) => {
  dispatch({
    type: "GET_ALL_CANDIDATES_FILTER",
    candidate_service: candidate_service,
    candidate_full_name: candidate_full_name,
    candidate_nb_experience: candidate_nb_experience,
  });
};
