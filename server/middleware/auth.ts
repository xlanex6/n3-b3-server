export default defineEventHandler((event) => { 

  // verifer si le token est present dans le header de la requete

  const token = getHeader(event, 'Authorization')

  if (token !== 'secret') {
    setResponseStatus(event, 401)
    return { error: 'No auth' }
  }

});
