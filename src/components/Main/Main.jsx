import "./Main.css";
import { useEffect } from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
function Main(props) {
  useEffect(() => {
    props.handler();
  }, []);
  
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
}

export default Main;
