import * as actionTypes from "./ActionTypes";

const initialState = {
  capsules: [],
  search_capsules: [],
  loader: false,
  click: false,
};

export const LandingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAPSULES: {
      return {
        ...state,
        capsules: action.payload,
        search_capsules: action.search ? state.search_capsules : action.payload,
      };
    }
    case actionTypes.SHOW_LOADER: {
      return {
        ...state,
        loader: action.payload,
      };
    }
    case actionTypes.GET_CLICK: {
      return {
        ...state,
        click: !state.click,
      };
    }
    default:
      return state;
  }
};
