import createMatcher from './create-matcher'
import { install } from './install'
import HashHistory from './history/hash'
import HTML5History from './history/html5'
export default class VueRouter {
  constructor(options) {
    // 根据用户的配置生成一个映射表，当路由跳转时根据路径找到对应的组件进行渲染

    // 创建匹配器后 核心的方法就是匹配，但是用户可能想动态添加一个路由这个时候还要有个方法可以动态添加路由
    this.matcher = createMatcher(options.routes || [])

    // 根据当前的mode创建不同的路由管理策略
    switch (options.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break
      case 'history':
        this.history = new HTML5History(this)
        break
    }
  }
  push(location) {
    this.history.push(location)
  }
  match(path) {
    return this.matcher.match(path)
  }
  // app - 根实例
  // 路由初始化
  init(app) {
    // 初始化后，需要先根据路径做一次匹配，后续根据hash值的变化再次匹配
    const history = this.history

    const setupHashListener = () => history.setupHashListener()

    // 获取跳转路径然后监听hash值的变化
    history.transitionTo(history.getCurrentLocation(), setupHashListener) // 跳转到哪里

    // 为了更新_route
    history.listen(route => {
      app._route = route
    })
  }
}

VueRouter.install = install
