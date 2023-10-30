import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodo } from "../redux/actions";
import ShowTodo from "./ShowTodo";
import { Box, Button, Paper, Stack } from "@mui/material";
import TodoTabs from "./TodoTabs";
import { ALL_TODO, DONE_TODO, ACTIVE_TODO } from "../redux/actions/type";
import { RemoveCircle } from "@mui/icons-material";

const ViewTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodo());
    // eslint-disable-next-line
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODO) {
      return todos;
    } else if (currentTab === ACTIVE_TODO) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODO) {
      return todos.filter((todo) => todo.done);
    }
  };
  const handleDoneTodos = () => {
    // todos.forEach(({ done, _id }) => { //For Mongodb
    todos.forEach(({ done, id }) => {
      // for PostgreSQL
      if (done) {
        // dispatch(deleteTodo(_id)); //For Mongodb
        dispatch(deleteTodo(id)); //For PostgreSQL
      }
    });
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Stack
          sx={{ width: "50%" }}
          display={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Paper sx={{ marginLeft: "2rem" }}>
            <TodoTabs currentTab={currentTab} />
          </Paper>
          {todos.some((todo) => todo.done) ? (
            <Button
              onClick={handleDoneTodos}
              color="error"
              variant="contained"
              sx={{ marginRight: "2rem", marginTop: "7px", height: "50px" }}
              startIcon={<RemoveCircle />}
            >
              {" "}
              Remove Done Todos
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={5}
      >
        {getTodos().map((todo) => {
          return (
            <ShowTodo
              // key={todo._id} //For Mongodb
              key={todo.id} //for PostgreSQL
              todo={todo}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ViewTodos;
