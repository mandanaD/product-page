import {Label} from "@/components/ui/fields/Label";
import {useState} from "react";
import {RateProps} from "@/components/ui/rate/Rate.types";
import {cva} from "class-variance-authority";
import {ErrorMessage} from "@/components/ui/fields/ErrorMessage";

const Rate = ({
                  disabled = false,
                  size = "md",
                  className,
                  length = 5,
                  value,
                  onChange,
                  error,
                  required = true,
                  label = "",
                  ...props
              }: RateProps & {onChange?: (val: number) => void }) => {
    const classes = cva("", {
        variants: {
            size: {
                xs: "rating-xs",
                sm: "rating-sm",
                md: "rating-md",
                lg: "rating-lg",
                xl: "rating-xl",
            },
        },
    });

    const [internal, setInternal] = useState(value ?? 0);
    const activeValue = value ?? internal;

    const handleSelect = (val: number) => {
        if (disabled) return;
        if (onChange) {
            onChange(val);
        } else {
            setInternal(val);
        }
    };

    return (
        <fieldset className={`fieldset w-fit relative ${disabled ? "opacity-70" : ""}`}>
            <Label required={required} text={label} />
            <div className={`rating space-x-1 ${classes({ size })} ${className || ""}`} {...props}>
                {Array.from({ length }).map((_, i) => (
                    <input
                        key={i}
                        type="radio"
                        name="rating"
                        className={`${
                            activeValue >= i + 1 ? "opacity-100" : "opacity-30"
                        } bg-orange-400 mask-star-2 appearance-none mask transition-colors disabled:cursor-not-allowed`}
                        onChange={() => handleSelect(i + 1)}
                        aria-label={`${i + 1} star`}
                        disabled={disabled}
                        checked={activeValue >= i + 1}
                    />
                ))}
            </div>
            <ErrorMessage text={error} />
        </fieldset>
    );
};

export default Rate;
