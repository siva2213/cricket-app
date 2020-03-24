const initialState = {
  matchDetails: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MATCH_DETAILS":
      return {
        ...state,
        matchDetails: action.value
      };
    default:
      return state;
  }
};
