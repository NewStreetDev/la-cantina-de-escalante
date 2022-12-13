import React, { useState } from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
// import companyLogo from "../../Images/logo.png";
import {
  ContainerNav,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Languages,
} from "./NavBar.elements";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import SpainFlag from "../SVG/SpainFlag"
import USFlag from "../SVG/USFlag"
import { useEffect } from "react";
import { GoHome } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineInsertPhoto, MdRestaurantMenu } from "react-icons/md";

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <MenuItem className={isActive ? "active" : ""}>
      <MenuItemLink to={to} {...props}>
        {children}
      </MenuItemLink>
    </MenuItem>
  );
}

const NavBar = ({ChangeLanguageConfig, t, defaultLanguage}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState(defaultLanguage);
  
  const ChangeLanguage = () => {
    if (language==="es"){
      setLanguage("en")
    } else{
      setLanguage("es")
    }
  };
  useEffect(() => {
    ChangeLanguageConfig({ language });
  }, [language]);



  return (
    <ContainerNav>
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
        <LogoContainer to="/">
          {/* <img src={companyLogo} alt="New Street Development" /> */}
          La Cantina
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <CustomLink
            to="/"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div>
              <GoHome/>
              {t("navbar.home")}
            </div>
          </CustomLink>
          <CustomLink
            to="/contacto"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div>
              <BsEnvelope/>
              {t("navbar.contact")}
            </div>
          </CustomLink>

          <CustomLink
            to="/galeria"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div>
              <MdOutlineInsertPhoto/>
              {t("navbar.gallery")}
            </div>
          </CustomLink>

          <CustomLink
            to="/menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div>
              <MdRestaurantMenu/>
              {t("navbar.menu")}
            </div>
          </CustomLink>

          <Languages onClick={(e) => ChangeLanguage()}>
            {language==="es" ? <><p>ES</p><SpainFlag/></> : <><p>EN</p><USFlag/></>}
          </Languages>
        </Menu>
      </IconContext.Provider>
    </Wrapper>
  </ContainerNav>
  );
};

export default NavBar;
