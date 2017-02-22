
const Pushover = require('node-pushover');
const client = require('mqtt').connect('mqtt://192.168.188.26');

const push = new Pushover({
  token: 'aosy7vfwcc1empem5my4zm9v8432e9',
  user: 'uuaypd1aaw6h3xoei12j1zu28gogdu'
})

client.subscribe('/office/door/bell');
client.on('message', (topic, message) => {
  console.log("Open the Door!");
  push.send("Doorbell", "Open the Door!");
})
