import React, { useState } from "react";
import "../../index.css";
import { FaRegWindowClose, FaWifi } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, Toaster } from "react-hot-toast";

export default function ModalWifi({ t }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const contraseña = "40022597";

  return (
    <>
      <button onClick={toggleModal} className="btn-modal-wifi">
        {t("modalWifi.TitleButton")} <FaWifi />
      </button>

      {modal && (
        <div className="modal-wifi">
          <div onClick={toggleModal} className="overlay-modal-wifi" >
          </div>
          <div className="modal-content-wifi">
            <h2>{t("modalWifi.Title")}</h2>
            <h4>Wifi bar</h4>
            <p>A_os Locos</p>
            <h4>{t("modalWifi.contraseña")}</h4>
            <p>{contraseña}</p>
            <CopyToClipboard text={contraseña}>
              <p
                className="btnCopiar-wifi"
                onClick={() =>
                  toast.success("Copiado", {
                    position: "top-center",
                    autoClose: 3000,
                    style: { background: "#FFFCF5", color: "#444" },
                  })
                }
              >
                {t("modalWifi.copyButton")}
              </p>
            </CopyToClipboard>
            <button className="close-modal-wifi" onClick={toggleModal}>
              <FaRegWindowClose />
            </button>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
}
