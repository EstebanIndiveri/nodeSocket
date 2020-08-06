var socket=io();
socket.on('connect',function(){
    console.log('conectado al server');
});
//escuchar procesos
socket.on('disconnect',function(){
    console.log('no connected');
});
//emit envia info
socket.emit('enviarMensaje',{
    usuario:'Esteban',
    mensaje:'hola sockets'
},(res)=>{
    console.log(res);
});
//listener
socket.on('enviarMensaje',(mensaje)=>{
    console.log(mensaje);
})