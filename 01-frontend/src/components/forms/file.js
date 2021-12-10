export default function InputFile({type, name, id, placeholder, value, handleChange}){
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
                className="textinput mt-1 w-full focus:ring-indigo-900 focus:border-indigo-900 block w-full"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </>
    )
}