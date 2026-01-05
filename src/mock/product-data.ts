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
            image:  {
                id: "air-green",
                url: "/product/AIR+JORDAN+green.avif",
                alt: "Air Jordan 1 Low in Green - Side View",
            },
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
            }
        }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    features: [
        "Shown: Black/White/Particle Grey",
        "Style: 553558-040",
    ],
}