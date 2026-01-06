import React from 'react';
import {PRODUCT_DATA} from "@/mock/product-data";
import {ProductDetail} from "@/components/pages/ProductDetail";
import {ProductForm} from "@/components/pages/ProductForm";
import ProductReviews from "@/components/pages/ProductReviews";

export default function ProductPage() {

    const colors = PRODUCT_DATA.colors;

    return (
        <div className="min-h-screen ">
            <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-10">
                <div className="grid lg:grid-cols-2 gap-8">
                    <ProductDetail colors={colors}/>
                    <div className=" border border-gray-100 rounded-lg p-3 sm:p-6 lg:p-8 space-y-6">
                        <div>
                            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">
                                {PRODUCT_DATA.name}
                            </h1>
                            <h3 className={"sm:text-sm text-xs mb-4 text-neutral-500"}>
                                {PRODUCT_DATA.category}
                            </h3>
                        </div>

                        <div className="flex justify-between items-center py-4 border-y border-gray-300/60">
                            <span className="text-gray-700">Total Price:</span>
                            <span className="text-lg sm:text-2xl font-bold text-gray-900">
                ${PRODUCT_DATA.price}
              </span>
                        </div>
                        <ProductForm data={PRODUCT_DATA} />

                        <div className="space-y-3">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {PRODUCT_DATA.description}
                            </p>

                            <div className="text-sm text-gray-600 space-y-1">
                                {PRODUCT_DATA.features.map((feature, idx) => (
                                    <p key={idx}>• {feature}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ProductReviews colors={colors}/>
            </div>
        </div>
    );
}