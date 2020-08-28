import React from "react";
import TagList from "../Tag/TagList";
import * as styled from "./SecondStep.styles";

const SecondStep = props => {
  const { onTagsChange, tags, onSetTags } = props;
  return (
    <styled.SecondStep>
      <TagList isSelectable={true} isShowCount={false} isContraction={false} contraction={false} tags={tags} onSetTags={onSetTags} onTagsChanged={onTagsChange}></TagList>
    </styled.SecondStep>
  );
};

export default SecondStep;
