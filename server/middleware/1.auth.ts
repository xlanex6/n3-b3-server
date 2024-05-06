export default defineEventHandler((event) => { 

  // verifer si le token est present dans le header de la requete

  const token = getHeader(event, 'Authorization')

  const { url } = event.node.req
  
  if (url?.includes('/api')){
    if (token !== 'secret') {
      setResponseStatus(event, 401)
      return { error: 'No auth' }
    }
  }

});
