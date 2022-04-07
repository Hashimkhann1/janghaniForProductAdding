import React from 'react'

// style sheet
import '../style/Header.css'
// images
import JANGHANilogo from '../images/janghanilogo.jpg'
import { Link } from 'react-router-dom'

const Herder = () => {


    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
  <div class="container">
    <Link to={'/'}><img src={JANGHANilogo} alt='JANGHANI-logo' className='img-fluid logo' /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link to={'/'} className='nav-link fw-bold'>Home</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            List
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className='text-center'><Link to={'/product/adding'} className='text-dark text-decoration-none'>Add Product</Link></li>
          <li className='text-center'><Link to={'/'} className='text-dark text-decoration-none'>Create List</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Herder