import Product from './../product';

const ProductsContent = () => (
  <section className="products-content">
    <div className="products-content__intro">
      <h2>Men's Tops <span>(133)</span></h2>
      <form className="products-content__filter">
        <div className="products__filter__select">
          <h4>Show products: </h4>
        </div>
        <div className="products__filter__select">
          <h4>Sort by: </h4>
        </div>
      </form>
    </div>

    <div className="products-list">
      <Product discount={30} productImage={'/images/products/product-1.jpg'} />
      <Product productImage={'/images/products/product-2.jpg'} />
      <Product productImage={'/images/products/product-3.jpg'} />
      <Product productImage={'/images/products/product-4.jpg'} />
      <Product discount={30} productImage={'/images/products/product-1.jpg'} />
      <Product productImage={'/images/products/product-2.jpg'} />
    </div>
  </section>
)
  
export default ProductsContent
  