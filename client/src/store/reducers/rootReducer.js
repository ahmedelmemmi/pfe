import internshipsReducer from "./internshipsReducer";
import applicationsReducer from "./applicationsReducer";
import { combineReducers } from "redux";
import Filter_internReducer from "./Filter_internReducer";
import Filter_appReducer from "./filter_appReducer";
import Filter_candidatesReducer from "./filter_candidatesReducer";
import Filter_all_candidatesReducer from "./filter_all_candidatesReducer";
import candidatesReducer from "./candidatesReducer";
import all_candidatesReducer from "./all_candidatesReducer";
const rootReducer = combineReducers({
  candidates_filter: Filter_candidatesReducer,
  all_candidates_filter: Filter_all_candidatesReducer,
  app_filter: Filter_appReducer,
  intern_filter: Filter_internReducer,
  internships: internshipsReducer,
  applications: applicationsReducer,
  candidates: candidatesReducer,
  all_candidates: all_candidatesReducer,
});

export default rootReducer;
