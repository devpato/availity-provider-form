import { extendObservable, action, set } from 'mobx';

const emptyState = {
  request: {
    provider: null,
    fullName: null,
    npiID: null,
    businessAdress: null,
    telephone: null,
    email: null,
    acceptTerms: false,
    acceptTerms: false,
  },
};

class StateStore {
  constructor(state = {}) {
    extendObservable(this, emptyState, state);
  }

  @action
  reset() {
    set(this, emptyState);
  }
}

export default new StateStore();

export { StateStore };
