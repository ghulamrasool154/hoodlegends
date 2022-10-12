import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/headerLogo.png";
import { contentCreate } from "../../context/reducer/UseReducer";
import responsivemenuicon from "../../assets/images/responsive-menu.svg";
import responsivemenuclose from "../../assets/images/responsive-colse.svg";
const Header = () => {
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const data = useContext(contentCreate);
  // const [urlchange, seturlchange] = useState("");
  // const acb = document.querySelectorAll(".headerMenu a");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    // seturlchange(window.location.href);

    // for (let i = 0; i < acb.length; i++) {
    //   acb[i].addEventListener("click", aabd);
    // }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleMenu = () => {
    if (data.state.menuToggle) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    data.dispatch({ type: "TOGGLE" });
  };

  // useEffect(() => {
  //   if (data.state.menuToggle) {
  //     document.body.style.overflow = "hidden";
  //   }
  // }, []);
  return (
    <>
      <header
        className={offset === 0 ? "newHeader " : "newHeader newHeaderTra"}
      >
        <div className="headerWrapper">
          <div
            className="header"
            style={{
              paddingTop: offset === 0 ? "20px " : "0",
            }}
          >
            <Link
              to="/"
              className={
                offset === 0 ? "headerLogo" : "headerLogo header--logo--sticky"
              }
            >
              <img src={logo} alt="" />
            </Link>
            <div className="headerMenu">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "headerMenuSmallButton active"
                    : "headerMenuSmallButton"
                }
                // className="headerMenuSmallButton headerMenuSmallButtonActive"
              >
                INTRODUCTION <span className="spanlinebar"></span>
              </Link>

              <NavLink to="/pitch-deck" className="headerMenuSmallButton">
                PITCH DECK <span className="spanlinebar"></span>
              </NavLink>

              <NavLink
                to="/pre-seed"
                className="headerMenuBigButton headerMenuBigButton1"
              >
                PRE-SEED SALE
              </NavLink>
              {/* <div
              to="connect-wallet"
              className="headerMenuBigButton headerMenuBigButton2"
              onClick={() => {
                console.log("ss");
              }}
            >
              CONNECT WALLET
            </div> */}
              {/* <div className="headerMenuBigButton headerMenuBigButton2">
              CONNECT WALLET
            </div> */}
            </div>
            <div
              className="menu--responsive--section"
              style={{
                marginTop: offset === 0 ? "-25px" : null,
              }}
            >
              <img
                src={responsivemenuicon}
                alt="responsivemenu"
                onClick={handleToggleMenu}
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          data.state.menuToggle
            ? "responsive--menu "
            : " responsive--menu hidden "
        }
      >
        <div className="header---section--top">
          <Link>
            <img
              src={logo}
              alt=""
              className="logo--img"
              onClick={handleToggleMenu}
            />
          </Link>
          <div className="close--menu--button">
            <span>
              <img
                src={responsivemenuclose}
                alt=""
                onClick={handleToggleMenu}
              />
            </span>
          </div>
        </div>
        <div className="mobile--resposive">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "headerMenuSmallButton headerMenuSmallButtonActive active "
                    : "headerMenuSmallButton headerMenuSmallButtonActive"
                }
                onClick={handleToggleMenu}
              >
                INTRODUCTION <span className="spanlinebar"></span>
              </Link>
            </li>
            <li>
              <NavLink
                to="pitch-deck"
                className="headerMenuSmallButton"
                onClick={handleToggleMenu}
              >
                PITCH DECK <span className="spanlinebar"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pre-seed"
                className="headerMenuBigButton headerMenuBigButton1"
                onClick={handleToggleMenu}
              >
                PRE-SEED SALE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};;

export default Header;
