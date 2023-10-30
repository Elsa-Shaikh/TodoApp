import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { doneTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const ShowTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEditClick, setIsEditClick] = useState(false);
  const [EditText, setEditText] = useState(todo.data);

  const handleTodoDoneToggle = () => {
    // dispatch(doneTodo(todo._id)); //For Mongodb
    dispatch(doneTodo(todo.id)); // For PostgreSQL
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditClick((prevState) => !prevState);

    // dispatch(updateTodo(todo._id, EditText)); //For Mongodb
    dispatch(updateTodo(todo.id, EditText)); //For PostgreSQL
  };

  const handleDeleteTodo = () => {
    // dispatch(deleteTodo(todo._id)) //For MongoDB
    dispatch(deleteTodo(todo.id)); // For PostgreSQL
  };

  return (
    <>
      <List
        sx={{
          textDecoration: todo.done ? "line-through" : "",
          cursor: "pointer",
          bgcolor: "#2c3e50",
          marginBottom: "5px",
          borderRadius: "10px",
          color: todo.done ? "red" : "white",
          width: "50%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: isEditClick ? "inline" : "none" }}
        >
          {/* <TextField 
            variant="standard"
            sx={{ 
              border:'none',
              borderBottom:'1px solid #fff',
              bgcolor:'inherit',color: "white", width: "85%",marginLeft:'20px',paddingLeft:'10px' }}
            type="text" value={EditText} onChange={(e)=> setEditText(e.target.value)}></TextField> */}
          <input
            type="text"
            value={EditText}
            onChange={(e) => setEditText(e.target.value)}
            style={{
              width: "85%",
              fontSize: "16px",
              color: "#FFFFFF",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #FFFFFF",
              marginLeft: "25px",
              outline: "none",
              marginTop: "10px",
            }}
          />
        </form>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" sx={{ color: "white" }}>
              <DeleteIcon onClick={handleDeleteTodo} />
              <EditIcon
                sx={{ marginLeft: "5px" }}
                onClick={() => setIsEditClick((prevState) => !prevState)}
              />
            </IconButton>
          }
        >
          <ListItemText
            primary={todo.data}
            sx={{ display: isEditClick ? "none" : "" }}
            onClick={handleTodoDoneToggle}
          />
        </ListItem>
      </List>
    </>
  );
};

export default ShowTodo;
