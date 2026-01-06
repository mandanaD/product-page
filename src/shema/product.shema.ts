import * as z from "zod";

export const addCardShema=z.object({
    size:z.string().min(1,"Size is required"),
    color:z.string().min(1,"Color is required"),
})

export type AddCardType=z.infer<typeof addCardShema>;