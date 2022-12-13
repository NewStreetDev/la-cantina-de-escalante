import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import FormComponent from "../../Components/Form/FormContact";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import GoogleMapComponent from "../../Components/GoogleMaps/GoogleMapComponent";
import { motion } from "framer-motion";

export default function ContactUs({ t }) {
  return (
    <>
      <Helmet>
        <title>La cantina de Escalante - Contact Us</title>
        <meta
          name="description"
          content="Escríbenos un mensaje - ¡A la espera de saber de ti! - Contáctenos"
        />
        <link rel="canonical" href="/contacto" />
      </Helmet>
      <ContainerContactUs>
        <ContainerContact>
          <ContactInfo>
            <h2>{t("contactUs.title")}</h2>
            <div>
              <h3>{t("contactUs.subtitleForm")}</h3>
              <a href="tel:+50640340228" className="firstAnchor">
                <FaPhoneAlt className="Phonesvg" />
                +506 4034-0228
              </a>
              <a href="https://api.whatsapp.com/send?phone=50647064998">
                <FaWhatsapp />
                WhatsApp
              </a>
              <a href="https://www.instagram.com/losa_locos/">
                <FaInstagram />
                Instagram
              </a>
              <a href="mailto: mail@gmail.com">
                <FaRegEnvelope />
                usuario@gmail.com
              </a>
              <a href="https://www.facebook.com/losaoslocos">
                <FaFacebookF />
                Facebook
              </a>
            </div>
          </ContactInfo>
          <ContactForm
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
          >
            <h3>{t("contactUs.titleForm")}</h3>
            <FormComponent t={t} />
          </ContactForm>
        </ContainerContact>
        <ContentGoogle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        >
          <GoogleMapComponent />
        </ContentGoogle>
      </ContainerContactUs>
    </>
  );
}

const ContainerContactUs = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentGoogle = styled(motion.section)`
  width: 100%;
  iframe {
    border: none;
    margin-top: 30px;
    height: 400px;
    width: 100%;
  }
`;

const ContainerContact = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.section`
  width: 360px;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 30px;
    margin: 40px 0 30px 0;
  }
  div {
    background: #00000090;
    padding: 10px;
    border-radius: 20px;
    width: 300px;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    3 h3 {
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }
    .firstAnchor {
      margin-top: 40px;
    }
    a {
      color: currentColor;
      text-decoration: none;
      margin-bottom: 25px;
      width: 230px;
      font-size: 17px;
      display: flex;
      align-items: center;
      transition: color 0.3s;
      svg {
        font-size: 25px;
        margin-right: 10px;
      }
      .Phonesvg {
        font-size: 20px;
      }
      &:hover {
        color: #bbb;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media screen and (max-width: 300px) {
    div {
      width: 250px;
    }
  }
`;

const ContactForm = styled(motion.section)`
  width: 360px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    color: #9ecbff;
    font-size: 23px;
    font-weight: 600;
    margin: 30px 0 30px 0;
    padding: 0 10px;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    input,
    textarea {
      width: 100%;
      background: #ffffff10;
      border-radius: 15px;
      padding: 8px 15px;
      outline: none;
      border: none;
      font-size: 17px;
      font-weight: 500;
      color: #eee;
      margin-bottom: 20px;
      font-family: Inter-Medium;
      border: 2px solid #9ecbff;
      &:placeholder {
        color: #858585;
      }
    }
    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 150px;
      max-height: 150px;
    }
    input[type="submit"] {
      width: 150px;
      padding: 8px 10px;
      color: #56aeff;
      font-weight: 600;
      background: transparent;
      border: 2px solid #56aeff;
      border-radius: 15px;
      margin: 25px 0 35px 0;
      transition: background 0.6s, color 0.6s;
      &:hover {
        background: #56aeff;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    form {
      width: 85%;
    }
  }
`;
