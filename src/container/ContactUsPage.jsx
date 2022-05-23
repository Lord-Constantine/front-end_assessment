import React from "react";
import Contact from "../components/contactUs/Contact";

import classes from "../components/contactUs/Contact.module.css";

const ContactUsPage = ({ open, setOpenModal, o }) => {
  console.log(o);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1000",
        width: "100vw",
        backdropFilter: "blur(10px)",
        display: `${open ? "block" : "none"}`,
      }}
      className={`${classes.generalContainer} ${
        open ? classes.gCopen : classes.gCclose
      }`}
    >
      <div
        style={{
          zIndex: "1000",
          position: "relative",
        }}
      >
        <Contact setOpenModal={setOpenModal} open={open} />
      </div>
    </div>
  );
};

export default ContactUsPage;
