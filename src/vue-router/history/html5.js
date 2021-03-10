import History from './base'

export default class HTML5History extends History {
  constructor(router) {
    super(router)
    console.log('H5 mode')
  }
  setupHashListener() {
    window.addEventListener('popstate', () => {
      // 监听路径变化（这里的变化指的是浏览器的前进、后退）进行跳转
      this.transitionTo(this.getCurrentLocation())
    })
  }
  getCurrentLocation() {
    return window.location.pathname
  }
  push(location) {
    // 跳转时采用H5 api
    this.transitionTo(location, () => {
      window.history.pushState({}, null, location)
    })
  }
}
