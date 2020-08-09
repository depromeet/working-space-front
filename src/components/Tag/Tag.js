import React from "react";
import TagStyled from "./Tag.styles";

const Tag = ({ tag, showFollow }) => {
  return (
    <TagStyled>
      <div className="tag">
        {tag.text}
        {showFollow && <span>+{tag.follow}</span>}
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  showFollow: true,
  tag: { iconUrl: "", text: "콘센트가 많아요", follow: 11 },
};

export default Tag;
