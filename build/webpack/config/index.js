const nodePackage = require('../../../package.json');

const version = nodePackage.version;
const env = process.env.NODE_ENV;
module.exports = {
  version,
  env,
}