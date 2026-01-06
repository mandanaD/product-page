export type ProductImage = {
    id: string;
    url: string;
    alt: string;
};

export type ProductColor = {
    id: string;
    name: string;
    hex: string;
    in_stock: boolean;
    image: ProductImage;
};

export type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    description: string;
    category: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    colors: ProductColor[];
    sizes: number[];
    features: string[];
};
