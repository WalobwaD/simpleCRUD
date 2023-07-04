import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
})

const Book = mongoose.model('Book', bookSchema)

const getBooks = ()=>{
    return Book.find()
}

const createBook = (values)=> {

    return new Book(values).save()
    .then((book)=>{book.toObject()})

}


const updateBook = (id, values)=>{
    return Book.findByIdAndUpdate(id, values)
}

const deleteBook = (id)=>{
    return Book.findByIdAndDelete(id)
}



export {
    Book,
    getBooks,
    createBook,
    updateBook,
    deleteBook
}

