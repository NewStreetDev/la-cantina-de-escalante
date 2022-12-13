import logo from "../../Images/Logo.png";
import {
  Footer,
  Information,
  CompanyLogo,
  CopyRight,
  ScheduleSection,
  LocationSection,
} from "./Footer.elements";

export default function footer({t}) {
  return (
    <Footer>
      <Information>
        <CompanyLogo>
          <img src={logo} alt="La cantina de escalante"></img>
        </CompanyLogo>
        
        <ScheduleSection>
          <h2>{t("footer.schedule")}</h2>
          <p>{t("footer.schedule1")}</p>
          <p>11:30am - 10:00pm</p>
          <p>{t("footer.schedule2")}</p>
          <p>11:30am - 11:00pm</p>
          <p>{t("footer.schedule3")}</p>
          <p>11:30am - 2:00am</p>
        </ScheduleSection>

        <LocationSection>
          <h2>{t("footer.locationtitle")}</h2>
          <p>{t("footer.location1")}</p>
        </LocationSection>

      </Information>
      <CopyRight>
        <p>
          Copyright © 2022
          <a href="/"> La Cantina de Escalante </a>
          Built by
          <a href="https://www.newstreetdev.com/"> NewStreetDevelopment</a>
        </p>
      </CopyRight>
    </Footer>
  );
}
