import React from 'react'
import testImage from './keybord.jpg'

// style

import '../style/ProductData.css'

const ProductData = () => {
  return (
    <div className='Product-main-data'>
        <div className='product-data-image'>
        <img src={testImage} alt='ProductImage' className='img-fluid w-100 border' />
        </div>
        <div className='Product-data-input'>
        <div className='col-12 col-md-8 col-lg-6 mt-2'>
            <input type='text' placeholder='Product Name' className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 col-md-4 col-lg-4 mt-2'>
            <input type='text' placeholder='Price' className='form-control border-danger fs-4'/>
        </div>
        <div className='col-12 mt-2'>
            <textarea className='form-control border-danger fs-5' placeholder='Product Information'></textarea>
        </div>
        <div className='col-6 mt-2'>
          <input type='text' placeholder='Catregory Name' className='form-control border-danger fs-5' />
        </div>
        <div className='text-center border mt-3 mb-2 Product-data-btn'>
          <button className='p-2 ps-5 pe-5 bg-danger text-white fw-bold fs-4 rounded-pill border boredr-danger'>Add</button>
        </div>
        </div>
    </div>
  )
}

export default ProductData