import styled from "styled-components";

export const SecondStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .tag_wrapper {
    display: flex;
    width: 50%;
    &:nth-child(odd) {
      justify-content: flex-end;
    }
    &:nth-child(even) {
      justify-content: flex-start;
    }
  }
`;
