import type {ComponentProps} from "react";

export type TextareaProps = ComponentProps<"textarea"> & {
    label?: string,
    error?: string,
    placeholder?:string
}