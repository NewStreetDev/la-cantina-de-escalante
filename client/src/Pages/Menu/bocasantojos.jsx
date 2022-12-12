import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {BocasContent, AntojosContent} from "./MenuContent"

import DadosQueso from "../../Images/Menu/dadosQueso.jpg"
import chicharronCalamar from "../../Images/Menu/chicharronCalamar.jpg"

export default function BocasAntojos({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>{t("MenuCategory.bocas")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={BocasContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                <img src={DadosQueso} alt="dados de queso"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>{t("MenuCategory.antojos")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={AntojosContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                <img src={chicharronCalamar} alt="chicharron de calamar"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}