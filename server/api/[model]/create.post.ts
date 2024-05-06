export default defineEventHandler(async (event) => {

  const model = getRouterParam(event, 'model')
  const body  = await readBody(event)

  return { created:true, body }
 });
