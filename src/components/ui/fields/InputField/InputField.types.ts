import type {ComponentProps, ReactNode} from "react";

export type InputFieldProps = ComponentProps<"input"> & {
    type: "text" | "email";
    placeholder?: string;
    required?: boolean;
    label?: string;
    error?: string;
    accept?: "all" | "number" | "fa" | "en";
    icon?: ReactNode;
}