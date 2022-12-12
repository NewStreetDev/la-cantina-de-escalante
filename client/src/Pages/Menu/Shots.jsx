import ModelProduct from "../../Components/ModelProduct";
import { ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {ShotsContent} from "./MenuContent"

export default function Shots({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>Shots</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={ShotsContent} t={t}/>
            </ContainerProducts>
        </MenuContentDiv>
    );
}