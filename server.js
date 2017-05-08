var express = require('express');
var app = express();

//  preparando o ambiente
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

// onde ficam as páginas default (ex. HTML, JS, CSS)
app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

// RESTful ------------------------------
// Documentação sobre o conceito RESTful: 
// http://www.restapitutorial.com/lessons/httpmethods.html
var registros = [
    { nome: 'Rafael' },
    { nome: 'Maria' },
    { nome: 'Pedro' },
    { nome: 'Paulo' },
    { nome: 'Ana' }
];


// cadastrar
app.post('/pessoas', function (req, res) {
    registros.push(req.body);
    res.status(201).send('Registro criado com sucesso!');
})


// consultar todos
app.get('/pessoas', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(registros));
})


// consultar pelo ID
app.get('/pessoas/:id', function (req, res) {
    if(req.params.id > registros.length-1) {
        res.status(404).send('Registro não encontrado!');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(registros[req.params.id]));
})


// excluir pelo ID
app.delete('/pessoas/:id', function (req, res) {
    if(req.params.id > registros.length-1) {
        res.status(404).send('Registro não encontrado!');
    }
    registros.splice(req.params.id, 1);
    res.status(200).send('Registro excluído com sucesso!');
})


// alterar pelo ID
app.put('/pessoas/:id', function (req, res) {
    if(req.params.id > registros.length-1) {
        res.status(404).send('Registro não encontrado!');
    }
    registros.splice(req.params.id, 1, req.body);
    res.status(200).send('Registro alterado com sucesso!');
})
// RESTful ------------------------------


// cria uma url para testes
app.get('/teste', function (req, res) {
    res.send('Express funcionando!')
})


// sobe o serviço http na porta 3000
app.listen(3000, function () {
    console.log('Ouvindo na porta 3000!')
})
