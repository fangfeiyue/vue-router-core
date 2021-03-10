export default {
  functional: true,
  name: 'router-view',
  render(h, {data, parent}) {
    let route = parent.$route
    let depth = 0
    let records = route.matched

    return h(records[depth].component)
  }
}