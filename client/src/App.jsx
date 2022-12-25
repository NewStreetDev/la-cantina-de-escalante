import Footer from "./Components/Footer/Footer";

import NavBar from "./Components/Navbar/NavBar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ContactUs from "./Pages/ContactUs/ContactUS";
import Error404 from "./Pages/ErrorPage/Error404";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Menu from "./Pages/Menu/Menu";
import ContentMenuCategory from "./Pages/Menu/ContentMenuCategory";
import ManagementProduct from "./Pages/ManagementProduct/ManagementProduct";
import CreateProduct from "./Pages/ManagementProduct/CreateProduct";

import { Suspense, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import Login from "./Pages/Login/Login";
import { AuthPathName } from "./config/AuthPathName";
import { LoginContextProvider } from "./context/LoginProvider";
import ToPrepare from "./Pages/orders/ToPrepare";
import ToDeliver from "./Pages/orders/toDeliver";
import ToPay from "./Pages/orders/ToPay";
import Reportes from "./Pages/orders/Reportes";
import NavbarAdmin from "./Components/Navbar/NavbarAdmin";
import MenuOrder from "./Pages/orders/Menu";
import { AppProvider } from "./context/AppProvider";
import { AuthContext } from "./context/AuthContext";

function ContentApp() {
  const { t, i18n } = useTranslation(["global"]);

  function ChangeLanguageConfig({ language }) {
    i18n.changeLanguage(language);
  }

  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser)

  const location = useLocation();
  return (
    <AppProvider>
      <div className="Page-Container">
        <div className="Container-wrap">
          {AuthPathName.includes(location.pathname) ||
          location.pathname.includes("/updateProduct") ? (
            <NavbarAdmin />
          ) : (
            <NavBar
              ChangeLanguageConfig={ChangeLanguageConfig}
              t={t}
              defaultLanguage={i18n.language}
            />
          )}
          <div
            className={
              AuthPathName.includes(location.pathname) ||
              location.pathname.includes("/updateProduct")
                ? "Container Log"
                : "Container"
            }
          >
            <ScrollToTop>
              <Routes>
                <Route exact path="/" element={<Home t={t} />} />
                <Route exact path="/contacto" element={<ContactUs t={t} />} />
                <Route exact path="/galeria" element={<Gallery t={t} />} />
                <Route exact path="/menu" element={<Menu t={t} />} />
                <Route
                  exact
                  path="/menu/:category"
                  element={<ContentMenuCategory t={t} />}
                />
                <Route path="*" element={<Error404 t={t} />} />
                <Route
                  path="/login"
                  element={
                    <LoginContextProvider>
                      <Login />
                    </LoginContextProvider>
                  }
                />
                <Route
                  path="/managementProduct"
                  element={
                    <RequiredAuth>
                      <ManagementProduct />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/CreateProduct"
                  element={
                    <RequiredAuth>
                      <CreateProduct />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/updateProduct/:idproduct"
                  element={
                    <RequiredAuth>
                      <CreateProduct />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/to-prepare"
                  element={
                    <RequiredAuth>
                      <ToPrepare />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/to-deliver"
                  element={
                    <RequiredAuth>
                      <ToDeliver />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/to-Pay"
                  element={
                    <RequiredAuth>
                      <ToPay />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <RequiredAuth>
                      <Reportes />
                    </RequiredAuth>
                  }
                />
                <Route
                  path="/MenuOrder"
                  element={
                    <MenuOrder />
                  }
                />
              </Routes>
            </ScrollToTop>
          </div>
        </div>
        {AuthPathName.includes(location.pathname) ||
        location.pathname.includes("/updateProduct") ? null : (
          <Footer t={t} />
        )}
      </div>
    </AppProvider>
  );
}

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ContentApp />
    </Suspense>
  );
}

export default App;
