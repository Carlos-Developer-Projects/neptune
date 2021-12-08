export default function Tags({tags}){
    //functions
    const renderTags = (tags)=>{
        const render = tags.map((tag, index)=>{
            return(
                <span className={`status inline-flex mr-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tag.bg} text-white`}>{tag.text}</span>
            )
        });
        return render;
    };
    //render
    return(
        <div className="flex justify-start items-center m-2">
            {renderTags(tags)}
        </div>
    )
}