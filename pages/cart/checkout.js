import Layout from '../../layouts/Main';
import CheckoutStatus from '../../components/checkout-status';

const CheckoutPage = () => {

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus />
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage