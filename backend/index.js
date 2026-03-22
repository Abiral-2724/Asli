import express from 'express' ;
import dotenv from 'dotenv' ; 
const app = express() ; 

dotenv.config({}) ; 

const PORT = process.env.PORT || 6000 ; 

app.use(express.json()) ; 
app.use(express.urlencoded({extended : true})) ; 

app.get('/health' ,(req ,res) => {
    res.staus(200).json({
        status : 'OK' , 
        message : "Backend is running" ,
        timestamp : new Date().toISOString() 
    })
})

app.listen(PORT ,()=>{
    console.log(`server running at port ${6000}`) ; 
})