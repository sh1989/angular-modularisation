var express = require('express');
var server = require('./server');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

// View Routing
app.get('/', server.index);
app.get('/login', server.index);
app.get('/featureone', server.index);
app.get('/featuretwo', server.index);

app.get('/templates/:name', server.templates);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});