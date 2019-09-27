const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const redisStore = require('connect-redis')(session);
const redis = require('redis');
const passport = require("passport");
const flash = require('connect-flash');
const passportConfig = require("./config/passport");

// router
const carouselRouter = require('./routes/carousels');
const adminRouter = require('./routes/admin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('user-auth-cookie'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/media', express.static('media'));

// session - redis
const client = redis.createClient(6379, 'localhost');
app.use(session({
  secret: "user-auth-session",
  resave: false,
  saveUninitialized: true,
  expires: new Date(Date.now() + 10000),
  store: new redisStore({
    client: client,
    ttl: 60*60*60,
  }),
}));

//flash
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// router
app.use('/carousels', carouselRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
