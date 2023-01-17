import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Categories from "../components/Categories";
import items from "../data/data";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [menuItems]);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu </h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} />;
      {loading ? (
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={150} color="secondary" />
        </Box>
      ) : (
        menuItems.map((menuItem) => {
          return <MealCard menuItem={menuItem} />;
        })
      )}
    </section>
  );
};

export default Menu;
