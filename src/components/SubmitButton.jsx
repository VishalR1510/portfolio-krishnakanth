function SubmitButton(props) { 
    return (
        <button
            type="submit"
            disabled={props.disabled}
            className={`custom-target w-full py-3 px-6 rounded-lg font-semibold transition-colors
                ${
                props.disabled
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
        >
            {props.text}
        </button>
    );
}

export default SubmitButton;