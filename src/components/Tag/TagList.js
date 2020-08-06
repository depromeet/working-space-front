import React from "react";
import TagListStyled from "./TagList.styles";
import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <TagListStyled>
      <div className="tag-title">
        <h2 className="tag-text">태그</h2>
        <p className="tag-length">{tags.length}개</p>
      </div>
      <div className="tag-box">
        {tags?.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
    </TagListStyled>
  );
};

TagList.defaultProps = {
  tags: [
    { iconUrl: "", text: "콘센트가 많아요", follow: 12 },
    { iconUrl: "", text: "조용해요", follow: 9 },
    { iconUrl: "", text: "와이파이가 잘돼요", follow: 8 },
    { iconUrl: "", text: "주차장이 있어요", follow: 7 },
    { iconUrl: "", text: "베이커리가 있어요", follow: 5 },
  ],
};

export default TagList;
