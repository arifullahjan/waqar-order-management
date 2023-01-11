import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const MealCard = ({ items }) => {
  return (
    <>
      {items.map((menuItem) => {
        const { id, name, img, desc, price } = menuItem;
        return (
          <section className="menu-section">
            <div className="title">
              <h2>our menu </h2>
              <div className="underline"></div>
            </div>
            <Box x={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  <Item>xs=1</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=2</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=3</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=5</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=6</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=7</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=9</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=10</Item>
                </Grid>
              </Grid>
            </Box>
          </section>
        );
      })}
    </>
  );
};

export default MealCard;
