import React from "react";
import AVT1 from "../assests/pic1.PNG";
import classes from "./GithubBody.module.css";
import PropTypes from "prop-types";

const GithubBody = ({
  imageUrl,
  repoName,
  repoDesc,
  stars,
  issues,
  submittedDuration,
  ownerName,
}) => {
  return (
    <div className={classes.githubBodyContainer}>
      <div className={classes.githubBodyLeft}>
        <img src={imageUrl} alt="avatar" />
      </div>
      <div className={classes.githubBodyRight}>
        <div className={classes.resName}>{repoName}</div>
        <div className={classes.redDes}>{repoDesc}</div>
        <div className={classes.endDiv}>
          <div className={classes.endDiv_}>Stars: {stars}</div>
          <div className={classes.endDiv_}>Issues: {issues}</div>
          <div>
            {submittedDuration} by {ownerName}
          </div>
        </div>
      </div>
    </div>
  );
};

GithubBody.defaultProps = {
  imageUrl: AVT1,
  repoName: "Tensorflow",
  repoDesc:
    "An Open Source Machine Learning Framework for Everyone https://tensorflow.org",
  stars: "118k",
  issues: "1.6k",
  submittedDuration: "Submitted 30days ago",
  ownerName: "tensorflow",
};

GithubBody.propTypes = {
  repoName: PropTypes.string,
  repoDesc: PropTypes.string,
  stars: PropTypes.string,
  issues: PropTypes.string,
  submittedDuration: PropTypes.string,
  ownerName: PropTypes.string,
};

export default GithubBody;
