const initialState = {
  data: [],
  isLoad: false,
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_POST_REQUEST":
      return { ...state, isLoad: false };
    case "ADD_POST_SUCCESS":
      return { ...state, isLoad: true, data: action.payload };
    case "ADD_POST_FAILURE":
      return { ...state, isLoad: true, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
