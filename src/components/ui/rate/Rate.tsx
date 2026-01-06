import type {RateProps} from "./Rate.types.ts";
import {cva} from "class-variance-authority";

const Rate = ({
                  disabled = false,
                  size = "md",
                  className,
                  length = 5,
                  shape = "starBold",
                  value = 0,
                  ...props
              }: RateProps) => {
    const classes = cva("", {
        variants: {
            shape: {
                squircle: "mask-squircle",
                heart: "mask-heart",
                hexagon: "mask-hexagon",
                hexagon2: "mask-hexagon-2",
                decagon: "mask-decagon",
                pentagon: "mask-pentagon",
                star: "mask-star",
                starBold: "mask-star-2",
                circle: "mask-circle",
            },
            size: {
                xs: "rating-xs",
                sm: "rating-sm",
                md: "rating-md",
                lg: "rating-lg",
                xl: "rating-xl",
            },
        },
    });

    return (
        <div
            className={`rating space-x-1 ${classes({size})} ${className || ""}`}
            {...props}
        >
            {Array.from({length}).map((_, i) => (
                <input
                    key={i}
                    type="radio"
                    name="rating"
                    className={`${classes({shape})} mask bg-orange-400`}
                    aria-label={`${i + 1} star`}
                    disabled={disabled}
                    defaultChecked={i + 1 === value}
                    readOnly={!disabled}
                />
            ))}
        </div>
    );
};

export default Rate;
