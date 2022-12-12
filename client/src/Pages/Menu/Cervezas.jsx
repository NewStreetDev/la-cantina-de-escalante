import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  CervezasContent,
} from "./MenuContent";

export default function Cervezas({ t, setClickedImg }) {
  return (
    <MenuContentDiv>
      <TitleCategory>{t("MenuCategory.Cervezas")}</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={CervezasContent} t={t} />
      </ContainerProducts>
    </MenuContentDiv>
  );
}
