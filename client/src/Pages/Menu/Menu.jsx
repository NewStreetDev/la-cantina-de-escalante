import React, { useState } from "react";
// import MenuContent from "./MenuContentCategories";
// import {
//   Card,
//   ContainerCardCategory,
//   ContainerMenu,
//   TitleDiv,
// } from "./Menu.elements";
// import ModalWifi from "../../Components/Modal/MocalWifi";
import { Helmet } from "react-helmet-async";
// import SelectComponent from "../../Components/SelectComponent";
// import ModalMenu from "./ModalMenu";
// import { Link } from "react-router-dom";
// import CategoriesCards from "./categoriesCards.json";

export default function Menu({ t }) {
  // const [clickedImg, setClickedImg] = useState(null);
  // const [activeCategory, setActiveCategory] = useState(
  //   `${t("MenuCategory.bocasantojos")}`
  // );

  // const filterItems = (category) => {
  //   setActiveCategory(category);
  // };

  return (
    <>
      <Helmet>
        <title>La Cantina de Escalante - Menu</title>
        <meta name="description" content="Disfruta de nuestra comida" />
        <link rel="canonical" href="/menu" />
      </Helmet>
      {/* <ContainerMenu
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ transition: { duration: 0.5 } }}
      >
        <ModalWifi t={t} />
        <TitleDiv>
          <h1>{t("MenuCategory.title")}</h1>
        </TitleDiv>
        <ContainerCardCategory>
          {CategoriesCards.categories.map((category, index) => {
            return (
              <Card to={category.anchor} key={index}>
                <picture>
                  <img src={`ImageMenu/${category.imageUrl}`} />
                </picture>
                <h4>{t(category.title)}</h4>
              </Card>
            );
          })}
        </ContainerCardCategory> */}

        {/* 
        <SelectComponent
          t={t}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <MenuContent
          setClickedImg={setClickedImg}
          activeCategory={activeCategory}
          t={t}
        />
        {clickedImg && (
          <ModalMenu setClickedImg={setClickedImg} clickedImg={clickedImg} />
        )}
         
      </ContainerMenu>*/}
    </>
  );
}
