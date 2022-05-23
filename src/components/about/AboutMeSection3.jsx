import React from "react";
import PIC1 from "../assests/pic1.PNG";
import classes from "./AboutMeSection3.module.css";

const AboutMeSection3 = () => {
  return (
    <div className={classes.section3Div}>
      <div className={classes.section3LeftDiv}>
        <div className={classes.section3LeftInput}>
          <input type="number" placeholder="01" />
          <div> WHY US?</div>
        </div>
        <div className={classes.section3LeftParagraph}>
          <p>We pride ourselves in our ability to innovate and</p>
          <br />
          <p>create world-class tools that provide reliable and</p>
          <br />
          <p>efficient touchpoints between advertisers and</p>
          <br />
          <p>affiliates.</p>
        </div>
        <div className={classes.section3LeftImg}>
          <img src={PIC1} alt="dotted-image" />
        </div>
      </div>
      <div className={classes.section3RightDiv}>
        <div className={classes.section3RightInput}>
          <input type="number" placeholder="02" />
          <div> GROWING WITH YOU </div>
        </div>
        <div className={classes.section3RightParagraph1}>
          <p>Leveraging the best technology, we have developed on all-in-</p>
          <br />
          <p>
            one affiliate marketing tracking software, a genius tool to help
          </p>
          <br />
          <p>you track, automate and optimize your influencer campaigns,</p>
          <br />
          <p>all from one dashboard.</p>
        </div>
        <div className={classes.section3RightParagraph2}>
          <p>Our team of experts are constantly brainstorming, testing and</p>
          <br />
          <p>developing new solutions with only one thing in mind - your</p>
          <br />
          <p>business growth. Your success is our success and by giving you</p>
          <br />
          <p>the tools you need to scale, we grow as well.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection3;
