const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json())
const port=5000;

const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Sushmitha17',
        database:'Booking'
    }
)

app.post('/signup',(req,res)=>{
    const sql="INSERT INTO signup (`First_Name`,`Last_Name`,`Mobile_no`, `Email`, `Password` ,`Confirm_Password`) values(?)";
    const values=[
        req.body.First_Name,
        req.body.Last_Name,
        req.body.Mobile_no,
        req.body.Email,
        req.body.Password,        
        req.body.Confirm_Password,  
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    })

})

app.listen(port,()=>{
    console.log(`Running on port no ${port}`)
})


