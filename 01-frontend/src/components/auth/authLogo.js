export default function AuthLogo({title}){
    return(
        <div>
            <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Neptune Chain Services"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
        </div>
    )
}