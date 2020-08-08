import React from "react";
import TagStyled from "./Tag.styles";

const Tag = ({ tag }) => {
  return (
    <TagStyled>
      <div className="tag">
        {tag.text}
        <span>+{tag.follow}</span>
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { iconUrl: "", text: "콘센트가 많아요", follow: 11 },
};

export default Tag;
