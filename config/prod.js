// prod.js - production keys here!!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SENDGRID_API_KEY,
    certKeyName: process.env.CERTIFICATE_KEY,
    certName: process.env.CERTIFICATE,
    redirectDomain: process.env.REDIRECT_DOMAIN,
    PORT: process.env.PORT

};