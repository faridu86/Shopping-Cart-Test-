global.config = require('./config/main');
global.db = require('./config/connection');

var routes = require('./app/routes')
, express = require('express')
, path = require('path');

var app = express();

app.set('port', global.config.port || 3000);
app.set('views', path.join(global.config.root, 'app/views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(3000, function () {
  console.log('dc app listening on port 3000!')
})
