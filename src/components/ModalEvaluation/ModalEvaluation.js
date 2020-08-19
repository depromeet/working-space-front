import React, { useCallback, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import * as styled from "./ModalEvaluation.styles";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { ReactComponent as CloseIcon } from "../../images/icon-close.svg";
import { ReactComponent as BackIcon } from "../../images/icon-back.svg";

const ModalEvaluation = props => {
  const { totalStep } = props;
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(props.isActive);
  const [mainTitle] = useState(props.mainTitle);
  const [subTitle, setSubTitle] = useState(props.subTitle);
  const [isFooterDisabled, setIsFooterDisabled] = useState(props.isFooterDisabled);
  const [footerButtonText, setFooterButtonText] = useState(props.footerButtonText);
  const [tags, setTags] = useState(props.tags);

  const handleFooterButtonClick = useCallback(() => {
    if (isFooterDisabled) return;
    if (step === totalStep) return;

    setStep(prev => prev + 1);
    setIsActive(false);
    setFooterButtonText("");
  }, [step, totalStep, isFooterDisabled]);

  const handleBackButtonClick = useCallback(() => {
    setStep(prev => prev - 1);
    setIsActive(false);
  }, []);

  const handleRatingChange = useCallback(() => {
    setIsActive(true);
    setIsFooterDisabled(false);
  }, []);

  const handleTagsChange = useCallback(() => {
    const selectedTags = tags.filter(tag => tag.isSelected);
    setIsActive(selectedTags.length >= 3);
  }, [tags]);

  useEffect(() => {
    if (step === 1 && !isActive) {
      setFooterButtonText("평점을 입력해주세요");
      setIsFooterDisabled(true);
      return;
    }
    if (step === 1 && isActive) {
      setFooterButtonText("다음으로");
      setIsFooterDisabled(false);
      return;
    }
    if (step === 2 && !isActive) {
      setSubTitle("이 카페에 대한 태그를 선택해주세요");
      setFooterButtonText("최소 3개를 선택하셔야 등록이 가능합니다");
      setIsFooterDisabled(true);
      return;
    }
    if (step === 2 && isActive) {
      setFooterButtonText("등록하기");
      setIsFooterDisabled(false);
    }
  }, [step, isActive, isFooterDisabled]);

  return (
    <Modal shouldCloseOnDimmedClick={false}>
      {({ onClickOpen, onClickClose, isOpen, setIsOpen }) => (
        <styled.ModalContents isActive={isActive}>
          <div className="header">
            <h1 className="main_title">{mainTitle}</h1>
            <h2 className="sub_title">{subTitle}</h2>
          </div>
          {step !== 1 && <BackIcon className="back_icon" onClick={handleBackButtonClick} />}
          <CloseIcon className="close_icon" onClick={onClickClose} />
          {step === 1 && <FirstStep onRatingChange={handleRatingChange} isActive={isActive} />}
          {step === 2 && <SecondStep onTagsChange={handleTagsChange} tags={tags} onSetTags={setTags} />}
          <div className="footer">
            <button type="button" className="footer_button" onClick={handleFooterButtonClick}>
              {footerButtonText}
            </button>
          </div>
        </styled.ModalContents>
      )}
    </Modal>
  );
};

ModalEvaluation.defaultProps = {
  mainTitle: "캐틀앤비",
  subTitle: "이 카페의 평점은 몇점인가요?",
  totalStep: 2,
  isActive: false,
  footerButtonText: "",
  isFooterDisabled: false,
  tags: [
    { name: "study", isSelected: false },
    { name: "concent", isSelected: false },
    { name: "mute", isSelected: false },
    { name: "wifi", isSelected: false },
    { name: "parking", isSelected: false },
    { name: "dessert", isSelected: false },
    { name: "toilet", isSelected: false },
    { name: "twentyFour", isSelected: false },
    { name: "smoking", isSelected: false },
    { name: "timer", isSelected: false },
    { name: "seat", isSelected: false },
    { name: "chair", isSelected: false },
  ],
};

export default ModalEvaluation;
