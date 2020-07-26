import mobx, { decorate } from 'mobx';
import { observable } from 'mobx-react';

class SampleStore {
	user;
}

decorate(SampleStore, {
	user: observable,
});
