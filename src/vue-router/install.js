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

        /* 
        Vue.util.defineReactive(target,key,value,fn)
        target: 目标对象
        key: 目标对象属性
        value: 属性值
        fn: 只在node调试环境下set时调用
        */
        // 将this.current变成响应式的  
        Vue.util.defineReactive(this, '_route', this._router.history.current)

        console.log('this._route', this._route)

      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot

      }
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router } // addRoute、match等等方法
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route } // 指代的current对象，里面都是属性如path，matched
  })
}
