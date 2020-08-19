import styled from "styled-components";

const CardInfoStyled = styled.div`
  width: 100%;
  height: ${props => (props.showOnlyInfo ? "auto" : "96px")};
  margin-top: ${props => (props.showOnlyInfo ? "0px" : "13px")};

  .info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${props => (props.showOnlyInfo ? "4px" : "0")};
    padding-bottom: ${props => (props.showOnlyInfo ? "12px" : "8px")};
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
    font-stretch: normal;
    font-style: normal;
    /* line-height: 1.44; */
    letter-spacing: normal;
    padding-right: 5px;
  }
  .info-middle {
    display: flex;
    margin-bottom: 6px;
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
      padding-right: 10px;
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
