const { EventEmitter } = require('events');
const RpcServer = require('/src/server.js');
const RpcClient = require('/src/client.js');
const common = require('./src/common.js');


module.exports = class Rpc extends EventEmitter {
  constructor(configuration = {}) {
    super();
    Object.assign(this, configuration);
  }

  static createController(configuration = {}) {
    return new this(configuration);
  }

  server() {

  }

  client(name) {

  }
};
