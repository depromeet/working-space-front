import React, { useCallback, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import useStore from '../hooks/useStore';

import Header from '../components/Header/Header';
import Sample from '../components/Sample';

const MainContainer = () => {
	const { SampleStore } = useStore();

	useEffect(() => {
		SampleStore.fetchSample();
	}, [SampleStore]);

	const onClickNavButton = useCallback(() => {
		console.log(toJS(SampleStore.localData));
	}, [SampleStore.localData]);

	return (
		<div>
			<Sample />
			<Header handleNavClick={onClickNavButton} localData={toJS(SampleStore.localData)} backColor={true} backBtn={false} shareBtn={false} mapBtn={true} localText={false} naviBox={true} />
		</div>
	);
};

export default observer(MainContainer);
