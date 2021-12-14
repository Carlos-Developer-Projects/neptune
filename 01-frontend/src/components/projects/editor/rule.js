//components
import Button from "../../elements/button";
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
//component
export default function RuleCard(props){
    //render
    return(
        <>
            <style jsx>{`
                .game-rule{
                    max-width:330px;
                }
                .game-rule-bg{
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10;
                }
                .game-rule:hover{
                    border: 2px solid green;
                }
                .game-rule-body{
                    z-index: 20;
                }
            `}</style>
            <div className="game-rule bg-black relative w-4/12 text-white text-center mt-3 mb-3 border-2 border-red-800 rounded-md p-4 shadow-black shadow-lg">
                <div className="game-rule-bg" style={{"backgroundImage":`url(${props.design.image})`, "opacity":`${props.design.opacity}`}}></div>
                <div className="game-rule-body relative">
                    <div className="rule-header flex items-center justify-between">
                        <span className="text-2xl font-semibold">{props.name}</span>
                        <span className="text-2xl ">{props.count}</span>
                    </div>
                    <props.icon className="text-9xl mx-auto" />
                    <p className="mt-3 mb-3">{props.description}</p>
                    <div className="rule-actions flex items-center justify-end mt-6">
                        <Button handleClick={props.create} text="Create" custom="bg-button" icon={AiOutlinePlus} handleClick={()=>{props.edit(props.type)}} />
                        {props.count > 0 && (
                            <Button handleClick={props.manage} text="Manage" custom="bg-button ml-4" icon={AiOutlineEdit} handleClick={()=>{props.manage(props.type)}} />
                        )}
                    </div>
                </div>
                
            </div>
        </>
    )
}