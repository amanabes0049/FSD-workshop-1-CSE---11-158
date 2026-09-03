//console.log("This is the starting of my code");
// process.nextTick(()=>{
//     console.log("This is process.nextTick operation");
// })
setTimeout(()=>{
  console.log("This is First Timeout operation");
},0);

setTimeout(()=>{
  console.log("This is Second Timeout operation");
},2500);
process.nextTick(()=>{
    console.log("This is process.nextTick operation");
})
console.log("This is the end of my code");
console.log("This is the starting of my code");
new Promise((resolve,reject)=>{
   let success = true;
   if(success) resolve("Data loaded successfully"); 
   else reject("Data loading failed");
})
 .then((message)=>{
   console.log(message);
 })
 .catch((message)=>{
  console.log(message);
 })

 //in cjs module process.nextTick runs before setTimeout and promise.then runs after setTimeout.
 //in js promise.then runs before setTimeout and process.nextTick runs after setTimeout.