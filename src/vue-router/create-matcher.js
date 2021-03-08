import createRouteMap from "./create-route-map";
import { createRoute } from "./history/base";

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
  
  // 根据路径找匹配路由
  function match(path){
    console.log('match', path)
    let record = pathMap[path]
    console.log('pahtttt', pathMap)
    return createRoute(record, {
      path
    })
  }
  
  return {
    addRoutes,
    match
  }
}
