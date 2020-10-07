var express = require("express");
var exphbs = require("express-handlebars"); 

var compression = require('compression')
 
 
// compress responses
app.use(compression())


var app = express(); 
var PORT = process.env.PORT || 8000; 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine" , "handlebars"); 

var routes = require("./controllers/burgers_controller.js"); 
app.use(routes)

app.listen(PORT , function(){
    console.log("server listening on http://localhost:" + PORT);
}); 