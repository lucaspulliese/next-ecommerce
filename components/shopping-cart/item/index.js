import { useDispatch } from 'react-redux';
import { removeProduct } from './../../../store/actions/cartActions';
import { setCount } from './../../../store/actions/cartActions';

const ShoppingCart = ({ thumb, name, id, color, size, count, price }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        id: id,
        color: color,
        size: size
      }
    ))
  }

  const setProductCount = (count) => {
    if(count <= 0) {
      return false;
    }

    dispatch(setCount(
      { 
        id: id,
        color: color,
        size: size,
        count: count,
      }
    ))
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">{color}</td>
      <td className="cart-item-before" data-label="Size">{size}</td>
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart