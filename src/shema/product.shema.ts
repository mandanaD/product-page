import * as z from "zod";

export const addCardShema=z.object({
    size:z.string().min(1,"Size is required"),
    color:z.string().min(1,"Color is required"),
})
export type AddCardType=z.infer<typeof addCardShema>;


// review
export const addReviewShema=z.object({
    rate:z.number().min(1,"rate is required"),
    full_name:z.string().min(1,"Full name is required"),
    description:z.string().min(1,"Description is required"),
})
export type ReviewFormType=z.infer<typeof addReviewShema>;
