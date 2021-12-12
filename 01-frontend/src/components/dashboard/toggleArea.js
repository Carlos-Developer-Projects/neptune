//dependencies
import { useState, useEffect } from 'react';
//components
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
//component
export default function ToggleArea({children, title}){
    //state
    //render
    return(
        <>
            <Disclosure as="div" className="pt-2 mb-5" defaultOpen={true}> 
                {({ open }) => (
                    <>
                        <dt>
                            <Disclosure.Button className="hover:bg-gray-200 bg-gray-100 border-bottom-main p-3 text-left w-full flex justify-between items-start text-gray-400">
                                <h3 className="text-lg font-medium leading-6  text-gray-900">{title}</h3>
                                <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform text-red-800')}
                                    aria-hidden="true"
                                />
                                </span>
                            </Disclosure.Button>
                        </dt>
                        <Transition
                            show={open}
                            enter="transition duration-200 ease-out"
                            enterFrom="transform opacity-0"
                            enterTo="transform opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <Disclosure.Panel as="dd" className="mt-6 pr-12">{children}</Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>

    )
}