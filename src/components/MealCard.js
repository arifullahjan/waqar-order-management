import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";

const MealCard = ({ item }) => {
  const { id, name, img, desc, price } = menuItem;
  return (
    <>
      <div>{name}</div>
      <div>{img}</div>
    </>
  );
};

export default MealCard;
