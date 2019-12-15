import { decorate, observable, action, computed } from 'mobx';

class AppStore {
  theme = {
    primary: '#20242E',
    secondary: '#7DE88C',
    detail: '#FFE796',
    error: '#E8807D'
  };

  @observable initialized;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.accessToken = null;
    this.initialized = false;
    this.gameId = null;
  }

  @action init() {
    this.initialized = true;
  }

  @action reset() {
    this.initialized = false;
    this.accessToken = null;
    localStorage.removeItem('accessToken');
  }

  @action setAccessToken(accessToken) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }
  @action setGameIdCs() {
    this.gameId = 1;
  }
}

decorate(AppStore, {
  accessToken: observable
});

export default AppStore;
