import React, { useCallback } from "react";
import TagStyled from "./Tag.styles";

const Tag = ({ tag, selectable, selected, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <TagStyled selectable={selectable}>
      <div className={`tag${selected ? " selected" : ""}`} onClick={handleClick}>
        {tag.text}
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { iconUrl: "", text: "콘센트가 많아요", follow: 11 },
  selectable: false,
  selected: false,
  onClick: null,
};

export default Tag;
