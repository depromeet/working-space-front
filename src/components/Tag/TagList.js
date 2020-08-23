import React, { useEffect, useCallback, useState } from "react";
import produce from "immer";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";
import { ReactComponent as DropDownIcon } from "../../images/icon-dropdown.svg";

const TagList = ({ tags, tagCount, onSetTags, hasMainShow, hasDropDownButton, isContraction, isShowFollow, isSelectable, onTagsChanged }) => {
  /* prettier-ignore */
  const toggleTag = useCallback(index => {
    if(!onSetTags) return;
    onSetTags(prevTags => produce(prevTags, draft => {
				draft[index].isSelected = !draft[index].isSelected;
		}));
  }, [onSetTags]);

  useEffect(() => {
    onTagsChanged && onTagsChanged();
  }, [onTagsChanged]);

  const [showDrop, setShowDrop] = useState(false);

  const makeTagList = useCallback(
    (tags, tagCount, hasMainShow, hasDropDownButton, isSelectable, isShowFollow, isContraction, toggleTag) => {
      if (tagCount <= 0 || tags === null) {
        return hasMainShow ? <div className="main-non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div> : <div className="non-tag">아직 등록된 태그가 없습니다</div>;
      }

      let filteredTags = tags;

      if (isContraction) {
        filteredTags = tags.slice(0, 2);
      } else if (hasDropDownButton && tagCount > 4 && !showDrop) {
        filteredTags = tags.slice(0, 4);
      }

      const showMoreCount = tagCount > 2 && isContraction;

      return (
        <>
          {filteredTags.map((tag, i) => {
            return (
              <div className="tag_wrapper" key={i}>
                <Tag tag={tag} isShowFollow={isShowFollow} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
              </div>
            );
          })}
          {showMoreCount ? <span className="more-tag-length">+{tagCount - 2}</span> : null}
        </>
      );
    },
    [showDrop],
  );

  return (
    <TagListStyled>
      <div className="tag-list">{makeTagList(tags, tagCount, hasMainShow, hasDropDownButton, isSelectable, isShowFollow, isContraction, toggleTag)}</div>
      {hasDropDownButton && tagCount > 4 && !showDrop ? (
        <button className="drop-down-button" onClick={() => setShowDrop(true)}>
          <DropDownIcon />
          <span>더보기</span>
        </button>
      ) : null}
    </TagListStyled>
  );
};

TagList.defaultProps = {
  isContraction: false,
  isSelectable: false,
  isShowFollow: true,
  hasMainShow: true,
  hasDropDownButton: false,
  tagCount: 10,
  tags: [
    { name: "study", follow: 12, isSelected: false },
    { name: "concent", follow: 23, isSelected: false },
    { name: "mute", follow: 21, isSelected: false },
    { name: "wifi", follow: 16, isSelected: false },
    { name: "parking", follow: 7, isSelected: false },
    { name: "dessert", follow: 2, isSelected: false },
    { name: "toilet", follow: 3, isSelected: false },
    { name: "twentyFour", follow: 4, isSelected: false },
    { name: "smoking", follow: 5, isSelected: false },
    { name: "timer", follow: 6, isSelected: false },
    { name: "seat", follow: 7, isSelected: false },
    { name: "chair", follow: 1, isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
