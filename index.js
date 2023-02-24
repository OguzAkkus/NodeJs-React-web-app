const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const { PORT } = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

const sslServer = https.createServer(
  {
  key: fs.readFileSync(path.join(__dirname, './config/cert', keys.certKeyName)),
  cert: fs.readFileSync(path.join(__dirname, './config/cert', keys))
  },
  app
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//const PORT = process.env.PORT || 5000;
sslServer.listen(PORT);