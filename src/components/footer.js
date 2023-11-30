import React from 'react'
import '../styles/footer.css'


function Footer() {
  return (
    <div className='footer'><footer>
    <div className="footer">
    <div className="row">
    <a href="#"><i className="fa-brands fa-facebook"></i></a>
    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
    <a href="#"><i className="fa-brands fa-github"></i></a>
    <a href="#"><i className="fa-solid fa-ring"></i>    </a>
    </div>
    
    <div className="row">
    <ul>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Our Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms & Conditions</a></li>
    <li><a href="#">Career</a></li>
    </ul>
    </div>
{/*     
    <div id='copy' className="row">
   All rights reserved || Designed By: Football Fever Company
    </div> */}
    </div>
    </footer>
    </div>  )
}

export default Footer