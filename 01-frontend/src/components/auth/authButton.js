export default function AuthButton({text}){

    const classNames = "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

    return(
        <div>
            <button type="submit" className={classNames}>{text}</button>
        </div>
    )
}