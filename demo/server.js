const PORT = 3000;
var numClients = 0;
new (require("ws").Server)({ port: PORT }).on("connection", function (socket) {
  socket.on("message", function (msg) {
    console.log(msg);
    this.clients.forEach(function (client) { if (client !== socket) client.send(msg); });
  }.bind(this));
  socket.on("close", function () { console.log(--numClients + " clients"); });
  console.log(++numClients + " clients");
});

console.log("Listening on port " + PORT);

