import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  LicoresContent,
} from "./MenuContent";

export default function Licores({ t, setClickedImg }) {
  return (
    <MenuContentDiv>

      <TitleCategory>{t("MenuCategory.Licores")}</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={LicoresContent} t={t} />
      </ContainerProducts>
    </MenuContentDiv>
  );
}
