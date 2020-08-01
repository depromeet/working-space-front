import React, { useCallback } from 'react';

const Sample = props => {
	const onClick = useCallback(() => {
		console.log('컴포넌트에서는 UI로직만을 처리합니다.');
		console.log('UI로직을 처리하고 난 뒤에 라우팅이나 Mobx State를 변경은 컨테이너 컴포넌트의 이벤트 핸들러에서 처리합니다.');
		props.onClick && props.onClick();
	}, [props]);

	return (
		<div>
			샘플 컴포넌트 입니다.
			<button onClick={onClick}>사용법 로그 보기</button>
			{props.userList.map(user => (
				<div key={user.name}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{user.card.phone}</p>
				</div>
			))}
		</div>
	);
};

/** props가 없어도 오류가 나지 않도록 기본값을 지정해줍니다. */
Sample.defaultProps = {
	userList: [],
};

export default Sample;
