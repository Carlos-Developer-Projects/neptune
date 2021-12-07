import Breadcrumbs from '../global/breadcrumbs';
//component
export default function PageHeader({children, crumbs, title, details}){
    //functions
    const render_details = (details)=>{
        const render = details.map((detail, index)=>{
            return(
                <div key={index} className="mt-2 flex items-center text-sm text-gray-500">
                    <detail.icon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {`${detail.text}`}
                </div>
            );
        });
        return render;
    };

    //render
    return(
        <>
            <div className="bg-white shadow sm:pt-4">
                <div className="px-4 pb-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    {crumbs && (<div>
                        <div>
                            <Breadcrumbs crumbs={crumbs} />
                        </div>
                    </div>)}
                    <div className="mt-2 md:flex md:items-center md:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>
                            <div className="lg:mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">{details && (render_details(details))}</div>
                        </div>
                        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}