import productsColors from './../../../data/products-colors';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';

const Content = () => {
  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>261311</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">T-Shirt Summer Vibes</h2>

        <div class="product__prices">
          <h4>$89.99</h4>
          <span>$119.99</span>
        </div>
      </div>

      <div className="product-content__filters">
        <div class="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor key={type.id} name="product-color" color={type.color} />
            ))}
          </div>
        </div>
        <div class="product-filter-item">
          <h5>Size: <strong>See size table</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select>
                <option>Choose size</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    