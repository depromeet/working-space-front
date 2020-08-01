import styled from 'styled-components';

const RatingStarStyled = styled.div`
	width: 100%;
	.rating_area {
		margin-left: -11px;
	}
	.react-stars {
		> span {
			margin-left: 11px;
		}
	}
`;

export default RatingStarStyled;
