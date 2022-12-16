import * as actionTypes from "./ActionTypes";

export const FeedBackData = (payload) => {
  return {
    type: actionTypes.FEEDBACK_DATA_LOADED,
    payload,
  };
};

export const FeedBackClear = () => {
  return {
    type: actionTypes.FEEDBACK_CLEAR,
  };
};
