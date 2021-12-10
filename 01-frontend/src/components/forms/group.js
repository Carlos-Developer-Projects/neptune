export default function Group({label, prefix, children, id, message}){
    return(
        <div className="w-full">
            <div className="col-span-3 sm:col-span-2">
                {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>}
                <div className="mt-1 flex rounded-md bo">
                    {prefix && (
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">{prefix}</span>
                    )}
                    {children}
                </div>
                {message && (<p className="mt-2 text-sm text-gray-500">{message}</p>)}
            </div>
        </div>
    )
}