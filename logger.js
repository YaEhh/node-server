const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg });
  }
}
const logger = new Logger();

logger.on('message', (data) => console.log(data));
logger.log('Hello world');
