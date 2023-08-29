const http=require("http");
const app=require("./app");

const server=http.createServer(app);

server.listen(6000, ()=>{
    console.log("server is running on localhost:6000");
});