// import React, { Suspense } from "react";
// import ModalOpenClose from "../../Components/OpenClose/ModalOpenClose";
// import Button1 from "../../Components/Buttons/Button1";
// import Button2 from "../../Components/Buttons/Button2";
// import Radio from "../../Components/SVG/Radio";
// import Bike from "../../Components/SVG/Bike";
import useNearScreen from "../../Hooks/useNearScreen";
// import DragronBall from "../../Images/dragonball.jpg";
// import Batman from "../../Images/Batman.jpg";
// import Friends from "../../Images/friends.webp";
// import FriendsAux from "../../Images/Friends.jpg";
// import DragonBallAux from "../../Images/DragonBallAux.jpg";
// import BatmanAux from "../../Images/BatmanAux.jpg"

// import { motion } from "framer-motion";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";

import { Helmet } from "react-helmet-async";
// import {
//   AboutUsSection,
//   CardSocialMedia,
//   ContactUsSection,
//   ContainerCards,
//   ContainerHome,
//   ContainerSocialMedia,
//   FrontPage,
//   FrontPageInfo,
//   PromotionsSection,
//   PromotionsTitle,
//   SectionCards,
//   TitleCards,
// } from "./Home.elements";
// import Spinner from "../../Components/Spinner/Spinner";

// const Carousel = React.lazy(() => import("../../Components/Carousel/Carousel"));
// const SettingCard = React.lazy(() => import("../../Components/SettingCard"));

export default function Home({ t }) {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "200px",
  });
  
  return (
    <>
      <Helmet>
        <title>Los Años Locos</title>
        <meta
          name="description"
          content="Disfruta con nosotros lo mejor de esos años locos - Bar dedicado a disfrutar lo mejor de esos años locos de buena música y excelente ambiente."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* <ContainerHome>
        <ModalOpenClose t={t} />
        <FrontPage>
          <FrontPageInfo>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("Home.title")}
            </motion.h1>
            <Button1 to="/ubicacion" value={t("Home.btnLocation")} />
          </FrontPageInfo>
        </FrontPage>

        <AboutUsSection>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("Home.aboutus")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("Home.aboutusinfo")}
          </motion.p>
          <Radio className="icono radio" />
          <Bike className="icono bike" />
        </AboutUsSection>

        <ContactUsSection>
          <div>
            <h2>{t("Home.contactus")}</h2>
          </div>

          <ContainerSocialMedia>
            <CardSocialMedia
              className="Youtube"
              href="https://www.youtube.com/"
            >
              <span>
                <FaYoutube />
              </span>
              <h4>Youtube</h4>
            </CardSocialMedia>

            <CardSocialMedia
              className="WhatsAppp"
              href="https://api.whatsapp.com/send?phone=50647064998"
            >
              <span>
                <FaWhatsapp />
              </span>
              <h4>WhatsApp</h4>
            </CardSocialMedia>

            <CardSocialMedia
              className="Instagram"
              href="https://www.instagram.com/losa_locos/"
            >
              <span>
                <FaInstagram />
              </span>
              <h4>Instagram</h4>
            </CardSocialMedia>

            <CardSocialMedia
              className="Facebook"
              href="https://www.facebook.com/losaoslocos"
            >
              <span>
                <FaFacebookF />
              </span>
              <h4>Faceboook</h4>
            </CardSocialMedia>

            <CardSocialMedia className="Phone" href="tel:+50640340228">
              <span>
                <FaPhoneAlt />
              </span>
              <h4>{t("Home.phone")}</h4>
            </CardSocialMedia>
          </ContainerSocialMedia>
          <Button2 to="/contacto" value={t("Home.btnContacto")} />
        </ContactUsSection>

        <PromotionsSection>
          <PromotionsTitle>
            <h2>{t("Home.promotions")}</h2>
          </PromotionsTitle>
          <section ref={fromRef}>
            <Suspense fallback={<Spinner />}>
              {isNearScreen ? <Carousel /> : <Spinner />}
            </Suspense>
          </section>
          <div className="btn-menu-home">
            <Button1 to="/menu" value={t("Home.btnmenu")} />
          </div>
        </PromotionsSection>

        <SectionCards>
          <TitleCards><h2>{t("Home.atmosphere")}</h2></TitleCards>
          <ContainerCards ref={fromRef}>
            <Suspense fallback={<Spinner />}>
              {isNearScreen ? 
              <>
                <SettingCard
              title="Dragon Ball"
              paragraph=""
              image = {DragronBall}
              imageAux={DragonBallAux}
            />
            <SettingCard
              title="Batman"
              paragraph=""
              image={Batman}
              imageAux={BatmanAux}
            />
            <SettingCard
              title="Friends"
              paragraph=""
              image={Friends}
              imageAux={FriendsAux}
            />
              </>
              
              : <Spinner />}
            </Suspense>
            
          </ContainerCards>
        </SectionCards>
      </ContainerHome> */}
    </>
  );
}
