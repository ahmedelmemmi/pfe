export const filter_candidates = (candidate_app_status, candidate_name) => (
  dispatch
) => {
  dispatch({
    type: "GET_CANDIDATE_FILTER",
    candidate_app_status: candidate_app_status,
    candidate_name: candidate_name,
  });
};
