//importing modules
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
//database connection
const { mongoose } = require('./db');

var app=express();

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

//port setting
app.listen(3000, ()=> console.log('Server Started at 3000'));

//import the route file
var employeeController = require('./controllers/employeeController');

app.use('/employees', employeeController);