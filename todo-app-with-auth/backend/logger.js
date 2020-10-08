const EventEmitter = require("events");
 
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send Http request

    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 2, url: "http://" });
  }
}

module.exports = Logger;
