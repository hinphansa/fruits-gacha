export const fruits = [
    {
        id: 0,
        rarity: 'R',
        name: "Banana",
        img: require("../asset/R_rate/banana.jpg").default,
        thumbnail: require("../asset/R_rate/banana_thumbnail.jpg").default
    },
    {
        id: 1,
        rarity: 'R',
        name: "Lemon",
        img: require("../asset/R_rate/lemon.jpg").default,
        thumbnail: require("../asset/R_rate/lemon_thumbnail.jpg").default
    },
    {
        id: 2,
        rarity: 'R',
        name: "Mango",
        img: require("../asset/R_rate/mango.jpg").default,
        thumbnail: require("../asset/R_rate/mango_thumbnail.jpg").default
    },
    {
        id: 3,
        rarity: 'R',
        name: "Orange",
        img: require("../asset/R_rate/orange.jpg").default,
        thumbnail: require("../asset/R_rate/orange_thumbnail.jpg").default,
    },
    {
        id: 4,
        rarity: 'R',
        name: "Grapes",
        img: require("../asset/R_rate/grapes.jpg").default,
        thumbnail: require("../asset/R_rate/grapes_thumbnail.jpg").default
    },
    {
        id: 5,
        rarity: 'R',
        name: "Durian",
        img: require("../asset/R_rate/durian.jpg").default,
        thumbnail: require("../asset/R_rate/durian_thumbnail.jpg").default
    },
    {
        id: 6,
        rarity: 'R',
        name: "Blueberries",
        img: require("../asset/R_rate/blueberries.jpg").default,
        thumbnail: require("../asset/R_rate/blueberries_thumbnail.jpg").default
    },
    {
        id: 7,
        rarity: 'R',
        name: "Mangosteen",
        img: require("../asset/R_rate/mangosteen.jpg").default,
        thumbnail: require("../asset/R_rate/mangosteen_thumbnail.jpg").default
    },
    {
        id: 8,
        rarity: 'SR',
        name: "Avocado",
        img: require("../asset/SR_rate/avocado.jpg").default,
        thumbnail: require("../asset/SR_rate/avocado_thumbnail.jpg").default
    },
    {
        id: 9,
        rarity: 'SR',
        name: "Coconut",
        img: require("../asset/SR_rate/coconut.jpg").default,
        thumbnail: require("../asset/SR_rate/coconut_thumbnail.jpg").default
    },
    {
        id: 10,
        rarity: 'SR',
        name: "Papaya",
        img: require("../asset/SR_rate/papaya.jpg").default,
        thumbnail: require("../asset/SR_rate/papaya_thumbnail.jpg").default,
    },
    {
        id: 11,
        rarity: 'SR',
        name: "Watermelon",
        img: require("../asset/SR_rate/watermelon.jpg").default,
        thumbnail: require("../asset/SR_rate/watermelon_thumbnail.jpg").default
    },
    {
        id: 12,
        rarity: 'SR',
        name: "Strawberries",
        img: require("../asset/SR_rate/strawberries.jpg").default,
        thumbnail: require("../asset/SR_rate/strawberries_thumbnail.jpg").default
    },
    {
        id: 13,
        rarity: 'SR',
        name: "Pineapple",
        img: require("../asset/SR_rate/pineapple.jpg").default,
        thumbnail: require("../asset/SR_rate/pineapple_thumbnail.jpg").default
    },
    {
        id: 14,
        rarity: "SSR",
        name: "Apple",
        img: require("../asset/SSR_rate/apple.jpg").default,
        thumbnail: require("../asset/SSR_rate/apple_thumbnail.jpg").default
    },
    {
        id: 15,
        rarity: "SSR",
        name: "Kiwi",
        img: require("../asset/SSR_rate/kiwi.jpg").default,
        thumbnail: require("../asset/SSR_rate/kiwi_thumbnail.jpg").default
    },
    {
        id: 16,
        rarity: "SSR",
        name: "Cherries",
        img: require("../asset/SSR_rate/cherries.jpg").default,
        thumbnail: require("../asset/SSR_rate/cherries_thumbnail.jpg").default
    },
    {
        id: 17,
        rarity: "SSR",
        name: "Pear",
        img: require("../asset/SSR_rate/pear.jpg").default,
        thumbnail: require("../asset/SSR_rate/pear_thumbnail.jpg").default
    },
]

export const getRFruits = () => {
    return fruits.filter(element => element.rarity === 'R')
}

export const getSRFruits = () => {
    return fruits.filter(element => element.rarity === 'SR')
}

export const getSSRFruits = () => {
    return fruits.filter(element => element.rarity === 'SSR')
}