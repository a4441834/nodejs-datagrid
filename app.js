
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , jdg=require('./routes/jdg')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.NODEJS_PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/', jdg.jdg);
app.get('/', jdg.index);
app.post('/putRequest', jdg.put);
app.get('/getRequest', jdg.get);
app.get('/listRequest', jdg.list);
app.get('/about', jdg.about);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
