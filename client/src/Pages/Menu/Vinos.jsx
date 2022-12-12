import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  VinosContent,
} from "./MenuContent";

export default function Vinos({ t, setClickedImg }) {
  return (
    <MenuContentDiv>
      

      <TitleCategory>{t("MenuCategory.Vinos")}</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={VinosContent} t={t} />
      </ContainerProducts>

      
    </MenuContentDiv>
  );
}
