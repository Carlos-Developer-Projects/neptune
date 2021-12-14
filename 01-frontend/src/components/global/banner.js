export default function Banner({src, alt}){
    return(
        <>
            <section className="page-banner-top">
                <img src={src} alt={alt} className="w-full block" />
            </section>
        </>
    )
}