import styled from "styled-components";

const CardInfoStyled = styled.div`
  width: 100%;
  height: ${props => (props.isInMap ? "auto" : "96px")};
  margin-top: ${props => (props.isInMap ? "0px" : "13px")};

  .info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${props => (props.isInMap ? "12px" : "8px")};
    color: #222222;
  }
  .card-title {
    width: 250px;
    height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    font-weight: bold;
    padding-right: 5px;
  }
  .info-middle {
    display: flex;
    margin-bottom: 4px;
  }
  .info-middle svg {
    width: 16px;
    height: 16px;
  }
  .card-rating,
  .card-tag-count {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;

    span {
      padding-left: 4px;
      padding-right: 11px;
    }
  }

  .card-rating::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: #cccccc;
    margin-right: 8px;
  }

  .distance {
    display: flex;
    justify-content: space-between;
    line-height: 1.33;
    font-size: 12px;
  }
  .distance > span {
    margin-left: 4px;
  }

  .location {
    font-size: 11px;
    font-weight: 14px;
    color: #a7a7a7;
  }
`;

export default CardInfoStyled;
