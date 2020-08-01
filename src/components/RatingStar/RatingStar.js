import React, { useCallback, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import RatingStarStyled from './RatingStar.styles';

const RatingStar = props => {
	const { count, size, activeColor, isHalf, color } = props;
	const [value, setValue] = useState(props.value);

	const onRatingChanged = useCallback(newRating => {
		setValue(newRating);
		props.onRatingChanged && props.onRatingChanged();
	}, []);

	return (
		<RatingStarStyled>
			<div className="rating_area">
				<ReactStars count={count} value={value} size={size} color={color} activeColor={activeColor} isHalf={isHalf} onChange={onRatingChanged} />
			</div>
			<p className="rating_count">
				{value} / {count}
			</p>
		</RatingStarStyled>
	);
};

RatingStar.defaultProps = {
	value: 1,
	count: 5,
	size: 30,
	color: '#e0e0e0',
	activeColor: '#000',
	isHalf: false,
};

export default RatingStar;
