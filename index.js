let express = require('express');
let request = require('request');
let cheerio = require('cheerio');

let app = express();


app.get('/', function(req, res){
  //get DOM from a URL utilizsing request
  request('https://www.huffingtonpost.com/', function(error, response, data){
    //manipulate DOM here
    let $ = cheerio.load(data);
    let stuff = $('.card_link').get();
    console.dir(stuff);
    // res.send(JSON.parse(stuff).text());
    res.send(stuff);
  });
});

app.listen(3000);
