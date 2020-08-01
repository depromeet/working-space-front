import styled from 'styled-components';

const HeaderStyled = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	background-color: ${props => (props.backColor ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)')};

	.left-box {
		width: 80%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.back-btn {
			width: 30px;
			height: 30px;
		}
		.navi-text {
			font-size: 14px;
			color: #e0e0e0;
			padding-left: 10px;
		}
		.navi-box {
			width: 100%;
			height: 30px;
			overflow: hidden;
			display: flex;
			border: 1px solid #e0e0e0;
			border-radius: 50px;
			padding-right: 5px;

			p {
				flex: 1 1 auto;
				margin: 0;
				font-size: 14px;
				line-height: 30px;
			}
			.navi-btn {
				width: 30px;
				height: 30px;
				flex: none;
			}
		}
	}
	.right-box {
		width: 20%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.map-btn,
		.share-btn {
			width: 30px;
			height: 30px;
		}
	}
`;

export default HeaderStyled;
