var express = require('express');
var app = express();
var dummyData = require('./data/dummy-data.json');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('dummyData', dummyData);

app.use(express.static('app/public'));
app.use(require('./routes/index'));

app.locals.siteTitle='Game Sales Hub';

var server = app.listen(app.get('port'), function() {
    console.log('GameSalesHubServer listening on localhost:' + app.get('port'));
})
