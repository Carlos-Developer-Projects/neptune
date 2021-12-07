import {
    CogIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    CollectionIcon
} from '@heroicons/react/outline';
import { Gi3DMeeple, GiAncientSword, GiMoneyStack } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

export const nav_lists = {
    main: [
        { name: 'Home', href: '#', icon: HomeIcon, current: true },
        { name: 'Projects', href: '#', icon: CollectionIcon, current: false },
        { name: 'Items', href: '#', icon: GiAncientSword, current: false },
        { name: 'Assets', href: '#', icon: Gi3DMeeple, current: false },
        { name: 'Sales', href: '#', icon: GiMoneyStack, current: false }
    ],
    secondary: [
        { name: 'Settings', href: '#', icon: CogIcon },
        { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
        { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
    ]
};