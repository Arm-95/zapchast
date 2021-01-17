import shortid from 'shortid'

const categrysData = [
    {
        id: shortid.generate(),
        name: "Brake Part",
        subCategory: [
            {
                name: "asasa",
                id: 1
            },
            {
                name: "afffffsasa",
                id: 2
            }
        ]
    },
    {
        id: shortid.generate(),
        name: "Wheels & Tires",
        subCategory: [
            {
                name: "asasa",
                id: 1
            },
            {
                name: "afffffsasa",
                id: 2
            }
        ]
    },
    {
        id: shortid.generate(),
        name: "Furnitured & Decor"
    },
    {
        id: shortid.generate(),
        name: "Turbo System"
    },
    {
        id: shortid.generate(),
        name: "Lighting"
    },
    {
        id: shortid.generate(),
        name: "Accessorise"
    },
    {
        id: shortid.generate(),
        name: "Body Parts"
    },
    {
        id: shortid.generate(),
        name: "Networking"
    },
    {
        id: shortid.generate(),
        name: "Perfomance Filter"
    },
    {
        id: shortid.generate(),
        name: "Engin Parts"
    }
]

export default categrysData