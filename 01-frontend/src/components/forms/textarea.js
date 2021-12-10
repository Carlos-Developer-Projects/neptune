export default function TextArea({name, id, placeholder, value, handleChange, rows}){
    return(
        <div className="mt-1 w-full">
            <textarea
                id={id}
                name={name}
                rows={rows}
                className="shadow-sm w-full shadow-md focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}