import { useRef, useEffect } from "react"
//component
export default function AuthDisplay(){
    const vidRef = useRef(null);
    //functions
    useEffect(()=>{
        vidRef.current.play();
    },[]);
    //render
    return(
        <>
            <style jsx>{`
                video{
                    object-fit: fill;
                }
                #myVideo {
                    position: absolute;
                    top:0;
                    right:0;
                    left:0;
                    bottom: 0;
                    min-width: 100%; 
                    min-height: 100%;
                    width:100%;
                    max-width:unset;
                    max-height:unset;
                }
                .overlay-bg{
                    position: absolute;
                    z-index:9999;
                    opacity:.7;
                    top:0;
                    right:0;
                    bottom: 0;
                    left:0;
                }
            `}</style>
            <div className="hidden h-screen relative lg:block relative flex-1 bg-gray-50">
               
                <video ref={vidRef} autoplay muted loop id="myVideo">
                    <source src="/vid/bg-compressed.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="overlay-bg bg-gradient"></div>
            </div>
        </>
    )
}