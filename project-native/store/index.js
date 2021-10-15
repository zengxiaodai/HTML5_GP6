import Test from './modules/test'

class Store {
  constructor() {
    this.test = new Test()
  }
}
export default new Store()
