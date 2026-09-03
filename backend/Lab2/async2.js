import fs from "node:fs/promises";
const filepath="userdata.txt";

async function createFile(content) {
    try{
 await fs.writeFile("filepath", content, "utf-8");
    console.log("File created successfully");
 }
catch(err){
    console.log("Error in the file ");
}}
 async function readFile() {
    try{
await fs.promises.readFile("filepath", "utf-8");
    console.log(data);
 }
 catch(err){
    console.log("Error in the file ");
}}

"function calling"
createFile("hello world");