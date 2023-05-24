//import the module http
const http = require('http');

//import app
const app = require('./app');

//define the port used by the app
app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

//the deployment platform proposes a default port ||  the port 3000
server.listen(process.env.PORT || 3000);