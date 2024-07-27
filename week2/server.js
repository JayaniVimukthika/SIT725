const express= require("express");
const app= express();
const addTwoNumbers=(n1,n2) => {
    return n1+n2;
}

//
app.get("/addTwoNumbers", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumbers(n1,n2);
    res.json({statuscode:200, data:result});
})

app.get("/",(req, res) => {
    const n1 = "<html><body><H1>Hello </H1></body></html>";
    res.set('content-Type', 'text/html');
    res.send(Buffer.from(n1));
})
console.log (addTwoNumbers(19,12));
const port=3040;
app.listen(port,()=> {
    console.log("Hello i'm listening to port: "+port);
})