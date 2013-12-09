var a = new WebSocket("ws://localhost:3000");
var b = new WebSocket("ws://localhost:3000");

a.onmessage = function (message) { console.log("a: " + message.data); };
b.onmessage = function (message) { console.log("b: " + message.data); };

a.send("hello world");

