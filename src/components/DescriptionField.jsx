function DescriptionField(props) {
    return (
        <div>
            <label htmlFor={props.id} className="block text-white font-bold mb-3 text-2xl">
                {props.label}
            </label>

            <textarea
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                className="w-full px-4 py-3 border border-white bg-transparent text-white focus:outline-none"
            />
    </div>
    );
}

export default DescriptionField;