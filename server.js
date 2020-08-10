const http = require('http');
const cluster = require('cluster');
const cpu = require('os').cpus().length;
const app = require('./app');

//Clustering process
if (cluster.isMaster) {
    console.log('Master running process on pid: ' + process.pid);
    for (let i = 0; i < cpu; i++) {
        cluster.fork();
    }
} else {
    //TesD
    const port = process.env.PORT || 3000;
    const server = http.createServer(app);
    console.log('Worker running process on pid: ' + process.pid);
    server.listen(port);
}