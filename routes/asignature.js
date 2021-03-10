module.exports = (app) => { /* Parametro app. guarda las funcionalidades de express del index.js */
  // const user = require('../controllermodule.exports = (app) => { /* Parametro app. guarda las funcionalidades de express del index.js */
  const asignature = require('../controllers/asignatureController') /* Requerimos el controlador */

  app.post('/class/create', asignature.create) /* en la app vamos a usar post, creamos una ruta cualquiera que nos indique que ahi vamos a crear un usuario */
  app.put('/class/join',asignature.joining)
  app.get('/class/userClasses/:name',asignature.consult)
}