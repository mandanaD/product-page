import type {InputFieldProps} from "./InputField.types";
import {cva} from "class-variance-authority";
import {ChangeEvent} from "react";
import {Label} from "@/components/ui/fields/Label";
import {ErrorMessage} from "@/components/ui/fields/ErrorMessage";

const InputField = ({
                               type = "text",
                               label,
                               accept = "all",
                               disabled = false,
                               placeholder,
                               error,
                               onChange,
                               required = true,
                               className="",
                               icon,
                               ...props
                           }: InputFieldProps) => {

    const PlaceHolderHandler = () => {
        if (placeholder) return placeholder;
        if (type === "email") return "example@gmail.com";
        return "";
    };

    const classes = cva(`fieldset w-full relative`, {
        variants: {
            disabled: {
                true: "opacity-70",
            },
        },
    });

    const convertToEnglishDigits = (value: string) => {
        return value
            .replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
            .replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (accept === "number") {
            value = convertToEnglishDigits(value);
            value = value.replace(/[^0-9]/g, "");
        }
        if (accept === "fa") {
            value = value.replace(/[^آ-ی\s]/g, "");
        }
        if (accept === "en") {
            value = value.replace(/[^a-zA-Z\s]/g, "");
        }
        e.target.value = value;
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <fieldset className={classes({disabled})}>
            <Label
                required={required}
                text={label}
            />
            <div
                dir={accept==="number"?"ltr":"rlt"}
                className={`input bg-gray-100 flex gap-1 items-center w-full ${
                    error
                        ? "focus:border-error/50 focus:outline-error/50 focus-within:border-error/50 focus-within:outline-error/50 border-error/50"
                        : "focus:border-primary/50 focus:outline-primary/50 focus-within:border-primary/50 focus-within:outline-primary/50 border-gray-300/60"
                }`}
            >
                <input
                    accept={accept}
                    type={type}
                    placeholder={PlaceHolderHandler()}
                    disabled={disabled}
                    onChange={handleChange}
                    className={className}
                    {...props}
                />
                {
                    icon && (
                        <div className={"grid place-content-center text-gray-600"}
                        >
                            {icon}
                        </div>
                    )
                }
            </div>
            <ErrorMessage text={error}/>
        </fieldset>
    );
};
export default InputField;