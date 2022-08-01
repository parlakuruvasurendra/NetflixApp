import {FaGoogle, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import MovieContext from '../../context/MovieContext'

import './index.css'

const FooterComponent = () => (
  <MovieContext.Consumer>
    {value => {
      const {username} = value
      console.log(username)

      return (
        <div className="footer-container">
          <div className="icons-container">
            <FaGoogle size={30} className="footer-icon" />
            <FaTwitter size={30} className="footer-icon" />
            <FaYoutube size={30} className="footer-icon" />
            <FaInstagram size={30} className="footer-icon" />
          </div>
          <p className="contact-heading">Contact us</p>
          <h1 className="watermark">Developed by Parla Kuruva Surendra</h1>
        </div>
      )
    }}
  </MovieContext.Consumer>
)
export default FooterComponent
