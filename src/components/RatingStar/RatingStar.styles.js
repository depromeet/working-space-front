import styled from 'styled-components';

const RatingStarStyled = styled.div`
	display: flex;
	flex-direction: ${props => (props.simple ? 'row' : 'column')};
	align-items: center;
	width: 100%;
	.rating_area {
		margin-top: -2px;
	}
	.react-stars {
		> span {
			margin-left: 11px;
		}
		> span:first-of-type {
			margin-left: 0;
		}
	}
	.rating_count {
		font-size: 12px;
		margin-left: ${props => (props.simple ? '2px' : '0px')};
		letter-spacing: 0px;
	}
`;

export default RatingStarStyled;
