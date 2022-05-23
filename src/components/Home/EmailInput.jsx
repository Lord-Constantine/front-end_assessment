import React from "react";
import classes from "./EmailInput.module.css";

const EmailInput = () => {
  return (
    <div className={classes.email_container}>
      <div className={classes.emailField_container}>
        <input type="email" placeholder="Enter your email address..." />
      </div>
      <div className={classes.side_div}>
        <div>JOIN OUR WAITING LIST</div>
      </div>
    </div>
  );
};

export default EmailInput;
