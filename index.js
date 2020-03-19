const publishJson = require('./lib/publishJson');

const data = { hello: 'world' };

const run = async() => {
  await publishJson(data, 'data.json');
};

run();
