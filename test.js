
const express=require('express')
const cors=require('cors')
const port =process.env.PORT ||LOCAL_PORT 
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.send('Hello Rapida!')
})

app.listen(port,()=>{
    console.log(`Server started`)
    console.log(`Running on port ${port}`)
    console.log(`CTRL+C to stop server`)
})