import React, { useState, useEffect } from "react";
import MealCard from "../components/MealCard";
import Categories from "../components/Categories";

//////////////////////////////////////////

import { app } from "../firebase";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const firestore = getFirestore(app);

///////////////////////////////////////////////
const Menu = () => {
  const [items, setItems] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  };

  const listAllItems = () => {
    return getDocs(collection(firestore, "items"));
  };
  useEffect(() => {
    listAllItems().then((items) => setItems(items.docs));
  }, []);

  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu </h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} />;
      {items.map((item) => {
        return <MealCard key={item.id} {...item.data()} />;
      })}
    </section>
  );
};

export default Menu;
