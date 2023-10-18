import React from 'react'
import './Nav.css'


function Nav() {
  return (
    // <div  className='bg12'>
    <nav className="bg12 navbar navbar-expand-lg">
      <div className="container-fluid">
        <img className='ms-3' width={'80px'} src="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/09/uber_logo.png" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <select className='' name="" id="dropdown">
                <option value="" selected disabled hidden>Company</option>
                <option className='dropcontent' value="">About us</option>
                <option className='dropcontent' value="">Our offerings</option>
                <option className='dropcontent' value="">How Uber works</option>
                <option className='dropcontent' value="">Global citizenship</option>
                <option className='dropcontent' value="">Newsroom</option>
                <option className='dropcontent' value="">investor relations</option>
                <option className='dropcontent' value="">Blog</option>
                <option className='dropcontent' value="">Careers</option>
              </select>
            </li>
            <li className="nav-item ">
              <a id='' className="nav-link content" href="#">Safety</a>
            </li>
            <li className="nav-item">
              <a id='' className="nav-link content" href="#">Help</a>
            </li>
          </ul>
          <ul id='nav2' className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id='' className="nav-link content1" href="#">🌐 EN</a>
            </li>
            <li className="nav-item">
              <a id='' className="nav-link content1" href="#"><i class="fa-solid fa-cart-shopping"></i> Products</a>
            </li>
            <li className="nav-item">
              <a id='' className="nav-link content1" href="#">Log in</a>
            </li>
            <li><button className='button'>Sign up</button></li>

          </ul>
        </div>
      </div>
    </nav>
    // </div>
  )
}

export default Nav