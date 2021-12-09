export default function InputGroup({label, type, name, id, required, onChange, value}){
    return(
        <div className="space-y-1">
            <label htmlFor={id} className="block text-sm font-medium text-white">{label}</label>
            <div className="mt-1">
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={type}
                required={required}
                onChange={onChange}
                value={value}
                className="appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
            />
            </div>
        </div>
    )
}