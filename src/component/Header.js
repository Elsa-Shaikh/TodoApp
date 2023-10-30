import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Box textAlign={"center"} m={5}>
        <Typography variant="h3" fontWeight={"bold"} sx={{ color: "#2c3e50" }}>
          {" "}
          To-do List
        </Typography>
      </Box>
    </>
  );
};

export default Header;
