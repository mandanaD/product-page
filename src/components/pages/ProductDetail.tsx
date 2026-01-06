"use client"
import React from "react";
import Image from "next/image";
import {useProduct} from "@/context/ProductContext";
import {ProductColor} from "@/type/product.type";

export const ProductDetail = ({colors}: { colors: ProductColor[] }) => {
    const {setSelectedColorId, selectedColorId} = useProduct()
    return (
        <div className="space-y-4 relative">
            <div className="rounded-lg overflow-hidden w-full aspect-square relative">
                <Image
                    src={colors && (colors.find((item) => item.id === selectedColorId)?.image?.url || colors[0]?.image.url)}
                    alt="Product"
                    className="w-full aspect-square object-cover"
                    fill={true}
                />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {colors && colors.map((clr) => (
                    <button
                        key={clr.id}
                        onClick={() => setSelectedColorId(clr.id)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all aspect-square cursor-pointer  ${
                            selectedColorId === clr.id ? 'border-primary' : 'border-gray-200'
                        }`}
                    >
                        <Image
                            src={clr?.image?.url}
                            alt={clr?.image?.alt}
                            fill={true}
                            className="w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}