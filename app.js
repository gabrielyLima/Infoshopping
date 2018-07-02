const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./src/routes');

const port = 8082 
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const routes = Routes(app);
routes.setup();

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
})