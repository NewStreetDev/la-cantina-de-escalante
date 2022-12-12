import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  RonContent,
} from "./MenuContent";

export default function Ron({ t, setClickedImg }) {
  return (
    <MenuContentDiv>

      <TitleCategory>Ron</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={RonContent} t={t} />
      </ContainerProducts>
    </MenuContentDiv>
  );
}
