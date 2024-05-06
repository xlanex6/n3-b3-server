export default defineEventHandler(async (event) => {

  const { title, id } = await readBody(event)

  return { created:true, title, id }
 });
