//components
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid'
//component
export default function HeroAlert({link, text, pill}){
    return(
        <Link href={link}>
            <a
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            >
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                {pill}
            </span>
            <span className="ml-4 text-sm">{text}</span>
            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </a>
        </Link>
    )
}