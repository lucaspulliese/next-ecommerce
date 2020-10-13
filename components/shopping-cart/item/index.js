import { useDispatch } from 'react-redux';

const ShoppingCart = ({ thumb, name, id, color, size }) => {
  const dispatch = useDispatch();

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
          <span>1</span>
          <button type="button" className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>$89.99</td>
      <td className="cart-item-cancel"><i className="icon-cancel"></i></td>
    </tr>
  )
};

  
export default ShoppingCart