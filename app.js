const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

const cors = require('cors');
const mongoose =require('mongoose');

//Database Connection
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
    useUnifiedTopology: true 
   })
.then (
   ()=>{console.log('Database Connected Successfully')}
   )
 .catch((err) =>{
   console.log('Unable to connect with the database',err);
 }
  )  
//Initialize cors Middleware
app.use(cors());

app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use('/messages', require('./routes/messages'));
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
