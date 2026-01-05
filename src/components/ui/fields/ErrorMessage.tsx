type ErrorMessageProps = {
    text?: string;
};
export const ErrorMessage = ({text}: ErrorMessageProps) => {
    if (!text) return null;
    return (
        <div
            className={`absolute -bottom-4 px-1 text-error text-xs`}
        >
            {text}
        </div>
    )
}