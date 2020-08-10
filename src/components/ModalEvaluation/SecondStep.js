import React from "react";
import TagList from "../Tag/TagList";

const SecondStep = props => {
  const { onTagsChange, tags, onSetTags } = props;
  return <TagList selectable={true} showMoreTags={false} contraction={false} tags={tags} onSetTags={onSetTags} onTagsChanged={onTagsChange}></TagList>;
};

export default SecondStep;
