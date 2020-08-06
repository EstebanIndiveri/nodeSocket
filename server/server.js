const express = require('express');
const socketIO=require('socket.io');
const path = require('path');
const http=require('http');
const app = express();
let server=http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io=socketIO(server);

io.on('connection',(client)=>{
    console.log('user connected');

    client.emit('enviarMensaje',{
        usuario:'admin',
        mensaje:'bienvenido a est app'
    })

    client.on('disconnect',()=>{
        console.log('usuario desconectado');
    });
    //listener client
    client.on('enviarMensaje',(message,callback)=>{
        // console.log(message);
        if(message.usuario){
            callback({
                res:'todo ok'
            });
        }else{
            callback({
                res:'todo mal'
            })
        }

    });
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});