import React, { useCallback } from 'react';
import ModalStyled from './Modal.styles';

const Modal = props => {
	const { opener } = props;
	const onModalOpen = useCallback(() => {}, []);
	const onModalClose = useCallback(() => {}, []);

	return (
		<ModalStyled>
			<div className="header">this is header</div>
			<div className="contents">this is contents</div>
		</ModalStyled>
	);
};

export default Modal;
