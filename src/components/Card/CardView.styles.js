import styled from "styled-components";

const CardViewStyled = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
  }

  .card-image-info {
    display: flex;
    position: absolute;
    top: 8px;
    left: 8px;
  }
  .image-info-box {
    width: 73px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(34, 34, 34, 0.5);
    margin-right: 4px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.33;
    color: #fff;
  }
  .image-info-box > svg {
    margin-right: 4px;
  }
`;

export default CardViewStyled;
