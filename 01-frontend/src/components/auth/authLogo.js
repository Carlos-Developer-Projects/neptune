//components
import AuthImg from "./img";
//component
export default function AuthLogo({title}){
    //render
    return(
        <div>
            <AuthImg />
            <h2 className="mt-12 text-3xl font-extrabold text-white">{title}</h2>
        </div>
    )
}