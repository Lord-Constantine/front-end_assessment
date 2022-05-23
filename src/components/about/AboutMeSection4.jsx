import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Socials from "../Home/Socials";
import classes from "./AboutMeSection4.module.css";
const AboutMeSection4 = () => {
  return (
    <div>
      <div className={classes.section4div}>
        <div className={classes.question}>Got a Question?</div>
        <div className={classes.section4Paragraph}>
          <p>
            See how Metricks can help your business grow with best affiliate
            marketing tracking
          </p>
          <br />
          <p>software.</p>
        </div>
        <div className={classes.contact_div}>
          <p>Contact Us</p>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className={classes.section4FooterDiv}>
        <Socials />
      </div>
    </div>
  );
};

export default AboutMeSection4;
