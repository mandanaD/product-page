import type {TextareaProps} from "./Textarea.types";
import {Label} from "@/components/ui/fields/Label";
import {ErrorMessage} from "@/components/ui/fields/ErrorMessage";

const Textarea = ({
                             label,
                             placeholder,
                             disabled,
                             error,
                             required=true,
                             ...props
                         }: TextareaProps) => {

    return (
        <fieldset className={`fieldset w-full relative ${disabled && "opacity-70"}`}>
            <Label
                required={required}
                text={label}
            />
            <textarea
                placeholder={placeholder || ""}
                className={`w-full textarea bg-base-300 ${error
                    ? "focus:border-error/50 focus:outline-error/50 focus-within:border-error/50 focus-within:outline-error/50 border-error/50"
                    : "focus:border-primary/50 focus:outline-primary/50 focus-within:border-primary/50 focus-within:outline-primary/50 border-gray-300/60"
                }`}
                {...props}
            />
            <ErrorMessage text={error}/>
        </fieldset>
    );
};
export default Textarea;