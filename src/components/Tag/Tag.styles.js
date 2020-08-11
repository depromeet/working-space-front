import styled, { css } from "styled-components";

const selectedCss = css`
  background-color: #ffbb44;
  color: #ffffff;
  border: 1px solid #ffbb44;
`;

const TagStyled = styled.div`
  .tag {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 32px;
    box-sizing: border-box;
    padding: 4px 8px;
    margin: 4px 8px;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;

    &:first-child {
      margin-left: 0;
    }

    cursor: ${({ isSelectable }) => (isSelectable ? "pointer" : "default")};
    ${({ isSelected }) => isSelected && selectedCss}
  }
  .tag_icon {
    line-height: 1;
  }
  .tag_text {
    margin-left: 2px;
    margin-top: -1px;
  }
  .tag_follow {
    margin-left: 4px;
  }
`;

export default TagStyled;
