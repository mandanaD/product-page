import type {ComponentProps, ReactNode} from "react";

export type ButtonProps = ComponentProps<"button"> & {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "destructive" | "ghost" | 'link',
    appearance?: "solid" | "soft" | "outline" | "dashed";
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    shape?: "regular" | "wide" | "block" | "square" | "circle";
    isLoading?: boolean,
    startIcon?: ReactNode,
    endIcon?: ReactNode,
};