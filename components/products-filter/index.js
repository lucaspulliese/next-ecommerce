import { useState } from 'react';
import { useRouter } from 'next/router';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { useForm } from "react-hook-form";

// data
import productsTypes from './../../utils/data/products-types';
import productsColors from './../../utils/data/products-colors';
import productsSizes from './../../utils/data/products-sizes';

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

const ProductsFilter = () => {
  const router = useRouter();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { handleSubmit, register, getValues } = useForm();

  const addQueryParams = () => {
    console.log(getValues());
    router.push({
      pathname: '/products',
      query: { 'type': 't-shirt' },
    })
  }

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Product type</button>
          <div className="products-filter__block__content">
            {productsTypes.map(type => (
              <Checkbox 
                key={type.id} 
                ref={register} 
                name="product-type" 
                label={type.name} 
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                ref={register}
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  