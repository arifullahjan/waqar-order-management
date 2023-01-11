import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import ItemDetailPage from "./components/ItemDetailPage";
import MealCard from "./components/MealCard";
import items from "./components/data";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/ItemDetailPage" element={<ItemDetailPage />} />
        <Route path="/MealCard" element={<MealCard />} />
      </Routes>
      <MealCard items={menuItems} />
    </>
  );
}

export default App;
