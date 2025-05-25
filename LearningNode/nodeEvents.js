const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('waterfull', () => {
    console.log('Water level is full!');
    setTimeout(() => {
        console.log('Water level is still full after 3 seconds!');
    }, 3000);
});

console.log('Before emitting event');
myEmitter.emit('waterfull');
console.log('After emitting event');