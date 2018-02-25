import express from 'express';
//import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes';
import utils from './tools/utils';
import config from './tools/config';
import server from './server';
const port = utils.normalizePort(config.server.port);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);
app.use(utils.forwardError);
app.use(utils.errorHandler);
app.set('port', port);

server.init(app, port);