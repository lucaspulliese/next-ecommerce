const Checkbox = ({ type, label, name, onChange }) => (
	<label htmlFor={label+'-'+name} className={`checkbox ${type ? 'checkbox--'+type : ''}`}>
		<input name={name} onChange={onChange} type="checkbox" id={label+'-'+name} />
		<span className="checkbox__check"></span>
    	<p>{label}</p>
	</label>
);
  
export default Checkbox;