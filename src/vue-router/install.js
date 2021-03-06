export let _Vue;

export function install(Vue, options) {
  _Vue = Vue
  console.log(Vue, options)
  // 将当前根实例提供的router属性共享给所有子组件

  // 不能这样写，这样写表示所有的Vue实例都有router属性，可能某个组件中并没有使用路由，但是也包含了router属性
  // Vue.prototype.router = router

  Vue.mixin({
    beforeCreate() {
      // 如果有router属性说明是根实例
      if (this.$options.router) {
        this._routerRoot = this; // 把根实例挂载到_routerRoot上
        this._router = this.$options.router // 获取用户传入的options里面的router配置也就是router的实例

        // 传递根实例
        this._router.init(this)

      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot

      }
    }
  })
}
