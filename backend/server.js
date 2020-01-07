var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


// Configure the local strategy for use by Passport.
//
// The local strategy require a verify function which receives the credentials
// (username and password) submitted by the user.  The function must verify
// that the password is correct and then invoke cb with a user object, which
// will be set at req.user in route handlers after authentication.
passport.use(new Strategy(
  function (username, password, cb) {
    const user = { id: 1, username, password }
    if (user.username == "admin" && user.password == "admin") {
      return cb(null, user);
    }
    else {
      return cb(null, false, { message: "Incorect account" });
    }
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  const user = { id: 1, username: "admin", password: "admin" };
  cb(null, user);
});


// Create a new Express application.
var app = express();


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
const logger = require('morgan');
//const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('connect-ensure-login');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.

app.post('/login',
  passport.authenticate('local'),
  async (req, res) => {
    res.status(200).send({ message: "Logare reusita" });
  });

app.get('/logout', connect.ensureLoggedIn('/login'), (req, res) => {
  req.logout();
  res.status(200).send({ message: "You've been logged out" });
}
)
app.use(express.static('../html',));

app.listen(3000, "127.0.0.1", function () {
  console.log("Server is listening on localhost");
});