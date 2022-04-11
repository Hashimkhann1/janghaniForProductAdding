import React, { useEffect, useState } from 'react'
import ImageLogo from '../images/image.png'
import FileBase from 'react-file-base64'

// style

import '../style/ProductData.css'
import { addProductData } from '../Services/ServicesApi'

const ProductData = () => {


  // let productName = document.getElementById('#productName')

  const ProductDataValue = {
    productName : '',
    price : '',
    productdescripition : '',
    productcategory: '',
    ProductImage : '',
    date : new Date()
  }

  const [ProductInputData , setProductInputData] = useState(ProductDataValue)
  const [Image , setImage] = useState('')
  const [File , setFile] = useState('')
  


  const gitImage = () => {
    if(Image !== ''){
      let imageUrl = {ProductImage:Image[0].base64}
      ProductInputData.ProductImage = imageUrl.ProductImage
    }
  }

  const getProductData = (e) => {
    setProductInputData({...ProductInputData , [e.target.name]:e.target.value})
    console.log(ProductInputData)
  }


  const addProduct = () => {
    if (!ProductInputData.productName) {
      alert('Add Product Name')
    }
    else if(!ProductInputData.price){
      alert('Add Product price')
    }
    else if(!ProductInputData.productdescripition){
      alert('Add Product Information')
    }
    else if(!ProductInputData.productcategory){
      alert('Add Product category')
    }
    else {
      gitImage()
      addProductData(ProductInputData)
      setTimeout(() => {
      window.location.reload()
    }, 2000)
    }
  }

  const CheckForImage = () => {
    if(Image !== ''){
        setFile(Image[0].base64)
    }
  }

  useEffect(() => {
    CheckForImage()
  }, [Image])

  return (
    <div className='container-lg'>
        <div className='row align-items-center justify-content-center'>
          <div className='product-data-image mt-4 col-md-8 col-lg-6'>
             <img src={File || ImageLogo} alt='ProductImage' className='img-fluid w-100 border' />
          </div>
        
        <div className='Product-data-input'>
        <div className='col-12 col-md-8 col-lg-6 mt-2'>
            <FileBase type='file' name='ProductImage' multiple='false' onDone={(base) => setImage(base)}/>
        </div>
        <div className='col-12 col-md-8 col-lg-6 mt-2'>
            <input type='text' placeholder='Product Name' id='productName' name='productName' onChange={(e) => getProductData(e)} className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 col-md-4 col-lg-4 mt-2'>
            <input type='text' placeholder='Price' name='price' id='price' onChange={(e) => getProductData(e)} className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 mt-2'>
            <textarea className='form-control border-danger fs-5' id='productDesc' name='productdescripition' onChange={(e) => getProductData(e)} placeholder='Product Information'></textarea>
        </div>
        <div className='col-6 mt-2'>
          <input type='text' placeholder='Catregory Name' name='productcategory' id='productcate' onChange={(e) => getProductData(e)} className='form-control border-danger fs-5' />
        </div>
        <div className='text-center mt-3 mb-2 Product-data-btn'>
          <button className='p-2 ps-5 pe-5 bg-danger text-white fw-bold fs-4 rounded-pill border boredr-danger' onClick={addProduct}>Add</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProductData