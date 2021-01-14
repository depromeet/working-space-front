import React, { useEffect, useCallback, useState } from "react";
import produce from "immer";
import { isEmpty } from "lodash";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";
import { ReactComponent as DropDownIcon } from "../../images/icon-dropdown.svg";

const TagList = ({ tags, onSetTags, hasMainShow, hasDropDownButton, isContraction, isShowCount, isSelectable, onTagsChanged }) => {
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
    (tags, hasMainShow, hasDropDownButton, isSelectable, isShowCount, isContraction, toggleTag) => {
      if (tags.length <= 0 || isEmpty(tags)) {
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
                <Tag tag={tag} isShowCount={isShowCount} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
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
      <div className="tag-list">{makeTagList(tags, hasMainShow, hasDropDownButton, isSelectable, isShowCount, isContraction, toggleTag)}</div>
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
  isShowCount: true,
  hasMainShow: true,
  hasDropDownButton: false,
  tags: [
    { id: "study", count: 12, isSelected: false },
    { id: "concent", count: 23, isSelected: false },
    { id: "mute", count: 21, isSelected: false },
    { id: "wifi", count: 16, isSelected: false },
    { id: "parking", count: 7, isSelected: false },
    { id: "dessert", count: 2, isSelected: false },
    { id: "toilet", count: 3, isSelected: false },
    { id: "twentyFour", count: 4, isSelected: false },
    { id: "smoking", count: 5, isSelected: false },
    { id: "timer", count: 6, isSelected: false },
    { id: "seat", count: 7, isSelected: false },
    { id: "chair", count: 1, isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
