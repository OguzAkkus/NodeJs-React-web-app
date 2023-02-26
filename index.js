const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { getSecrets } = require('./config/keys');
const app = express();
require('./models/User');
require('./services/passport');

(async () => {
  const secrets = await getSecrets();
  mongoose.connect(secrets.mongoURI);
  mongoose.set('strictQuery', false);
  
  const sslServer = https.createServer(
    {
    key: fs.readFileSync(path.join(__dirname, './config/cert', secrets.certKeyName)),
    cert: fs.readFileSync(path.join(__dirname, './config/cert', secrets.certName))
    },
    app
  );

  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [secrets.cookieKey]
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

  require('./routes/authRoutes')(app);

  sslServer.listen(secrets.PORT);

})();
