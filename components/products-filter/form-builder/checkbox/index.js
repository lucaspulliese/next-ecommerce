const Checkbox = ({ type, label }) => (
	<label for="check" className={`checkbox ${type ? 'checkbox--'+type : ''}`}>
		<input type="checkbox" id="check" />
		<span className="checkbox__check"></span>
    <p>{label}</p>
	</label>
);
  
export default Checkbox;