import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Airashi</span></h6>
            <p>House My Brand designs clothing for the young, the old & everyone in between – but most 
              importantly, for the fashionable</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/airashi.silk/"><i className="icon-facebook"></i></a></li>
              {/* <li><a href="#"><i className="icon-twitter"></i></a></li> */}
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/airashi_vn/"><i className="icon-instagram"></i></a></li>
              {/* <li><a href="#"><i className="icon-youtube-play"></i></a></li> */}
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">hasilkshop@yahoo.com</a></li>
              <li><a href="mailto:hasilkshop@yahoo.com">+84 945 452 878</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div> */}
    </footer>
  )
};


export default Footer