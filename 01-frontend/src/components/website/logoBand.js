//component
export default function LogoBand(text, logos){
    //functions
    const renderLogos = (list)=>{
        const render = list.map((item, index)=>{
            return(
                <div key={index} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src={item.logo} alt={logo.alt} />
                </div>
            )
        });
        return render;
    };
    //render
    return(
        <>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">{text}</p>
                    <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">{renderLogos(logos)}</div>
                </div>
            </div>
        </>
    )
}