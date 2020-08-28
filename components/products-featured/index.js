import ProductItem from './../product-item'
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductsFeatured = () => {

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="#" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <div className="products-carousel">
          <Swiper spaceBetween={65} slidesPerView={4} className="swiper-wrapper">
            <SwiperSlide>
              <ProductItem discount={30} productImage={'/images/products/product-1.jpg'} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem productImage={'/images/products/product-2.jpg'} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem productImage={'/images/products/product-3.jpg'} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem productImage={'/images/products/product-4.jpg'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
};


export default ProductsFeatured