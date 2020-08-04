import React from "react";
import AllTagStyled from "./AllTag.styles";

const AllTag = props => {
  const { tags } = props;

  return (
    <AllTagStyled>
      <div className="tag-title">
        <h2 className="tag-text">태그</h2>
        <p className="tag-length">{tags.length}</p>
      </div>
      <div className="tag-box">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </AllTagStyled>
  );
};

AllTag.defaultProps = {
  tags: ["조용한", "베이커리가 있는", "시끄러운"],
};

export default AllTag;
