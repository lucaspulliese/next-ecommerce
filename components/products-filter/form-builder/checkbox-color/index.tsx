type CheckboxColorType = {
	type?: string;
	name: string;
  color: string;
  valueName: string;
	onChange?: (value: string) => void;
}

const CheckboxColor = ({ color, name, type = 'checkbox', onChange, valueName }: CheckboxColorType) => {
  const onSelect = (e: any) => {
    if(onChange) {
      onChange(e.target.getAttribute('data-name'));
    }
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
  
export default CheckboxColor;