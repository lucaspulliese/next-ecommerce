import Link from 'next/link';

const ProductItem = ({ discount, productImage, id, name, price, currentPrice }) => (
  <Link href={`/product/${id}`}>
    <a href="#" className="product-item">
      <div className="product__image">
        <button type="button" className="btn-heart"><i className="icon-heart"></i></button>
        <img src={productImage} alt="product" />
        {discount && 
          <span className="product__discount">{discount}%</span>
        }
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>${ currentPrice }</h4>

          {discount &&  
            <span>${ price }</span>
          }
        </div>
      </div>
    </a>
  </Link>
);


export default ProductItem