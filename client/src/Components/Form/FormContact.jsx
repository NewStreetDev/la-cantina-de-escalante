import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function FormContact({ t }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // import.meta.env.REACT_APP_SERVICES_KEY_CONTACT,
        "service_ruwo0ql",
        // import.meta.env.REACT_APP_TEMPLATE_KEY_CONTACT,
        "template_qpdphzg",
        form.current,
        // import.meta.env.REACT_APP_KEY_USER_CONTACT
        "gUDgeY5pzd0xl-83Y"
      )
      .then(
        (result) => {
          toast.success("Mensaje enviado", {
            position: "bottom-center",
            autoClose: 3000,
            style: {
              background: "#444",
              color: "#FFFCF5",
            },
          });
        },
        (error) => {
          toast.error("Error al enviar", {
            position: "bottom-center",
            autoClose: 3000,
            style: {
              background: "#444",
              color: "#FFFCF5",
            },
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder={t("formContact.name")}
          required
        />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder={t("formContact.message")}
          required
        />
        <input type="submit" value={t("formContact.btn")} />
      </form>
      <Toaster />
    </>
  );
}
