function SelectField(props) {
    return (
        <div>
            <label htmlFor={props.id} className="block text-white font-bold text-2xl mb-3">
                {props.label}
            </label>

            <select
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                className="custom-drop w-full px-5 py-3 bg-transparent border border-white text-white/50
                    focus:outline-none appearance-none"
            >
                <option value="">Select a service</option>

                {props.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>

    );
}

export default SelectField;