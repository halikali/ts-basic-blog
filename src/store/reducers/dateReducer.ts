const initialState = {
  data: [],
};

const dateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
