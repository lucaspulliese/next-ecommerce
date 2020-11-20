const CheckoutStatus = () => {
  return (
    <div className="checkout-status">
      <ul className="checkout-steps">
        <li className="active"><i className="icon-cart"></i></li>
        <li className="done"><i className="icon-delivery"></i></li>
      </ul>
    </div>
  )
};


export default CheckoutStatus