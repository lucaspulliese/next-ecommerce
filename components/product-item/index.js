import Link from 'next/link';

const ProductItem = ({ discount, productImage, id, name }) => (
  <Link href={`/product/${id}`}>
    <a href="#" className="product-item">
      <div className="product__image">
        <img src={productImage} alt="product" />
        {discount && 
          <span className="product__discount">{discount}%</span>
        }
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>$89.99</h4>

          {discount &&  
            <span>$119.99</span>
          }
        </div>
      </div>
    </a>
  </Link>
);


export default ProductItem