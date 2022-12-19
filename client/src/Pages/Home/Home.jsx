import React, { Suspense } from "react";
import ModalOpenClose from "../../Components/OpenClose/ModalOpenClose";
import BtnVisit from "../../Components/Buttons/Button1";
import Button from "../../Components/Buttons/Button2";
import Button3 from "../../Components/Buttons/Button3";
import useNearScreen from "../../Hooks/useNearScreen";

import { motion } from "framer-motion";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";

import { Helmet } from "react-helmet-async";
import {
  AboutUsSection,
  ContainerHome,
  FourthSection,
  FrontPage,
  FrontPageInfo,
  OurMenu,
  ThirdSection,
} from "./Home.elements";
import Spinner from "../../Components/Spinner/Spinner";

const Carousel = React.lazy(() => import("../../Components/Carousel/Carousel"));
// const SettingCard = React.lazy(() => import("../../Components/SettingCard"));

export default function Home({ t }) {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "200px",
  });

  return (
    <>
      <Helmet>
        <title>La Cantina de Escalante</title>
        <meta
          name="description"
          content="Disfruta con nosotros - La cantina de Escalante"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <ContainerHome>
        <ModalOpenClose t={t} />
        <FrontPage>
          <FrontPageInfo>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              La Cantina
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              De Escalante
            </motion.h2>
            <BtnVisit to="/contacto" value={t("Home.btnVisit")} />
          </FrontPageInfo>
        </FrontPage>

        <AboutUsSection>
          <article className="content">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="titleSection"
            >
              {t("Home.aboutus")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="paragraph"
            >
              {t("Home.aboutusinfo")}
            </motion.p>
          </article>
        </AboutUsSection>

        <OurMenu>
          <h2 className="titleSection">{t("Home.ourMenu")}</h2>
          <section ref={fromRef}>
            <Suspense fallback={<Spinner />}>
              {isNearScreen ? <Carousel /> : <Spinner />}
            </Suspense>
          </section>
          <div className="btn-menu-home">
            <Button to="/menu" value={t("Home.btnmenu")} />
          </div>
        </OurMenu>

        <ThirdSection>
          <div className="ContentSection">
            <h3>{t("Home.btnContacto")}</h3>
            <div className="contentButton">
              <span></span>
              <Button3 to="/menu" value={t("Home.contactus")} />
              <span></span>
            </div>
          </div>
        </ThirdSection>

        <FourthSection>
          <article className="contentThirdSection">
            <div className="contentInfo">
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                quasi iure nobis quod, iste ipsam omnis temporibus odio
                eligendi, ex hic reprehenderit ipsum laboriosam tempore optio
                sequi, illum asperiores labore.
              </p>
            </div>
            <picture>
              <img
                src="https://images.pexels.com/photos/9119767/pexels-photo-9119767.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </picture>
          </article>
        </FourthSection>
      </ContainerHome>
    </>
  );
}
