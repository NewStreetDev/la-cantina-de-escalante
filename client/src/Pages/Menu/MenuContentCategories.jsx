import BocasAntojos from "./bocasantojos";
import ChifrijosCevichess from "./chifrijosCeviches";
import NachosWraps from "./NachosWraps";
import MainDishes from "./MainDishes";
import BurgerWings from "./burgerWings";
import TacosQuesadillas from "./TacosQuesadillas";
import Surtidos from "./Surtidos";
import Shots from "./Shots";
import Cocteles from "./Cocteles";
import Tequila from "./Tequila";
import Whisky from "./Whisky";
import Vodka from "./Vodka";
import Vinos from "./Vinos";
import Cervezas from "./Cervezas";
import Licores from "./Licores";
import Ron from "./Ron";

export default function MenuContentCategories({
  activeCategory,
  t,
  setClickedImg,
}) {

  if (activeCategory === "bocas_y_Antojos" || activeCategory === "Bocas y Antojos" || activeCategory === "Bocas and Antojos") {
    return <BocasAntojos t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "chifrijos_y_ceviches" || activeCategory === "Chifrijos and Ceviches" || activeCategory === "Chifrijos y Ceviches") {
    return <ChifrijosCevichess t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "nachos_y_wraps" || activeCategory === "Nachos and Wraps" || activeCategory === "Nachos y Wraps") {
    return <NachosWraps t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "platos_fuertes" || activeCategory === "Main Dishes" || activeCategory === "Platos Fuertes") {
    return <MainDishes t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "hamburguesa_y_alitas" || activeCategory === "Burgers and Wings" || activeCategory === "Hamburguesa y Alitas") {
    return <BurgerWings t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "tacos_y_quesadillas" || activeCategory === "Tacos and Quesadillas" || activeCategory === "Tacos y Quesadillas") {
    return <TacosQuesadillas t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "surtidos" || activeCategory === "Surtidos") {
    return <Surtidos t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "shots" || activeCategory === "Shots") {
    return <Shots t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "tequila" || activeCategory === "Tequila") {
    return <Tequila t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "whisky" || activeCategory === "Whisky" ) {
    return <Whisky t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "vodka" || activeCategory === "Vodka" ) {
    return <Vodka t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "vinos" || activeCategory === "Vinos" || activeCategory === "Wines") {
    return <Vinos t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "cervezas" || activeCategory === "Cervezas" || activeCategory === "Beers") {
    return <Cervezas t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "licores" || activeCategory === "Liqueur" || activeCategory === "Licores") {
    return <Licores t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "ron" || activeCategory === "Ron" ) {
    return <Ron t={t} setClickedImg={setClickedImg}/>;
  }
  if (activeCategory === "cocktails" || activeCategory === "Cocktails" || activeCategory === "Cócteles") {
    return <Cocteles t={t} setClickedImg={setClickedImg}/>;
  }
    // if (activeCategory === "Bocas y Antojos" || activeCategory === "Bocas and Antojos") {
    //   return <BocasAntojos t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Chifrijos and Ceviches" || activeCategory === "Chifrijos y Ceviches") {
    //   return <ChifrijosCevichess t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Nachos and Wraps" || activeCategory === "Nachos y Wraps") {
    //   return <NachosWraps t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Main Dishes" || activeCategory === "Platos Fuertes") {
    //   return <MainDishes t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Burgers and Wings" || activeCategory === "Hamburguesa y Alitas") {
    //   return <BurgerWings t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Tacos and Quesadillas" || activeCategory === "Tacos y Quesadillas") {
    //   return <TacosQuesadillas t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Surtidos") {
    //   return <Surtidos t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Shots") {
    //   return <Shots t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Tequila" ) {
    //   return <Tequila t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Whisky" ) {
    //   return <Whisky t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Vodka" ) {
    //   return <Vodka t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Vinos" || activeCategory === "Wines") {
    //   return <Vinos t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Cervezas" || activeCategory === "Beers") {
    //   return <Cervezas t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Liqueur" || activeCategory === "Licores") {
    //   return <Licores t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Ron" ) {
    //   return <Ron t={t} setClickedImg={setClickedImg}/>;
    // }
    // if (activeCategory === "Cocktails" || activeCategory === "Cócteles") {
    //   return <Cocteles t={t} setClickedImg={setClickedImg}/>;
    // }
}
