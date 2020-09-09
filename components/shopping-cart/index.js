const ShoppingCart = () => (
  <section className="cart">
    <div className="container">
      <h3 className="cart__title">Shopping Cart</h3>

      <div className="cart-list">
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table> 
      </div>
    </div>
  </section>
);

  
export default ShoppingCart