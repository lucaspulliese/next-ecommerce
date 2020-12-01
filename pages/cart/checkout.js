import Layout from '../../layouts/Main';
import CheckoutStatus from '../../components/checkout-status';

const CheckoutPage = () => {

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">Sign up</button>
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="email" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/discover.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
                  </li>
                </ul>
              </div>
              
              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <ul className="checkout-items">
                  <li className="checkout-item">
                    <div className="checkout-item__content">
                      <div className="checkout-item__img">
                        <img src="/images/products/product-1.jpg" />
                      </div>

                      <div className="checkout-item__data">
                        <h3>T-Shirt Summer Vibes</h3>
                        <span>#261311</span>
                      </div>
                    </div>
                    <h3>$69.99</h3>
                  </li>
                  
                  <li className="checkout-item">
                    <div className="checkout-item__content">
                      <div className="checkout-item__img">
                        <img src="/images/products/product-1.jpg" />
                      </div>

                      <div className="checkout-item__data">
                        <h3>T-Shirt Summer Vibes</h3>
                        <span>#261311</span>
                      </div>
                    </div>
                    <h3>$69.99</h3>
                  </li>
                </ul>

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>$69.99</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions">
            <a href="/products" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
            <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage