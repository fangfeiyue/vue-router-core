export function createRoute(record, location) {
  let res = []

  // 先渲染一级路由，然后渲染二级路由，依次类推
  if (record) {
    while(record) {
      res.unshift(record)
      record = record.parent
    }
  }

  return {
    ...location,
    matched: res
  }
}

export default class History {
  constructor(router) {
    this.router = router
    // 记录默认路径，需要将current属性变成响应式的，后续current变化会更新视图
    this.current = createRoute(null, {
      path: '/'
    })
  }
  // 根据路径渲染组件，数据变化更新视图
  transitionTo(location, onComplete) { // 默认会先执行一次
    console.log('path',location)
    // 根据跳转的路径获取匹配的记录
    const route = this.router.match(location) // route = {path: '/about/a', matched: [About, AboutA]}

    console.log('route', route)
    // this.current = route
    // this.cb(route)
    this.updateRoute(route)

    onComplete && onComplete() // cb调用后hash值变化会再次调用transitionTo
  }
  listen(cb) {
    this.cb = cb
  }
  updateRoute(route) {
    this.current = route
    this.cb && this.cb(route)
  }
}
