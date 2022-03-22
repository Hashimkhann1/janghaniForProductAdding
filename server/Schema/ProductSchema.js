import mongoose from 'mongoose';

const proSchema = mongoose.Schema({
    productName : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    productdescripition : {
        type : String,
        require : true
    },
    productcaterory : {
        type : String,
        require : true
    },
    ProductImage : {
        type : String,
        require : true
    },
})

const proModel = mongoose.model('product1testing' , proSchema)

export default proModel