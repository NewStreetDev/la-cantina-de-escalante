import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {FishChipsContent} from "./MenuContent"

import fishandchips from "../../Images/Menu/fishandchips.jpg"

export default function Fishandchips({t, setClickedImg}){
    return (
        <MenuContentDiv>
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