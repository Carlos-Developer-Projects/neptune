//dependencies
import { useEffect, useState } from "react";
//component
export default function Section({name, intro, children, cta, handleClick, currentState}){
    //state
    const[previewImages, setPreviewImages] = useState([]);

    //functions
    const updatePreviews = (state)=>{
        const updateImages = [];
        Object.values(state).forEach(element => {
            if(element.type && element.type.includes("image")){
                updateImages.push(element);
            }
        });
        setPreviewImages(updateImages);
    };
    
    const renderPreviews = (images)=>{
        const render = images.map((image, index)=>{
            return(
                <div className="image-preview text-center mx-auto mb-8">
                    <img key={index} className="max-w-full text-center mx-auto" src={URL.createObjectURL(image)} alt={image.name} />
                    <span className="text-black">{image.name.toLowerCase().replace(/\s/g, '')}</span>
                </div>
            )
        });
        return render;
    };

    //lifecycle
    useEffect(()=>{
        updatePreviews(currentState);
    },[currentState]);
    //render
    return(
        <section>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        {intro && (<p className="mt-1 text-sm text-gray-600">{intro}</p>)}
                    </div>
                    {/* Preview Region */}
                    {previewImages.length > 0 && (
                        <div className="mt-4 mb-4 mx-auto">{renderPreviews(previewImages)}</div>
                    )}
                    
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">{children}</div>
                    </div>
                    <div className="mt-3 px-4 sm:px-0 py-3 bg-gray-50 text-right">
                        <button
                            type="submit"
                            onClick={handleClick}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >{cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
    )
}