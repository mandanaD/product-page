import type {ComponentProps} from "react";

export type RateProps = ComponentProps<"div"> & {
    shape?: "squircle" | "heart" | "hexagon" | "hexagon2" | "decagon" | "pentagon" | "star" | "starBold" | "circle";
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    length?:number
};