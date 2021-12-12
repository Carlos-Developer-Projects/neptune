//components
import { Transition } from '@headlessui/react';
//component
export default function TransitionArea({comparison, name, children}){
    //render
    return(
        <Transition
            show={comparison === name ? true : false}
            enter="transition duration-1200 ease-out"
            enterFrom="transform translate-y-650 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-275 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
        >
            {children}
        </Transition>
    );
}