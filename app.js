global.config = require('./config/main');
global.db = require('./config/connection');

var routes = require('./app/routes')
, express = require('express')
, bodyParser = require('body-parser')
, path = require('path');

var app = express();

app.set('port', global.config.port || 3000);
app.set('views', path.join(global.config.root, 'app/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.raw({limit:'50mb',type:["application/octet-stream","image/*"]}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 10000}));
app.use(bodyParser.text());

app.use('/public', express.static(path.join(global.config.root, 'public')));
  
routes(app);

app.listen(3000, function () {
  console.log('dc app listening on port 3000!')
})
