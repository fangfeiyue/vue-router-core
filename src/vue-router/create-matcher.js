import createRouteMap from './create-route-map'
export default function createMatcher(routes) {
  // 收集所有的路由路径, 收集路径的对应渲染关系
  // pathList = ['/','/about','/about/a','/about/b']
  // pathMap = {'/':'/的记录','/about':'/about记录'...}
  let { pathMap } = createRouteMap(routes) // 根据用户的配置创建一个映射表

  // 动态加载路由
  function addRoutes(routes) {
    // 将新增的路由追加到pathList和pathMap中
    createRouteMap(routes, pathMap);
  }
  
  function match(){} // 根据路径找匹配路由
  
  return {
    addRoutes,
    match
  }
}
