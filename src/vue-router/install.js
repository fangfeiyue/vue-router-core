export let _Vue;

export function install(Vue, options) {
  _Vue = Vue
  console.log(Vue, options)
}
