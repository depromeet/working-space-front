import React, { useCallback, useEffect } from 'react';
import Sample from '../components/Sample';
import useStore from '../hooks/useStore';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';

const SampleContainer = () => {
	const { SampleStore } = useStore();

	useEffect(() => {
		SampleStore.fetchSample();
	}, [SampleStore]);


	const onClickButton = useCallback(() => {
		console.log('컨테이너에서는 UI로직과 관련 없는 라우팅, 도메인 데이터 가공등의 역할을 합니다.')
		console.log(toJS(SampleStore.sampleList));
		console.log('이런식으로 Mobx의 Store에 접근해서 데이터를 가져와서 자식에게 내려줍니다.');
	}, [SampleStore.sampleList]);
	
	return <Sample onClick={onClickButton} userList={toJS(SampleStore.sampleList)}/>;
};

export default observer(SampleContainer);
