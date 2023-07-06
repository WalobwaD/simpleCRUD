import mongoose from "mongoose";

//Create properties of the items in a collection
const bookSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
})

//Model store the documents or items in one shelf
const Book = mongoose.model('Book', bookSchema)

//Find all books available inside the Book model
const getBooks = ()=>{
    return Book.find()
}

//method for creating a book item in your collection
const createBook = (values)=> {

    return new Book(values).save()
    .then((book)=>{book.toObject()})

}


//Updates an item/Book that is already existing
const updateBook = (id, values)=>{
    return Book.findByIdAndUpdate(id, values)
}

//Deletes an existing item from the db
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

