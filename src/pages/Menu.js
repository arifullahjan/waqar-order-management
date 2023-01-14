import React from "react";
import MealCard from "../components/MealCard";

const Menu = () => {
  return (
    <>
      <section className="menu section">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
      </section>
      <MealCard />
    </>
  );
};

export default Menu;
