export default function Wrapper({children, id}){
    return(
        <div id={id} className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">{children}</div>
    )
}