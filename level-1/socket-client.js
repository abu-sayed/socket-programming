const net  = require("net"), 
      host = 'localhost', 
      port = 3001;

const socket = net.connect({host, port}, ()=>{
  console.log('Connect listener invoked. Successfully connected');
});

socket.on('data', (data)=>{
  console.log(data.toString());
  socket.write('Thanks for connecting me.');
});