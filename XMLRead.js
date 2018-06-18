var express= require('express');
var router=express.Router();
var app=express();
app.use(express.static(__dirname));
var path=__dirname +"/views/indexXML.pug";
console.log(1)

app.get('/', function (req, res) {
    console.log(2);
    res.render(path, { title: 'Hey', message: 'Hello there!'})
  })
  app.listen(5000,function(){
    console.log("server started on port 5000");
})

