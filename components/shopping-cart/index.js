const ShoppingCart = () => (
  <section className="cart">
    <div className="container">
      <div className="cart__intro">
        <h3 className="cart__title">Shopping Cart</h3>
      </div>

      <div className="cart-list">
        <table>
          <tr>
            <th style={{textAlign: 'left'}}>Product</th>
            <th>Color</th>
            <th>Size</th>
            <th>Ammount</th>
            <th>Price</th>
            <th></th>
          </tr>

          <tr>
            <td>
              <div className="cart-product">
                <div className="cart-product__img">

                </div>

                <div className="cart-product__content">
                  <h3>T-Shirt Summer Vibes</h3>
                  <p>#261311</p>
                </div>
              </div>
            </td>
            <td width="15%">White</td>
            <td width="15%">XL</td>
            <td width="30%">
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
            <td>$89.99</td>
          </tr>

          <tr>
            <td>
              <div className="cart-product">
                <div className="cart-product__img">

                </div>

                <div className="cart-product__content">
                  <h3>T-Shirt Summer Vibes</h3>
                  <p>#261311</p>
                </div>
              </div>
            </td>
            <td width="15%">White</td>
            <td width="15%">XL</td>
            <td width="30%">
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
            <td>$89.99</td>
          </tr>
        
        </table> 
      </div>
    
      <div className="cart-actions">
        <button type="button" className="cart__btn-back">Continue Shopping</button>
        <input type="text" placeholder="Promo Code" className="cart__promo-code" />
      </div>
    </div>
  </section>
);

  
export default ShoppingCart