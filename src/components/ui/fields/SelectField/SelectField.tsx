import type {SelectFieldProps} from "./SelectField.types"
import {Label} from "@/components/ui/fields/Label";
import {ErrorMessage} from "@/components/ui/fields/ErrorMessage";

const SelectField = ({
                                label,
                                options,
                                state,
                                loadingMessage = "loading...",
                                errorMessage = "Something Went Wrong!",
                                placeholder,
                                error,
                                required=true,
                                ...props
                            }: SelectFieldProps) => {
    const selectId = `select-${label.replace(/\s+/g, "-").toLowerCase()}`;

    const stateHandler = () => {
        if (state === "error") return errorMessage;
        if (state === "loading") return loadingMessage;
        return placeholder;
    };

    return (
        <fieldset className="fieldset w-full relative">
            <Label
                required={required}
                text={label}
            />
            <select
                defaultValue={props.defaultValue || ""}
                id={selectId}
                className={`select bg-gray-100 flex gap-1 items-center w-full ${
                    error
                        ? "focus:border-error/50 focus:outline-error/50 focus-within:border-error/50 focus-within:outline-error/50 border-error/50"
                        : "focus:border-primary/50 focus:outline-primary/50 focus-within:border-primary/50 focus-within:outline-primary/50 border-gray-300/60"
                }`}
                {...props}
            >
                {state && state !== "success" ? (
                    <option value="" disabled>
                        {stateHandler()}
                    </option>
                ) : placeholder ? (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                ) : null}
                {!["error", "loading"].includes(state ?? "") &&
                    options.map((opt) => (
                        <option key={opt.value ?? opt.label} value={opt.value ?? opt.label}>
                            {opt.label}
                        </option>
                    ))}
            </select>
            <ErrorMessage text={error}/>
        </fieldset>
    );
};
export default SelectField;