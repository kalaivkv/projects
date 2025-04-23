import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium relative overflow-hidden transition-all duration-500",
    {
        variants: {
            variant: {
                primary: "bg-lime-400 text-neutral-950 border-lime-400",
                secondary: "border-white text-white bg-transparent",
            },
            size: {
                sm: "h-10",
            },
        },
    }
);

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
        withHoverEffect?: boolean;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, withHoverEffect, ...otherProps } = props;

    return (
        <button
            className={twMerge(
                classes({ variant, size, className }),
                withHoverEffect && "relative overflow-hidden group"
            )}
            {...otherProps}
        >
            {withHoverEffect && (
                <span className="absolute inset-0 bg-lime-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            )}

            <span className="relative z-10">{otherProps.children}</span>
        </button>
    );
}
