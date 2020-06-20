const initState = {
  candidate_app_status: "",
  candidate_name: "",
};

const Filter_candidatesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CANDIDATE_FILTER":
      return {
        ...state,
        candidate_app_status: action.candidate_app_status,
        candidate_name: action.candidate_name,
      };
  }
  return state;
};

export default Filter_candidatesReducer;
