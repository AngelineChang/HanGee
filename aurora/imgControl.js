console.log("io here ok");

const socket = io.connect('https://192.168.0.103:443', {
//     transports: ['websocket'],
    rejectUnauthorized: false
});

socket.on('screen', function (message) {
    $( "#aurora-pics" ).append( '<img src=" ' + message.url + ' "class="snapshot">' );
});
