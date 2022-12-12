import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  VodkaContent,
} from "./MenuContent";

export default function Vodka({ t, setClickedImg }) {
  return (
    <MenuContentDiv>

      <TitleCategory>vodka</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={VodkaContent} t={t} />
      </ContainerProducts>
    </MenuContentDiv>
  );
}
