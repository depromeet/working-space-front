import styled from "styled-components";

const SelectPopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .background-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .container {
    width: 80%;
    min-width: 280px;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    z-index: 2;
  }

  .title {
    padding: 16px 0;
    text-align: center;
    line-height: 1.43;
    font-size: 14px;
    font-weight: bold;
  }

  /* Customize the label (the container) */
  .select-list-item {
    display: block;
    position: relative;
    padding: 16px 18px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom: 1px solid #f0f0f0;
  }

  /* Hide the browser's default radio button */
  .select-list-item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: relative;
    display: inline-block;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #cccccc;
    vertical-align: middle;
  }

  /* When the radio button is checked, add a blue background */
  .select-list-item input:checked ~ .checkmark {
    background-color: white;
    border-color: #ffbb44;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .select-list-item input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .select-list-item .checkmark:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffbb44;
  }

  .cafe-name {
    vertical-align: middle;
    margin-left: 10px;
  }

  .select-button {
    width: 100%;
    height: 51px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: white;
    border: none;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    cursor: pointer;
  }
`;

export default SelectPopupStyled;
