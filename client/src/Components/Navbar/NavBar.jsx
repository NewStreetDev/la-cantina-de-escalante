import React, { useState } from "react";
import { useLocation, useMatch, useResolvedPath } from "react-router-dom";
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
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import SpainFlag from "../SVG/SpainFlag";
import USFlag from "../SVG/USFlag";
import { useEffect } from "react";
import { GoHome } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineInsertPhoto, MdRestaurantMenu } from "react-icons/md";
import { OrderMenu } from "../../config/AuthPathName";
import { useShoppingCart } from "../../context/ShoppingCartContext";

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

const NavBar = ({ ChangeLanguageConfig, t, defaultLanguage }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState(defaultLanguage);
  const { openCart, cartQuantity } = useShoppingCart();
  const location = useLocation();

  const OrderViews = OrderMenu.includes(location.pathname);

  const ChangeLanguage = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
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

          {!OrderViews ? (
            <>
              <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <Menu open={showMobileMenu}>
                <CustomLink
                  to="/"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <GoHome />
                    {t("navbar.home")}
                  </div>
                </CustomLink>
                <CustomLink
                  to="/contacto"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <BsEnvelope />
                    {t("navbar.contact")}
                  </div>
                </CustomLink>

                <CustomLink
                  to="/galeria"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <MdOutlineInsertPhoto />
                    {t("navbar.gallery")}
                  </div>
                </CustomLink>

                <CustomLink
                  to="/menu"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <MdRestaurantMenu />
                    {t("navbar.menu")}
                  </div>
                </CustomLink>

                <Languages onClick={(e) => ChangeLanguage()}>
                  {language === "es" ? (
                    <>
                      <p>ES</p>
                      <SpainFlag />
                    </>
                  ) : (
                    <>
                      <p>EN</p>
                      <USFlag />
                    </>
                  )}
                </Languages>
              </Menu>
            </>
          ) : (
            <button onClick={openCart} className="orderButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              {cartQuantity > 0 && <div>{cartQuantity}</div>}
            </button>
          )}
        </IconContext.Provider>
      </Wrapper>
    </ContainerNav>
  );
};

export default NavBar;
