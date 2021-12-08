export default function Cta({href, name, cta}){
    return(
        <div className="mt-2">
            <a
                href={href}
                className="relative flex bg-indigo-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-purple-900"
            >
                {cta}<span className="sr-only">, {name}</span>
            </a>
        </div>
    )
}