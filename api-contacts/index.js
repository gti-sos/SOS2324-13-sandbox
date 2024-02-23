//CONTACTS
var contacts = [
    {
        name: "pepe",
        phone: 12345
    },
    {
        name: "luis",
        phone: 19945
    }
];

module.exports = (app) => {
    app.get(API_BASE+"/contacts", (req,res)=>{
        //mejor pasar los objetos a JSON, para serializar
        res.send(JSON.stringify(contacts))
    });
    
    app.post(API_BASE+"/contacts",(req,res)=>{
        let contact = req.body;
        contacts.push(contact);
        res.sendStatus(201, "Created");
    });
};