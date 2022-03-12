import { combineReducers } from "redux";

import dateReducer from "./reducers/dateReducer";

const rootReducer = combineReducers({
  dateReducer,
});

export default rootReducer;
