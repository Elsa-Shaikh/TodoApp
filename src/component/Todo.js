import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { Box, TextField } from "@mui/material";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Box textAlign={"center"} m={5}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter new todo..."
            variant="standard"
            sx={{ color: "#2c3e50", width: "50%" }}
          />
        </form>
      </Box>
    </>
  );
};

export default Todo;
