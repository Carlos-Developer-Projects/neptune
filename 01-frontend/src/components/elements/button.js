//component
export default function Button({text, handleCLick, custom, icon}){
    let styles = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500";
    //render
    return(
        <button type="button" onClick={handleCLick} className={`${styles} ${custom ? custom : ""}`}>{text} {icon ? icon : "test"}</button>
    )
}