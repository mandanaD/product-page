"use client"
import React, {useState} from "react";
import Image from "next/image";

type ProductImage = {
    id: string;
    url: string;
    alt: string;
};

export const ProductDetail = ({ images }: { images: ProductImage[] }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className="space-y-4">
            <div className=" rounded-lg overflow-hidden">
                <img
                    src={images[selectedImage].url}
                    alt="Product"
                    className="w-full aspect-square object-cover"
                />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {images.map((img, index) => (
                    <button
                        key={img.id}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all aspect-square cursor-pointer  ${
                            selectedImage === index ? 'border-primary' : 'border-gray-200'
                        }`}
                    >
                        <Image
                            src={img.url}
                            alt={img.alt}
                            fill={true}
                            className="w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}