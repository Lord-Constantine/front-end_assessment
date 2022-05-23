import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import classes from "./Socials.module.css";
const Socials = () => {
  return (
    <div className={classes.social_container}>
      <div className={classes.social_icons}>
        <div>
          <FaYoutube />
        </div>
        <div>
          <FaFacebookSquare />
        </div>
        <div>
          <AiFillLinkedin />
        </div>
        <div>
          <AiFillInstagram />
        </div>
        <div>
          <FaTwitterSquare />
        </div>
      </div>
      <div className={classes.social_content}>
        <div>
          <div>Terms of services</div>
        </div>
        <div>
          <div>Privacy policy</div>
        </div>
      </div>
      <div className={classes.social_content_}>
        <div>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Socials;
