require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const error_middleware = require("./middlewares/error_middleware")
const Router = require("./routers/auth-router")
const BookRouter=require("./routers/books-router")
const PORT = process.env.PORT || 3000
const connectDB = require("./utils/db")
const Review = require("./routers/Review_router")

const corsOptions = {
    origin:'*',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:false
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/book",BookRouter)
app.use("/",Router);
app.use("/review",Review)

app.use(error_middleware)
connectDB().then(
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    })
)