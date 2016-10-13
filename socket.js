var socket = io();
$('form').submit(function(){
    socket.emit('mensagem de chat', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('mensagem de chat', function (msg) {
    $('#mensagens').append($('<li>').text(msg));
});