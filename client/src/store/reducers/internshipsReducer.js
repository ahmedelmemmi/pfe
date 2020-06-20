const initState = {
  internship: [],
};

const internshipsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_INTERNSHIPS":
      console.log("get internships", action.interns_filtered);
      return {
        ...state,
        internship: action.interns_filtered,
      };
  }
  return state;
};

export default internshipsReducer;
