import type {ComponentProps} from "react";

export type SelectFieldProps = ComponentProps<"select"> & {
    label: string;
    loadingMessage?: string,
    errorMessage?: string,
    options: {
        value?: string;
        label: string;
    }[];
    state?: "loading" | "error" | "success";
    placeholder?: string;
    error?: string;
};
