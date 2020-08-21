import styled from "styled-components";
import splashGray from "../../images/splash-gray.svg";

const NoneCardListyled = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;

  .splash-gray {
    width: 100%;
    height: 16.5vw;
    background: url(${splashGray}) no-repeat right;
    background-size: 57vw;
  }
  p {
    font-size: 14px;
    line-height: 1.43;
    color: #a7a7a7;
    text-align: center;
    margin-top: 12px;
  }
`;

export default NoneCardListyled;
