import React, { useEffect, useCallback } from "react";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";

const makeTagList = (tags, contraction, selectable, toggleTag) => {
  if (tags.length === 0) {
    return <div className="non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div>;
  }
  if (contraction === true) {
    return tags?.filter((tag, i) => i < 2).map((tag, i) => <Tag key={i} tag={tag} />);
  }
  return tags?.map((tag, i) => {
    return <Tag key={i} tag={tag} selectable={selectable} selected={tag.selected} onClick={selectable && (() => toggleTag(tag))} />;
  });
};

const TagList = ({ tags, onSetTags, contraction, showMoreTags, selectable, onTagsChanged }) => {
  const toggleTag = useCallback(
    tag => {
      if (onSetTags) {
        onSetTags(prevState => {
          const newTags = [...prevState];
          const index = prevState.findIndex(prevTag => prevTag.text === tag.text);
          newTags[index].selected = !newTags[index].selected;
          return newTags;
        });
      }
    },
    [onSetTags],
  );

  useEffect(() => {
    if (onTagsChanged) {
      onTagsChanged();
    }
  }, [onTagsChanged]);

  return (
    <TagListStyled>
      {makeTagList(tags, contraction, selectable, toggleTag)}
      {tags.length !== 0 && tags.length > 2 && showMoreTags ? <span className="more-tag-length">+{tags.length - 2}</span> : null}
    </TagListStyled>
  );
};

TagList.defaultProps = {
  showMoreTags: true,
  contraction: true,
  selectable: false,
  tags: [
    { iconUrl: "", text: "콘센트가 있는", follow: 12, selected: false },
    { iconUrl: "", text: "분위기가 조용한", follow: 9, selected: false },
    { iconUrl: "", text: "와이파이가 있는", follow: 8, selected: false },
    { iconUrl: "", text: "주차장이 있는", follow: 7, selected: false },
    { iconUrl: "", text: "디저트가 다양한", follow: 5, selected: false },
  ],
  onSetTags: null,
  onTagsChanged: null,
};

export default TagList;
