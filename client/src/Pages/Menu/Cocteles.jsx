import ModelProduct from "../../Components/ModelProduct";
import { ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {CoctelesContent} from "./MenuContent"

export default function Cocteles({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>{t("MenuCategory.Cocteles")}</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={CoctelesContent} t={t}/>
            </ContainerProducts>
        </MenuContentDiv>
    );
}