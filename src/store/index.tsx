import { combineReducers } from "redux";

import dateReducer from "./reducers/dateReducer";
import getPostsReducer from "./reducers/getPostsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  post: postReducer,
  allPosts: getPostsReducer,
  dateReducer,
});

export default rootReducer;
