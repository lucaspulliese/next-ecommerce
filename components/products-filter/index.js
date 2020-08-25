import Checkbox from './form-builder/checkbox';

const ProductsFilter = () => (
  <form className="products-filter">
    <div className="products-filter__block">
      <button type="button">Product type <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
    </div>

    <div className="products-filter__block">
      <button type="button">Price <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <Checkbox />
      </div>
    </div>
    
    <div className="products-filter__block">
      <button type="button">Size <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <Checkbox />
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
  