export default function FooterBackground({image}){
    return(
        <>
             <style jsx>{`
                .page-bg{
                    margin-bottom:-2rem;
                    display:block;
                    opacity: .25;
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position: 100% -20%;
                    width:100%;
                    height:400px;
                }
            `}</style>
            <div className="page-bg" style={{"backgroundImage":`url(${image})`}}></div>
        </>
    )
}