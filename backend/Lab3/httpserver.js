import http from "http";

const server = http.createServer((req, res) => {
   res.write("Hello, World!");
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Hello, World!");
   const url = req.url;
   const method = req.method;
  if (url === "/msg") {
  res.write("This is the message endpoint");
  //res.end("This is the message endpoint");
 }
 
   res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
