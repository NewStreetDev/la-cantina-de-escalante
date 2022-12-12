import ModelProduct from "../../Components/ModelProduct";
import {
  ContainerProducts,
  MenuContentDiv,
  TitleCategory,
} from "./Menu.elements";
import {
  TequilaContent
} from "./MenuContent";

export default function Tequila({ t, setClickedImg }) {
  return (
    <MenuContentDiv>
      <TitleCategory>Tequila</TitleCategory>
      <ContainerProducts>
        <ModelProduct setClickedImg={setClickedImg} Items={TequilaContent} t={t} />
      </ContainerProducts>
    </MenuContentDiv>
  );
}
