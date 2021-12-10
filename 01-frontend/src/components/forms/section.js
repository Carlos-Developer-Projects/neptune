export default function Section({name, intro, children, cta, handleClick}){
    return(
        <section>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{name}</h3>
                        {intro && (<p className="mt-1 text-sm text-gray-600">{intro}</p>)}
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">{children}</div>
                    </div>
                    <div className="mt-3 px-4 sm:px-0 py-3 bg-gray-50 text-right">
                        <button
                            type="submit"
                            onClick={handleClick}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >{cta}
                        </button>
                    </div>
                </div>
            </div>
            
            
        </section>
        
    )
}