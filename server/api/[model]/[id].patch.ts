export default defineEventHandler(async (event) => { 

  const {model, id} = getRouterParams(event)
  const body = await readBody(event)

  return { model, id, body, updated: true }
});
