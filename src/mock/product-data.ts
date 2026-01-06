export const PRODUCT_DATA = {
    id: "1",
    name: "Air Jordan 1 Low",
    price: 120,
    currency: "USD",
    description: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
    category: "Men's Shoes",
    rating: 4.5,
    reviewCount: 127,
    inStock: true,
    colors: [
        {
            id: "green",
            name: "Green",
            hex: "#014613",
            in_stock: true,
            image: {
                id: "air-green",
                url: "/product/AIR+JORDAN+green.avif",
                alt: "Air Jordan 1 Low in Green - Side View",
            },
            reviews: [
                {
                    full_name: 'Sarah Green',
                    rating: 3,
                    comment: 'Love this green color, looks even better in person.',
                    date: 'December 28, 2024'
                },
                {
                    full_name: 'Michael Chen',
                    rating: 4,
                    comment: 'Great quality and nice shade of green.',
                    date: 'December 20, 2025'
                },
            ]
        },
        {
            id: "red",
            name: "Red",
            hex: "#750202",
            in_stock: true,
            image: {
                id: "air-red",
                url: "/product/AIR+JORDAN+red.avif",
                alt: "Air Jordan 1 Low in Red - Side View",
            },
            reviews: [
                {
                    full_name: 'Michael Red',
                    rating: 3,
                    comment: 'The red really pops, such a clean look.',
                    date: 'December 28, 2024'
                },
                {
                    full_name: 'Emma Woo',
                    rating: 4,
                    comment: 'Bold color and very comfortable for daily wear.',
                    date: 'December 10, 2025'
                },
                {
                    full_name: 'Michael Emma',
                    rating: 4,
                    comment: 'Nice design and eye-catching color.',
                    date: 'December 20, 2025'
                },
            ]
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            in_stock: false,
            image: {
                id: "air-black",
                url: "/product/AIR+JORDAN+black.avif",
                alt: "Air Jordan 1 Low in Black - Side View",
            },
            reviews: [
                {
                    full_name: 'Sarah Black',
                    rating: 4,
                    comment: 'Classic black, matches everything.',
                    date: 'December 28, 2024'
                },
                {
                    full_name: 'Emma Chen',
                    rating: 3,
                    comment: 'Clean, simple, and super comfortable.',
                    date: 'December 10, 2025'
                },
            ]
        }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    features: [
        "Shown: Black/White/Particle Grey",
        "Style: 553558-040",
    ],
}