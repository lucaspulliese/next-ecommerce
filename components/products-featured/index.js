import Product from '../Product';
import Swiper from 'react-id-swiper';

const ProductsFeatured = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 65,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="#" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <div className="products-carousel">
          <Swiper {...params} className="swiper-wrapper">
            <div><Product /></div>
            <div><Product /></div>
            <div><Product /></div>
            <div><Product /></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
};


export default ProductsFeatured