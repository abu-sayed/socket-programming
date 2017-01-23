const net  = require("net"), 
      host = 'localhost', 
      port = 3001,
      delimiter = '\0';

let server = net.createServer((socket)=>{
  let buffer = new Buffer(0),
      packet = {};

  packet = {type: 'connection_success', data: 'You are successfully connected to server.'};
  socket.write(JSON.stringify(packet)+delimiter);

  packet = {type: 'welcome', data: 'Welcome to our server.'};
  socket.write(JSON.stringify(packet)+delimiter);
  
  socket.on('data', (chunk)=>{
      buffer = Buffer.concat([buffer, chunk], buffer.length+chunk.length);
      let str = buffer.toString(),
          lastIndex = str.lastIndexOf('\0'),
          packets = str.split('\0');

      if(lastIndex != str.length-1){
        buffer = new Buffer(packets[packets.length-1]);
      }
      
      packets.splice(packets.length-1, 1);

      //recieve packets
      for(let p of packets){
          p = JSON.parse(p);
          console.log(p);
      }
    });
});

server.listen({host, port}, ()=>{
  console.log('Server is listening at: ', server.address());
});