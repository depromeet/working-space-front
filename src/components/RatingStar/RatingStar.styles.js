import styled from "styled-components";

const RatingStarStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .rating_area {
    line-height: 1;
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
    color: ${props => props.ratingTextColor};
  }
  .rating_attendant_count {
    letter-spacing: 0px;
    color: ${props => props.attendantColor};
    margin-left: 4px;
  }
`;

export default RatingStarStyled;
