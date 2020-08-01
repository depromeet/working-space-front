import React, { useCallback, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import RatingStarStyled from './RatingStar.styles';

const RatingStar = props => {
	const { starSize, starActiveColor, isStarHalf, starColor, isStarEditable, isSimpleMode, starCount, attendantCount } = props;
	const [rating, setRating] = useState(props.rating);
	let ratingCount = isSimpleMode ? `${rating}` : `${rating} / ${starCount}`;
	if (isSimpleMode && attendantCount !== 0) ratingCount += `(${attendantCount})`;

	const onRatingChanged = useCallback(newRating => {
		setRating(newRating);
		props.onRatingChanged && props.onRatingChanged();
	}, []);

	return (
		<RatingStarStyled simple={isSimpleMode}>
			<div className="rating_area">
				<ReactStars count={starCount} value={rating} edit={isStarEditable} size={starSize} color={starColor} activeColor={starActiveColor} isHalf={isStarHalf} onChange={onRatingChanged} />
			</div>
			<p className="rating_count">{ratingCount}</p>
		</RatingStarStyled>
	);
};

RatingStar.defaultProps = {
	rating: 4.5,
	starCount: 5,
	starSize: 30,
	starColor: '#e0e0e0',
	starActiveColor: '#000',
	isStarHalf: true,
	isStarEditable: true,
	isSimpleMode: false,
	attendantCount: 0,
};

export default RatingStar;
