import { useSelector } from 'react-redux';
import Item from './item';

const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
        </div>

        <div className="cart-list">
          <table>
            <tbody>
              <tr>
                <th style={{textAlign: 'left'}}>Product</th>
                <th>Color</th>
                <th>Size</th>
                <th>Ammount</th>
                <th>Price</th>
                <th></th>
              </tr>

              {cartItems.length > 0 && cartItems.map(item => (
                <Item 
                  id={item.id}
                  thumb={item.thumb}
                  name={item.name}
                  color={item.color}
                  size={item.size}
                  ammount={item.count}
                />
              ))}
            </tbody>
          </table> 
        </div>
      
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-left"></i> Continue Shopping</a>
          <input type="text" placeholder="Promo Code" className="cart__promo-code" />
          <p className="cart-actions__total">Total cost <strong>$159,98</strong></p>
          <button type="button" className="btn btn--rounded btn--yellow">Checkout</button>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart