const express=require('express');
const app=express();
const db=require('./db');
const morgan=require('morgan')

app.use(require('body-parser').urlencoded({extended :false}));
app.use(morgan('dev'));



app.use('/',require('./src/index'));

const port =process.env.PORT || 3005;

db.syncAndSeed();

app.listen(port, () =>{
    console.log(`listening the port ${port}`);
})