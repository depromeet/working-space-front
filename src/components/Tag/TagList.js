import React, { useEffect, useCallback, useState } from "react";
import produce from "immer";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";
import { ReactComponent as DropDownIcon } from "../../images/icon-dropdown.svg";

const TagList = ({ tags, onSetTags, hasMainShow, hasDropDownButton, isContraction, isShowFollow, isSelectable, onTagsChanged }) => {
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
    (tags, hasMainShow, hasDropDownButton, isSelectable, isShowFollow, isContraction, toggleTag) => {
      if (tags.length === 0) {
        return hasMainShow ? <div className="main-non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div> : <div className="non-tag">아직 등록된 태그가 없습니다</div>;
      }

      let filteredTags = tags;

      if (isContraction) {
        filteredTags = tags.slice(0, 2);
      } else if (hasDropDownButton && tags.length > 4 && !showDrop) {
        filteredTags = tags.slice(0, 4);
      }

      const showMoreCount = tags.length > 2 && isContraction;

      return (
        <>
          {filteredTags.map((tag, i) => {
            return (
              <div className="tag_wrapper" key={i}>
                <Tag tag={tag} isShowFollow={isShowFollow} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
              </div>
            );
          })}
          {showMoreCount ? <span className="more-tag-length">+{tags.length - 2}</span> : null}
        </>
      );
    },
    [showDrop],
  );

  return (
    <TagListStyled>
      <div className="tag-list">{makeTagList(tags, hasMainShow, hasDropDownButton, isSelectable, isShowFollow, isContraction, toggleTag)}</div>
      {hasDropDownButton && tags.length > 4 && !showDrop ? (
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
  tags: [
    { iconName: "study", text: "스터디룸이 있는", follow: 12, isSelected: false },
    { iconName: "concent", text: "콘센트가 있는", follow: 23, isSelected: false },
    { iconName: "study", text: "분위기가 조용한", follow: 21, isSelected: false },
    { iconName: "wifi", text: "와이파이가 빠른", follow: 16, isSelected: false },
    { iconName: "parking", text: "주차장이 있는", follow: 7, isSelected: false },
    { iconName: "dessert", text: "디저트가 다양한", follow: 2, isSelected: false },
    { iconName: "toilet", text: "화장실이 깨끗한", follow: 3, isSelected: false },
    { iconName: "twentyFour", text: "24시간 열린", follow: 4, isSelected: false },
    { iconName: "smoking", text: "흡연구역이 마련된", follow: 5, isSelected: false },
    { iconName: "timer", text: "시간제한이 있는", follow: 6, isSelected: false },
    { iconName: "seat", text: "빈자리가 많은", follow: 7, isSelected: false },
    { iconName: "chair", text: "의자가 푹신한", follow: 1, isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
