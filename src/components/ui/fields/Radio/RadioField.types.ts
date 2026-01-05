import { ReactNode } from "react";

export interface RadioOption {
    label: string;
    value: string;
}

export interface RadioFieldProps {
    label?: string;
    name: string;
    options: RadioOption[];
    value?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
    icon?: ReactNode;
}
