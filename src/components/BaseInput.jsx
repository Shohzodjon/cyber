const Input = ({ type, value, onChange, errorClass, label, name, placeholder }) => {
    return (
        <div className={`base-input ${errorClass}`}>
            {label && <label htmlFor={name} className="base-input__label">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                placeholder={placeholder}
                className={`base-input__input ${errorClass}`}
              autoComplete="off"/>
        </div>
    );
};

export default Input;