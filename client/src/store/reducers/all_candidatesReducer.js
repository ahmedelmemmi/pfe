const initState = {
  candidates: [],
};

const all_candidatesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_CANDIDATES":
      console.log("get all candidates", action.candidates_filtered);
      return {
        ...state,
        candidates: action.candidates_filtered,
      };
  }
  return state;
};

export default all_candidatesReducer;
