
export default defineEventHandler((event) => {

  const model = getRouterParam(event, 'model')
  
  return { list: model }
})
