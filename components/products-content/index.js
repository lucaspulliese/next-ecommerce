import { useState } from 'react';
import ProductItem from './../product-item';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Men's Tops <span>(133)</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-search"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="products-list">
        <ProductItem discount={30} productImage={'/images/products/product-1.jpg'} />
        <ProductItem productImage={'/images/products/product-2.jpg'} />
        <ProductItem productImage={'/images/products/product-3.jpg'} />
        <ProductItem productImage={'/images/products/product-4.jpg'} />
        <ProductItem discount={30} productImage={'/images/products/product-1.jpg'} />
        <ProductItem productImage={'/images/products/product-2.jpg'} />
      </div>
    </section>
  );
};
  
export default ProductsContent
  