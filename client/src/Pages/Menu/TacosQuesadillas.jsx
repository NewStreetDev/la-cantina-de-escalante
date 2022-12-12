import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {TacosContent, QuesadillaContent} from "./MenuContent"

import taco from "../../Images/Menu/taco.jpg"
import quesadilla from "../../Images/Menu/quesadilla.jpg"

export default function TacosQuesadillas({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>Tacos</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={TacosContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={taco} alt="tacos"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>Quesadillas</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={QuesadillaContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={quesadilla} alt="quesadilla"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}