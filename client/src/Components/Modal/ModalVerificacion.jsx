import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

function ModalVerificacion({ handleClickFunction, item, TitleModal, SecondaryTitle, TextButton }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = () => {
    handleClickFunction(item);
    toggleModal()
  };
  return (
    <>
      <ButtonDelete onClick={toggleModal}>
        Listo
      </ButtonDelete>

      {modal && (
        <Modal>
          <OverlayModal onClick={toggleModal} />
          <ModalContent>
            <RiDeleteBin5Line className="delete" />
            <div className="content">
              <h4>{TitleModal}</h4>
              <p>{SecondaryTitle}</p>
            </div>
            <div className="buttonContent">
              <button className="btnCancel" onClick={toggleModal}>
                Cancelar
              </button>
              <button className="btnDelete" onClick={handleClick}>
                {TextButton}
              </button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <GrClose />
            </button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default ModalVerificacion;

const ButtonDelete = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  background: #0d6efd;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
`;

const OverlayModal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(5px);
  --bg-color: rgba(255, 255, 255, 0);
  background: var(--bg-color);
  -webkit-box-shadow: 0 0 0 1000px var(--bg-color);
  box-shadow: 0 0 0 1000px var(--bg-color);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: rgb(255, 255, 255);
  -webkit-box-shadow: 0 0 20px #9c9c9c;
  box-shadow: 0 0 20px #9c9c9c;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  z-index: 101;

  .delete {
    font-size: 40px;
    // left: 50%;
    // transform: translateX(-50%);
    position: relative;
  }

  .content {
    text-align: center;
    h4 {
      margin-top: 20px;
    }
  }
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background: 0 0;
    border: none;
    cursor: pointer;
  }
  .buttonContent {
    display: flex;
    margin-top: 10px;
    justify-content: center;
    button {
      padding: 8px 15px;
      font-size: 17px;
      margin: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      background: #dc3545;
      transition: opacity 0.2s;
    }
    .btnCancel {
      background: #bbb;
      color: #000;
    }
    button:hover {
      opacity: 0.8;
    }
  }
`;
