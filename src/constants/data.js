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
        title: "BURUSSIA DORTMURD 23/24 HOME JERSEY",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        style: "Gym",
        type: "T-shirts",
        gender: "Men",
        new: true,
        rate: 3.2,
        price: 120,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770604/01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770604/01/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770604/01/mod01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
    {
        id: 1,
        title: "AC MILAN 23/24 YOUTH HOME JERSEY",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        style: "Gym",
        type: "T-shirts",
        gender: "Men",
        rate: 4,
        price: 180,
        discount: 0.2,
        quantity: 0,
        sold: 6,
        new: true,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770385/01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770385/01/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/770385/01/mod01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    }, 
    {
        id: 2,
        title: "MEN SHORTS",
        description: "This is a product description",
        style: "casual",
        type: "Shorts",
        gender: "Men",
        new: true,
        rate: 4.8,
        price: 250,
        discount: 0.3,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/522110/01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/522110/01/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/522110/01/dt04/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
    {
        id: 3,
        title: "PUMA X LIBERTY MEN'S GOLF QUARTER-ZIP",
        description: "This is a product description",
        style: "party",
        type: "T-shirts",
        gender: "Men",
        new: false,
        rate: 3.9,
        price: 320,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/621640/02/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/621640/02/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/621640/02/mod01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
    {
        id: 4,
        title: "SEASONS WOOL LONG SLEEVE RUNNING TEE WOMEN",
        description: "This is a product description",
        style: "casual",
        type: "Shirts",
        gender: "Women",
        new: true,
        rate: 3.7,
        price: 220,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.net/images/522576/35/fnd/ZAF/w/640/h/640",
            }, 
            {
                pic:"https://images.puma.net/images/522576/35/bv/fnd/ZAF/w/640/h/640",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/522576/35/mod01/fnd/ZAF/w/640/h/640/fmt/png",
            }
        ],
    },
    {
        id: 5,
        title: "CLASSICS TURTLENECK WOMEN'S SWEATSHIRT",
        description: "This is a product description",
        style: "gym",
        type: "Shirts",
        gender: "Women",
        new: false,
        rate: 4.5,
        price: 290,
        discount: 0.5,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.net/images/531695/01/fnd/ZAF/w/640/h/640",
            }, 
            {
                pic:"https://images.puma.net/images/531695/01/bv/fnd/ZAF/w/640/h/640",
            },
            {
                pic:"https://images.puma.net/images/531695/01/mod03/fnd/ZAF/w/640/h/640",
            }
        ],
    },
    {
        id: 6,
        title: "PUMA X LIBERTY WOMEN'S REVERSIBLE PUFFER JACKET",
        description: "This is a product description",
        style: "party",
        type: "Jacket",
        gender: "Women",
        new: true,
        rate: 3.9,
        price: 100,
        discount: 0.3,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622211/25/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622211/25/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622211/25/mod01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
    {
        id: 7,
        title: "CLASSICS WOMEN'S FLARED LEGGINGS",
        description: "This is a product description",
        style: "formal",
        type: "Leggings",
        gender: "Women",
        new: true,
        rate: 4.2,
        price: 280,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622183/99/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622183/99/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/622183/99/mod02/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
    {
        id: 8,
        title: "ESS+ MARBLEIZED WOMEN'S TEE",
        description: "This is a product description",
        style: "formal",
        type: "Jeans",
        gender: "Women",
        new: false,
        rate: 4.2,
        price: 280,
        discount: 0,
        quantity: 0,
        sold: 6,
        sizes: [
            {
                size: "Small"
            },
            {
                size: "Medium"
            },
            {
                size: "Large"
            },
            {
                size: "X Large"
            },
        ],
        colors: [
            {
                red: "#F1FF00"
            },
            {
                green: "#000"
            },
            {
                brown: "#FF0000"
            },
        ],
        reviews: reviews,
        imgUrls: [
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/677206/01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }, 
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/677206/01/bv/fnd/ZAF/w/1000/h/1000/fmt/png",
            },
            {
                pic:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/677206/01/mod01/fnd/ZAF/w/1000/h/1000/fmt/png",
            }
        ],
    },
];
const data = { clothes, reviews };
export default data;