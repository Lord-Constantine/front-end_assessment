import React from "react";
import GithubBody from "./GithubBody";
import GithubHeader from "./GithubHeader";

const Github = ({ data }) => {
  console.log(data);
  const dataList =
    Array.isArray(data) && data.length > 0 ? (
      data.map(
        (
          {
            owner: { avatar_url },
            name,
            open_issues_count,
            stargazers_count,
            description,
            full_name,
            created_at,
          },
          i
        ) => (
          <GithubBody
            key={i}
            repoName={name}
            issues={open_issues_count}
            stars={stargazers_count}
            imageUrl={avatar_url}
            repoDesc={description}
            ownerName={full_name.split("/")[0]}
          />
        )
      )
    ) : (
      <h1>Loading</h1>
    );
  return (
    <div>
      <GithubHeader />
      {dataList}
    </div>
  );
};

export default Github;
