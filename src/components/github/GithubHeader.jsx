import React from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { FaTimes, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import classes from "./GithubHeader.module.css";
const GithubHeader = () => {
  return (
    <div className={classes.gitHub_header_container}>
      <div className={classes.header_icons}>
        <div>
          <ImArrowLeft />
        </div>
        <div>
          <ImArrowRight />
        </div>
        <div>
          <FaTimes />
        </div>
        <div>
          <AiFillHome />
        </div>
      </div>
      <div className={classes.trendingInput}>
        <div>Trending Repos</div>
        <input type="text" />
      </div>
      <div className={classes.searchInputs}>
        <FaSearch className={classes.searchIcon} />
        <input type="text" />
      </div>
    </div>
  );
};

export default GithubHeader;
