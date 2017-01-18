const net  = require("net"), 
      host = 'localhost', 
      port = 3002;

let server = net.createServer((socket)=>{
  socket.write('Welcome ! You are connected to server.');

  socket.on('data', (data)=>{
    console.log(data.toString());
  });

  socket.on('end', ()=>{
    console.log('socket end event triggered');
  });

  socket.on('close', (hadError)=>{
    console.log('socket close event triggered');
  });

  socket.on('error', (err)=>{
    console.log('socket error event triggered. Error: '+err.message);
  });
});

server.on('listening', () => {
  console.log('server listening event triggered');
});

server.on('connection', (socket) => {
  console.log('server connection event triggered');
});

server.on('error', (err) => {
  console.log('socket error event triggered. Error: '+err.message);
});

server.on('close', () => {
  console.log('server close event triggered');
});

server.listen({host, port}, ()=>{
  console.log('Server is listening at: ', server.address());
});