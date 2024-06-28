require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const Router = require("./routers/auth-router")
const BookRouter=require("./routers/books-router")
const PORT = process.env.PORT || 3000
const connectDB = require("./utils/db")

const corsOptions = {
    origin:'http://localhost:5173',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/book",BookRouter)
app.use("/",Router);

connectDB().then(
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    })
)