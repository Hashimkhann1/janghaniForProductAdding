import React from 'react'

// style sheet

import '../style/FindProductById.css'

const FindProductById = () => {
  return (
    <div className='container-lg'>
        <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-6 mt-4 fp-input'>
                <input type='text' placeholder='Enter Product id' className='form-control' />
            </div>
        </div>
        <div className='row justify-content-center mt-3'>
            <div className='col-lg-8 border'>
                <img src='' alt='ProductImage'/>
            </div>
        </div>
    </div>
  )
}

export default FindProductById