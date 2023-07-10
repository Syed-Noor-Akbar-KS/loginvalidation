
const authenticationService = require('../../services/loginauthServices')
var express = require("express");
const fs = require('fs')
var app = express();
const joi = require('joi');



const schema   = joi.object().keys({
    password : joi.string(),
    email : joi.string().email()
    
});



app.listen("3001");
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
})

let bodyData; 

app.post("/api", async (req, res) => {
    bodyData = req.body;
    // console.log("kjaasdka : ",req.body); 
    try{
        const response = authenticationService.login(bodyData);
        const validation = await schema.validateAsync(bodyData ); 
    
       
    if(validation.error)
    {
        res.send("Error Occure");
    }
    if(response){
         
        const jsonString = JSON.stringify(bodyData);
        fs.writeFileSync('./Customer.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
    else{
        const jsonParse = fs.readFileSync('./Customer.json');
        const customer = JSON.parse(jsonParse);
        console.log(customer)
    }

    res.send(response)
}catch(e){
    console.log("Error is : " + e);
}
    
})


const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}





try{

module.exports = async function(req, res) {
    console.log(bodyData) 
    const response = authenticationService.login(bodyData);
    const validation = await schema.validateAsync(bodyData ); 
   
    if(validation.error)
    {
        res.send("Error Occure");
    }

    res.send(response)
}
}catch(e){
    console.log("Error is : " + e);
}