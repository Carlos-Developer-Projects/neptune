//component
export default function Button(props){
    let styles = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500";
    //render
    return(
        <button type="button" 
            onClick={()=>{ props.handleClick() }} 
            className={`${styles} ${props.custom ? props.custom : ""}`}>{props.text} {props.icon ? <props.icon className="ml-1 text-lg" /> : ""}
        </button>
    )
}