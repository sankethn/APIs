var express = require("express");
const axios = require("axios");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", async function(req, res){
	var Search = req.query.search;
	console.log(Search);
	var url = 'http://www.omdbapi.com/?s='+Search+'&apikey=thewdb';
	try{
		const response = await axios.get(url);
		res.render("results", {data:response.data});
	}
	catch(err){
		console.log(err);
	}
});

app.listen(3000, function(){
	console.log("sever listening to port 3000");
});