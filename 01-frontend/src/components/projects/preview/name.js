export default function({href, name}){
    return(
        <h3 className="text-md font-medium text-gray-900 px-4 mt-6 line-clamp-1">
            <a href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
            </a>
        </h3>
    )
}