"use client"
import {useOptionsFromArray} from "@/hook/useOptionsFromArray";
import {useColorOptions} from "@/hook/useColorOptions";
import {Product} from "@/type/product.type";
import {useForm} from "react-hook-form";
import {addCardShema, AddCardType} from "@/shema/product.shema";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "@/components/ui/button/Button";
import {ShoppingCart} from "lucide-react";
import RadioFieldController from "@/components/ui/fields/Radio/RadioFieldController";
import {useProduct} from "@/context/ProductContext";
import {useEffect} from "react";

export const ProductForm = ({data}: { data: Product }) => {
    const {selectedColorId, setSelectedColorId} = useProduct();

    const {
        handleSubmit,
        control,
        formState: {isValid},
        watch
    } = useForm<AddCardType>({
        resolver: zodResolver(addCardShema),
        defaultValues: {
            size: "",
            color: ""
        },
        values: {
            size: "",
            color: selectedColorId || ""
        }
    });

    const color = watch("color")

    useEffect(() => {
        if (color) {
            setSelectedColorId(color)
        }
    }, [color]);

    const onSubmit = (data: AddCardType) => {
        console.log("data:", {
            ...data
        });
    };

    return (
        <form className={"space-y-8 "} onSubmit={handleSubmit(onSubmit)}>
            <div
                className={"space-y-4"}
            >
                <RadioFieldController
                    label="Choose a Size"
                    name="size"
                    control={control}
                    options={useOptionsFromArray(data.sizes)}
                />
                <div className="py-4 border-y border-gray-300/60">
                    <RadioFieldController
                        label="Choose a Color"
                        name="color"
                        variant="color"
                        control={control}
                        options={useColorOptions(data.colors)}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={!isValid}
                shape="block"
            >
                <ShoppingCart className="w-5 h-5"/>
                Add to Cart
            </Button>
        </form>
    )
}