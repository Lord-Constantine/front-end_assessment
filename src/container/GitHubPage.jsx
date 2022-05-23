import React from "react";
import Github from "../components/github/Github";

const GitHubPage = ({ data }) => {
  return (
    <div>
      <Github data={data} />
    </div>
  );
};

export default GitHubPage;
