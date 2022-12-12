import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  WhiskyContent,
} from "./MenuContent";

export default function Whisky({ t, setClickedImg }) {
  return (
    <MenuContentDiv>

      <TitleCategory>Whisky</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={WhiskyContent} t={t} />
      </ContainerProducts>

    </MenuContentDiv>
  );
}
