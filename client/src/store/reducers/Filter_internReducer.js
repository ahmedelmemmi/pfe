const initState = {
  internship_title: "",
  internship_field: "",
  internship_duration: "",
};

const Filter_internReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_INTERN_FILTER":
      return {
        ...state,
        internship_title: action.internship_title,
        internship_field: action.internship_field,
        internship_duration: action.internship_duration,
      };
  }
  return state;
};

export default Filter_internReducer;
