import styled from "styled-components";

const TagListStyled = styled.div`
  width: 100%;
  line-height: 1.5;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 15.5px;

  .non-tag {
    padding: 8px 12px;
    margin: 4px 0;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 1.33;
    color: #a7a7a7;
  }
  .more-tag-length {
    padding: 8px 9px;
    margin: 4px 0;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default TagListStyled;
