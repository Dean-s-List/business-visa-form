import { Oval } from "react-loader-spinner";

import { cn } from "@/src/utils/general";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
    loadingText?: string;
    height?: number;
    width?: number;
    size?: "sm" | "md" | "lg";
    direction?: "horizontal" | "vertical";
    color?: string;
    secondaryColor?: string;
};

function LoadingSpinner({
    loadingText,
    size = "md",
    height = 30,
    width = 30,
    direction = "vertical",
    color = "#D999FF",
    secondaryColor = "#D999FF",
    className,
}: Props) {
    let loadingSpinnerHeight = height;
    let loadingSpinnerWidth = width;

    if (size === "lg") {
        loadingSpinnerHeight = 40;
        loadingSpinnerWidth = 40;
    }

    if (size === "sm") {
        loadingSpinnerHeight = 20;
        loadingSpinnerWidth = 20;
    }

    return (
        <span
            className={cn(
                "flex items-center justify-center text-primary-1",
                direction === "horizontal"
                    ? "flex-row space-x-2"
                    : "flex-col space-y-2",
                className
            )}
        >
            <Oval
                height={loadingSpinnerHeight}
                width={loadingSpinnerWidth}
                color={color}
                visible
                ariaLabel="loading-spinner"
                secondaryColor={secondaryColor}
                strokeWidth={5}
                strokeWidthSecondary={5}
            />

            {loadingText && (
                <span
                    style={{ color }}
                    className={cn(
                        size === "md" && "text-base",
                        size === "sm" && "text-sm",
                        size === "lg" && "text-lg"
                    )}
                >
                    {loadingText}
                </span>
            )}
        </span>
    );
}

export default LoadingSpinner;
