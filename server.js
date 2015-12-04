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
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to %s', port);
