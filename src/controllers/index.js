import { getBooks, createBook, updateBook, deleteBook } from "../db/index.js"


const getAllBooks = async (req, res)=>{
    try {
        const allBooks = await getBooks()


        return res.json(allBooks).end()
    } catch(err) {
        console.log(err)
    }
}


const createController = async (req, res)=>{

    const {title, image, description} = req.body 

    try {
        const newBook = await createBook({
            title, 
            image, 
            description
        })


        return res.json(newBook).end()

    } catch (err) {
        console.log(err)
    }

}


const updateController = async (req, res)=>{
    const {id} = req.params
    const userInfo = req.body

    try {
        const updatedBook = await updateBook(id, userInfo)


        return res.json(updatedBook).end()

    } catch(err) {
        console.log(err)
    }
}


const deleteController = async (req, res)=>{
    const {id} = req.params

    try {
        const deletedBook = await deleteBook(id)

        return res.json(deletedBook).end()
    } catch(err) {
        console.log(err)
    }
}
export {
    getAllBooks,
    createController,
    updateController,
    deleteController
}