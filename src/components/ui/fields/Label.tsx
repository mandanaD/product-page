type LabelProps = {
    text?: string;
    className?: string;
    required?: boolean;
};

export const Label = ({ text, required = true, className = "" }: LabelProps) => {
    if (!text) return null;

    return (
        <label className={`label text-sm ${className}`}>
            {text} {required && <sup className="text-error px-0.5">*</sup>}
        </label>
    );
};
