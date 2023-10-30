import React from "react";
import { TABS } from "../redux/actions/type";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const TodoTabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return (
    <>
      {TABS.map((tab) => (
        <Button
          onClick={() => dispatch(toggleTab(tab))}
          variant="contained"
          sx={{
            margin: "10px",
            padding: "10px",
            fontSize: "14px",
            border: "none",
            bgcolor: tab === currentTab ? "orange" : "#6c6777",
          }}
        >
          {tab}
        </Button>
      ))}
    </>
  );
};

export default TodoTabs;
