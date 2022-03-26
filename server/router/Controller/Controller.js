import proModel from "../../Schema/ProductSchema.js"






export const addProduct = async (req , res) => {
    try {
        const addProductData = await new proModel(req.body)
        addProductData.save()
        res.status(200).json('Product saved')
    } catch (error) {
        res.status(500).json('error wile adding product to database from controller in server : ' , error)
    }
}
