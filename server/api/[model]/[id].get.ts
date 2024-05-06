
export default defineEventHandler((event) => {


  // const id = event.context.params.id

  // const id = getRouterParam(event, 'id')
  // const model = getRouterParam(event, 'model')

  const { id, model } = getRouterParams(event)

  const { limit } = getQuery(event)

  return { id , model, limit}
})
