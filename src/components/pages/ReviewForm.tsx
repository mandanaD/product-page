"use client"
import {useForm} from "react-hook-form";
import {addReviewShema, ReviewFormType} from "@/shema/product.shema";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "@/components/ui/button/Button";
import InputField from "@/components/ui/fields/InputField/InputField";
import Textarea from "@/components/ui/fields/Textarea/Textarea";
import RateFieldController from "@/components/ui/rate/RateFieldController";

export const ReviewForm = () => {

    const {
        handleSubmit,
        register,
        control,
        formState: {errors},
    } = useForm<ReviewFormType>({
        resolver: zodResolver(addReviewShema),
        defaultValues: {
            full_name: "",
            description: "",
            rate: 0,
        },
    });

    const onSubmit = (data: ReviewFormType) => {
        console.log("data:", {
            ...data
        });
    };

    return (
        <form className={"bg-base-200 border border-base-300 rounded-lg"}
              onSubmit={handleSubmit(onSubmit, errors => console.log("onSubmit", errors))}>
            <div className={"px-2 sm:px-8 py-4 sm:py-10 space-y-8"}>
                <h2 className="text-md sm:text-lg md:text-xl  font-bold">
                    Write a Review
                </h2>
                <div
                    className={"space-y-6"}
                >
                    <InputField
                        label="Full name"
                        required={true}
                        placeholder="Enter Full Name"
                        {...register("full_name")}
                        error={errors.full_name?.message}
                        type={"text"}
                    />
                    <RateFieldController
                        label={"Rating"}
                        name={"rate"}
                        control={control}
                        required={true}
                    />
                    <Textarea
                        label="Comment "
                        required={true}
                        placeholder="Enter Description"
                        {...register("description")}
                        error={errors.description?.message}
                    />
                </div>
                <div
                    className={"w-fit ml-auto"}
                >
                    <Button
                        size={"sm"}
                        type="submit"
                        shape="wide"
                    >
                        Submit Review
                    </Button>
                </div>
            </div>
        </form>
    )
}