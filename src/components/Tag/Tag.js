import React, { useCallback } from "react";
import TagStyled from "./Tag.styles";

const Tag = ({ tag, isSelectable, isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <TagStyled isSelectable={isSelectable}>
      <div className={`tag${isSelected ? " isSelected" : ""}`} onClick={handleClick}>
        {tag.text}
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { iconUrl: "", text: "콘센트가 많아요", follow: 11 },
  isSelectable: false,
  isSelected: false,
  onClick: null,
};

export default Tag;
