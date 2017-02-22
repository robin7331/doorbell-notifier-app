
const Pushover = require('node-pushover');
const client = require('mqtt').connect('mqtt://192.168.188.26');
const credentials = require('./credentials');

const push = new Pushover(credentials)

client.subscribe('/office/door/bell');
client.on('message', (topic, message) => {
  console.log("Open the Door!");
  push.send("Doorbell", "Open the Door!");
})
