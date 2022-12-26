const createError = require('http-errors'); // Import the http-errors module
const express = require('express'); // Import the express module
const path = require('path'); // Import the path module
const cookieParser = require('cookie-parser'); // Import the cookie-parser module
const logger = require('morgan'); // Import the morgan module
require('./app_server/models/db'); // Import the db module

const indexRouter = require('./app_server/routes/index'); // Import the index route
const usersRouter = require('./app_server/routes/users'); // Import the users route

const app = express(); // Create an instance of the express app

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); // Set the views directory
app.set('view engine', 'pug'); // Set the view engine to pug

app.use(logger('dev')); // Use the logger middleware in 'dev' mode
app.use(express.json()); // Use the JSON parser middleware
app.use(express.urlencoded({ extended: false })); // Use the URL encoder middleware
app.use(cookieParser()); // Use the cookie parser middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.use('/', indexRouter); // Use the index route
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
