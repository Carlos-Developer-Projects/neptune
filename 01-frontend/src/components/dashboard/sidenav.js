//components
import Link from 'next/link';
import Logo from "../global/logo";
//functions
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function SideNav({navigation, secondaryNavigation, theme}){
    //render
    return(
        <>
            <style>
                <style jsx global>{`
                    .side-nav-bg{
                        background-repeat:no-repeat;
                        background-size:cover;
                        background-position:center;
                        position: absolute;
                        height:40%;
                        opacity:.5;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 10;
                    }
                `}</style>
            </style>
            <div className={`hidden relative lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 ${theme.sidebar.background}`}>
                
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className={`flex relative flex-col flex-grow ${theme.sidebar.background} pt-5 pb-4 overflow-y-auto`}>
                    <div className="side-nav-bg"></div>
                    <div className="flex flex-col items-center flex-shrink-0 px-4">
                        <Logo alt="Neptune Logo"/>
                        <p className="text-white uppercase font-bold text-2xl tracking-wide">Neptune</p>
                    </div>
                    <nav className={`mt-5 flex-1 flex flex-col divide-y divide-${theme.colors.primary}-800 overflow-y-auto`} aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <a
                                className={classNames(
                                    item.current ? `${theme.sidebar.bg_current} ${theme.sidebar.links}` : `${theme.sidebar.links} ${theme.sidebar.bg_hover}`,
                                    'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                <item.icon className={`mr-4 flex-shrink-0 h-6 w-6 ${theme.sidebar.links}`} aria-hidden="true" />
                                {item.name}
                                </a>
                            </Link>
                        ))}
                        </div>
                        <div className="mt-6 pt-6">
                        <div className="px-2 space-y-1">
                            {secondaryNavigation.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <a
                                    className={`group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md ${theme.sidebar.links} ${theme.sidebar.bg_hover}`}
                                >
                                    <item.icon className={`mr-4 h-6 w-6 ${theme.sidebar.links}`} aria-hidden="true" />
                                    {item.name}
                                </a>
                            </Link>
                            ))}
                        </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}