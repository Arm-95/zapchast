import shortid from 'shortid'

const lenguage = [
    {
        id: shortid.generate(),
        name: 'En',
        value: 'en',
    },
    {
        id: shortid.generate(),
        name: 'Ru',
        value: 'ru',
    },
    {
        id: shortid.generate(),
        name: 'Arm',
        value: 'arm'
    }
]

const money = [
    {
        id: shortid.generate(),
        name: 'USD'
    },
    {
        id: shortid.generate(),
        name: 'EUR'
    },
    {
        id: shortid.generate(),
        name: 'RUB'
    },
    {
        id: shortid.generate(),
        name: 'AMD'
    }
]


// const mone = [
//     {
//         id: shortid.generate(),
//         name: 'USD',
//     },
//     {
//         id: shortid.generate(),
//         name: 'EUR',
//     },
//     {
//         id: shortid.generate(),
//         name: 'RUB',
//     },
//     {
//         id: shortid.generate(),
//         name: 'AMD',
//     }
// ]


const categoria = [
    {
        id: shortid.generate(),
        name: "Accessories",
    },
    {
        id: shortid.generate(),
        name: "Accessories & More",
    },
    {
        id: shortid.generate(),
        name: "Butters & Egss",
    },
    {
        id: shortid.generate(),
        name: "Camera & Video",
    },
    {
        id: shortid.generate(),
        name: "Mornitors",
    },
    {
        id: shortid.generate(),
        name: "Tablets",
    },
    {
        id: shortid.generate(),
        name: "Laptops",
    },
    {
        id: shortid.generate(),
        name: "Handbags",
    },
    {
        id: shortid.generate(),
        name: "Handphone & Speaker",
    },
    {
        id: shortid.generate(),
        name: "Herbs & botanical",
    },
    {
        id: shortid.generate(),
        name: "Vegetabies",
    },
    {
        id: shortid.generate(),
        name: "Shop",
    },
    {
        id: shortid.generate(),
        name: "Laptops & Desktops",
    },
    {
        id: shortid.generate(),
        name: "Watchs",
    },
    {
        id: shortid.generate(),
        name: "Electronic",
    }
]


export default { lenguage, money, categoria }