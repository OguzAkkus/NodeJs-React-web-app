const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { getSecrets } = require('../config/keys');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});



(async () => {
  const secrets = await getSecrets();
  passport.use(
    new GoogleStrategy(
      {
        
        clientID: secrets.googleClientID,
        clientSecret: secrets.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID, make a new record
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
  );
})();