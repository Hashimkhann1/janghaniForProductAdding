import React, { useEffect, useState } from 'react'
import testImage from './keybord.jpg'

// style

import '../style/ProductData.css'
import { addProductData , uploadFile } from '../Services/ServicesApi'

const ProductData = () => {

  const ProductDataValue = {
    productName : '',
    price : '',
    productdescripition : '',
    productcaterory : '',
    ProductImage : ''
  }

  const [ProductInputData , setProductInputData] = useState(ProductDataValue)
  const [file , setFile] = useState()

  const getProductData = (e) => {
    setProductInputData({...ProductInputData , [e.target.name]:e.target.value})
  }

  const addProduct = () => {
    addProductData(ProductInputData)
  }

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData()
        data.append('name' , file.name)
        data.append("file" , file);

        await uploadFile(data)
      }
    }
    getImage();
  }, [file])

  return (
    <div className='Product-main-data'>
        <div className='product-data-image'>
        <img src={testImage} alt='ProductImage' className='img-fluid w-100 border' />
        </div>
        <div className='Product-data-input'>
        <div className='col-12 col-md-8 col-lg-6 mt-2'>
            <label for='ProImage' className='fs-4 border p-2 border-danger rounded text-secondary' >choose Image</label>
            <input type='file' placeholder='Product Image' name='ProductImage' onChange={(e) => setFile(e.target.files[0])} className='border-danger fs-4' id='ProImage'/>
        </div>
        <div className='col-12 col-md-8 col-lg-6 mt-2'>
            <input type='text' placeholder='Product Name' name='productName' onChange={(e) => getProductData(e)} className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 col-md-4 col-lg-4 mt-2'>
            <input type='text' placeholder='Price' name='price' onChange={(e) => getProductData(e)} className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 mt-2'>
            <textarea className='form-control border-danger fs-5' name='productdescripition' onChange={(e) => getProductData(e)} placeholder='Product Information'></textarea>
        </div>
        <div className='col-6 mt-2'>
          <input type='text' placeholder='Catregory Name' name='productcaterory' onChange={(e) => getProductData(e)} className='form-control border-danger fs-5' />
        </div>
        <div className='text-center mt-3 mb-2 Product-data-btn'>
          <button className='p-2 ps-5 pe-5 bg-danger text-white fw-bold fs-4 rounded-pill border boredr-danger' onClick={addProduct}>Add</button>
        </div>
        </div>
    </div>
  )
}

export default ProductData