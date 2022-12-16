import * as actionTypes from "./ActionTypes";

const initialState = {
  feedBack: null,
};

export const FeedBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FEEDBACK_DATA_LOADED: {
      return {
        ...state,
        feedBack: action.payload,
      };
    }
    case actionTypes.FEEDBACK_CLEAR: {
      return {
        ...state,
        feedBack: {},
      };
    }
    default:
      return state;
  }
};
