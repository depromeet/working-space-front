import React, { useCallback } from "react";
import TagStyled from "./Tag.styles";
import { tagNameByType, tagImageByType } from "../../constants/tagType";

const Tag = ({ tag, isSelectable, isSelected, isShowCount, onClick }) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <TagStyled isSelectable={isSelectable} isSelected={isSelected}>
      <div className="tag" onClick={handleClick}>
        <span className="tag_icon">{tagImageByType[tag.id]}</span>
        <span className="tag_text">{tagNameByType[tag.id]}</span>
        {isShowCount && tag.count > 0 && <span className="tag_count">+{tag.count}</span>}
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { id: "concent", count: 11 },
  isShowCount: true,
  isSelectable: false,
  isSelected: false,
  onClick: null,
};

export default Tag;
