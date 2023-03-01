if (process.env.NODE_ENV === 'Production') {
  // we are in production - retuen the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
