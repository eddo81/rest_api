import http from 'http';

function onError(error, port) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        break;
        default:
            throw error;
    }
}

exports.init = function(app, port) {
        const server = http.createServer(app);
        server.listen(port);
        server.on('error', error => onError(error, port));
        console.log(`Listening on ${(typeof server.address() === 'string') ? 'pipe ' + server.address() : 'port ' + server.address().port}`);
};