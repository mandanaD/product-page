"use client"
import {RateProps} from "@/components/ui/rate/Rate.types";
import {Controller} from "react-hook-form";
import type {Control} from "react-hook-form";
import Rate from "@/components/ui/rate/Rate";

type RateFieldControllerProps = Omit<
    RateProps,
    "value" | "onChange" | "error"
> & {
    control: Control<any>;
};

const RateFieldController = ({
                                 control,
                                 name,
                                 ...props
                             }: RateFieldControllerProps) => {
    return (
        <Controller
            name={name || ''}
            control={control}
            render={({field, fieldState}) => (
                <Rate
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

export default RateFieldController;