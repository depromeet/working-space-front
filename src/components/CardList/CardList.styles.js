import styled from "styled-components";

const CardListStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  button {
    background-color: #fff;
  }

  .card-list-sort {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 32px 0 16px;
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
