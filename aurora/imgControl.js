console.log("io here ok");

const socket = require('socket.io-client')('https://192.168.0.103:443', {
    transports: ['websocket'],
    rejectUnauthorized: false
});

socket.on('screen', function (message) {
    $( "#aurora-pics" ).append( '<img src=" ' + message.url + ' "class="snapshot">' );
});
