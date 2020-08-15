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
      if (!tags.length) return <div className="non-tag">아직 등록된 태그가 없습니다</div>;
      if (!tags.length && hasMainShow) return <div className="main-non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div>;
      if (isContraction) tags = tags.filter((v, i) => i < 2);
      if (hasDropDownButton && tags.length > 4 && showDrop === false) tags = tags.filter((v, i) => i < 4);

      return tags?.map((tag, i) => {
        return (
          <div className="tag_wrapper" key={i}>
            <Tag tag={tag} isShowFollow={isShowFollow} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
          </div>
        );
      });
    },
    [showDrop],
  );

  return (
    <TagListStyled>
      <div className="tag-list">
        {makeTagList(tags, hasMainShow, hasDropDownButton, isSelectable, isShowFollow, isContraction, toggleTag)}
        {tags.length > 2 && isContraction && <span className="more-tag-length">+{tags.length - 2}</span>}
      </div>
      {hasDropDownButton && tags.length > 4 && showDrop === false ? (
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
    { iconName: "concent", text: "콘센트가 있는", isSelected: false },
    { iconName: "study", text: "분위기가 조용한", isSelected: false },
    { iconName: "wifi", text: "와이파이가 빠른", isSelected: false },
    { iconName: "parking", text: "주차장이 있는", isSelected: false },
    { iconName: "dessert", text: "디저트가 다양한", isSelected: false },
    { iconName: "mute", text: "조용한", isSelected: false },
    { iconName: "toilet", text: "화장실이 깨끗한", isSelected: false },
    { iconName: "twentyFour", text: "24시간 열린", isSelected: false },
    { iconName: "smoking", text: "흡연구역이 마련된", isSelected: false },
    { iconName: "timer", text: "시간제한이 있는", isSelected: false },
    { iconName: "seat", text: "빈자리가 많은", isSelected: false },
    { iconName: "chair", text: "의자가 푹신한", isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
