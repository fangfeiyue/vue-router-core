import History from './base'

export default class H5History extends History {
  constructor(router) {
    super(router)
    console.log('H5 mode')
  }
  getCurrentLocation() {
    return window.location.pathname
  }
}
