exports.forwardError = function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};

exports.errorHandler = function(err, req, res) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
};

/**
 * Normalize a port into a number, string, or false.
 */
exports.normalizePort = function (val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) { return val; }

    if (port >= 0) { return port; }

    return false;
};
