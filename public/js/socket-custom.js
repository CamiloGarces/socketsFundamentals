var socket = io()

socket.on('connect', function() {
    console.log('conectado al servidor');
})

// Escuchar informacion

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})


// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Camilo garces',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor:', resp);
})

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
})