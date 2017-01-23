const net  = require("net"), 
      host = 'localhost', 
      port = 3001,
      delimiter = '\0';
 let  buffer = new Buffer(0),
      packet = {};

const socket = net.connect({host, port}, ()=>{
  console.log('Connect listener invoked. Successfully connected');
});

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
      if(p.type.trim() == 'welcome'){
        packet = {type: 'thanks', data: 'Thanks for connecting me'};
        socket.write(JSON.stringify(packet)+delimiter);
      }
  }
});