import { useState } from 'react';
import useSwr from 'swr';
import ProductItem from './../product-item';

const fetcher = (url) => fetch(url).then((res) => res.json())

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Men's Tops <span>(133)</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
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
        {data.map(item => (
          <ProductItem 
            discount={item.discount} 
            id={item.id} 
            productImage={item.images[0]} 
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};
  
export default ProductsContent
  