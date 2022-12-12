import Select from "react-select";
import { SelectSection } from "../Pages/Menu/Menu.elements";

export default function SelectComponent({ t, filterItems }) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#ff9933" : "white",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#ff993320",
      border: "2px solid #FFC992",
      boxShadow: "0px 0px 10px 5px #ff9933",
      fontSize: "17px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#bbbbbb",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#ff9933",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "#ff9933",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
  };

  const options = [
    {
      value: `${t("MenuCategory.bocasantojos")}`,
      label: `${t("MenuCategory.bocasantojos")}`,
    },
    {
      value: `${t("MenuCategory.Chifrijosceviches")}`,
      label: `${t("MenuCategory.Chifrijosceviches")}`,
    },
    {
      value: `${t("MenuCategory.nachoswraps")}`,
      label: `${t("MenuCategory.nachoswraps")}`,
    },
    {
      value: `${t("MenuCategory.Platosfuertes")}`,
      label: `${t("MenuCategory.Platosfuertes")}`,
    },
    {
      value: `${t("MenuCategory.hamburguesaalitas")}`,
      label: `${t("MenuCategory.hamburguesaalitas")}`,
    },
    {
      value: `${t("MenuCategory.tacosquesadillas")}`,
      label: `${t("MenuCategory.tacosquesadillas")}`,
    },
    {
      value: `${t("MenuCategory.Surtidos")}`,
      label: `${t("MenuCategory.Surtidos")}`,
    },
    {
      value: "Shots",
      label: "Shots",
    },
    {
      value: "Tequila",
      label: "Tequila",
    },
    {
      value: "Whisky",
      label: "Whisky",
    },
    {
      value: "Vodka",
      label: "Vodka",
    },
    
    {
      value: `${t("MenuCategory.Vinos")}`,
      label: `${t("MenuCategory.Vinos")}`,
    },
    {
      value: `${t("MenuCategory.Cervezas")}`,
      label: `${t("MenuCategory.Cervezas")}`,
    },
    {
      value: `${t("MenuCategory.Licores")}`,
      label: `${t("MenuCategory.Licores")}`,
    },
    {
      value: "Ron",
      label: "Ron",
    },
    {
      value: `${t("MenuCategory.Cocteles")}`,
      label: `${t("MenuCategory.Cocteles")}`,
    },
  ];
  const handleChange = (SelectComponent) => {
    filterItems(SelectComponent.value);
  };

  return (
    <SelectSection>
      <Select
        className="Select-Categorie"
        options={options}
        onChange={handleChange}
        styles={customStyles}
        isSearchable={false}
      />
      ;
    </SelectSection>
  );
}
