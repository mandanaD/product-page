"use client"
import { Controller } from "react-hook-form";
import RadioField from "./RadioField";
import type { RadioFieldProps } from "./RadioField.types";
import type { Control } from "react-hook-form";

type RadioFieldControllerProps = Omit<
    RadioFieldProps,
    "value" | "onChange" | "error"
> & {
    control: Control<any>;
};

const RadioFieldController = ({
                                  control,
                                  name,
                                  ...props
                              }: RadioFieldControllerProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <RadioField
                    {...props}
                    name={name}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                />
            )}
        />
    );
};

export default RadioFieldController;
