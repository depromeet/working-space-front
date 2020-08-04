import styled from "styled-components";

const AllTagStyled = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px solid #f5f5f5;

  .tag-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .tag-text {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }
  .tag-length {
    font-size: 12px;
    line-height: 16px;
  }
  .tag-box {
    width: 100%;
    line-height: 1.5;
    display: flex;
  }
  .tag {
    padding: 5px 10px;
    margin: 0 10px;
    border-radius: 20px;
    border: 1px solid #f5f5f5;
  }
`;

export default AllTagStyled;
