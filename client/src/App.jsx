import Footer from "./Components/Footer/Footer";

import NavBar from "./Components/Navbar/NavBar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ContactUs from "./Pages/ContactUs/ContactUS";
import Error404 from "./Pages/ErrorPage/Error404";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery"
import Menu from "./Pages/Menu/Menu"
import ContentMenuCategory from "./Pages/Menu/ContentMenuCategory";

import { Suspense, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";



function ContentApp() {
  const { t, i18n } = useTranslation(["global"]);

  function ChangeLanguageConfig({ language }) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="Page-Container">
      <div className="Container-wrap">
        <NavBar
          ChangeLanguageConfig={ChangeLanguageConfig}
          t={t}
          defaultLanguage={i18n.language}
        />
        <div className="Container">
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home t={t} />} />
              <Route exact path="/contacto" element={<ContactUs t={t} />} />
              <Route exact path="/galeria" element={<Gallery t={t} />} />
              <Route exact path="/menu" element={<Menu t={t} />} />
              <Route exact path="/menu/:category" element={<ContentMenuCategory t={t} />} />
              <Route path="*" element={<Error404 t={t} />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ContentApp />
    </Suspense>
  );
}

export default App