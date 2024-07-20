const express = require ("express")
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const dotenv = require ("dotenv");

const app = express ();
dotenv.config();

const port = process.env.Port || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ss1csj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser : true,
    useUnifiedTopoloy : true,
});

const registrationSchema = new 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/register", (req, res) => {
    try {
        const {name, email, password} = req.body;
    } catch (error) {
        
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})