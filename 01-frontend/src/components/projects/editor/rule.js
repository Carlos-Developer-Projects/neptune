//components
import Button from "../../elements/button";
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
//component
export default function Rule(props){
    //render
    return(
        <>
            <div className="game-rule w-3/12 text-center mt-3 mb-3 border-2 border-red-800 rounded-md p-4 shadow-black shadow-lg">
                <div className="rule-header flex items-center justify-between">
                    <span className="text-2xl font-semibold">{props.name}</span>
                    <span className="text-2xl ">{props.count}</span>
                </div>
                <props.icon className="text-9xl mx-auto" />
                <p className="mt-3 mb-3">{props.description}</p>
                <div className="rule-actions flex items-center justify-between mt-6">
                    <Button handleClick={props.create} text="Create" custom="bg-button" icon={AiOutlinePlus} handleClick={()=>{props.edit(props.type)}} />
                    <Button handleClick={props.manage} text="Manage" custom="bg-button" icon={AiOutlineEdit} handleClick={()=>{props.manage(props.type)}} />
                </div>
            </div>
        </>
    )
}