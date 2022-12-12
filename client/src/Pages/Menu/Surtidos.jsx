import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {SurtidosContent} from "./MenuContent"

import surtido from "../../Images/Menu/surtido.jpg"


export default function Surtidos({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>{t("MenuCategory.Surtidos")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={SurtidosContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={surtido} alt="Surtidos"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}