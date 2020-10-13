const CheckboxColor = ({ color, name, type, onChange, valueName }) => {
  const onSelect = (e) => {
    onChange(e.target.getAttribute('data-name'));
  }

  return (
    <label htmlFor={color+'-'+name} className={`checkbox-color`}>
      <input onChange={onSelect} value={color} data-name={valueName} name={name} type={type} id={color+'-'+name} />
      <span className="checkbox__check">
        <span className="checkbox__color" style={{backgroundColor: color}}></span>
      </span>
    </label>
  )
};

CheckboxColor.defaultProps = {
  type: 'checkbox',
};
  
export default CheckboxColor;