import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Contact.module.css";
import { BsArrowRight } from "react-icons/bs";

const Contact = ({ setOpenModal, open }) => {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    setOpenModal(false);
  };
  return (
    <div className={`${classes.contactCenterDiv} `}>
      <div
        className={`${classes.contactHalfDiv} ${classes.container} ${
          open ? classes.open : classes.close
        }`}
      >
        <div className={classes.contactArrowDiv} onClick={goToHomeHandler}>
          <BsArrowRight className={classes.contactArrow} />
        </div>
        <div className={classes.contactInnerDiv}>
          <div className={classes.positionContactHeading}>
            <div className={classes.contactHeading}>
              {" "}
              Hey, we are still i the works,
            </div>
            <br />
            <div className={classes.contactHeading}>
              {" "}
              but you send us a message!{" "}
            </div>
          </div>

          <div className={classes.contactMainInputDiv}>
            <div className={classes.contactInputDiv}>
              <label>First name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className={classes.contactInputDiv}>
              <label>Last name</label>
              <input type="text" placeholder="Enter your Last name" />
            </div>
            <div className={classes.contactInputDiv}>
              <label>Email</label>
              <input type="email" placeholder="Enter your Email Address" />
            </div>
            <div className={classes.contactInputDiv}>
              <label>Tell Us What You Need Help With:</label>
              <input
                type="text"
                placeholder="Enter A Topic, Like 'Channel Problem...'"
                className={classes.contactTextArea}
              />
            </div>
            <div className={classes.contactButtonDiv}>
              <button className={classes.contactButton}>SEND NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
