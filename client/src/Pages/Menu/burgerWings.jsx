import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {BurgersContent, AlitasContent, SalsasContent} from "./MenuContent"

import Burger from "../../Images/Menu/burger.jpg"
import Alitas from "../../Images/alitas.png"

export default function BurgerWings({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>{t("MenuCategory.Hamburguesas")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={BurgersContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={Burger} alt="Hamburguesa"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>{t("MenuCategory.Alitas")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={AlitasContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory className="noneBorder">
                <div>
                    <img src={Alitas} alt="alitas"/>
                </div>
            </ContainerImageCategory>

            {/* <TitleCategory>{t("MenuCategory.Salsas")}</TitleCategory>
            <ContainerProducts className="sauces">
                <ModelProduct setClickedImg={setClickedImg} Items={SalsasContent} t={t} optionalClass="sauce"/>
            </ContainerProducts> */}
        </MenuContentDiv>
    );
}