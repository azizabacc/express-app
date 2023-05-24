//import the module http
const http = require('http');

//import app
const app = require('./app');

/*define the port used by the app
app.set('port', process.env.PORT || 3000);*/
//normalizePort function returns a valid port (number or string)
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {//NaN (Not-a-Number) 
      return val; // port = process.env.PORT
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.PORT || '3000');
//define the port value in the app
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES': //access denied 
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE'://address already used
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);

/*the deployment platform proposes a default port ||  the port 3000
server.listen(process.env.PORT || 3000);*/