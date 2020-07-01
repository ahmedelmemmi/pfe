const initState = {
  candidate_service: "",
  candidate_full_name: "",
  candidate_nb_experience: "",
};

const Filter_all_candidatesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_CANDIDATES_FILTER":
      return {
        ...state,
        candidate_service: action.candidate_service,
        candidate_full_name: action.candidate_full_name,
        candidate_nb_experience: action.candidate_nb_experience,
      };
  }
  return state;
};

export default Filter_all_candidatesReducer;
