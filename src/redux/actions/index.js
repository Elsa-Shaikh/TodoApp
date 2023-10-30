import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  DONETOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLETAB_TODO,
} from "./type";

// const base_url = "http://localhost:5000"; //for Mongodb
const base_url = "http://localhost:5000/api"; //for PostgreSQL

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_url}/todo`, { data });
    dispatch({ type: ADDNEW_TODO, payload: response.data });
  } catch (error) {
    console.log("Error while calling addnewTodo API: ", error.message);
  }
};

export const getAllTodo = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/getAllTodo`);
    dispatch({ type: GETALL_TODO, payload: response.data });
  } catch (error) {
    console.log("Error while calling Get all todo API: ", error.message);
  }
};

export const doneTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/doneTodo/${id}`);
    dispatch({ type: DONETOGGLE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error while calling Done todo API: ", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`${base_url}/updateTodo/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error while calling Update todo API: ", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${base_url}/deleteTodo/${id}`);
    dispatch({ type: DELETE_TODO, payload: response.data });
  } catch (error) {
    console.log("Error while calling Delete todo API: ", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLETAB_TODO, selected: tab });
};
