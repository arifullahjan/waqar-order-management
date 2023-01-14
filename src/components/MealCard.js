import React from "react";
import menu from "../data/data";
import { Grid, Paper } from "@mui/material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
const MealCard = () => {
  return (
    <>
      {menu.map((menuItem) => {
        const { id, name, img, desc, price } = menuItem;
        return (
          <article key={id}>
            <Paper
              sx={{
                width: "60%",
                margin: "auto",
              }}
            >
              <Grid container>
                <Grid item xs={10} p={2}>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                  <h4>
                    {price.toLocaleString("en-PK", {
                      style: "currency",
                      currency: "PKR",
                      minimumFractionDigits: 0,
                    })}
                  </h4>
                </Grid>
                <Grid item xs={2} p={2}>
                  <div>
                    <img src={img} />
                    <span className="btn">
                      <AddBoxRoundedIcon />
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </article>
        );
      })}
    </>
  );
};

export default MealCard;
