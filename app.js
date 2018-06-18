var express= require('express');
var router=express.Router();
var app=express();

var path=__dirname +"/index.pug";
console.log(1)

app.get('/', function (req, res) {
    console.log(2);
    res.render(path, { title: 'Hey', message: 'Hello there!' })
  })
  app.listen(5002,function(){
    console.log("server started on port 5002");
})


