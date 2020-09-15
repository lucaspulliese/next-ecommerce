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
                  <img src="/images/products/product-1.jpg" alt="" />
                </div>

                <div className="cart-product__content">
                  <h3>T-Shirt Summer Vibes</h3>
                  <p>#261311</p>
                </div>
              </div>
            </td>
            <td className="cart-item-before" data-label="Color">White</td>
            <td className="cart-item-before" data-label="Size">XL</td>
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

          <tr>
            <td>
              <div className="cart-product">
                <div className="cart-product__img">
                  <img src="/images/products/product-1.jpg" alt="" />
                </div>

                <div className="cart-product__content">
                  <h3>T-Shirt Summer Vibes</h3>
                  <p>#261311</p>
                </div>
              </div>
            </td>
            <td className="cart-item-before" data-label="Color">White</td>
            <td className="cart-item-before" data-label="Size">XL</td>
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
          
        </table> 
      </div>
    
      <div className="cart-actions">
        <button type="button" className="cart__btn-back"><i className="icon-left"></i> Continue Shopping</button>
        <input type="text" placeholder="Promo Code" className="cart__promo-code" />
        <p className="cart-actions__total">Total cost <strong>$159,98</strong></p>
        <button type="button" className="btn btn--rounded btn--yellow">Checkout</button>
      </div>
    </div>
  </section>
);

  
export default ShoppingCart