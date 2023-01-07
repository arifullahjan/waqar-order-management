import React from "react";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>menu Page</h1>
      <Button
        sx={{ width: 200, padding: 1, margin: 2 }}
        id="btn"
        variant="contained"
        onClick={() => navigate(-1)}
        size="small"
      >
        <ChevronLeftIcon />
        Go Back
      </Button>
    </div>
  );
};

export default MenuPage;
