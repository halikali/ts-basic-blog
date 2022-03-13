const initialState = {
  post: {},
  isLoad: false,
};

const getPostByIDReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_POST_BY_ID_REQUEST":
      return {
        ...state,
        isLoad: false,
      };
    case "GET_POST_BY_ID_SUCCESS":
      return {
        ...state,
        post: action.payload,
        isLoad: true,
      };
    case "GET_POST_BY_ID_FAILURE":
      return {
        ...state,
        isLoad: false,
      };
    default:
      return state;
  }
};

export default getPostByIDReducer;
