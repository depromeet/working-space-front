import React, { useEffect, useCallback } from "react";
import produce from "immer";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";

const makeTagList = (tags, contraction, isSelectable, toggleTag) => {
  if (!tags.length) {
    return <div className="non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div>;
  }
  if (contraction === true) {
    return tags?.filter((tag, i) => i < 2).map((tag, i) => <Tag key={i} tag={tag} />);
  }
  return tags?.map((tag, i) => {
    return (
      <div className="tag_wrapper" key={i}>
        <Tag tag={tag} isSelectable={isSelectable} isSelected={tag.isSelected} onClick={isSelectable && (() => toggleTag(i))} />
      </div>
    );
  });
};

const TagList = ({ tags, onSetTags, contraction, showMoreTags, isSelectable, onTagsChanged }) => {
  /* prettier-ignore */
  const toggleTag = useCallback(index => {
		onSetTags && onSetTags(prevTags =>
			produce(prevTags, draft => {
				draft[index].isSelected = !draft[index].isSelected;
			}),
		);
	}, [onSetTags]);

  useEffect(() => {
    onTagsChanged && onTagsChanged();
  }, [onTagsChanged]);

  return (
    <TagListStyled>
      {makeTagList(tags, contraction, isSelectable, toggleTag)}
      {tags.length > 2 && showMoreTags && <span className="more-tag-length">+{tags.length - 2}</span>}
    </TagListStyled>
  );
};

TagList.defaultProps = {
  showMoreTags: true,
  contraction: true,
  isSelectable: false,
  tags: [
    { iconName: "concent", text: "콘센트가 있는", follow: 12, isSelected: false },
    { iconName: "study", text: "분위기가 조용한", follow: 9, isSelected: false },
    { iconName: "wifi", text: "와이파이가 있는", follow: 8, isSelected: false },
    { iconName: "parking", text: "주차장이 있는", follow: 7, isSelected: false },
    { iconName: "dessert", text: "디저트가 다양한", follow: 5, isSelected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
