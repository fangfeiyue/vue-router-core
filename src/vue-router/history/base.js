export default class History {
  constructor(router) {
    this.router =router
  }
  transitionTo(path, cb) { // 默认会先执行一次
    console.log('path',path)
    cb && cb() // cb调用后hash值变化会再次调用transitionTo
  }
}
