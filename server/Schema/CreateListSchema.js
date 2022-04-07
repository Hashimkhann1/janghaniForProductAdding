import mongoose from "mongoose";

const CreateListSchema = mongoose.Schema({
    ListName : {
        type : String,
        require : true
    },
    ListImage : {
        type : String,
        require : true
    }
})

const ListModel = mongoose.model('ProductList' , CreateListSchema)


export default ListModel