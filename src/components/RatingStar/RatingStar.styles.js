import styled from 'styled-components';

const RatingStarStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	.rating_area {
		margin-left: -11px;
	}
	.react-stars {
		> span {
			margin-left: 11px;
		}
	}
	.rating_count {
		font-size: 12px;
	}
`;

export default RatingStarStyled;
