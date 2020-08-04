import React from "react";
import AllTagStyled from "./AllTag.styles";

const AllTag = props => {
  const { tags } = props;

  return (
    <AllTagStyled>
      <div className="tag-title">
        <h2 className="tag-text">태그</h2>
        <p className="tag-length">{tags.length}개</p>
      </div>
      <div className="tag-box">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag.text}
            <span>+{tag.follow}</span>
          </div>
        ))}
      </div>
    </AllTagStyled>
  );
};

AllTag.defaultProps = {
  tags: [
    { iconUrl: "", text: "콘센트가 많아요", follow: 11 },
    { iconUrl: "", text: "조용해요", follow: 9 },
    { iconUrl: "", text: "와이파이가 잘돼요", follow: 8 },
    { iconUrl: "", text: "주차장이 있어요", follow: 7 },
    { iconUrl: "", text: "베이커리가 있어요", follow: 5 },
  ],
};

export default AllTag;
