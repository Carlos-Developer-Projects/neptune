import {GiCardDraw, GiCardPlay, GiArrowsShield, GiAbstract031} from 'react-icons/gi';
import {MdOutlineGames, } from 'react-icons/md';

export const dummy_projects = [
    {
        id: "1234",
        status: "live",
        image: "https://via.placeholder.com/300x250",
        name: "New Game",
        description: "Nam posuere nec nisl accumsan tincidunt. Vestibulum eget felis odio. Nullam rhoncus consequat massa, quis vulputate neque sollicitudin vitae.",
        tags: [
            {
                bg: "bg-red-500",
                text: "TCG"
            },
            {
                bg: "bg-blue-500",
                text: "Multiplayer"
            }
        ]
    },
    {
        id: "1234",
        status: "live",
        image: "https://via.placeholder.com/300x250",
        name: "New Game",
        description: "Nam posuere nec nisl accumsan tincidunt. Vestibulum eget felis odio. Nullam rhoncus consequat massa, quis vulputate neque sollicitudin vitae.",
        tags: [
            {
                bg: "bg-red-500",
                text: "TCG"
            },
            {
                bg: "bg-blue-500",
                text: "Multiplayer"
            }
        ]
    },
    {
        id: "1234",
        status: "live",
        image: "https://via.placeholder.com/300x250",
        name: "New Game",
        description: "Nam posuere nec nisl accumsan tincidunt. Vestibulum eget felis odio. Nullam rhoncus consequat massa, quis vulputate neque sollicitudin vitae.",
        tags: [
            {
                bg: "bg-red-500",
                text: "TCG"
            },
            {
                bg: "bg-blue-500",
                text: "Multiplayer"
            }
        ]
    }
];

export const ruleTypes = {
    decks: {
        name: "decks",
        schema: {
            meta: {
                id: "",
                name: "New Deck",
                intro: "Enter the settings for your deck.",
                cta: "Save Deck",
                type: "decks"
            },
            update:{
                cta: "Update Deck"
            },
            state: {
                type:"decks",
                name: "",
                icon: "",
            },
            fields: [
                {
                    id: "name",
                    label: "Name",
                    required: true,
                    type: "text",
                    placholder: "Name your deck.",
                    settings: {},
                    message: "Name of the rule."
                },
                {
                    id: "icon",
                    label: "Deck Icon (optional)",
                    required: false,
                    type: "file",
                    settings: {},
                    message: "Icon that represents your rule."
                }
            ]
        }
    },
    hands: {
        name: "hands",
        schema: {
            meta: {
                id: "",
                name: "New Hand",
                intro: "Enter the settings for your card hand.",
                cta: "Save Hand",
                type: "hands"
            },
            update:{
                cta: "Update Hand"
            },
            state: {
                type:"hands",
                name: "",
                icon: "",
            },
            fields: [
                {
                    id: "name",
                    label: "Name",
                    required: true,
                    type: "text",
                    placholder: "Name your hand.",
                    settings: {},
                    message: "Name of the hand as it will appear to players."
                },
                {
                    id: "icon",
                    label: "Hand Icon (optional)",
                    required: false,
                    type: "file",
                    settings: {},
                    message: "Icon that represents your hand."
                }
            ]
        }
    },
    cards:{
        decks: {
            icon: GiCardDraw,
            type: "decks",
            name: "Decks",
            description: "Decks are a major staple in most modern games.",
            count: 0,
            design: {
                image: "/img/backgrounds/sand-army.jpg",
                opacity: .4
            }
        },
        hands: {
            icon: GiCardPlay,
            type: "hands",
            name: "Card Hands",
            description: "Players can draw and use cards from your decks.",
            count: 0,
            design: {
                image: "/img/backgrounds/blind-hand.jpg",
                opacity: .6
            }
        },
        actions: {
            icon: GiArrowsShield,
            type: "actions",
            name: "Actions",
            description: "Actions are options your players can use.",
            count: 0,
            design: {
                image: "/img/backgrounds/explore.jpg",
                opacity: .6
            }
        },
        blast: {
            icon: GiArrowsShield,
            type: "blast",
            name: "Blast",
            description: "Actions are options your players can use.",
            count: 0,
            design: {
                image: "/img/backgrounds/explore.jpg",
                opacity: .6
            }
        }
    }
};

export const tabsData = [
    { 
        name: 'Project Info',
        icon: MdOutlineGames
    },
    { 
        name: 'Rules & Settings',
        icon: GiAbstract031
    }
];