/**
 * Created by anthonyrogers on 10/13/16.
 */
var events = require("events");
var net = require("net");

const BROADCAST_NAME = 'onmessage';

var serverEmitter = new events.EventEmitter();

var server = net.createServer(function (socket) {
    console.log("client ${socket.remoteAddress");
    socket.write("Server is here\n");
    serverEmitter.on(BROADCAST_NAME, onMessageReceived);

    var data = "";
    socket.on("data", function (chunk){
        data += chunk.toString("utf8");
        if (data.endsWith("\n")){
            serverEmitter.emit(BROADCAST_NAME, {
                data:data,
                address: socket.remoteAddress
            });
            process.stdout.write(`${socket.remoteAddress}: ${data}`);
            data = "";
        }
    });

    socket.on("end", function (){
        serverEmitter.removeListener(BROADCAST_NAME, onMessageReceived);
        console.log("Some Loser Left Chat!!")
    });

    function  onMessageReceived(msg){
        if (socket.remoteAddress === msg.address){
            return;
        }
        socket.write(`${msg.address}: ${msg.data}`);

    }
});

server.listen(8888);

