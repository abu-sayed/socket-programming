const net  = require("net"), 
      host = 'localhost', 
      port = 3002;

const socket = net.connect({host, port}, ()=>{
  console.log('Connect listener invoked. Successfully connected');
});

socket.on('connect', ()=>{
    console.log('socket connect event triggered');
});
  
socket.on('data', (data)=>{
  console.log(data.toString());
  socket.write('Thanks for connecting me.');
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

socket.on('drain', ()=>{
  console.log('socket drain event triggered');
});

socket.on('lookup', (err, address, family, host)=>{
  console.log('socket lookup event triggered');
});

socket.on('timeout', ()=>{
  console.log('socket timeout event triggered');
});