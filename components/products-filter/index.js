import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

// data
import productsTypes from './../../data/products-types';
import productsColors from './../../data/products-colors';
import productsSizes from './../../data/products-sizes';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

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
        <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
      </div>
    </div>
    
    <div className="products-filter__block">
      <button type="button">Size</button>
      <div className="products-filter__block__content checkbox-square-wrapper">
        {productsSizes.map(type => (
          <Checkbox type="square" key={type.id} name="product-size" label={type.label} />
        ))}
      </div>
    </div>
    
    <div className="products-filter__block">
      <button type="button">Color <i className="icon-down-open"></i></button>
      <div className="products-filter__block__content">
        <div className="checkbox-color-wrapper">
          {productsColors.map(type => (
            <CheckboxColor key={type.id} name="product-color" color={type.color} />
          ))}
        </div>
      </div>
    </div>
  </form>
)
  
export default ProductsFilter
  