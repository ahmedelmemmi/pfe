import internshipsReducer from "./internshipsReducer";
import applicationsReducer from "./applicationsReducer";
import { combineReducers } from "redux";
import Filter_internReducer from "./Filter_internReducer";
import Filter_appReducer from "./filter_appReducer";
import Filter_candidatesReducer from "./filter_candidatesReducer";
import candidatesReducer from "./candidatesReducer";
const rootReducer = combineReducers({
  candidates_filter: Filter_candidatesReducer,
  app_filter: Filter_appReducer,
  intern_filter: Filter_internReducer,
  internships: internshipsReducer,
  applications: applicationsReducer,
  candidates: candidatesReducer,
});

export default rootReducer;
