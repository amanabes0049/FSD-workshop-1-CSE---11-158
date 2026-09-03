import {EventEmitter} from "node:events";
const myEmitter = new EventEmitter();
// myEmitter.on("greet", (teacher) => {
//     console.log(`class started by ${teacher}`);
// });
// myEmitter.on("exit", (teacher) => {
//     console.log(`class ended by ${teacher}`);
// });
// myEmitter.emit("greet", "Mr. Smith");
// myEmitter.emit("exit", "Mr. Smith");
myEmitter.on("start",(game)=>{
   console.log(`game on ${game}`); 
});
myEmitter.on("over", (game)=>{
    console.log(`game over ${game}`);
});
myEmitter.emit("start","BGMI");
myEmitter.emit("over","BGMI");