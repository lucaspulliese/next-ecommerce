const Checkbox = ({ type, label, name }) => (
	<label for={label+'-'+name} className={`checkbox ${type ? 'checkbox--'+type : ''}`}>
		<input name={name} type="checkbox" id={label+'-'+name} />
		<span className="checkbox__check"></span>
    <p>{label}</p>
	</label>
);
  
export default Checkbox;