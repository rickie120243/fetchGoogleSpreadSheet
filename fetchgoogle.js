var fetch=require("node-fetch");
//npm i node-fetch
var key="1HXy6xj4V3hWaWFjtcUEB0wI2ay0zpqQ1HjFPfNJUhTY";//website key
var sheet="oxirc9x";//??
//cell
var data=fetch("https://spreadsheets.google.com/feeds/list/"+key+"/"+sheet+"/public/values?alt=json").then(function(res){
	return res.text();
}).then(function(body){
	console.log(body);
});