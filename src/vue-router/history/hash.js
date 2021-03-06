import History from './base'

function ensureSlash() {
  if (!window.location.hash) window.location.hash = '/'
}

function getHash(){
  return window.location.hash.slice(1);
}

export default class HashHistory extends History {
  constructor(router) {
    super(router)
    console.log('hash mode')

    // 默认hash模式下要加 #/
    ensureSlash()
  }

  setupHashListener() {
    window.addEventListener('hashchange', () => {
      // 根据当前hash值匹配对应的组件
      this.transitionTo(getHash())
    })
  }
  getCurrentLocation() {
    return getHash()
  }
}
