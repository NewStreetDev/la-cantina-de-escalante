// import { ContainerMenu, TitleDiv } from "./Menu.elements";
// import { Navigate, useParams } from "react-router-dom";
// import ModalMenu from "./ModalMenu";
// import MenuContent from "./MenuContentCategories";
// import { useState } from "react";
// import Categories from "../../Components/Categories";

const MENUCATEGORIES = [
    "bocas_y_Antojos",
    "chifrijos_y_ceviches",
    "nachos_y_wraps",
    "platos_fuertes",
    "hamburguesa_y_alitas",
    "tacos_y_quesadillas",
    "surtidos",
    "shots",
    "tequila",
    "whisky",
    "vodka",
    "vinos",
    "cervezas",
    "licores",
    "ron",
    "cocktails",
  ];

export default function ContentMenuCategory({ t }) {
  // const { category } = useParams();

  // let phototype = MENUCATEGORIES.includes(category);

  // if (!phototype) {
  //   return <Navigate to="/Error" />;
  // }
  // const [clickedImg, setClickedImg] = useState(null);

  // return (
  //   <ContainerMenu>
  //     <TitleDiv>
  //       <h1>{t("MenuCategory.title")}</h1>
  //     </TitleDiv>
  //     <Categories
  //       activeCategory={category}
  //       t={t}
  //     />
  //     <MenuContent
  //       setClickedImg={setClickedImg}
  //       activeCategory={category}
  //       t={t}
  //     />
  //     {clickedImg && (
  //       <ModalMenu setClickedImg={setClickedImg} clickedImg={clickedImg} />
  //     )}
  //   </ContainerMenu>
  // );
}
