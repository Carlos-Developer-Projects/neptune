import {
    CogIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    CollectionIcon
} from '@heroicons/react/outline';
import { Gi3DMeeple, GiAncientSword, GiMoneyStack } from "react-icons/gi";

export const nav_lists = {
    main: [
        { name: 'Home', href: '/user', icon: HomeIcon, current: true },
        { name: 'Projects', href: '/projects', icon: CollectionIcon, current: false },
        { name: 'Items', href: '/items', icon: GiAncientSword, current: false },
        { name: 'Assets', href: '/assets', icon: Gi3DMeeple, current: false },
        { name: 'Sales', href: '/user/sales', icon: GiMoneyStack, current: false }
    ],
    secondary: [
        { name: 'Settings', href: '/user/settings', icon: CogIcon },
        { name: 'Help', href: '/help', icon: QuestionMarkCircleIcon },
        { name: 'Privacy', href: '/privacy', icon: ShieldCheckIcon },
    ]
};