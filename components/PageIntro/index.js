import Swiper from 'react-id-swiper';

const PageIntro = () => (
  <section className="page-intro">  
    <Swiper className="swiper-wrapper">
      <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
        <div className="container">
          <div className="page-intro__slide__content">
            <h2>Make your house into a home</h2>
            <a href="#" className="btn-shop"></a>
          </div>
        </div>
      </div>

      <div className="page-intro__slide">
        <div className="container">
          <div className="page-intro__slide__content">
            Slide 1
          </div>
        </div>
      </div>

      <div className="page-intro__slide">
        <div className="container">
          <div className="page-intro__slide__content">
            Slide 1
          </div>
        </div>
      </div>

      <div className="page-intro__slide">
        <div className="container">
          <div className="page-intro__slide__content">
            Slide 1
          </div>
        </div>
      </div>

      <div className="page-intro__slide">
        <div className="container">
          <div className="page-intro__slide__content">
            Slide 1
          </div>
        </div>
      </div>
    </Swiper>

    <div className="shop-data">
      <div className="container">
        <ul className="shop-data__items">
          <li>
            <i className="icon-shipping"></i>
            <div className="data-item__content">
              <h4>Free Shipping</h4>
              <p>On purchases over $199</p>
            </div>
          </li>
          
          <li>
            <i className="icon-shipping"></i>
            <div className="data-item__content">
              <h4>99% Satisfied Customers</h4>
              <p>Our clients' opinions speak for themselves</p>
            </div>
          </li>
          
          <li>
            <i className="icon-cash"></i>
            <div className="data-item__content">
              <h4>Originality Guaranteed</h4>
              <p>30 days warranty for each product from our store</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default PageIntro