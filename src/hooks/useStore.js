import { useContext } from 'react';
import RootStoreContext from '../stores';

const useStore = () => {
	const rootStore = useContext(RootStoreContext);
	return rootStore;
};

export default useStore;
