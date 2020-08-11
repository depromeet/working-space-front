import styled from "styled-components";

const TagStyled = styled.div`
  .tag {
    padding: 8px 11px;
    margin: 4px 8px;
    &:first-child {
      margin-left: 0;
    }
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;
  }
  .tag > span {
    margin-left: 4px;
  }
`;

export default TagStyled;
