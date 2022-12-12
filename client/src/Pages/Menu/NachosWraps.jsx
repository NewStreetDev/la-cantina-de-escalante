import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, TitleCategory } from "./Menu.elements";
import {NachosContent, WrapsContent} from "./MenuContent"

import Nachos from "../../Images/Menu/nachos.jpg"
import Wrap from "../../Images/Menu/wrap.jpg"

export default function NachosWraps({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>Nachos</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={NachosContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={Nachos} alt="Nachos"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>Wraps</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={WrapsContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={Wrap} alt="wrap"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}