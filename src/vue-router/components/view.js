export default {
  functional: true,
  name: 'router-view',
  render(h, {data, parent}) {
    let route = parent.$route
    let depth = 0
    let records = route.matched
    data.routerView = true // 渲染router-view时标记它是一个router-view

    while(parent){ // 根据matched 渲染对应的router-view
      if (parent.$vnode && parent.$vnode.data.routerView){
          depth++;
      }
      parent = parent.$parent;
    }

    let record = route.matched[depth];
    // 如果没有匹配的记录渲染空值
    if(!record){
        return h();
    }

    return h(records[depth].component, data)
  }
}