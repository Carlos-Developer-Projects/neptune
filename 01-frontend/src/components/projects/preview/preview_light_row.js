//components
import Projects from "./index";
//component
export default function PreviewLightRow({projects_data}){
    //state
    //functions
    const renderProjects = (items)=>{
        const render = items.map((item, index)=>{
            return(
                <div key={index}>
                    <Projects.Wrapper id={item.id}>
                        <Projects.Status text={item.status} />
                        <Projects.Image imageSrc={item.image} imageAlt={item.name} />
                        <Projects.Name name={item.name} />
                        <Projects.Description description={item.description} />
                        <Projects.Tags tags={item.tags} />
                    </Projects.Wrapper>
                </div>
            )
        });
        return render;
    };
    //render
    return(
        <>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {renderProjects(projects_data)}
            </div>
        </>
    )
}