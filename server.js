const express = require("express");
const app = express(); 

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/font', express.static('./node_modules/bootstrap-icons/font'));
app.use('/imagens', express.static(__dirname + '/publico/imagens'));
app.use('/css', express.static(__dirname + '/publico/css'));

const PORTA = process.env.PORT || 8081;
app.listen(PORTA, function(){
    console.log('Fica ligado na porta 8081')
});

app.get('/', function(req, res){
    res.sendFile(__dirname +'/publico/view/paginasuperlinda.html');
});

app.get('/aboutus', function(req, res){
    res.sendFile(__dirname + '/publico/view/quemsomos.html');
});

app.get('/deez', function(req, res){
    res.sendFile(__dirname + '/publico/view/testesmassas.html');
});