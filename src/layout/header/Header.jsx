import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/headerLogo.png";
import { contentCreate } from "../../context/reducer/UseReducer";

const Header = () => {
  const [offset, setOffset] = useState(0);
  const data = useContext(contentCreate);

  console.log("data", data.state.menuToggle);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={offset === 0 ? "newHeader " : "newHeader newHeaderTra"}>
      <div className="headerWrapper">
        <div className="header">
          <NavLink
            to="/"
            className="headerLogo"
            // style={{
            //   width: offset === 0 ? "220px" : "180px",
            // }}
          >
            <img src={logo} alt="" />
          </NavLink>
          <div className="headerMenu">
            <NavLink
              to="introduction"
              className="headerMenuSmallButton headerMenuSmallButtonActive"
            >
              INTRODUCTION
            </NavLink>

            <NavLink to="pitch-deck" className="headerMenuSmallButton">
              PITCH DECK
            </NavLink>

            <Link
              to="pre-seed"
              className="headerMenuBigButton headerMenuBigButton1"
            >
              PRE-SEED
            </Link>
            <div
              to="connect-wallet"
              className="headerMenuBigButton headerMenuBigButton2"
              onClick={() => {
                console.log("ss");
              }}
            >
              CONNECT WALLET
            </div>
            {/* <div className="headerMenuBigButton headerMenuBigButton2">
              CONNECT WALLET
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
