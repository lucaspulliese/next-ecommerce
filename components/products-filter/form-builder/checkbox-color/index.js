const CheckboxColor = ({ color, name }) => (
	<label htmlFor={color+'-'+name} className={`checkbox-color`}>
		<input name={name} type="checkbox" id={color+'-'+name} />
		<span className="checkbox__check">
      <span className="checkbox__color" style={{backgroundColor: color}}></span>
    </span>
	</label>
);
  
export default CheckboxColor;