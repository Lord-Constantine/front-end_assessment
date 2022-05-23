import React from "react";
import classes from "./Body.module.css";
import Date from "./Date";
import EmailInput from "./EmailInput";
import Input from "./Input";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className={classes.body_container}>
      <div className={classes.body_innerContainer}>
        <div className={classes.h1__}>
          <h1>SOMETHING AWESOME IS</h1>
        </div>
        <br />
        <div className={classes.h1_}>
          <h1>COMING SOON</h1>
        </div>
        <div>
          <h3 className={classes.h3___}>
            Your all-in-one affiliate marketing tracking software track,
            automate and
          </h3>
        </div>
        <br />
        <div className={classes.h3_}>
          <h3>optimize your campaigns</h3>
        </div>
      </div>
      <Date />
      <Input />
      <EmailInput />
      <Footer />
    </div>
  );
};

export default Body;
