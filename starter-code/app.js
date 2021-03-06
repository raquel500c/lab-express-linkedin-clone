const app = require('express')();
const globals = require('./config/globals');

//conexion a bd
require('mongoose').connect(globals.dbUrl).then( () => console.log("Connected to db!"));

//config express
require('./config/express')(app);

//Requerir Rutas
const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');

// default value for title local
app.locals.title = 'Express -DE-Linkedin-Clone';

//usar rutas
app.use('/', homeRouter);
app.use('/', authRouter);

//gestion errores
require('./config/error-handler')(app);

module.exports = app;
