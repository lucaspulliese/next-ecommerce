import { useState } from 'react';
import productsColors from './../../../utils/data/products-colors';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../store/actions/cartActions';


const Content = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const addToCart = () => {
    dispatch(addProduct(
      { 
        name: product.name,
        thumb: product.images[0],
        price: product.currentPrice,
        count: count,
      }
    ))
  }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{product.id}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>{ product.currentPrice }</h4>
          {product.discount &&
            <span>{ product.price }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor key={type.id} name="product-color" color={type.color} />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Size: <strong>See size table</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select>
                <option>Choose size</option>
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" className="btn-heart"><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    