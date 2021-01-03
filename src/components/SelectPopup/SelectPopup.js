import React, { useState } from "react";
import SelectPopupStyled from "./SelectPopup.styles";

const SelectPopup = props => {
  const { cafes, onClose, onSubmit } = props;
  const [selectedCafeID, setSelectedCafeID] = useState(null);

  const handleClose = () => {
    onClose();
  };

  const handleSelect = id => {
    setSelectedCafeID(id);
  };

  const handleSubmit = () => {
    console.log(selectedCafeID);
    onSubmit(selectedCafeID);
  };

  return (
    <SelectPopupStyled>
      <div className="background-area" onClick={handleClose} />
      <div className="container">
        <p className="title">카페를 선택해주세요</p>
        <div className="select-list">
          {cafes.map((cafe, index) => {
            const { id, name } = cafe;
            return (
              <label className="select-list-item" key={id} onChange={() => handleSelect(id)}>
                <input type="radio" name="select-cafe" value={id} defaultChecked={index === 0 ? "checked" : ""} />
                <span className="checkmark" />
                <span className="cafe-name">{name}</span>
              </label>
            );
          })}
        </div>
        <button className="select-button" onClick={handleSubmit}>
          완료
        </button>
      </div>
    </SelectPopupStyled>
  );
};

SelectPopup.defaultProps = {
  cafes: [],
  onClose: () => {},
  onSubmit: () => {},
};

export default SelectPopup;
