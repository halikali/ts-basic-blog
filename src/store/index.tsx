import { combineReducers } from "redux";

import dateReducer from "./reducers/dateReducer";
import getPostByIDReducer from "./reducers/getPostByIDReducer";
import getPostsReducer from "./reducers/getPostsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  post: postReducer,
  allPosts: getPostsReducer,
  singlePost: getPostByIDReducer,
  dateReducer,
});

export default rootReducer;
