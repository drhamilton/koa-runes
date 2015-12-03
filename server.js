/**
 * Module dependencies.
 */

var render = require('./lib/render');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var app = koa();

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

app.listen(3000);
console.log('listening on port 3000');
