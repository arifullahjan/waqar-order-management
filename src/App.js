import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ItemDetailPage from "./components/ItemDetailPage";
import Navbar from "./components/Navbar";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/ItemDetailPage" element={<ItemDetailPage />} />
      </Routes>
      <Button
        sx={{ width: 200, padding: 1, margin: 2 }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => navigate("/MenuPage")}
      >
        MenuPage <ChevronRightIcon />
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button
        sx={{ width: 200, padding: 1, margin: 2 }}
        size="small"
        variant="contained"
        color="success"
        onClick={() => navigate("/ItemDetailPage")}
      >
        ItemDetailPage <ChevronRightIcon />
      </Button>
    </>
  );
}

export default App;
