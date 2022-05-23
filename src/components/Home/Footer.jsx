import React from "react";
import Socials from "./Socials";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div
      style={{
        height: "21rem",
        overflow: "hidden",
      }}
    >
      <div
        className={classes.footer_div}
        style={{
          width: "120rem",
          margin: "0 auto",
          height: "120rem",
          background: "rgb(49 18 84 / 67%)",
          borderRadius: "50%",
          border: "1px solid rgb(109,108,110)",
        }}
      >
        <div className={classes.footer_inner_div}>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
