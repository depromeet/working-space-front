import React, { useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import * as styled from "./ModalEvaluation.styles";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as FilledStarIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as LineStarIcon } from "../../images/icon-star-line.svg";

const EmptyIcon = () => <LineStarIcon width={32} height={32} style={{ color: "#ccc" }} />;
const FilledIcon = () => <FilledStarIcon width={32} height={32} style={{ color: "#ffbb44" }} />;

const ModalEvaluation = props => {
  const { mainTitle, subTitle, totalStep } = props;
  const [step, setStep] = useState(1);

  const getStepText = useCallback(() => {
    if (step === 1) return "평점을 입력해주세요";
    if (step === totalStep) return "등록하기";
    return "다음으로";
  }, [step, totalStep]);

  const handleFooterButtonClick = useCallback(() => {
    setStep(prev => Math.min(prev + 1, totalStep));
  }, [totalStep]);

  const ModalContents = useCallback(
    modalProps => {
      const { onClickOpen, onClickClose, isOpen, setIsOpen } = modalProps;

      return (
        <styled.ModalContents>
          <div className="header">
            <h1 className="main_title">{mainTitle}</h1>
            <h2 className="sub_title">{subTitle}</h2>
          </div>
          <div className="rating">
            <RatingStar
              isVertical={true}
              rating={0}
              ratingTextSize={18}
              isShowRatingTotal={true}
              isRatingInteger={true}
              starCount={5}
              rowStarGutter={8}
              isStarEditable={true}
              isShowAttendantCount={false}
              EmptyIcon={EmptyIcon}
              FilledIcon={FilledIcon}
            />
          </div>
          <div className="footer">
            <button type="button" className="footer_button" onClick={handleFooterButtonClick}>
              {getStepText(step)}
            </button>
          </div>
        </styled.ModalContents>
      );
    },
    [step],
  );

  return <Modal>{ModalContents}</Modal>;
};

ModalEvaluation.defaultProps = {
  mainTitle: "캐틀앤비",
  subTitle: "이 카페의 평점은 몇점인가요?",
  totalStep: 3,
};

export default ModalEvaluation;
