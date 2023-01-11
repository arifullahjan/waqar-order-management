import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import menu from "../data/data";
import MealCard from "../components/MealCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const MenuPage = () => {
  return (
    <>
      <section className="menu-section">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
        <Box x={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {menu.map((menuItem) => {
              const { id, name, img, desc, price } = menuItem;
              return (
                <Grid item xs={8}>
                  <Item>
                    <MealCard item={menuItem} />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default MenuPage;
