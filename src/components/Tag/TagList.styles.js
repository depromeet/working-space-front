import styled from "styled-components";

const TagListStyled = styled.div`
  width: 100%;
  line-height: 1.5;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 15.5px;

  &:last-child {
    margin-bottom: 0;
  }

  .main-non-tag {
    padding: 8px 12px;
    margin: 4px 0;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 1.33;
    color: #a7a7a7;
  }
  .non-tag {
    font-size: 12px;
    line-height: 1.33;
    color: #a7a7a7;
    margin: auto;
    margin-top: 12px;
    margin-bottom: 31.5px;
  }
  .more-tag-length {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    margin: 4px 0;
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default TagListStyled;
