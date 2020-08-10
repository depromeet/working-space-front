import styled, { css } from "styled-components";

const verticalModeCss = css`
  & {
    flex-direction: column;
  }
  .rating_info {
    margin-top: 16px;
  }
  .rating_count_current {
    color: #ccc;
  }
  .rating_count_total {
    font-weight: normal;
  }
`;

const RatingStarStyled = styled.div`
  display: flex;
  ${props => props.isVertical && verticalModeCss}
  width: 100%;
  align-items: center;
  outline: none;
  .rating_area {
    line-height: 1;
    display: flex;
  }
  .rating_info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-left: 5px;
  }
  .rating_count {
    font-weight: bold;
    font-size: ${props => `${props.ratingTextSize}px`};
    color: ${props => props.ratingTextColor};
  }
  .rating_attendant_count {
    letter-spacing: 0px;
    color: ${props => props.attendantColor};
    margin-left: 4px;
  }
  .react-stars {
    outline: none;
    > span {
      margin-left: ${props => `${props.rowStarGutter}px`};
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`;

export default RatingStarStyled;
