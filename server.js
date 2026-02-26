// Simple WebSocket server tracking connected clients
// run with: npm install ws && node server.js

const WebSocket = require('ws');
const port = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port });
let count = 0;

function broadcast() {
  const msg = JSON.stringify({ count });
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
}

wss.on('connection', ws => {
  count++;
  broadcast();
  ws.on('close', () => {
    count--;
    broadcast();
  });
});

console.log(`User count websocket server running on port ${port}`);
