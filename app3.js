const express= require('express');
//const path= require('path');
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/beginnerbook');
let db=mongoose.connection;

//check connection
db.once('open',function(){
        console.log("connected to mongoDB");    
})


//check for DB errors
db.on('error',function(err){
    console.log(err);
});

//Init App
const app=express();

//Bring in Models
let Articles= require('./models/article');


//Load View Engine 
var path=__dirname +"/index.pug";
//app.set('view engine','pug');

// Home Route

app.get('/',function(req,res){

    
    Articles.find({}, function(err, results){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(results);
            res.render(path,{
                title:'Articles',
                articles1:results
        
            });
        } 
    })
//    Articles.insert({title: 'Intro to Mongodb', author: 'shivam', body: 'It is NOSQL database'}, (err, result) => {
//        if(err) throw err;
//        res.send(result);
//    })
//    let article = new Articles({title: 'Intro to Mongodb', author: 'shivam', body: 'It is NOSQL database'});

//    article.save((err, result) => {
//        if (err) throw err;
//        res.send(result);
//    });
});

/*
//add routes
app.get('/articles/add',function(req,res){
  
    res.render('add_articles',{ 
        title:'Add Article'
    });

});

*/
//start server
app.listen(3000,function(){
    console.log('server started on port 3000');
});



