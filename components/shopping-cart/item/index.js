import { useDispatch } from 'react-redux';
import { removeProduct } from './../../../store/actions/cartActions';

const ShoppingCart = ({ thumb, name, id, color, size, ammount }) => {
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
          <button type="button" className="quantity-button__btn">
            -
          </button>
          <span>{ ammount }</span>
          <button type="button" className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>$89.99</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart