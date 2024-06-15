require("dotenv").config()
const express = require("express")
const app = express()
const Router = require("./routers/auth-router")
const PORT = process.env.PORT || 3000
const connectDB = require("./utils/db")

app.use(express.json())
app.use("/",Router);

connectDB().then(
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    })
)