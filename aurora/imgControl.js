console.log("io here ok");

const socket = io.connect('http://192.168.0.103:443');

socket.on('screen', function (message) {
    $( "#aurora-pics" ).append( '<img src=" ' + message.url + ' "class="snapshot">' );
});
