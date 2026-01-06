"use client"
import React from "react";
import { PRODUCT_DATA } from "@/mock/product-data";
import Rate from "@/components/ui/rate/Rate";
import { useProduct } from "@/context/ProductContext";

const ProductReviews = () => {
    const { selectedColorId } = useProduct();

    const reviews = selectedColorId
        ? PRODUCT_DATA.colors.find(color => color.id === selectedColorId)
        ?.reviews || []
        : PRODUCT_DATA.colors.flatMap(color =>
            color.reviews.map(review => ({
                ...review,
                colorName: color.name,
            }))
        );

    return (
        <section className="y-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Customer Reviews
            </h2>

            {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="border border-base-300 rounded-lg p-5 space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {review.full_name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {review.date}
                                    </p>
                                </div>

                                <Rate disabled={true} value={review.rating} size="sm" />
                            </div>

                            <p className="text-sm text-gray-700">
                                {review.comment || "No comment provided."}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProductReviews;