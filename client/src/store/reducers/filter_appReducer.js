const initState = {
  application_status: "",
  application_intern: "",
};

const Filter_appReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_APP_FILTER":
      return {
        ...state,
        application_status: action.application_status,
        application_intern: action.application_intern,
      };
  }
  return state;
};

export default Filter_appReducer;
