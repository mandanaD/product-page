import type {ComponentProps} from "react";

export type RateProps = ComponentProps<"div"> & {
    name?:string,
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    length?:number,
    disabled?:boolean,
    value?:number,
    error?: string;
    label?: string;
    required?: boolean;
};