import * as actionTypes from "../actions/type";

export const todosTabReducers = (state = actionTypes.ALL_TODO, action) => {
  switch (action.type) {
    case actionTypes.TOGGLETAB_TODO:
      return action.selected;
    default:
      return state;
  }
};
