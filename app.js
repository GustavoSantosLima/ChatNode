// Iniciamos uma nova instância do socket.io passando o objeto http(o servidor http)
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Definimos aqui uma rota "/" que será chamada quando acessarmos a página inicial da nossa aplicação
app.get('/', function (req, res) {
    res.sendfile('index.html');
});
// Definimos aqui uma rota "/css/" que será chamada quando acessarmos CSS da nossa aplicação
app.use('/css/', function (req, res) {
    res.sendfile('style.css');
});
// Definimos aqui uma rota "/js/" que será chamada quando acessarmos JS da nossa aplicação
app.use('/js/', function (req, res) {
    res.sendfile('socket.js');
});

// Quando tivermos uma chamada para o nosso socket iremos logar no terminal uma mensagem de novo usuário
io.on('connection', function (socket) {
    socket.on('mensagem de chat', function(msg){
        io.emit('mensagem de chat', msg);
    });
});

// Definimos a porta 3000 para nos servir a aplicação
http.listen(3000, function () {
    console.log('Servidor disponivel na porta 3000');
});