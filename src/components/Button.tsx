import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority"; // use to apply classes easily based on our props for buttons
import { twMerge } from "tailwind-merge";

const classes = cva("border h-12 rounded-full px-6 font-medium relative overflow-hidden transition-all duration-500", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
        }
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
        withHoverEffect?: boolean; // Custom prop for hover effect
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
            {/* Background Hover Animation (Only for Log In Button) */}
            {withHoverEffect && (
                <span className="absolute inset-0 bg-lime-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            )}

            {/* Button Text (Ensures it stays above the background animation) */}
            <span className="relative z-10">{otherProps.children}</span>
        </button>
    );
}
