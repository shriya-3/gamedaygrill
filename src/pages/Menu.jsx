import React from "react";
import sections from "../data.json";
import "./menu.css";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menub_page">
      <div className="side_bar">
        <h4 className="side_bar_title">Menu</h4>
        <div className="side_bar_items">
        {sections.map((section, index) => (
            <Link key={index} className="side_item" to={`#section-${index}`}>
              <h3>{section.title}</h3>
            </Link>
          ))}
            <Link className="side_item_beta" to="home">
            <h3>Allergen Menu</h3>
            </Link>
            <Link className="side_item_beta" to="home">
            <h3>Nutrition Menu</h3>
            </Link>
        </div>
      </div>
      <section className="section1">
        {sections.map((section, index) => (
          <div key={index} className="section_items" id={`section-${index}`}>
            <h2 className="section_title">{section.title}</h2>
            <div className="cards">
              {section.items.map((item, itemIndex) => (
                <Cards key={itemIndex} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>

  );
};

export default Menu;
