import React, { useState } from "react";
import MealCard from "../components/MealCard";
import Categories from "../components/Categories";
import items from "../data/data";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <section className="menu section">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} />
      {menuItems.map((menuItem) => {
        return <MealCard menuItem={menuItem} />;
      })}
    </>
  );
};

export default Menu;
