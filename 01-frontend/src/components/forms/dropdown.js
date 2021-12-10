export default function Dropdown({options, id, name, settings, handleChange}){
    //functions
    const renderOptions =()=>{
        const render = options.map((option)=>{
            return(<option key={option.key} value={option.value}>{option.name}</option>)
        });
        return render;
    };
    //render
    return(
        <select
            id={id}
            name={name}
            className="mt-1 block shadow-md w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={settings.default}
            onChange={handleChange}
        >{renderOptions(options)}</select>
    )
}