const {io}=require('../server');

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
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);

        // if(message.usuario){
        //     callback({
        //         res:'todo ok'
        //     });
        // }else{
        //     callback({
        //         res:'todo mal'
        //     })
        // }

    });
});