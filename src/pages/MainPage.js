import React from 'react';
import RatingStar from '../components/RatingStar/RatingStar';

const MainPage = () => {
	return (
		<>
			<RatingStar starCount={5} rating={1} starSize={30} isStarHalf={true} />
			<RatingStar starCount={1} isStarEditable={false} starSize={15} attendantCount={30} isSimpleMode={true} />
			<RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} />
		</>
	);
};

export default MainPage;
