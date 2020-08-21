const Product = ({ discount, productImage }) => (
  <a href="#" className="product-item">
    <div className="product__image">
      <img src={productImage} alt="product" />
      {discount && 
        <span className="product__discount">{discount}%</span>
      }
    </div>
    
    <div className="product__description">
      <h3>T-Shirt Summer Vibes</h3>
      <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
        <h4>$89.99</h4>

        {discount &&  
          <span>$119.99</span>
        }
      </div>
    </div>
  </a>
);


export default Product