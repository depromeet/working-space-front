import React, { useCallback, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import * as styled from "./ModalEvaluation.styles";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { ReactComponent as CloseIcon } from "../../images/icon-close.svg";
import { ReactComponent as BackIcon } from "../../images/icon-back.svg";

const ModalEvaluation = props => {
  const { userRating, EndButton, totalStep, currentId, onSubmitButtonClick } = props;
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(props.isActive);
  const [isShow, setIsShow] = useState(props.isShow);
  const [mainTitle] = useState(props.mainTitle);
  const [subTitle, setSubTitle] = useState(props.subTitle);
  const [isFooterDisabled, setIsFooterDisabled] = useState(props.isFooterDisabled);
  const [footerButtonText, setFooterButtonText] = useState(props.footerButtonText);
  const [tags, setTags] = useState(props.tags);
  const [rating, setRating] = useState(props.rating);

  const handleBackButtonClick = useCallback(() => {
    setStep(prev => prev - 1);
    setIsActive(false);
    setTags(props.tags);
  }, [props.tags]);

  const handleRatingChange = useCallback(newRating => {
    setRating(newRating);
    setIsActive(true);
    setIsFooterDisabled(false);
  }, []);

  const handleTagsChange = useCallback(() => {
    const selectedTags = tags.filter(tag => tag.isSelected);
    setIsActive(selectedTags.length >= 3);
  }, [tags]);

  // prettier-ignore
  const handleClose = useCallback(onModalClose => {
    setStep(1);
    setIsActive(false);
    setTags(props.tags);
    onModalClose();
  }, [props.tags]);

  // prettier-ignore
  const onSubmit = useCallback(onModalClose => {
    const selectedTags = tags.filter(tag => tag.isSelected);
    window.localStorage.setItem("cardRatings", JSON.stringify({ cafeId: currentId, rating, tags: selectedTags.map(tag => tag.id)}));
    onSubmitButtonClick && onSubmitButtonClick();

    setIsShow(false);
    handleClose(onModalClose);
  }, [rating, tags, currentId, handleClose, onSubmitButtonClick]);

  // prettier-ignore
  const handleFooterButtonClick = useCallback(onModalClose => {
    if (isFooterDisabled) return;
    if (step === totalStep) { onSubmit(onModalClose); return; }

    setStep(prev => prev + 1);
    setIsActive(false);
    setFooterButtonText("");
  }, [step, totalStep, isFooterDisabled, onSubmit]);

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

  if (userRating !== null) {
    return <EndButton />;
  }

  return (
    <>
      {isShow ? (
        <Modal shouldCloseOnDimmedClick={false}>
          {({ onClickOpen, onClickClose, isOpen, setIsOpen }) => (
            <styled.ModalContents isActive={isActive}>
              <div className="header">
                <h1 className="main_title">{mainTitle}</h1>
                <h2 className="sub_title">{subTitle}</h2>
              </div>
              {step !== 1 && <BackIcon className="back_icon" onClick={handleBackButtonClick} />}
              <CloseIcon className="close_icon" onClick={() => handleClose(onClickClose)} />
              {step === 1 && <FirstStep onRatingChange={handleRatingChange} isActive={isActive} />}
              {step === 2 && <SecondStep onTagsChange={handleTagsChange} tags={tags} onSetTags={setTags} />}
              <div className="footer">
                <button type="button" className="footer_button" onClick={() => handleFooterButtonClick(onClickClose)}>
                  {footerButtonText}
                </button>
              </div>
            </styled.ModalContents>
          )}
        </Modal>
      ) : (
        <EndButton />
      )}
    </>
  );
};

ModalEvaluation.defaultProps = {
  EndButton: props => (
    <styled.EndButton type="button" {...props}>
      평가가 완료되었습니다.
    </styled.EndButton>
  ),
  mainTitle: "캐틀앤비",
  subTitle: "이 카페의 평점은 몇점인가요?",
  totalStep: 2,
  isActive: false,
  isShow: true,
  footerButtonText: "",
  isFooterDisabled: false,
  rating: 0,
  tags: [
    { id: "study", isSelected: false },
    { id: "concent", isSelected: false },
    { id: "mute", isSelected: false },
    { id: "wifi", isSelected: false },
    { id: "parking", isSelected: false },
    { id: "dessert", isSelected: false },
    { id: "toilet", isSelected: false },
    { id: "twentyFour", isSelected: false },
    { id: "smoking", isSelected: false },
    { id: "timer", isSelected: false },
    { id: "seat", isSelected: false },
    { id: "chair", isSelected: false },
  ],
};

export default ModalEvaluation;
