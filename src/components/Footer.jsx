import React from 'react'
import './Footer.css'
import Aos from 'aos'

function Footer() {
  return (
    <div data-aos="fade-up" className='footer'>
        <img style={{marginTop:'50px',marginLeft:'50px'}} width={'80px'} src="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/09/uber_logo.png" alt="" />
        <h5 style={{marginLeft:'50px',color:'white',marginTop:'30px'}}>Visit Help Center</h5>
        <div className='row foot'>
            <div className="col-md-2 ">
                <h5>Company</h5>
                <p className='footerabout'>About us</p>
                <p className='footerabout'>Our offerings</p>
                <p className='footerabout'>Newsroom</p>
                <p className='footerabout'>Investors</p>
                <p className='footerabout'>Blog</p>
                <p className='footerabout'>Careers</p>
                <p className='footerabout'>AI</p>
                <p className='footerabout'>Gift cards</p>
            </div>
            <div className="col-md-2 avbout">
                <h5>Products</h5>
                <p  className='footerabout'>Ride</p>
                <p className='footerabout'>Drive</p>
                <p className='footerabout'>Deliver</p>
                <p className='footerabout'>Eat</p>
                <p className='footerabout'>Uber for Buisness</p>
                <p className='footerabout'>Uber Freight</p>
            </div>
            <div className="col-md-2 avbout">
                <h5>Global cititenship</h5>
                <p className='footerabout'>Safety</p>
                <p className='footerabout'>Diversity and Inclusion</p>
                <p className='footerabout'>Sustainability</p>
            </div>
            <div className="col-md-2 avbout">
                <h5>Travel</h5>
                <p className='footerabout'>Reserve</p>
                <p className='footerabout'>Airports</p>
                <p className='footerabout'>Cities</p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
        </div>
        <div className='d-flex fullicon'>
        <i class="fa-brands fa-facebook icons1"></i>
        <i class="fa-brands fa-twitter icons"></i>
        <i class="fa-brands fa-youtube icons"></i>
        <i class="fa-brands fa-linkedin icons"></i>
        <i class="fa-brands fa-instagram icons"></i>


        </div>

        <div className='android'>
            <img width={'150px'} src="./Images/appstoreAndroid.png" alt="" />
            <img width={'150px'} src="./Images/appstoreiOS.png" alt="" />
        </div>

        <div className='d-flex last12'>
            <p>© 2023 Uber Technologies Inc.</p>
            <div className='d-flex webcont'>
                <p className='privacyy'>Privacy</p>
                <p className='privacyy'>Accessiblity</p>
                <p className='privacyy'>Terms</p>
            </div>
        </div>
    </div>
  )
}

export default Footer