import React from "react";
import classes from "./Input.module.css";
const Input = () => {
  return (
    <div className={classes.input_container}>
      <div className={classes.input_innerDiv}>
        <input type="text" placeholder="First Name." />
      </div>
      <div className={classes.input_innerDiv}>
        <input type="text" placeholder="Last Name." />
      </div>
    </div>
  );
};

export default Input;
