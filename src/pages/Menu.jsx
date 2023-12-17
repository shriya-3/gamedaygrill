import React from "react";
import sections from "../data.json";
import "./menu.css";
import Cards from "../components/Cards";

const Menu = () => {
  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const allergenLink = 'https://drive.google.com/file/d/1xK7PKjeH-Wf4nACNMn6vJ8h1TjofA0q0/view?usp=sharing';
  const nutritionLink = 'https://drive.google.com/file/d/1H43d-3QH280zKaNTx9NQa_hkzJgeoz66/view';
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit',       // Use the default text color
  };

  return (
    <div className="menub_page">
      <div className="side_bar">
        <h4 className="side_bar_title">Menu</h4>
        <div className="side_bar_items">
          {sections.map((section, index) => (
            <div
              key={index}
              className="side_item"
              onClick={() => scrollToSection(index)}
            >
              <h3>{section.title}</h3>
            </div>
          ))}
          <div
            className="side_item_beta"
            onClick={() => scrollToSection("allergen-menu")}
          >
            <h3>
            <a href={allergenLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>Allergen Menu</a>
            </h3>
          </div>
          <div
            className="side_item_beta"
            onClick={() => scrollToSection("nutrition-menu")}
          >
            <h3>
            <a href={nutritionLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>Nutrition Facts</a>
            </h3>
          </div>
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
