const net  = require("net"), 
      host = 'localhost', 
      port = 3001;

let server = net.createServer((socket)=>{
  socket.write('Welcome ! You are connected to server.');
  
  socket.on('data', (data)=>{
    console.log(data.toString());
  });
});

server.listen({host, port}, ()=>{
  console.log('Server is listening at: ', server.address());
});