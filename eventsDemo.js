import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello World, ${name}`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye World, ${name}`);
}

// Register Event listners

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit Events

myEmitter.emit('greet', 'Moses')
myEmitter.emit('goodbye', 'Moses')

// Error handling

myEmitter.on('error', (err) => {
    console.log('An Error Occured', err)
})

// Simulate Error 
myEmitter.emit('error', new Error('Something went wrong'));