import fs from "node:fs";

const filepath = "userdata.txt";

async function createFile(content) {
    try {
        await fs.promises.writeFile(filepath, content);
        console.log("File created");
    } catch (error) {
        console.log("Error creating file");
    }
}

async function readFile() {
    try {
        const data = await fs.promises.readFile(filepath, "utf8");
        console.log(data);
    } catch (error) {
        console.log("Error reading file");
    }
}
async function appendFile(content){
    try{
        await fs.appendFile(filePath , content , "utf8")
        
    }
    catch(err){
        console.log(err)
    }
}
async function deleteFile(){
    try{
        await fs.unlink(filePath)
        console.log("File deleted successfully")
        
    }
    catch(err){
        console.log(err)
    }
}

async function run(){
    await createFile("This is the userData.txt \n");
    await readFile();
    await appendFile("This is the append function \n");
    await readFile();
    await deleteFile();
}

run()
// await createfile("Hello Yash");
// await readfile();