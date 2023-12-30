const express = require('express');  //function returning
const app = express();  // object return 

// without path for all incoming request
// app.use((req , res)=>{
//     // console.log(req);
//     // console.log(res);
//     console.log("Ab tu gya beta");
//     res.send("<h1> Ab bOl</h1> ");
// })

// with path
app.use('/monu' , (req , res)=>{
    // console.log(req);
    // console.log(res);
    console.log("acha");
    res.send('<h1>Aao saalo</h1>');
})

app.listen(8080 , ()=>{
    console.log("Server connected at 8080");
})