// const express = require('express');
// const { default: mongoose } = require('mongoose');
// const app= express();
// const dotenv = require('dotenv');
// const userRouter = require('./routes/users');
// var indexRouter = require('./routes/index');
// dotenv.config();


// mongoose.connect(process.env.MONGODB).then(()=>
// console.log("db connection successfull")).catch((error)=>{
//   console.log('some error',error)
// });

// app.use(express.json());
// app.use('/', indexRouter);
// app.use("api/user" ,userRouter);



// app.listen(5000,()=>{
//   console.log('server is running');
// })







var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { default: mongoose } = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const PostRouter = require('./routes/post')

var app = express();

const dotenv = require('dotenv');
const userRouter = require('./routes/users');
var indexRouter = require('./routes/index');
dotenv.config();


mongoose.connect(process.env.MONGODB).then(()=>
console.log("db connection successfull")).catch((error)=>{
  console.log('some error',error)
});

app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/post', PostRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(5000,()=>{
  console.log('server is running');
})

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
