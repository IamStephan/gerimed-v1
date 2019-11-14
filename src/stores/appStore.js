import { action, observable } from 'mobx';

class AppStore {
  @observable sidebar = {
    isOpen: false
  }

  @action openSidebar () {
    this.sidebar.isOpen = true
  }

  @action closeSidebar () {
    this.sidebar.isOpen = false
  }
}

const store = new AppStore()

export default store