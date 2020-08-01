import React from 'react';
import TestStyled from './Test.styles';

const Test = props => {
	return (
		<TestStyled hasButton={true}>
			<div className="hello">asdfasdf ${props.value}</div>
			<div className="hello">asdfasdf</div>
			<div className="hello">asdfasdf</div>
			<div className="hello">asdfasdf</div>
			<div className="hello">asdfasdf</div>
		</TestStyled>
	);
};

Test.defaultProps = {
	value: 1,
};

export default Test;
