import React from "react";
import classes from "./AboutMeSection1.module.css";
const AboutMeSection1 = () => {
  return (
    <>
      <div className={classes.center_div}>
        <div className={classes.leftDiv_}>
          <div className={classes.aboutUs__}>ABOUT US</div>
          <div className={classes.h1_built}>
            Built for SaaS <br /> and E-commerce
          </div>
        </div>
        <div className={classes.rightDiv_}>
          <p>Our tools are easy to set up and use with a user</p>
          <br />
          <p>friendly dashboard that enables you to set up,</p>
          <br />
          <p>launch, automate and manage multi-affiliate </p>
          <br />
          <p>campaigns in 5 minutes.</p>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection1;
