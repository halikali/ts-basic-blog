export const getDate = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SET_DATE",
      payload: new Date(),
    });
  };
};
