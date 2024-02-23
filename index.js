let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser");
let contactAPI = require("./api-contacts");

let app = express();

const PORT = (process.env.PORT || 10000);

app.use(bodyParser.json());

contactAPI(app);

app.use("/", express.static("./public"));

app.listen(PORT);
console.log(`Server listening on port ${PORT}.`);

app.get("/", (req,res)=>{
    res.send("<html><body><h1>Hola Mundo!</h1></body></html>");
});

app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1></body></html>`);
});

const API_BASE = "/api/v1";