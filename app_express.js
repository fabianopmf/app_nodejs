
/*
MODELO DE TRATAMENTO HTTP UTILIZANDO API EXPRESS

*/

const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;



app.get('/', (req, res) => {
    
    // res.sendFile(__dirname + '/web/favicon.ico');
    res.send ('executando express.js');
});

app.get('/api', (req, res) => {
    
    res.json({firstname: 'fabiano'});
    
});

app.get('/person/:id', (req, res) => {
    
    res.send('person' + req.params.id);
    
});

app.listen(port);



/* >> UTILIZAÇÃO DE MIDLEWARE DENTRO DE EXPRESS (HÁ VARIOS MODELOS DESSE TIPO)
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});
*/


/* >> UTILIZAÇÃO DE TEMPLATE ENGINES
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index');
});
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});
*/



/* >> UTILIZAÇÃO DE BODY PARSERS DE POST OU GET

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

*/