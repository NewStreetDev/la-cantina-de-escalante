import { Dismiss, ImageOverlay, Overlay } from "./Menu.elements";

export default function ModalMenu({setClickedImg, clickedImg}){
    const handleClick = (e) => {
        setClickedImg(null);
      };
    return (
        <Overlay>
            <ImageOverlay src={`/ImageMenu/${clickedImg}`} alt=""/>
            <Dismiss onClick={handleClick}>
                x
            </Dismiss>
        </Overlay>
    )
}