import React, { useState } from "react";
import Menu from "./Manu";
import Categories from "./Categories";
import items from "./data";
import "./App.css";

const allCategories = ['all', ...new Set(items.map(
  (item) => item.category))]

function App() {
  const [menuItems, setManuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItem = (category) => {
    if (category == "all") {
      setManuItem(items);
      return;
    }
    const newItem = items.filter((items) => items.category === category);
    setManuItem(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our manu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
