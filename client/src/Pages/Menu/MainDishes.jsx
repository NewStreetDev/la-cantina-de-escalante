import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {PlatosFuertesContent, FishChipsContent} from "./MenuContent"

import CordonBlue from "../../Images/Menu/cordonBlue.jpg"
import fishandchips from "../../Images/Menu/fishandchips.jpg"

export default function MainDishes({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>{t("MenuCategory.Platosfuertes")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={PlatosFuertesContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={CordonBlue} alt="Cordon Blue"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>{t("MenuCategory.Fishandchips")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={FishChipsContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={fishandchips} alt="fish and chips"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}