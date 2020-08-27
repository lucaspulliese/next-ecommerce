import Checkbox from './form-builder/checkbox';
import { Range } from 'rc-slider';
import productsTypes from './../../data/products-types';

const ProductsFilter = () => (
  <form className="products-filter">
    <div className="products-filter__block">
      <button type="button">Product type <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        {productsTypes.map(type => (
          <Checkbox key={type.id} name="product-type" label={type.name} />
        ))}
      </div>
    </div>

    <div className="products-filter__block">
      <button type="button">Price <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <Range />
      </div>
    </div>
    
    <div className="products-filter__block">
      <button type="button">Size</button>
      <div className="products-filter__block__content checkbox-square-wrapper">
        <Checkbox type="square" label="SM" />
      </div>
    </div>
    
    <div className="products-filter__block">
      <button type="button">Color <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <Checkbox />
      </div>
    </div>
  </form>
)
  
export default ProductsFilter
  