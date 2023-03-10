const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const https = require('https');
const path = require('path');
const fs = require('fs');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.set('strictQuery', false);
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'Production') {
  // Express will serve up production assers
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));


  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

if (process.env.NODE_ENV === 'Production') {
  const server = https.Server({
    key: fs.readFileSync(path.join(__dirname, './config/cert', keys.certKeyName)),
    cert: fs.readFileSync(path.join(__dirname, './config/cert', keys.certName))
    },app
  );
  server.listen(keys.PORT);
} else {
  app.listen(keys.PORT);
}