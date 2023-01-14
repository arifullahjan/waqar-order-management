import React from "react";
import menu from "../data/data";
import { Grid, Paper } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const MealCard = () => {
  return (
    <>
      {menu.map((menuItem) => {
        const { id, name, img, desc, price } = menuItem;
        return (
          <article key={id}>
            <Paper
              elevation={6}
              sx={{
                width: "60%",
                margin: "auto",
              }}
            >
              <Grid container>
                <Grid item xs={10} p={2}>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                  <h4>Rs.{price}</h4>
                </Grid>
                <Grid item xs={2} p={2}>
                  <div>
                    <img src={img} />
                    <span className="btn">
                      <AddBoxIcon />
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
