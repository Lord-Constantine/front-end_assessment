import React from "react";
import classes from "./Date.module.css";
const Date = () => {
  return (
    <div className={classes.date_container}>
      <div className={classes.date_inner_container}>
        <div className={classes.date_number}>7</div>
        <div className={classes.date_let}>Days</div>
      </div>
      <div className={classes.date_inner_container}>
        <div className={classes.date_number}>24</div>
        <div className={classes.date_let}>Hours</div>
      </div>
      <div className={classes.date_inner_container}>
        <div className={classes.date_number}>54</div>
        <div className={classes.date_let}>Minutes</div>
      </div>
      <div className={classes.date_inner_container}>
        <div className={classes.date_number}>11</div>
        <div className={classes.date_let}>Second</div>
      </div>
    </div>
  );
};

export default Date;
