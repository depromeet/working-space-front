import styled from "styled-components";

const TagStyled = styled.div`
  .tag {
    width: fit-content;
    padding: 8px 11px;
    margin: 4px 8px;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;
    cursor: ${props => (props.isSelectable ? "pointer" : "default")};

    &:first-child {
      margin-left: 0;
    }

    &.isSelected {
      background-color: #ffbb44;
      color: #ffffff;
      border: 1px solid #ffbb44;
    }
  }
`;

export default TagStyled;
