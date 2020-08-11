import React from "react";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";

const makeTagList = (tags, hasContraction, hasMainShow) => {
  if (tags.length === 0) {
    if (hasMainShow === true) {
      return <div className="main-non-tag">태그가 없습니다. 카페를 이용한 후 평가를 남겨주세요.</div>;
    }
    return <div className="non-tag">아직 등록된 태그가 없습니다</div>;
  }
  if (hasContraction === true) {
    return tags?.filter((tag, i) => i < 2).map((tag, i) => <Tag key={i} tag={tag} showFollow={false} />);
  }
  return tags?.map((tag, i) => {
    return <Tag key={i} tag={tag} hasFollowCount={true} />;
  });
};

const TagList = ({ tags, hasContraction, hasMoreTags, hasMainShow }) => {
  return (
    <TagListStyled>
      {makeTagList(tags, hasContraction, hasMainShow)}
      {tags.length !== 0 && tags.length > 2 && hasMoreTags ? <span className="more-tag-length">+{tags.length - 2}</span> : null}
    </TagListStyled>
  );
};

TagList.defaultProps = {
  hasMainShow: true,
  hasMoreTags: true,
  hasContraction: true,
  tags: [
    { iconUrl: "", text: "콘센트가 있는", follow: 12 },
    { iconUrl: "", text: "분위기가 조용한", follow: 9 },
    { iconUrl: "", text: "와이파이가 있는", follow: 8 },
    { iconUrl: "", text: "주차장이 있는", follow: 7 },
    { iconUrl: "", text: "디저트가 다양한", follow: 5 },
  ],
};

export default TagList;
