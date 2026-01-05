import { cva } from "class-variance-authority";
import { Label } from "@/components/ui/fields/Label";
import { ErrorMessage } from "@/components/ui/fields/ErrorMessage";
import type { RadioFieldProps } from "./RadioField.types";

const RadioField = ({
                        label,
                        name,
                        options,
                        value,
                        error,
                        required = true,
                        disabled = false,
                        className = "",
                        onChange,
                    }: RadioFieldProps) => {

    const fieldsetClasses = cva("fieldset w-full", {
        variants: {
            disabled: {
                true: "opacity-70 pointer-events-none",
            },
        },
    });

    return (
        <fieldset className={fieldsetClasses({ disabled })}>
            {label && (
                <Label
                    text={label}
                    required={required}
                />
            )}

            <div className="flex gap-2 flex-wrap mt-1">
                {options.map((option) => {
                    const isChecked = value === option.value;

                    return (
                        <label
                            key={option.value}
                            className={`
                                flex items-center gap-1.5 cursor-pointer rounded-md border px-4 py-1 transition
                                ${isChecked
                                ? "border-primary bg-primary/5"
                                : "border-none bg-base-300 hover:text-primary text-secondary"
                            }
                                ${className}
                            `}
                        >
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={isChecked}
                                disabled={disabled}
                                onChange={() => onChange?.(option.value)}
                                className="accent-primary"
                            />
                            <span className="text-sm">{option.label}</span>
                        </label>
                    );
                })}
            </div>

            <ErrorMessage text={error} />
        </fieldset>
    );
};

export default RadioField;
