const { v1 } = require('node-uuid');

const [type, confirm, durable, autoDelete, exclusive] = ['headers', true, true, true, true, true];
const PREFIX = 'rpc';
const CALL_TIMEOUT = 10000;
const RECONNECT_TIMEOUT = 2000;
const exchanges = {
  commands: {
    name   : 'rpc.commands',
    options: { type, confirm, autoDelete }
  }
};
const DEFAULT_HEADER = {

};

function header(headers = {}, args = {}) {
  return Object.assign({}, DEFAULT_HEADER, args, { headers });
}

function packet(fields, ...data) {

}

const queues = {
  commands: {
    name   : title => `${PREFIX}.${title || v1()}.commands.${v1()}`,
    options: { durable, autoDelete, exclusive }
  },
  replies : {
    name   : title => `${PREFIX}.${title || v1()}.replies.${v1()}`,
    options: { durable, autoDelete, exclusive }
  }
};
const DEFAULT = { exchanges, queues, CALL_TIMEOUT, RECONNECT_TIMEOUT, header };
module.exports = { DEFAULT };

