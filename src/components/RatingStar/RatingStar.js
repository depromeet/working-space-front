import React, { useCallback } from 'react';
import ReactStars from 'react-rating-stars-component';
import RatingStarStyled from './RatingStar.styles';

const RatingStar = props => {
	const { count, size, activeColor, isHalf } = props;

	const onRatingChanged = useCallback(newRating => {
		console.log(newRating);
		props.onRatingChanged && props.onRatingChanged();
	}, []);

	return (
		<RatingStarStyled>
			<div className="rating_area">
				<ReactStars count={count} size={size} activeColor={activeColor} isHalf={isHalf} onChange={onRatingChanged} />
			</div>
		</RatingStarStyled>
	);
};

RatingStar.defaultProps = {
	count: 5,
	size: 30,
	activeColor: '#ffd700',
	isHalf: false,
};

export default RatingStar;
