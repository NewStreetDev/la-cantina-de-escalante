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
} from "./NavBar.elements";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";

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
  
  const ChangeLanguage = (language) => {
    ChangeLanguageConfig({ language });
  };


  return (
    <ContainerNav>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer to="/">
            {/* <img src={companyLogo} alt="New Street Development" /> */}
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
                {t("navbar.home")}
              </div>
            </CustomLink>
            <CustomLink
              to="/contacto"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>
                {t("navbar.contact")}
              </div>
            </CustomLink>
            
            <CustomLink
              to="/ubicacion"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>
                {t("navbar.location")}
              </div>
            </CustomLink>

            <CustomLink
              to="/galeria"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>
                {t("navbar.gallery")}
              </div>
            </CustomLink>

            <CustomLink
              to="/menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>
                {t("navbar.menu")}
              </div>
            </CustomLink>

            <CustomLink
              to="/eventos"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>
                {t("navbar.event")}
              </div>
            </CustomLink>
            
            <select defaultValue={defaultLanguage} onChange={(e) => ChangeLanguage(e.target.value)}>
              <option value={"en"}>{t("navbar.english")}</option>
              <option value={"es"}>{t("navbar.spanish")}</option>
            </select>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </ContainerNav>
  );
};

export default NavBar;
