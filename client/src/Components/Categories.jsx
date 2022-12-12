import React from "react";
import { BtnContainer } from "../Pages/Menu/Menu.elements";
import { Link } from "react-router-dom";
import CategoriesCards from "../Pages/Menu/categoriesCards.json";

const Categories = ({ activeCategory, t }) => {
  return (
    <BtnContainer>
      {CategoriesCards.categories.map((category, index) => {
        return (
          <Link to={`/menu/${category.anchor}`} key={index}>
            <button
              className={`${
                activeCategory === category.anchor
                  ? "filter-btn active"
                  : "filter-btn"
              }`}
            >
              {t(category.title)}
            </button>
          </Link>
        );
      })}
    </BtnContainer>
  );
};

export default Categories;
