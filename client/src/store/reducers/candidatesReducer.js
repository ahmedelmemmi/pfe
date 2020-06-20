const initState = {
  candidates: [],
};

const candidatesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CANDIDATES":
      console.log("get candidates", action.candidates_filtered);
      return {
        ...state,
        candidates: action.candidates_filtered,
      };
  }
  return state;
};

export default candidatesReducer;
