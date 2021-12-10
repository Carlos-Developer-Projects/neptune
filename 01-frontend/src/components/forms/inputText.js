export default function InputText({type, name, id, placeholder, value, handleChange}){
    return(
        <> 
            <style jsx>{`
                .textinput{
                    height:40px;
                }    
            `}</style>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className="textinput mt-1 shadow-md w-full border-gray-300 focus:ring-indigo-900 focus:border-indigo-900 block w-full sm:text-sm rounded-md"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </>
    )
}