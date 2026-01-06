"use client"
import React, {createContext, useContext, useState} from "react";

type ProductContextType = {
    selectedColorId: string | null;
    setSelectedColorId: (id: string) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({children}: { children: React.ReactNode }) => {
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

    return (
        <ProductContext.Provider value={{selectedColorId, setSelectedColorId}}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProduct must be used inside ProductProvider");
    return context;
};
