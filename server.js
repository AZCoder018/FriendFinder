
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//Set port
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Server listening event call 
app.listen(PORT, function(){
	console.log("App is now listening on PORT:" + PORT);
});

