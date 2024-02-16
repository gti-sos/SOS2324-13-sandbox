let cool = require("cool-ascii-faces");
let express = require("express");

let app = express();
const PORT = (process.env.PORT || 10000);

app.get("/", (req,res)=>{
    res.send("<html><body><h1>Hola Mundo!</h1></body></html>");
});

app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1></body></html>`);
});

app.listen(PORT);

console.log(`Server listening on port ${PORT}.`);




/*
for(let i=0; i<numbers.length; i++) {
    log(i + ": " + numbers[i]);
}
*/


/*
let numbers = [3,4,5,6,7,8,9]

function log(msg){
    console.log(msg);
}

//numbers.forEach(log());

numbers
    .filter((n)=>{
        return n>6;
    }).map((n)=>{
        return n+2;
    }).forEach((n) => log(n));
*/
/*
let contact = new Object();

contact.name = "pepe";
contact.phone = 123456;

let agenda = 
    [{ name: 'luis', phone: 13456},
     { name: 'pepe', phone: 23456},
     { name: 'maria', phone: 33456},
     { name: 'paco', phone: 43456}];

console.log(search(agenda,"lu"));

function search(list, searchString){
    return list.filter( (n) => n.name.match(searchString));
}

function searchAndPrint(list, searchString){
    list
        .filter( (n) => n.name.match(searchString))
        .forEach( (n) => console.log(n));
}
*/