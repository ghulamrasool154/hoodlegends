import React, { useContext, useEffect } from "react";
import Section01 from "../../components/section1/Section01";
import Section02 from "../../components/section2/Section02";
import Section03 from "../../components/section3/Section03";
import Section04 from "../../components/section4/Section04";
import Section05 from "../../components/section5/Section05";
import { contentCreate } from "../../context/reducer/UseReducer";
import SectionTeam from "../../components/sectionTeam/SectionTeam";

import "./Home.css";
const Home = () => {
  const data = useContext(contentCreate);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home--page">
      <Section01 />
      <Section02 />
      <Section03 />
      {/* <Section04 /> */}
      <SectionTeam />
      <Section05 />
    </div>
  );
};

export default Home;
