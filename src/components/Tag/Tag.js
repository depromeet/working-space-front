import React, { useCallback } from "react";
import TagStyled from "./Tag.styles";
import { tagNameByType, tagImageByType } from "../../constants/tagType";

const Tag = ({ tag, isSelectable, isSelected, isShowFollow, onClick }) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <TagStyled isSelectable={isSelectable} isSelected={isSelected}>
      <div className="tag" onClick={handleClick}>
        <span className="tag_icon">{tagImageByType[tag.id]}</span>
        <span className="tag_text">{tagNameByType[tag.id]}</span>
        {isShowFollow && tag.follow > 0 && <span className="tag_follow">+{tag.follow}</span>}
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { name: "concent", follow: 11 },
  isShowFollow: true,
  isSelectable: false,
  isSelected: false,
  onClick: null,
};

export default Tag;
