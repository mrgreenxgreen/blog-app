import express from "express"
import {db} from './db.js';

var form = null;
const app = express()

app.use(express.json())

app.get('/', function(req, res){
    
    db.query("SELECT * FROM yes", (err,rows,fields)=>{
        if(err) throw err;

        console.log('The solution is:',rows[0].name)

    })
    res.send("Welcome!")


});

app.get("/test", (req,res)=>{
    res.json("it works")

})



app.listen(2000, ()=>{
    console.log("Connected!")
})