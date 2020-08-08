import styled from "styled-components";

const CardListStyled = styled.div`
  width: 100vw;
  height: 100%;
  margin: 10px 0;
  padding: 0 16px;
  box-sizing: border-box;

  .card-list-sort {
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 16px;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .sort-title {
    font-size: 20px;
    line-height: 28px;
    color: #222222;
  }
  .sort-button {
    width: 24px;
    height: 24px;
  }
`;

export default CardListStyled;
