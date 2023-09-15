import images from './images';

const reviews = [
    {
        rate: 3.7,
        name: "Sarah M.",
        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        rate: 4.9,
        name: "Alex K.",
        comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        rate: 5,
        name: "James L.",
        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        rate: 4.7,
        name: "Mooen B.",
        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        rate: 3.7,
        name: "Magada A.",
        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    }
];

const clothes = [
    {
        id: 0,
        title: "T-SHIRT WITH TAPE DETAILS",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        style: "casual",
        type: "T-shirts",
        new: true,
        rate: 3.2,
        price: 120,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame32,
                imgBack:images.frame32,
                imgPerson:images.frame32,
            }
        ],
    },
    {
        id: 1,
        title: "SKINNY FIT JEANS",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        style: "formal",
        type: "Jeans",
        rate: 4,
        price: 180,
        discount: 0.2,
        quantity: 0,
        sold: 6,
        new: false,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame33,
                imgBack:images.frame33,
                imgPerson:images.frame33,
            }
        ],
    }, 
    {
        id: 2,
        title: "CHECKERED SHIRT",
        description: "This is a product description",
        style: "casual",
        type: "Shirts",
        new: true,
        rate: 4.8,
        price: 250,
        discount: 0.3,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame34,
            }, 
            {
                imgBack:images.frame34,
            },
            {
                imgPerson:images.frame34,
            }
        ],
    },
    {
        id: 3,
        title: "SLEEVE STRIPED T-SHIRT",
        description: "This is a product description",
        style: "party",
        type: "T-shirts",
        rate: 3.9,
        price: 320,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame38,
            }, 
            {
                imgBack:images.frame38,
            },
            {
                imgPerson:images.frame38,
            }
        ],
    },
    {
        id: 4,
        title: "VERTICAL STRIPED SHIRT",
        description: "This is a product description",
        style: "casual",
        type: "Shirts",
        new: true,
        rate: 3.7,
        price: 220,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame40,
            }, 
            {
                imgBack:images.frame40,
            },
            {
                imgPerson:images.frame40,
            }
        ],
    },
    {
        id: 5,
        title: "COURAGE GRAPHIC T-SHIRT",
        description: "This is a product description",
        style: "gym",
        type: "T-shirts",
        new: false,
        rate: 4.5,
        price: 290,
        discount: 0.5,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame41,
            },
            {
                imgBack:images.frame41,
            },
            {
                imgPerson:images.frame41,
            }
        ],
    },
    {
        id: 6,
        title: "LOOSE FIT BERMUDA SHORTS",
        description: "This is a product description",
        style: "party",
        type: "Shorts",
        new: true,
        rate: 3.9,
        price: 100,
        discount: 0.3,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame42,
            },
            {
                imgBack:images.frame42,
            },
            {
                imgPerson:images.frame42,
            }
        ],
    },
    {
        id: 7,
        title: "FADED SKINNY JEANS",
        description: "This is a product description",
        style: "formal",
        type: "Jeans",
        new: true,
        rate: 4.2,
        price: 280,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [{
            small: 35,
            medium: 15,
            large: 43,
            xlarge: 43,
        }],
        colors: [{
            red: "#FFFF00",
            green: "#FFFF00",
            brown: "#FFFF00",
        }],
        reviews: reviews,
        imgUrls: [
            {
                imgFront:images.frame43,
            },
            {
                imgBack:images.frame43,
            },
            {
                imgPerson:images.frame43,
            }
        ],
    },
];
const data = { clothes, reviews };
export default data;