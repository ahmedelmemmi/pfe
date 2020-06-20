const initState = {
  applications: [],
};

const applicationsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_APPLICATIONS":
      console.log("get apps", action.apps_filtered);
      return {
        ...state,
        applications: action.apps_filtered,
      };
  }
  return state;
};

export default applicationsReducer;
