// server.js
const express = require('express');
const app = express();
const PORT = 3000; // Choose any port

// Body parser middleware to handle form data
app.use(express.urlencoded({extended: true}));

// Serve static files from the "public folder"
app.use(express.static('order-form-backend'));

//GET request to serve the order form
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '"C:\Users\jnev1\Documents\CIS 2336\assign4_Joseph_Neveu-19174\Frontend\HTML\order.html"');
});

//POST request to handle form submission
app.post('/submit',(req,res)=>{
    const {item1, item2, item3} = req.body;

    //Calculate total
const total = parseInt(item1) + parseInt(item2) + parseInt(item3);

//Send back total in response
res.send(`Total: $$(total)`);
})

//Server listing
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
