import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const [offset, setOffset] = useState(0);
  const classFooter =
    document.body.scrollHeight <= offset + window.innerHeight
      ? "section6item gr--sec6item"
      : "section6item ";

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <footer
      className={
        document.body.scrollHeight <= offset + window.innerHeight
          ? "over--lay--footer--hidden"
          : "over--lay--footer"
      }
    >
      <div
        className={
          document.body.scrollHeight <= offset + window.innerHeight
            ? "socialWrapper"
            : "socialWrapper over--lay--footer "
        }
        style={{
          lineHeight:
            document.body.scrollHeight <= offset + window.innerHeight
              ? "60px"
              : "46px",
          Height:
            document.body.scrollHeight <= offset + window.innerHeight
              ? "60px"
              : "46px",
        }}
      >
        <Link className={classFooter} to="https://t.me/hoodlegendsio">
          <i className="fa-brands fa-telegram"></i>
        </Link>
        <Link
          className={classFooter}
          to="https://discord.com/invite/fW49BbE5jX"
        >
          <i className="fa-brands fa-discord"></i>
        </Link>
        <Link className={classFooter} to="https://twitter.com/hoodlegendsio">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link className={classFooter} to="https://instagram.com/hoodlegendsio">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link
          className={classFooter}
          to="https://www.youtube.com/channel/UC6Earh4vsPPz1yAPFFhlVNg"
        >
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <Link
          className={classFooter}
          to="https://www.reddit.com/r/hoodlegendsio/"
        >
          <i className="fa-brands fa-reddit"></i>
        </Link>
        <Link className={classFooter} to="https://medium.com/@hoodlegendsio">
          <i className="fa-brands fa-medium"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;