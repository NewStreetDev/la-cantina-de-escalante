import ModelProduct from "../../Components/ModelProduct";
import { ContainerImageCategory, ContainerProducts, MenuContentDiv, NoteCategory, SubtitleCategory, TitleCategory } from "./Menu.elements";
import {ChifrijosContent, CevichesContent} from "./MenuContent"
import Ceviche from "../../Images/Menu/Ceviche.jpg"
import Chifrijo from "../../Images/Menu/chifrijo.jpg"

export default function ChifrijosCeviches({t, setClickedImg}){
    return (
        <MenuContentDiv>
            <TitleCategory>Chifrijos</TitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={ChifrijosContent} t={t}/>
            </ContainerProducts>

            <ContainerImageCategory>
                <div>
                    <img src={Chifrijo} alt="Ceviche"/>
                </div>
            </ContainerImageCategory>

            <TitleCategory>Ceviches</TitleCategory>
            <SubtitleCategory>{t("MenuTitle.estiloperuano")}</SubtitleCategory>
            <ContainerProducts>
                <ModelProduct setClickedImg={setClickedImg} Items={CevichesContent} t={t}/>
            </ContainerProducts>
            <NoteCategory>
                <div>
                    <h4>Leche de tigre:</h4>
                    <p>Base peruana líquida que queda al momento de reposar el pescado crudo en su marinaje, que contiene una seductora mezcla de ingredientes como cítricos, cebollas y ajos que se transforman en la leche de tigre.</p>
                </div>
            </NoteCategory>
            <ContainerImageCategory>
                <div>
                    <img src={Ceviche} alt="Ceviche"/>
                </div>
            </ContainerImageCategory>
        </MenuContentDiv>
    );
}