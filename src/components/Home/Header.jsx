import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = ({ setOpenModal }) => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.img_container}>
        <h2>METRICKS</h2>
      </div>

      <div className={classes.nav_links}>
        <Link to="/about">ABOUT US</Link>
        <a href="#">BLOG</a>
        <div className={classes.contact_us_container}>
          <button
            style={{
              border: "none",
              background: "transparent",
              color: "white",
              fontWeight: "inherit",
            }}
            onClick={() => setOpenModal(true)}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
