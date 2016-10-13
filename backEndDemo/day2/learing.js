/**
 * Created by anthonyrogers on 10/12/16.
 */
'use strict';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

// myEmitter.once('greeting', function (msg) {
//     console.log('ONCE - greeting received ' + msg);
// })
// myEmitter.on('greeting', function (msg) {
//     console.log('ON - greeting received ' + msg);
// })

myEmitter.once('newListener', function (event, listener) {
    console.log('here is a newListener');
    if(event === 'greeting')
    {
        console.log('got a greeting');
    }
    if(event === 'praise')
    {
        console.log('got a praise');
    }
});

myEmitter.on('praise', function (aPraise) {
    console.log('received a praise ' + aPraise);
});
// myEmitter.on('error', function (err) {
//     console.log('Something bad happened ' + err);
// });
process.on('uncaughtException', function (err) {
    console.log('catching an exception ' + err);
});
myEmitter.emit('greeting', 'hello');
myEmitter.emit('greeting', 'Good day');
myEmitter.emit('praise', 'Good job');
myEmitter.emit('error', new Error('.... something is wrong ...'));
myEmitter.emit('error', new Error('.... something is bad ...'));


