export default defineEventHandler((event) => { 

  const {model, id} = getRouterParams(event)

  return { model, id, deleted: true }
});
