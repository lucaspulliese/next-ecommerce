import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from './../../store/actions/userActions';

const ProductItem = ({ discount, productImage, id, name, price, currentPrice }) => {
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);
  const { favProducts } = useSelector(state => state.user);

  /*
  useEffect(() => {
    if(favProducts.includes(id)) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [favProducts]);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: id,
      }
    ))
  }
  */

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`}>
          <a href="#">
            <img src={productImage} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
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
    </div>
  )
};


export default ProductItem