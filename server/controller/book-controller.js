const Book = require("../model/books_model")

const addbooks = async(req,res)=>{
    try {
        const {Title,Author,Genre,Description} = req.body
        const bookData = await Book.create({Title,Author,Genre,Description})
        if(!bookData){
            return res.status(404).json({message:"book unable to add"})
        }
        return res.status(200).json({bookData})
    } catch (error) {
        return res.status(500).json({message:"server error : unable to add book"})
    }
}

const getbook = async(req,res)=>{
    try {
        const bookdata = await Book.find()
        if(!bookdata){
            return res.status(404).json({message:"unable to fetch any books"})
        }
        return res.status(200).json({bookdata})
    } catch (error) {
        return res.status(500).json({message:"server error : unable to fetch books"})
    }
}

const deleteBook = async(req,res) =>{
    try {
        const id = req.params.id
        await Book.deleteOne({_id:id})
        return res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"unable to delete"})
    }
}
const updateBook =async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        const updateBook = await Book.updateOne(
            {_id:id},
            {$set : data},
        )
        return res.status(201).json({message:"Update done",updateBook})
    } catch (error) {
        console.log(error)
    }
}

module.exports={addbooks,getbook,deleteBook,updateBook}