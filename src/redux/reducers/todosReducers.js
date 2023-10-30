import * as actionTypes from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    case actionTypes.GETALL_TODO:
      return action.payload;
    case actionTypes.DONETOGGLE_TODO:
      return state.map(
        (todo) =>
          // todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo //For MongoDB
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo //For PostgreSQL
      );
    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        // todo._id === action.payload._id //for MongoDB
        todo.id === action.payload.id //for PostgreSQL
          ? { ...todo, data: action.payload.data }
          : todo
      );
    case actionTypes.DELETE_TODO:
      // return state.filter((todo) => todo._id !== action.payload._id); //for Mongodb
      return state.filter((todo) => todo.id !== action.payload.id); //for PostgreSQL
    default:
      return state;
  }
};
