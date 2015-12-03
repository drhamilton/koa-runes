/**
 * Module dependencies.
 */

var render = require('./lib/render');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var app = koa();

var config = {};
config.NODE_ENV = process.env.NODE_ENV || 'development';
config.PORT = Number.parseInt(process.env.PORT, 10) || 3000;

// "database"

var posts = [];

// middleware

app.use(logger());

// route middleware
app.use(route.get('/', init));

function *init() {
  this.body = yield render('app');
}

// listen

app.listen(config.PORT);
console.log('listening on port config.PORT');
