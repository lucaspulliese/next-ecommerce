const ShoppingCart = () => {

  return (
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
  )
};

  
export default ShoppingCart