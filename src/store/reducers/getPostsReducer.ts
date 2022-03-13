const initialState = {
  posts: [],
  isLoad: false,
};

const getPostsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return { ...state, isLoad: false };
    case "GET_POSTS_SUCCESS":
      return { ...state, posts: action.payload, isLoad: true };
    case "GET_POSTS_FAILURE":
      return {
        ...state,
        isLoad: true,
        error:
          "Şu anda gönderilere ulaşılamıyor. Lütfen daha sonra tekrar deneyiniz.",
      };
    default:
      return state;
  }
};

export default getPostsReducer;
