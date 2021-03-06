// 一个参数表示初始化，两个参数表示动态添加路由
export default function createRouteMap(routes, oldPathMap){
  let pathMap = oldPathMap || {}

  routes.forEach(route => {
    addRouteRecord(route, pathMap)
  })

  return {
    pathMap
  }
}   
// 将当前路由存储到pathMap中
function addRouteRecord(route, pathMap, parent){ // pathMap格式 {路径: 记录}
  const path = parent ? parent.path + '/' + route.path : route.path
  let record = {
    path,
    component: route.component,
    name: route.name,
    props: route.props,
    params: route.params,
    meta: route.meta
  }

  // 如果映射表中没有这个路径，将这个路径进行映射
  if (!pathMap[path]) pathMap[path] = record

  // 处理子路由
  if (route.children) route.children.forEach(childRoute => addRouteRecord(childRoute, pathMap, record))
}