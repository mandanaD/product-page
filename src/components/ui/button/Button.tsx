import {cva} from "class-variance-authority";
import type {ButtonProps} from "./Button.types.ts";

const Button = ({variant="primary", size="md", appearance="solid", shape="regular", children = "", isLoading = false, ...props}: ButtonProps) => {
    const classes = cva(
        "btn",
        {
            variants: {
                variant: {
                    primary: "btn-primary",
                    secondary: "btn-secondary",
                    destructive: "btn-error",
                    ghost: "btn-ghost",
                    link: "btn-link"
                },
                appearance: {
                    solid: "",
                    soft: "btn-soft",
                    outline: "btn-outline",
                    dashed: "btn-dash",
                },
                size: {
                    xs: "btn-xs",
                    sm: "btn-sm h-10!",
                    md: "btn-md h-14!",
                    lg: "btn-lg",
                    xl: "btn-xl",
                },
                shape: {
                    regular: "",
                    wide: "btn-wide",
                    block: "btn-block",
                    square: "btn-square",
                    circle: "btn-circle",
                },
                isLoading: {
                    true: "",
                    false: ""
                }
            },
            defaultVariants: {
                variant: "primary",
                size: "md",
            }
        }
    )
    return (
        <button
            disabled={isLoading || props.disabled}
            {...props} className={classes({variant, appearance, size, shape})}>
            {!isLoading ? (
                <p className={"flex gap-1"}>
                    {
                        props.startIcon && (
                            <div className={"grid place-content-center"}
                                 dangerouslySetInnerHTML={{__html: props.startIcon}}/>
                        )
                    }
                    {children}
                    {
                        props.endIcon && (
                            <div className={"grid place-content-center"}
                                 dangerouslySetInnerHTML={{__html: props.endIcon}}/>
                        )
                    }
                </p>
            ) : (
                <span className="loading loading-spinner"/>
            )}
        </button>
    )
}
export default Button;