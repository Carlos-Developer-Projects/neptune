//dependencies
import { useEffect, useState } from "react";
//component
export default function Status({text}){
    //state
    const[bg, setBg] = useState("");
    //lifecycle
    useEffect(()=>{
        switch(text){
            case "live":
                setBg("bg-green-500");
                break;
            case "draft":
                setBg("bg-blue-500");
                break;
            default:
                break;
        }
    },[]);
    //render
    return( 
        <>
            <style jsx>{`
                .status{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 99;
                    text-transform: capitalize;
                }
            `}</style>
            <span className={`status inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} text-white`}>{text}</span>
        </>
    );
}