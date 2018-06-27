http = require('http');
express = require('express');
Routes = require('./src/routes');

const port = 8082 
const app = express();
const server = http.createServer(app);

const routes = Routes(app);
routes.setup();

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})