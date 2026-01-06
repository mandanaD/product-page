import { cva } from "class-variance-authority";
import { Label } from "@/components/ui/fields/Label";
import { ErrorMessage } from "@/components/ui/fields/ErrorMessage";
import type { RadioFieldProps } from "./RadioField.types";

const fieldsetClasses = cva("fieldset w-full", {
    variants: {
        disabled: {
            true: "opacity-70 pointer-events-none",
        },
    },
});

const RadioField = ({
                        label,
                        name,
                        options,
                        value,
                        error,
                        required = true,
                        disabled = false,
                        className = "",
                        variant = "default",
                        onChange,
                    }: RadioFieldProps) => {
    return (
        <fieldset className={fieldsetClasses({ disabled })}>
            {label && <Label text={label} required={required} />}

            <div
                className={`mt-2 flex gap-2 ${
                    variant === "color" ? "flex-wrap" : "flex-wrap"
                }`}
            >
                {options.map((option) => {
                    const isChecked = value === option.value;

                    const baseClasses =
                        "cursor-pointer transition-all select-none";

                    const sizeVariantClasses =
                        variant === "color"
                            ? "w-9 h-9 rounded-full flex items-center justify-center"
                            : "flex items-center gap-1.5 rounded-md px-4 py-1";

                    const stateClasses = isChecked
                        ? "ring-2 ring-primary"
                        : "ring-1 ring-gray-300 hover:ring-primary/50";

                    return (
                        <label
                            key={option.value}
                            className={`
                ${baseClasses}
                ${sizeVariantClasses}
                ${stateClasses}
                ${className}
              `}
                            style={
                                variant === "color"
                                    ? { backgroundColor: option.colorHex }
                                    : undefined
                            }
                        >
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={isChecked}
                                disabled={disabled}
                                onChange={() => onChange?.(option.value)}
                                className="sr-only"
                            />

                            {variant !== "color" && (
                                <span className="text-sm font-medium">
                  {option.label}
                </span>
                            )}
                        </label>
                    );
                })}
            </div>

            <ErrorMessage text={error} />
        </fieldset>
    );
};

export default RadioField;
