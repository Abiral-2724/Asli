import express from 'express' ;
import dotenv from 'dotenv' ; 
const app = express() ; 

dotenv.config({}) ; 

const PORT = process.env.PORT || 6000 ; 

app.use(express.json()) ; 

app.listen(PORT ,()=>{
    console.log(`server running at port ${6000}`) ; 
})