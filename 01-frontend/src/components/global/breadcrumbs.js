import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Breadcrumbs({crumbs}){

    const render_crumbs = (crumbs)=>{
        const render = crumbs.map((crumb, index)=>{
            return(
                <li key={index}>
                    <div className={`flex ${index > 0 && 'items-center'}`}>
                        {index > 0 && (<ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />)}
                        <Link href={crumb.link}>
                            <a className={`${index > 0 && 'ml-4'} text-sm font-medium text-gray-500 hover:text-gray-700`}>{crumb.text}</a>
                        </Link>
                    </div>
                </li>
            )
        });

        return render;
    };

    return(
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                {render_crumbs(crumbs)}
            </ol>
        </nav>
    )
}